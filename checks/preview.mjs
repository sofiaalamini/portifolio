import { chromium } from '@playwright/test'
import { chromePath, verifyUI } from './ui.mjs'
import lighthouse from 'lighthouse'
import { launch } from 'chrome-launcher'
import fs from 'node:fs/promises'

async function main() {
 const url = process.argv[2] || process.env.PORTFOLIO_URL
 const commit = process.argv[3] || process.env.PORTFOLIO_COMMIT
 if (!url || !/^[a-f0-9]{40}$/.test(commit || '')) throw Error('Passe URL e hash completo do commit servido pelo preview')
 const instance = await launch({ chromePath: await chromePath(), port: 9223 })
 try {
  const browser = await chromium.connectOverCDP(`http://127.0.0.1:${instance.port}`)
  const context = browser.contexts()[0]
  const page = context.pages()[0] || await context.newPage()
  await page.goto(url, { waitUntil: 'domcontentloaded' })
  console.log('CHROME DE TESTES ABERTO: faça o login DENTRO DESTA JANELA, sem abrir o link no Opera. Os testes começam quando o portfólio aparecer.')
  await page.getByRole('heading', { name: 'Sofia Alamini.', exact: true }).waitFor({ state: 'visible', timeout: 0 })
  console.log('Preview autenticado. Executando UI e Lighthouse mobile, sem alterar acessos.')
  await page.goto('about:blank')
  const ui = await verifyUI(context, url, 'preview')
  const measurements = []
  for (let index = 1; index <= 3; index++) {
    console.log(`Lighthouse mobile: medição ${index}/3`)
    const { lhr } = await lighthouse(url, { port: instance.port, logLevel: 'error', output: 'json', onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'], disableStorageReset: true, formFactor: 'mobile' })
    if (lhr.runtimeError) throw Error(`Lighthouse: ${lhr.runtimeError.code}`)
    if (new URL(lhr.finalDisplayedUrl || lhr.finalUrl).origin !== new URL(url).origin) throw Error('Lighthouse mediu login em vez do preview')
    // Nenhuma credencial é passada por headers/opções ou gravada nas evidências.
    await fs.writeFile(`docs/checks/preview/lighthouse-${index}.json`, JSON.stringify(lhr) + '\n')
    measurements.push(Object.fromEntries(Object.entries(lhr.categories).map(([key, category]) => [key, Math.round(category.score * 100)])))
    console.log(JSON.stringify(measurements.at(-1)))
  }
  const medians = Object.fromEntries(Object.keys(measurements[0]).map(key => [key, measurements.map(row => row[key]).sort((a, b) => a - b)[1]]))
  const result = { url, commit, measuredAt: new Date().toISOString(), browser: browser.version(), mode: 'mobile, simulação padrão Lighthouse, sessão autenticada preservada', measurements, medians, meetsTarget: Object.values(medians).every(score => score >= 90), ui: ui.viewports }
  await fs.writeFile('docs/checks/preview/lighthouse-summary.json', JSON.stringify(result, null, 2) + '\n')
  console.log(JSON.stringify(result))
 } finally { await instance.kill() }
}

main().catch(error => { console.error(`Sessão de testes não concluída (${error.name}). Nenhum resultado pendente foi considerado aprovado.`); process.exitCode = 1 })
