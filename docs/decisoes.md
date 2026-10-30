# Decisões técnicas — 001

- Componentes por seção e dados tipados: estrutura simples para manter textos e filtros consistentes. Estado React apenas para menu e filtro; efeitos visuais usam CSS e listeners com limpeza.
- Tailwind via plugin oficial do Vite, sem Preflight: utilitários para acessibilidade e layout sem redefinir o CSS da referência. Mantidos cores, tipografia e espaçamentos de 33b744f.
- Chivo e Work Sans locais via Fontsource; SVGs Font Awesome selecionados: preservam as fontes e formas sem baixar folhas ou conjuntos completos de ícones de terceiros no navegador.
- Capturas das demos no lugar das prévias embutidas: não carregam três aplicações externas durante a visita. Cada captura permanece um link para a demo.
- Formulário simulado e Instagram removidos; contato em coluna com e-mail, LinkedIn e GitHub. Nenhum endpoint de envio criado.
- vercel.json descreve Vite/build/dist na branch; não modifica o painel nem o projeto existente. Merge/publicação dependem de autorização.
