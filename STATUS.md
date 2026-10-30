# Status

Atualizado em: 2026-10-30 · por: Codex

## Demanda em andamento
`docs/demandas/001-reconstruir-em-react.md` · branch: `demanda/001-reconstruir-em-react`

## Estado
React + TypeScript + Tailwind/Vite implementados; PR em rascunho: https://github.com/sofiaalamini/portifolio/pull/1. Preview inicial: https://portifolio-m59gszeu3-sofiaalaminis-projects.vercel.app (06f4af1). Preview automático explicitamente autorizado pela Sofia; produção preservada. Nenhum deploy manual ou alteração de acessos.

Conteúdo e metadados comparados por campos com 33b744f: idênticos, exceto correções previstas. Três capturas reais das demos em public/previews. Testes locais em Chrome passaram em 360/768/1280: filtros, menu/Escape, salto/foco, ausência de rolagem horizontal, imagens e movimento reduzido sem duplicações. Evidências em docs/checks. Script imperativo substituído pelos componentes TSX.

## Próximo passo
Concluir as três medições Lighthouse e os testes na sessão autenticada do preview; atualizar este PR com evidências e pedir revisão por Claude e aprovação visual da Sofia.

## Bloqueios e dúvidas
- LinkedIn: fetch retornou 999; navegação real no Chrome retornou 200. Os outros sete destinos também retornaram 200. Evidência em docs/checks/links.json; nenhum endereço alterado além da correção Petfy prevista.
- Preview protegido por login Vercel. A primeira sessão terminou na autenticação. Sofia informou ter aberto a aba no Opera GX, cuja sessão não é compartilhada. Reabrir Chrome e entrar dentro dessa janela. Nenhum resultado de preview/Lighthouse foi aprovado. Nenhum token/bypass criado.
- A busca de aceite pelo número precisa ser feita pela Sofia, sem enviar o dado nem gravá-lo no repositório. Busca por link de telefone e prévias embutidas no código atual não encontrou ocorrências.
- Capturas de comparação em 360 e 1280 px aguardam aprovação da Sofia.
- Publicação/merge permanecem sem autorização; critério de produção ficará pendente no PR.

## Recuperação
Procedimento em docs/volta.md; base de volta: dpl_Hn3PW58dSdQP43fWKetmo7jgR6TW (33b744f), no mesmo projeto Vercel. Não executado.
