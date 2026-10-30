# 001 — Reconstruir o portfólio em React

Nível: padrão · Origem: Vault Karen: `Produtos/Portfolio/Demandas/001-reconstruir-em-react.md`

## Problema
Reconstruir o portfólio em React + TypeScript + Tailwind, mantendo o conteúdo atual, para que o próprio site demonstre a stack em que a Sofia busca estágio. O site atual continua no ar até a versão nova estar pronta.

## Fora do escopo
- Envio real de mensagens de contato (o formulário atual só simula o envio e sai nesta demanda).
- Redesenho visual ou nova direção visual.
- Conteúdo novo: público, mensagem principal, cases (incluindo o Conecta) e revisão dos textos atuais.
- Novo projeto na Vercel ou mudança de domínio.
- Mexer no histórico do git (a remoção do telefone dos commits antigos foi a demanda 002).

## Critérios de aceite
Referência de conteúdo: commit `33b744fac23909742cbd79971c26b840f7f3663f` da `main` de `sofiaalamini/portifolio`. Correções desta demanda: sai o telefone, sai o Instagram, sai o formulário simulado, o link do Petfy é corrigido, o rodapé cita a stack nova, as prévias dos projetos deixam de ser iframes e passam a ser capturas estáticas com link para a demo (por desempenho) e o filtro Back-end ganha uma mensagem de estado vazio (no commit base ele fica em branco). Mesmo visual do commit base, não da produção.

Conteúdo
- [ ] As seções Início, faixa de tecnologias, Sobre (Entender/Prototipar/Construir), Stack (15 tecnologias, com os títulos e introduções dos três grupos), Projetos (Calangos, Izes e Petfy, cada um com descrição, escopo, ano, frase complementar, tecnologias e links de demo e GitHub) e Contato aparecem com os mesmos textos do commit `33b744fac23909742cbd79971c26b840f7f3663f`, assim como a foto, o logo, o favicon e o título e a descrição da página, exceto pelas correções desta demanda — verificar por: revisão do preview contra `index.html`/`script.js` do commit base
- [ ] Cada projeto mostra uma captura estática da demo, sem iframe, com link para a demo — verificar por: revisão do preview e busca por `<iframe` no código
- [ ] O filtro de projetos mostra: Todos → Calangos, Izes e Petfy; Front-end → Izes e Petfy; Full-stack → Calangos; Back-end → nenhum projeto e uma mensagem de estado vazio. Os links do menu levam às seções, e o menu mobile fecha ao navegar e ao pressionar Escape — verificar por: observação no preview da Vercel
- [ ] O telefone não aparece na página nem no código da branch: a busca por `tel:` e pelo número (pedir o número à Sofia ou tirá-lo do bundle de backup da 002, sem gravá-lo em nota nem no repositório) não encontra nada — verificar por: busca no repositório e no HTML do preview
- [ ] Os contatos são só e-mail, LinkedIn e GitHub, numa coluna, sem Instagram nem formulário, com as cores, a tipografia e o estilo dos cards do commit `33b744fac23909742cbd79971c26b840f7f3663f` (essa reorganização é permitida e não conta como redesenho) — verificar por: revisão do preview
- [ ] O GitHub do Petfy aponta para `github.com/sofiaalamini/petfy`, e todos os links HTTP/HTTPS respondem com status 200 no destino final, depois de redirecionamentos; links `mailto:` são conferidos pelo endereço, não por status — verificar por: checagem de links no preview
- [ ] O rodapé não descreve mais o site como feito em HTML, CSS e JavaScript, e cita React, TypeScript e Tailwind — verificar por: revisão do preview

Stack e qualidade
- [ ] O `package.json` declara React, TypeScript e Tailwind, e os componentes ficam em arquivos `.tsx` — verificar por: revisão do repositório
- [ ] `npm run build`, `npm run lint` e `tsc --noEmit` terminam sem erros — verificar por: execução dos comandos (agente verificador)
- [ ] Em 360, 768 e 1280 px de largura não há rolagem horizontal e todo o conteúdo e os links ficam visíveis e clicáveis — verificar por: observação no preview com DevTools
- [ ] Dá para chegar a todos os links e botões com Tab, com foco visível, e o link "Ir para o conteúdo" funciona — verificar por: observação no preview
- [ ] Com `prefers-reduced-motion: reduce`, a faixa de tecnologias fica parada, com quebra de linha, sem nomes duplicados e com todos os nomes visíveis — verificar por: observação no preview com emulação no DevTools
- [ ] O Lighthouse do Chrome DevTools, em modo mobile, na URL do preview, dá nota ≥ 90 em desempenho, acessibilidade, boas práticas e SEO — verificar por: relatório do Lighthouse, com a URL e o commit medidos registrados; 3 medições, vale a mediana de cada categoria
- [ ] O layout, as cores e a tipografia batem com o commit `33b744fac23909742cbd79971c26b840f7f3663f` (não com a produção), exceto pelas correções e pela coluna de contato desta demanda — verificar por: capturas lado a lado em 360 e 1280 px, aprovadas pela Sofia

Publicação e documentação
- [ ] Antes de publicar, o procedimento de volta está escrito no repositório, com o ID do deploy de produção atual a restaurar — verificar por: revisão do documento antes do deploy
- [ ] `sofiaalamini.com.br` e `www.sofiaalamini.com.br` servem a versão nova pelo mesmo projeto da Vercel, sem mudança de domínio — verificar por: observação em produção e revisão do painel da Vercel
- [ ] O README tem as seções "O que é", "Stack", "Como rodar" (instalar, dev, build) e o link do site — verificar por: revisão do README
- [ ] Cada PR tem uma seção "Decisões" que explica as escolhas e o porquê — verificar por: revisão do PR

## Riscos
- **Conteúdo perdido na migração.** Impacto: recrutador vê um site incompleto. Reduzir: comparar item a item com o commit base `33b744fac23909742cbd79971c26b840f7f3663f`.
- **Merge na `main` publica sozinho, antes da validação.** Impacto: site quebrado no ar enquanto há currículos circulando. Reduzir: trabalhar em branch com preview; merge só com autorização da Sofia; volta pelo deploy anterior.
- **Mudar a configuração de build no projeto da Vercel quebra a produção.** Impacto: site fora do ar. Reduzir: validar a configuração no preview; registrar o ID do deploy atual antes de publicar.
- **Font Awesome via CDN e fontes derrubam o Lighthouse.** Impacto: critério ≥ 90 não atendido. Reduzir: medir no primeiro preview, não só no fim.
- **Código com abstrações que a Sofia não consegue explicar.** Impacto: desgaste em entrevista. Reduzir: seção "Decisões" em cada PR; estrutura simples.
