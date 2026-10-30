import { chromium } from '@playwright/test'
import fs from 'node:fs/promises'

const browser = await chromium.launch({ channel: 'msedge', headless: true })
await fs.mkdir('public/previews', { recursive: true })
const evidence = []
for (const [name, url] of [['calangos', 'https://calangos-ruddy.vercel.app'], ['izes', 'https://izes-site.vercel.app'], ['petfy', 'https://petfy-topaz.vercel.app']]) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, reducedMotion: 'reduce', deviceScaleFactor: 1 })
  const response = await page.goto(url, { waitUntil: 'networkidle' })
  await page.screenshot({ path: `public/previews/${name}.jpg`, type: 'jpeg', quality: 85 })
  evidence.push({ project: name, url, status: response.status(), capturedAt: new Date().toISOString(), viewport: '1280x720' })
  await page.close()
}
await browser.close()
await fs.writeFile('docs/capturas-demos.json', JSON.stringify(evidence, null, 2) + '\n')
console.log(JSON.stringify(evidence))
