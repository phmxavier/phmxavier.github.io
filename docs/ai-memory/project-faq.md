# Project FAQ
<!-- Atualize sempre que novas dúvidas recorrentes surgirem. -->

## Perguntas frequentes que a IA deve saber responder
1. Como adicionar uma nova experiência? → Editar `src/data/experiences.ts` mantendo ordem cronológica decrescente e ids únicos (usados nas rotas/cards).
2. Como publicar um novo jogo Unity? → Atualizar `src/data/games.ts` com `id`, `thumbnailUrl` e build WebGL. Preferência: usar `unityBuildFolder` e copiar o export do Unity para `public/unity-builds/<pasta>` (estrutura padrão com Build/, StreamingAssets e arquivos .gz); o botão "Jogar online" abre o embed `/games/:id#play` via `UnityWebGLPlayer`. Alternativa: definir `webBuildUrl` (ou `localWebBuild("<pasta>")`) para abrir em nova aba.
3. Como mudar links de contato? → Ajustar `src/data/socialLinks.tsx`; cada item precisa de `name`, `href` e ícone SVG.
4. Como rodar o projeto localmente? → `npm install` e `npm run dev`; não há backend nem variáveis de ambiente.
5. O que fazer se imagens externas quebram? → Substituir URLs em `games.ts`/hero por links válidos ou hospedar em CDN própria; não há fallback automático.

## Objetivo do sistema
- Portfólio/currículo estático em React para Pedro Xavier, apresentando trajetória profissional e vitrine de jogos Unity.
- Público principal: recrutadores e parceiros técnicos; sucesso medido por clareza do currículo, navegabilidade e links funcionais (WebGL, LinkedIn, GitHub, blog).

## Principais fluxos
- Home: hero com resumo + CTA para currículo/LinkedIn + destaques de experiências recentes (dados de `experiences.ts`) + links sociais.
- Experiences: linha do tempo completa das experiências, mais recente primeiro.
- Games: grid de jogos (título, stack, thumbnail) com CTA para detalhar e jogar online; se `unityBuildFolder` existe, o botão "Jogar online" abre `/games/:id#play` para embed local.
- Game Details: lookup por `id` na lista `games`; exibe resumo, stack e CTA. Se houver `unityBuildFolder`, abre modal com `UnityWebGLPlayer` (build em `public/unity-builds/<pasta>`); senão usa `webBuildUrl` externo. Se `id` não encontrado, retorna fallback "Jogo não encontrado".

## Componentes essenciais
- Frontend: SPA React 18 + Vite + TypeScript; roteamento com React Router (`src/routes/index.tsx`).
- Layout: `src/components/Layout`, `Header`, `Footer` (usa `socialLinks`); tema com Tailwind (`tailwind.config.js`, `styles/index.css`).
- Jogos/Embed: `src/components/UnityWebGLPlayer` carrega builds locais (loader/data/framework wasm .gz) usando `unityBuildFolder`; `GameCard` decide entre modal local (`unityBuildFolder`) ou link externo (`webBuildUrl`).
- Dados estáticos: `src/data/experiences.ts`, `games.ts`, `socialLinks.tsx` como fonte única de conteúdo; `games.ts` expõe helpers `UNITY_BUILDS_BASE_PATH` e `localWebBuild` para builds WebGL. Sem chamadas a APIs.
- Build/entrega: `npm run build` gera artefatos estáticos para CDN/static hosting; depende apenas de Vite/Tailwind.

## Glossário técnico básico
- SPA: Single Page Application; navegação client-side via React Router, requer rewrite de rotas no host.
- WebGL build: versão exportada do jogo Unity para web; pode ser embarcada localmente em `public/unity-builds/<pasta>` via `UnityWebGLPlayer` ou servida por link externo (`webBuildUrl`).
- `unityBuildFolder`: pasta em `public/unity-builds` que contém Build/, StreamingAssets e index do Unity; acionada pelo hash `/games/:id#play`.
- `localWebBuild("<pasta>")`: helper que monta URL estática para um build WebGL empacotado junto ao app (abre em nova aba se usado em `webBuildUrl`).
- Hero: seção inicial da Home com nome, cargo, CTA e links sociais.
- CTA: call to action; botões para currículo, LinkedIn e "Jogar online".
- Tokens de tema: cores `surface/accent` e fonte definidas em `tailwind.config.js` usadas em toda a UI.
