# Visão geral da arquitetura

## 1. Contexto e objetivo do produto
- Site de portfólio/currículo em React para apresentar trajetória profissional, links de contato e vitrine de jogos Unity.
- Público: recrutadores e parceiros técnicos; foco em leitura rápida, navegação clara e demonstração visual dos projetos.
- Conteúdo dinâmico mínimo: dados de experiências e jogos são estáticos no front (sem backend ou CMS). Builds WebGL do Unity podem viajar junto em `/public/unity-builds` e abrir em modal.

## 2. Visão geral da arquitetura atual
- Frontend single-page application (SPA) em React 18 com Vite + TypeScript e Tailwind.
- Browser Router controla navegação entre `Home`, `Experiences` e `Games` (inclui rota dinâmica `/games/:id` e fallback para Home).
- Dados residem em módulos estáticos (`src/data/experiences.ts`, `src/data/games.ts`, `src/data/socialLinks.tsx`); builds WebGL locais usam `unityBuildFolder` e helpers (`UNITY_BUILDS_BASE_PATH`, `localWebBuild`).
- Build gera artefatos estáticos (Vite) prontos para hospedagem em CDN/static hosting.
- Estilo centralizado via Tailwind (`tailwind.config.js` define palette surface/accent e fonte Inter).
- `UnityWebGLPlayer` carrega o export padrão do Unity a partir de `public/unity-builds/<pasta>/Build` quando `unityBuildFolder` está definido; caso contrário, os jogos usam `webBuildUrl` externo.

### Fluxo em alto nível
```
Browser -> React + React Router -> Layout (Header, Footer)
       -> Pages (Home, Experiences, Games, GameDetails)
       -> Components (ExperienceCard, GameCard, UnityWebGLPlayer)
       -> Data modules (experiences, games, socialLinks, helpers de build)
       -> Static assets gerados pelo Vite/Tailwind build + builds Unity em public/unity-builds
```

## 3. Principais componentes e responsabilidades
- `src/main.tsx`: bootstrap do React, StrictMode, BrowserRouter.
- `src/App.tsx`: aplica `Layout` comum e injeta as rotas.
- `src/routes/index.tsx`: tabela de rotas SPA.
- `src/components/Layout|Header|Footer`: shell compartilhado, navegação e links sociais.
- `src/components/ExperienceCard`, `GameCard` e `UnityWebGLPlayer`: apresentação de itens de dados e player WebGL (modal).
- `src/pages/*`: composição de dados + cards por rota; `GameDetails` trata lookup por `id` e renderiza `UnityWebGLPlayer` quando `unityBuildFolder` existe.
- `src/data/*`: fonte única de verdade para experiências, jogos e links sociais; `games.ts` expõe helpers de caminho para builds Unity.
- `styles/index.css` + `tailwind.config.js`: tokens de cor, fonte e reset/base do tema.

## 4. Objetivos arquiteturais, restrições e riscos conhecidos
- Objetivos: manter site estático simples, fácil de atualizar via edição de arrays TS; navegação leve e responsiva; visual consistente.
- Restrições: sem backend/CMS, sem autenticação; dependência de imagens remotas (avatar do LinkedIn) e builds WebGL locais/externos; idioma principal PT-BR.
- Riscos:
  - Atualização manual de dados pode gerar inconsistência entre lista e detalhes de jogos.
  - Links externos ou builds WebGL podem quebrar ou variar de desempenho; modal depende da estrutura padrão do export Unity (loader/data/wasm .gz).
  - SEO e performance dependem de configuração de deploy (sem meta tags dinâmicas).
  - Tailwind/theme centralizado: alteração de tokens pode afetar toda a UI; sem design system formal.
- ADRs: nenhum registrado até o momento. Usar `docs/templates/adr-template.md` para decisões futuras (ex.: adoção de CMS ou hospedagem).
- Referências úteis: `docs/ai-memory/project-faq.md` e `docs/ai-memory/constraints-and-guardrails.md` para contexto e limites de atuação.

## 5. Mapa mental resumido
- Portfólio SPA
  - Shell
    - Layout → Header (nav) + Footer (social)
  - Rotas (React Router)
    - `/` Home → hero + últimas experiências
    - `/experiences` → timeline de experiências
    - `/games` → grid de jogos
    - `/games/:id` → detalhes do jogo (lookup por id)
  - Dados estáticos
    - `experiences` → cargos, empresas, techs
    - `games` → descrições, techs, `unityBuildFolder`/`webBuildUrl` para WebGL
    - `socialLinks` → ícones SVG + URLs
  - Build/infra
    - Vite + TypeScript + Tailwind
    - Unity builds em `public/unity-builds/<pasta>` carregados pelo `UnityWebGLPlayer`
    - Saída estática para CDN/static hosting
  - Riscos/pendências
    - Dependência de links externos
    - Estrutura do build Unity precisa ser preservada (loader/data/wasm .gz)
    - Sem SEO/analytics configurado
    - Sem automação para validar dados
