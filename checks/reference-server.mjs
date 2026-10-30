import { createServer } from 'node:http'
import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'

const files = new Map(['index.html', 'styles.css', 'script.js'].map(file => [file, execFileSync('git', ['show', `33b744f:${file}`])]))
const types = { html: 'text/html; charset=utf-8', css: 'text/css', js: 'text/javascript', svg: 'image/svg+xml', jpeg: 'image/jpeg' }
createServer((request, response) => {
  const file = new URL(request.url, 'http://localhost').pathname.slice(1) || 'index.html'
  if (!files.has(file) && !['assets/profile.jpeg', 'assets/logo-sofia.svg', 'assets/favicon.svg'].includes(file)) { response.writeHead(404).end(); return }
  response.setHeader('Content-Type', types[file.split('.').at(-1)] || 'application/octet-stream')
  response.end(files.get(file) ?? readFileSync(file))
}).listen(4174, '127.0.0.1', () => console.log('Referência somente leitura de 33b744f: http://127.0.0.1:4174'))
