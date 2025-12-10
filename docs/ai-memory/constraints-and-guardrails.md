# Constraints and Guardrails
<!-- Use este documento para alinhar expectativas antes de qualquer interação com a IA. -->

## O que a IA não deve fazer
- Não expor credenciais ou dados pessoais; o projeto não usa secrets nem backend.
- Não inventar experiências profissionais, jogos ou métricas; qualquer novo item deve vir de input do usuário.
- Não sugerir backend, banco ou CMS (site é estático em React + Vite); mudanças ficam em `src/data/*` e componentes.
- Não remover nem alterar IDs de jogos/experiências sem avaliar impacto nas rotas (`/games/:id`).
- Não propor automações destrutivas (limpar nodes, remover builds, alterar configs de deploy) sem validação humana.
- Não mover/renomear pastas em `public/unity-builds/*` sem alinhar com os campos `unityBuildFolder`/`webBuildUrl` em `src/data/games.ts`.

## Restrições arquiteturais
- SPA estática em React 18 + Vite + TypeScript; sem SSR/SSG configurado.
- Dados vêm apenas de módulos estáticos (`src/data/experiences.ts`, `games.ts`, `socialLinks.tsx`); nenhuma chamada externa além de assets/links fornecidos.
- Builds WebGL do Unity podem viajar junto em `public/unity-builds/<pasta>` (carregadas via `UnityWebGLPlayer`) ou via link externo (`webBuildUrl`); qualquer mudança precisa manter a estrutura padrão do Unity (Build/, StreamingAssets, arquivos .gz).
- Tema centralizado em Tailwind (`tailwind.config.js`, `styles/index.css`); alterações de tokens afetam toda a UI.
- Deploy presume CDN/static hosting com rewrite para SPA; não assumir features de servidor.
- Qualquer adoção de nova stack (CMS, analytics, SEO avançado) deve ser discutida e registrada via ADR.

## Regras de negócio sensíveis
- Conteúdo e UI em PT-BR; foco em clareza para recrutadores e parceiros técnicos.
- Experiências listadas em ordem cronológica decrescente; roles e empresas devem ser fiéis à trajetória de Pedro Xavier.
- Jogos precisam de `thumbnailUrl` e build acessível: ou `unityBuildFolder` apontando para `public/unity-builds/<pasta>` (abre modal `/games/:id#play` com embed) ou `webBuildUrl` externo confiável.
- Links sociais devem ser confiáveis (LinkedIn, GitHub, blog) e abertos em nova aba.

## Padrões obrigatórios
- Respeitar o tema existente (cores surface/accent e fonte configurada) e classes utilitárias Tailwind.
- Estrutura de código: componentes em PascalCase, ids em kebab-case, tipos em TypeScript. `UnityWebGLPlayer` depende da estrutura padrão do build Unity (loader, wasm/data/framework .gz).
- Lint/typecheck via `npm run lint` e `npm run build`; não introduzir código que quebre esses comandos.
- Documentação de decisões em `docs/templates/adr-template.md` quando sugerir mudanças de arquitetura ou dependências.
- Conteúdo estático versionado nos módulos de dados; evitar duplicação de informações entre páginas.

## Proibições gerais
- Não quebrar o roteamento SPA (ex.: removendo rota padrão ou mudando paths sem atualizar links/rewrites).
- Não referenciar assets inseguros (HTTP) ou com direitos autorais duvidosos; preferir URLs próprias ou bancos livres.
- Não aumentar o bundle com libs irrelevantes para o escopo de portfólio sem justificar e registrar.
- Não alterar o tom profissional do conteúdo para marketing exagerado; manter objetividade e concisão.
