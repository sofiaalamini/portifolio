import { chromium, expect } from '@playwright/test'
import { chromePath } from './ui.mjs'
import fs from 'node:fs/promises'

const browser = await chromium.launch({ executablePath: await chromePath(), headless: true })
const selectors = ['.hero-copy p', '.hero-title', '.profile-notes span, .profile-notes strong', '.profile-code span, .profile-code pre', '.about-story p', '.process-board article > *', '.section-heading h2', '.skill-cluster h3', '.skill-cluster p', '.skill-tags span', '.project-meta span, .project-copy h3, .project-copy p, .tech-stack span', '.contact-copy > p', '.contact-copy h2']
const values = []
try {
  for (const url of ['http://127.0.0.1:4174', process.env.PORTFOLIO_URL || 'http://127.0.0.1:4173']) {
    const page = await browser.newPage()
    await page.goto(url, { waitUntil: 'networkidle' })
    const content = { title: await page.title(), description: await page.locator('meta[name="description"]').getAttribute('content'), fields: {} }
    for (const selector of selectors) content.fields[selector] = await page.locator(selector).evaluateAll(elements => elements.map(el => el.textContent.replace(/\s+/g, ' ').trim()))
    values.push(content)
    if (values.length === 2) {
      const links = await page.locator('a[href^="https:"]').evaluateAll(elements => [...new Set(elements.map(el => el.href))])
      const results = []
      for (const url of links) {
        try {
          const response = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(20000) })
          results.push({ url, finalUrl: response.url, status: response.status })
          await response.body?.cancel()
        } catch (error) { results.push({ url, error: error.name }) }
      }
      await fs.writeFile('docs/checks/links.json', JSON.stringify({ checkedAt: new Date().toISOString(), results }, null, 2) + '\n')
      console.log(JSON.stringify({ links: results }))
    }
    await page.close()
  }
  expect(values[1]).toEqual(values[0])
  await fs.writeFile('docs/checks/content.json', JSON.stringify({ reference: '33b744f', identical: true, ...values[1] }, null, 2) + '\n')
  console.log('Conteúdo, metadados e todos os campos dos projetos/grupos idênticos à referência 33b744f.')
} finally { await browser.close() }
