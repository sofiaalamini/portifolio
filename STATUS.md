# Status

Atualizado em: 2026-10-30 · por: Claude

## Demanda em andamento
`docs/demandas/001-reconstruir-em-react.md` · branch: `demanda/001-reconstruir-em-react`

## Estado
React + TypeScript + Tailwind/Vite implementados; PR em rascunho: https://github.com/sofiaalamini/portifolio/pull/1. Preview automático autorizado pela Sofia; produção preservada. Nenhum deploy manual ou alteração de acessos. Execução passou do Codex para o Claude por decisão da Sofia.

Verificado em 2026-10-30 (detalhes em docs/checks): `npm run build`, `npm run lint` e `npx tsc --noEmit` sem erros; conteúdo e metadados idênticos a 33b744f exceto pelas correções previstas; testes locais de interface em 360/768/1280; links 200; capturas reais das demos.

Lighthouse mobile, 3 execuções no build local do commit 592f1b7: 100 em desempenho, acessibilidade, boas práticas e SEO (docs/checks/lighthouse-local.json). Não vale como a medição do preview.

Busca pelo número do telefone na árvore de trabalho, incluindo dist/: nenhuma ocorrência.

## Próximo passo
Sofia aprova as capturas lado a lado (360 e 1280 px). Depois, medir o Lighthouse na URL do preview, com a sessão logada da Sofia, e rodar a revisão dirigida do PR.

## Bloqueios e dúvidas
- Preview protegido por login Vercel; a extensão do Chrome não estava conectada nesta sessão e não há Chrome instalado (só Edge e Opera GX). Nenhum token/bypass criado. Critério do Lighthouse no preview e testes de interface no preview seguem pendentes.
- Busca do número no HTML do preview e no histórico dos commits da branch: pendente.
- Aprovação visual das capturas: Sofia.
- Publicação/merge permanecem sem autorização; critério de produção ficará pendente no PR.

## Recuperação
Procedimento em docs/volta.md; base de volta: dpl_Hn3PW58dSdQP43fWKetmo7jgR6TW (33b744f), no mesmo projeto Vercel. Não executado.
