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
- Busca por link telefônico e elemento de prévia embutida em src/index/styles/public: nenhuma ocorrência. Busca pelo número depende da Sofia, sem gravar nem enviar o dado.
- [Capturas das demos](../capturas-demos.json): três origens 200, JPEGs reais de 1280×720 em public/previews.

## Preview e Lighthouse
PR: https://github.com/sofiaalamini/portifolio/pull/1. Preview automático autorizado. A primeira sessão Chrome terminou na autenticação, sem produzir relatório. Sofia abriu a aba no Opera GX, cuja sessão não é compartilhada. Repetir entrando dentro da janela de testes, com URL e hash do deploy explícitos. Nenhum bypass/token foi criado e nenhuma proteção foi alterada.

## Pendências de aceite
- Três medições Lighthouse mobile no preview, medianas ≥90 e testes de interface nesse preview.
- Sofia: busca privada pelo número e aprovação visual das capturas.
- Revisão por Claude.
- Merge/publicação em produção: dependem de autorização futura. Recuperação em [docs/volta.md](../volta.md).
