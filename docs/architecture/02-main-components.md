# Componentes principais

- SPA React 18 + TypeScript (Vite) com roteamento cliente.
- Shell compartilhado (Layout, Header, Footer) que ancora navegação e identidade visual.
- Páginas de domínio: Home, Experiences, Games, GameDetails.
- Camada de dados estáticos (modules TS) para experiências, jogos e links sociais.
- Estilo/Tema via Tailwind + tokens em `tailwind.config.js`.
- Pipeline de build estático (Vite) para deploy em CDN/static hosting.
- Player WebGL (`UnityWebGLPlayer`) para embedar builds locais exportados do Unity (public/unity-builds).

## Componentes detalhados

### 1) Bootstrap e Router (`src/main.tsx`, `src/App.tsx`, `src/routes/index.tsx`)
- Responsabilidades: montar raiz React, habilitar React Router, aplicar Layout comum e mapear rotas.
- Integrações/protocolos: BrowserRouter (history API), render estático via Vite. Sem chamadas externas.
- Métricas sugeridas: Web Vitals (LCP, FID, CLS), erro de navegação (rota não encontrada), tempo de bootstrap.
- Riscos/pontos sensíveis: quebra de roteamento em deploy sem rewrite para SPA; ausência de fallback de dados; regressões de performance em hydration.
- Inputs/Outputs:
  | Input | Origem |
  | --- | --- |
  | Árvore de rotas | `src/routes/index.tsx` |
  | Layout global | `src/components/Layout.tsx` |
  | Estilos base | `styles/index.css` / Tailwind |
  | Dados estáticos | `src/data/*` |
  | Output | Conteúdo SPA renderizado no DOM |

### 2) Shell de UI (`src/components/Layout`, `Header`, `Footer`)
- Responsabilidades: moldura da aplicação, navegação principal, links sociais, rodapé.
- Integrações/protocolos: React Router `NavLink`; SVG inline para ícones sociais; carrega links de `socialLinks`.
- Métricas sugeridas: taxa de clique em navegação/social; erros de link (404 externos); consistência de tema.
- Riscos/pontos sensíveis: dependência de URLs externas de redes; mudanças de paleta em `tailwind.config.js` impactam toda a UI.
- Inputs/Outputs:
  | Input | Origem |
  | --- | --- |
  | Links sociais | `src/data/socialLinks.tsx` |
  | Cores/fonte | `tailwind.config.js` |
  | Children das rotas | `AppRoutes` |
  | Output | Layout persistente com header/footer |

### 3) Páginas de domínio (`src/pages/*`)
- Responsabilidades: compor dados em componentes de apresentação, aplicar conteúdo específico por rota.
- Integrações/protocolos: consumo direto de módulos de dados; `useParams` no `GameDetails` para lookup por `id`; hash `#play` ativa o embed do Unity.
- Métricas sugeridas: erro de lookup (id inexistente), tempo de render por página, web vitals específicos por rota.
- Riscos/pontos sensíveis: divergência entre lista de jogos e detalhes; imagens externas lentas/indisponíveis; ausência de loading/erro sofisticado.
- Inputs/Outputs:
  | Página | Inputs | Outputs |
  | --- | --- | --- |
  | Home | `experiences`, `socialLinks` | Hero + cards recentes |
  | Experiences | `experiences` | Linha do tempo de experiências |
  | Games | `games` | Grid de jogos com CTAs; se `unityBuildFolder` existe, linka `/games/:id#play` para embed local, senão `webBuildUrl` externo |
  | GameDetails | `games`, `useParams().id` | Card detalhado; abre modal com `UnityWebGLPlayer` (quando `unityBuildFolder`) ou link externo; fallback "não encontrado" |

### 4) Componentes de apresentação (`src/components/ExperienceCard`, `GameCard`, `UnityWebGLPlayer`)
- Responsabilidades: renderizar blocos reutilizáveis de experiência e jogo com chamadas para ação; carregar builds WebGL em modal.
- Integrações/protocolos: `Link` do React Router; `<a>` para builds WebGL externas; `UnityWebGLPlayer` carrega loader/data/wasm .gz padrão do Unity e expõe CTA de full screen.
- Métricas sugeridas: CTR em “Ver detalhes” e “Jogar online”; erros de imagem (broken thumbnails); taxa de carregamento/erro do Unity.
- Riscos/pontos sensíveis: quebras visuais se dados omitirem campos obrigatórios; links externos quebrados; pasta `unityBuildFolder` precisa bater com assets em `public/unity-builds/<pasta>/Build`.
- Inputs/Outputs:
  | Input | Origem |
  | --- | --- |
  | Dados tipados (`Experience`, `Game`) | `src/data/experiences.ts`, `src/data/games.ts` |
  | BuildFolder do Unity | `games.ts` → `unityBuildFolder` |
  | Output | Cards renderizados e modal do Unity embutido |

