# portifolio — instruções para agentes

Responda em português do Brasil. Código e nomes em inglês, salvo termos de domínio.

## Comandos

Valem depois que a demanda 001 criar o projeto Vite (hoje o repositório é HTML, CSS e JS puros, sem `package.json`).

| Ação | Comando |
|---|---|
| Instalar | `npm install` |
| Rodar local | `npm run dev` |
| Build | `npm run build` |
| Testes | não há por enquanto |
| Lint | `npm run lint` |
| Tipos | `npx tsc --noEmit` |

Rode build, lint e tipos antes de declarar uma tarefa concluída. Informe o que rodou e o resultado; não diga "testado" sem ter executado.

## Convenções

- Stack: React, TypeScript e Tailwind (Vite), publicado na Vercel.
- Estrutura: componentes em arquivos `.tsx`; mantenha uma estrutura simples, que a Sofia consiga explicar em entrevista.
- Siga o padrão do código vizinho; dependência nova só com motivo explícito no PR.
- Branch por demanda: `demanda/NNN-slug`. Um PR por demanda, usando o template em `.github/`.
- Todo PR tem uma seção "Decisões" que explica as escolhas e o porquê.
- O conteúdo de referência é o commit `33b744f` da `main` (`git show 33b744f:index.html`). Não consulte nem restaure commits antigos do histórico: o repositório teve o histórico reescrito para remover dado pessoal.

## Onde está cada coisa

- Demanda em execução e critérios de aceite: `docs/demandas/NNN-slug.md`.
- Estado atual: `STATUS.md`.
- Decisões técnicas: `docs/decisoes.md`.
- Problema, público e regras de negócio: vault Karen, `Produtos/Portfolio/Produto.md` (consultar só se os critérios forem insuficientes).

## Limites de autonomia

Dentro da branch da demanda, a execução é livre. Exigem autorização explícita da Sofia: merge, publicação/deploy, exclusão de dados, mudança de acessos ou permissões, qualquer gasto, alteração de segredos, criar projeto novo na Vercel ou mudar domínio.

Nunca grave segredos nem dados pessoais (telefone) no repositório. Se os critérios de aceite parecerem errados ou insuficientes, pare e registre a dúvida em `STATUS.md`; não "resolva no código".

## Ao fim de cada sessão

Atualize `STATUS.md`: demanda, estado, próximo passo e bloqueios.
