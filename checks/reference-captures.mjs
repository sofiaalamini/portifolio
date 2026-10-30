import { chromium } from '@playwright/test'
import { chromePath, revealByScrolling } from './ui.mjs'
import fs from 'node:fs/promises'
const browser = await chromium.launch({ executablePath: await chromePath(), headless: true })
await fs.mkdir('docs/checks/reference', { recursive: true })
try {
  for (const width of [360, 1280]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } })
    await page.goto('http://127.0.0.1:4174', { waitUntil: 'networkidle' })
    await page.evaluate(() => document.fonts.ready)
    await revealByScrolling(page)
    await page.screenshot({ path: `docs/checks/reference/hero-${width}.jpg`, type: 'jpeg', quality: 90 })
    await page.screenshot({ path: `docs/checks/reference/base-${width}.jpg`, fullPage: true, type: 'jpeg', quality: 85 })
    await page.close()
  }
} finally { await browser.close() }
