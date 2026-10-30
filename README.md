# Portfólio — Sofia Alamini

## O que é
Portfólio pessoal com apresentação, stack, projetos e contatos profissionais. Migração do visual e conteúdo de 33b744f para React, com as correções da demanda 001.

Site: https://www.sofiaalamini.com.br

## Stack
React, TypeScript, Tailwind CSS e Vite. Fontes e ícones locais; capturas estáticas dos projetos. Sem backend ou envio de mensagens.

## Como rodar
Node.js 22.12+ ou 24 LTS.

```sh
npm ci
npm run dev
```

Build: `npm run build`. Conferir a saída com `npm run preview`. Qualidade: `npm run lint` e `npx tsc --noEmit`.

## Organização
- `src/components/`: seções e componentes da página.
- `src/data.ts`: navegação, tecnologias e projetos.
- `styles.css`: visual da referência e ajustes de acessibilidade.
- `assets/`: foto, marca e favicon da referência.
- `public/previews/`: capturas reais das demos.
- `docs/volta.md`: procedimento de recuperação antes de publicar.
- `docs/demandas/001-reconstruir-em-react.md`: critérios de aceite.

O PR usa preview automático no projeto Vercel existente, quando autorizado. Publicação em produção depende de revisão e autorização da Sofia.
