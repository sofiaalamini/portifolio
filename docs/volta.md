# Procedimento de volta

Antes de publicar a 001, obter autorização da Sofia. Projeto existente: `portifolio`, equipe `sofiaalaminis-projects`, ID `prj_HjUt67M8hLjHWMMexU9Uvw6cBB75`. Domínios: sofiaalamini.com.br e www.sofiaalamini.com.br.

## Base de recuperação
Deploy de produção anterior à migração: `dpl_Hn3PW58dSdQP43fWKetmo7jgR6TW`, commit `33b744fac23909742cbd79971c26b840f7f3663f`. URL: https://portifolio-9f0uz1lnf-sofiaalaminis-projects.vercel.app. Essa versão já está sem o telefone. Não restaurar outros commits ou deploys anteriores.

## Restaurar após uma publicação autorizada
1. Obter autorização explícita da Sofia para o rollback.
2. No projeto existente da Vercel, abrir Deployments e selecionar o ID acima. Confirmar o commit 33b744f e usar Instant Rollback.
3. Confirmar que os dois domínios respondem 200 e carregam a versão anterior. Conferir menu, projetos e contato.
4. Registrar em STATUS.md data, motivo e deploy restaurado. Corrigir a migração na branch antes de nova autorização.

Não apagar o deploy de recuperação, recriar o projeto, trocar domínios ou reescrever o histórico. Procedimento descrito, ainda não executado.
