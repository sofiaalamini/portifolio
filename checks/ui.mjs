import { chromium, expect } from '@playwright/test'
import fs from 'node:fs/promises'
import path from 'node:path'

export async function chromePath() {
  const versions = (await fs.readdir('.checks/browsers/chrome')).filter(name => name.startsWith('win64-'))
  return path.resolve('.checks/browsers/chrome', versions[0], 'chrome-win64/chrome.exe')
}

export async function revealByScrolling(page) {
  const height = await page.evaluate(() => document.documentElement.scrollHeight)
  for (let y = 0; y < height; y += 600) {
    await page.evaluate(y => window.scrollTo({ top: y, behavior: 'instant' }), y)
    await page.waitForTimeout(90)
  }
  await page.waitForTimeout(600)
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
  await page.waitForTimeout(200)
}

export async function verifyUI(context, url, label = 'local') {
  const results = { url, checkedAt: new Date().toISOString(), viewports: [], filters: {}, errors: [], links: [] }
  await fs.mkdir(`docs/checks/${label}`, { recursive: true })
  for (const width of [360, 768, 1280]) {
    const page = await context.newPage()
    await page.setViewportSize({ width, height: 900 })
    page.on('pageerror', error => results.errors.push(error.message))
    await page.goto(url, { waitUntil: 'networkidle' })
    await page.evaluate(() => document.fonts.ready)
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Sofia Alamini.')
    expect(await page.title()).toBe('Sofia Alamini | Front-End Portfolio')
    expect(await page.locator('.skill-tags > span').count()).toBe(15)
    expect(await page.locator('iframe, form, a[href^="tel:"]').count()).toBe(0)
    expect(await page.locator('a[href*="instagram"]').count()).toBe(0)
    expect(await page.locator('.contact-methods a').count()).toBe(3)
    expect(await page.locator('.contact-methods a').first().getAttribute('href')).toBe('mailto:sofia.alamini06@gmail.com')
    const dimensions = await page.evaluate(() => ({ viewport: innerWidth, document: document.documentElement.scrollWidth }))
    expect(dimensions.document).toBeLessThanOrEqual(width)
    await page.keyboard.press('Tab')
    await expect(page.getByRole('link', { name: 'Ir para o conteúdo' })).toBeFocused()
    await page.keyboard.press('Enter')
    await expect(page.locator('#home')).toBeFocused()
    if (width < 961) {
      const menu = page.locator('.menu-button')
      await menu.click()
      await expect(menu).toHaveAttribute('aria-expanded', 'true')
      await page.keyboard.press('Escape')
      await expect(menu).toHaveAttribute('aria-expanded', 'false')
      await expect(menu).toBeFocused()
      await menu.click()
      await page.locator('#mobile-menu a[href="#projects"]').click()
      await expect(page.getByRole('button', { name: 'Abrir menu' })).toHaveAttribute('aria-expanded', 'false')
      expect(await page.locator('#mobile-menu').evaluate(el => el.inert)).toBe(true)
    }
    for (const [filter, expected] of [['Front-end', ['Izes', 'Petfy']], ['Full-stack', ['Calangos']], ['Back-end', []], ['Todos', ['Calangos', 'Izes', 'Petfy']]]) {
      await page.getByRole('button', { name: filter, exact: true }).click()
      await expect(page.locator('.project-copy h3')).toHaveText(expected)
      if (filter === 'Back-end') await expect(page.getByRole('status')).toContainText('Nenhum projeto de Back-end')
      results.filters[filter] = expected
    }
    for (const image of await page.locator('.project-preview img').all()) {
      await image.scrollIntoViewIfNeeded()
      await expect(image).toHaveJSProperty('complete', true)
      expect(await image.evaluate(el => el.naturalWidth)).toBe(1280)
    }
    await revealByScrolling(page)
    await page.screenshot({ path: `docs/checks/${label}/hero-${width}.jpg`, type: 'jpeg', quality: 90 })
    await page.screenshot({ path: `docs/checks/${label}/react-${width}.jpg`, fullPage: true, type: 'jpeg', quality: 85 })
    // Percorre os controles reais, conferindo que todos os focos têm indicador visível.
    await page.goto(url, { waitUntil: 'networkidle' })
    const visited = new Set()
    for (let index = 0; index < 65; index++) {
      await page.keyboard.press('Tab')
      const active = await page.evaluate(() => {
        const el = document.activeElement
        if (!(el instanceof HTMLElement) || el === document.body) return null
        const style = getComputedStyle(el)
        return { key: `${el.tagName}|${el.getAttribute('href')}|${el.textContent}|${el.getAttribute('aria-label')}`, outline: style.outlineStyle, width: parseFloat(style.outlineWidth) }
      })
      if (!active) continue
      if (visited.has(active.key)) break
      visited.add(active.key)
      expect(active.outline).not.toBe('none')
      expect(active.width).toBeGreaterThan(0)
    }
    expect(visited.size).toBeGreaterThan(15)
    await page.emulateMedia({ reducedMotion: 'reduce' })
    const marquee = await page.locator('.marquee-track').evaluate(el => ({ animation: getComputedStyle(el).animationName, width: el.scrollWidth, spans: [...el.children].filter(child => getComputedStyle(child).display !== 'none').map(child => child.textContent) }))
    expect(marquee.animation).toBe('none')
    expect(marquee.width).toBeLessThanOrEqual(width)
    expect(marquee.spans).toHaveLength(10)
    expect(new Set(marquee.spans).size).toBe(10)
    results.viewports.push({ width, horizontalOverflow: false, focusedControls: visited.size, reducedMotionTechnologies: marquee.spans })
    if (width === 1280) results.links = await page.locator('a[href^="https:"]').evaluateAll(elements => [...new Set(elements.map(el => el.href))])
    await page.close()
  }
  expect(results.errors).toEqual([])
  await fs.writeFile(`docs/checks/${label}/ui.json`, JSON.stringify(results, null, 2) + '\n')
  return results
}

if (process.argv[1] === new URL(import.meta.url).pathname.slice(1).replaceAll('/', path.sep)) {
  const browser = await chromium.launch({ executablePath: await chromePath(), headless: true })
  try { console.log(JSON.stringify(await verifyUI(await browser.newContext(), process.env.PORTFOLIO_URL || 'http://127.0.0.1:4173', process.env.CHECK_LABEL || 'local'))) }
  finally { await browser.close() }
}