### 5) Dados estáticos (`src/data/experiences.ts`, `games.ts`, `socialLinks.tsx`)
- Responsabilidades: fonte de verdade para conteúdo; garantir tipos e consistência mínima. `games.ts` contém helper `UNITY_BUILDS_BASE_PATH` e `localWebBuild` para builds WebGL locais.
- Integrações/protocolos: import ES module direto; uso de tipos TypeScript; builds Unity seguem estrutura padrão (Build/, StreamingAssets, index do Unity, arquivos .gz).
- Métricas sugeridas: validação de schema no CI (lint/typecheck); checagem de links externos.
- Riscos/pontos sensíveis: edição manual pode quebrar rotas (`id` inconsistente); dependência de imagens/links remotos (avatar); necessidade de manter nome da pasta `unityBuildFolder` igual à pasta em `public/unity-builds`.
- Inputs/Outputs:
  | Input | Origem |
  | --- | --- |
  | Conteúdo estático | Edição manual |
  | Output | Objetos TS consumidos pela UI |

### 6) Tema e estilos (`styles/index.css`, `tailwind.config.js`)
- Responsabilidades: tokens de cor/fonte, reset e utilitários Tailwind.
- Integrações/protocolos: Tailwind CLI via Vite plugin; classes utilitárias no JSX.
- Métricas sugeridas: tamanho do CSS gerado; redundância de classes; tempo de first paint.
- Riscos/pontos sensíveis: troca de tokens afeta toda UI; ausência de design system versionado.
- Inputs/Outputs:
  | Input | Origem |
  | --- | --- |
  | Tokens de cor/fonte | `tailwind.config.js` |
  | Output | CSS gerado no build Vite |

### 7) Build e entrega (Vite)
- Responsabilidades: bundling, otimização e geração de artefatos estáticos.
- Integrações/protocolos: Vite, TypeScript, PostCSS/Tailwind; sem backend. Builds Unity vão em `public/unity-builds/<pasta>/` e são servidos como assets estáticos (loader/data/framework .gz, wasm).
- Métricas sugeridas: tempo de build, tamanho dos bundles, cobertura de lint/tsc.
- Riscos/pontos sensíveis: ausência de SSR/SSG limita SEO; configs de deploy precisam de rewrite para SPA; host precisa servir corretamente arquivos .gz do Unity (Content-Type/Encoding) para o embed funcionar.
- Inputs/Outputs:
  | Input | Origem |
  | --- | --- |
  | Código fonte | `src/**/*` |
  | Config | `vite.config.ts`, `tsconfig*.json`, `postcss.config.js` |
  | Output | Artefatos estáticos prontos para CDN |

## Panorama de dependências e acoplamentos
- Fluxo principal: Browser → Router → Shell → Páginas → Componentes (incl. UnityWebGLPlayer) → Dados estáticos → Build estático → Assets do Unity em `public/unity-builds`.
- Gargalos: imagens externas e builds WebGL (locais ou externos) podem ser o ponto mais lento; sem cache/preload configurado.
- Acoplamentos: páginas importam dados diretamente (tight coupling com estrutura dos arrays); tema é global via Tailwind (mudanças cascata); `unityBuildFolder` deve espelhar nome de pasta em `public/unity-builds`.
- Oportunidades de refatoração:
  - Centralizar validação de dados (schema + lint para `src/data/*`) para evitar ids quebrados e links inválidos.
  - Adicionar camada de configuração para URLs externas (CDN de imagens) e fallback de thumbnails.
  - Incluir scripts de checagem de links externos e Web Vitals no CI.
  - Avaliar SSG/SSR no Vite/React para melhorar SEO e permitir meta tags por rota (registrar em ADR se adotado).

## Referências e decisões
- Visão geral: `docs/architecture/00-overview.md`.
- Template de ADRs: `docs/templates/adr-template.md` (nenhum ADR registrado até agora).
- Guardrails/contexto: `docs/ai-memory/constraints-and-guardrails.md`, `docs/ai-memory/project-faq.md`.
