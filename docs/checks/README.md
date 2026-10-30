# Evidências da demanda 001

Referência: somente 33b744f. Produção não foi alterada.

## Comparação visual
As capturas percorrem a página para concluir as animações de entrada. Aprovação da Sofia pendente.

| Largura | Referência | React local |
|---|---|---|
| 360 px | [33b744f](reference/base-360.jpg) | [React](local/react-360.jpg) |
| 1280 px | [33b744f](reference/base-1280.jpg) | [React](local/react-1280.jpg) |

Primeira tela em tamanho legível: [base 360](reference/hero-360.jpg), [React 360](local/hero-360.jpg), [base 1280](reference/hero-1280.jpg), [React 1280](local/hero-1280.jpg).

## Comandos e resultados
- `npm run build`, `npm run lint`, `npx tsc --noEmit`: passaram em 2026-10-30.
- [Conteúdo/metadados](content.json): campos preservados idênticos à referência; 15 tecnologias e todos os campos dos três projetos conferidos no DOM.
- [Interface local](local/ui.json): 360/768/1280 sem rolagem horizontal, filtros exatos, menu/Escape, salto e foco, 22/22/27 controles focáveis com indicador, dez nomes únicos na faixa em modo reduzido, sem erros JS.
- [Links](links.json): sete destinos 200 por fetch; LinkedIn 999 por fetch e 200 em navegação Chrome. E-mail conferido no teste de interface.
- Busca por link telefônico e elemento de prévia embutida em src/index/styles/public: nenhuma ocorrência.
- Busca pelo número (2026-10-30, por Claude, a pedido da Sofia): número extraído em memória do bundle de backup da 002, sem imprimi-lo nem gravá-lo; varridos 376 arquivos da árvore de trabalho, incluindo `dist/`. Nenhuma ocorrência do número, com ou sem separadores e com ou sem o prefixo 55. Os quatro `tel:` achados são a asserção `a[href^="tel:"]` em `checks/ui.mjs`, o tipo de campo `tel` do React em `dist/`, o texto do critério em `docs/demandas/` e um binário do Chrome baixado em `.checks/` (ignorado pelo git). Esta busca não cobre o HTML do preview da Vercel (exige login) nem o histórico dos commits da branch.
- [Capturas das demos](../capturas-demos.json): três origens 200, JPEGs reais de 1280×720 em public/previews.

## Preview e Lighthouse
PR: https://github.com/sofiaalamini/portifolio/pull/1. Preview automático autorizado. A primeira sessão Chrome terminou na autenticação, sem produzir relatório. Sofia abriu a aba no Opera GX, cuja sessão não é compartilhada. Repetir entrando dentro da janela de testes, com URL e hash do deploy explícitos. Nenhum bypass/token foi criado e nenhuma proteção foi alterada.

Medição local (não substitui o preview): [lighthouse-local.json](lighthouse-local.json). Commit `592f1b7`, `npm run build` servido com gzip em 127.0.0.1, Lighthouse 13.6.0 em modo mobile no Edge 156, três execuções. Medianas: desempenho 100, acessibilidade 100, boas práticas 100, SEO 100 (LCP 753 ms, TBT 0 ms, CLS 0,03 na primeira). Fontes e ícones são empacotados, sem CDN. A Vercel pode diferir (cabeçalhos, compressão, script do preview), por isso o critério do preview continua pendente.

## Pendências de aceite
- Três medições Lighthouse mobile na URL do preview da Vercel (exige a sessão logada da Sofia), medianas ≥90, e os testes de interface nesse preview.
- Sofia: aprovação visual das capturas.
- Revisão por Claude.
- Merge/publicação em produção: dependem de autorização futura. Recuperação em [docs/volta.md](../volta.md).
