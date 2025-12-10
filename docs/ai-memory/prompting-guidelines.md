# Prompting Guidelines
<!-- Atualize seções conforme o projeto evoluir para manter instruções coerentes. -->

## Como pedir ajuda para este projeto
- Cite a rota/página (Home, Experiences, Games, GameDetails) e o tipo de conteúdo (experiência, jogo, link social).
- Informe se a mudança impacta dados estáticos (`src/data/*`), layout (`src/components/*`), navegação (`src/routes/index.tsx`) ou assets de build Unity (`public/unity-builds/*`).
- Traga o estado atual (o que já foi alterado) e o resultado esperado (ex.: novo jogo publicado, copy revisada, layout ajustado).
- Inclua paths ou trechos específicos (ex.: `src/data/games.ts`, `docs/architecture/00-overview.md`, pasta `public/unity-builds/<pasta>`) para evitar respostas genéricas.

## Como estruturar prompts
1. Comece com o resultado esperado em uma frase clara.
2. Liste requisitos e restrições objetivas em formato de checklist.
3. Acrescente dados de entrada, exemplos e critérios de aceitação.
4. Feche com dúvidas específicas ou riscos que precisam de validação.
<!-- Ajuste a ordem caso haja processos internos padronizados. -->

## Exemplos de prompts bons
- "Adicione um jogo novo em `src/data/games.ts` (id `game-4`), com thumbnail hospedada na CDN X e link WebGL Y. Garanta que apareça na rota `/games/:id`."
- "Disponibilize o build WebGL do jogo `grid-games` usando `unityBuildFolder: \"grid-games\"` (pasta já exportada em `public/unity-builds/grid-games`). Ajuste botões para abrir o embed `/games/grid-games#play`."
- "Reescreva a descrição do cargo `Tech Manager` em `src/data/experiences.ts` para ficar mais concisa (máx. 3 frases), mantendo techs e ordem cronológica."
- "Ajuste o Header para incluir um link 'Sobre mim' sem quebrar o layout existente e seguindo o tema definido em `tailwind.config.js`."

## Erros comuns e como evitar
- Esquecer de alinhar `id` de jogos/experiências com rotas e cards → use strings únicas e coerentes.
- Copiar builds Unity para pasta diferente do `unityBuildFolder` definido em `games.ts` → mantenha nomes idênticos e a estrutura padrão do export (Build/, StreamingAssets, loader .js/.gz).
- Pedir funcionalidades que dependam de backend ou CMS → o site é estático; ajustes devem ficar nos módulos de dados ou UI.
- Omitir links ou assets → builds WebGL e thumbnails precisam de URLs válidas; sem fallback automático.
- Solicitar mudanças em outro idioma → manter PT-BR em conteúdo e UI para consistência.

## Convenções específicas do projeto
- Idioma: PT-BR para textos de interface e docs.
- Estrutura: SPA React + Vite + Tailwind; dados em `src/data/*`; evitar dependências novas salvo necessidade documentada.
- WebGL: usar `unityBuildFolder` para embed local via `UnityWebGLPlayer` ou `webBuildUrl`/`localWebBuild` para abrir em nova aba.
- Nomenclatura: `id` kebab-case para jogos/experiências; componentes PascalCase; paths claros na documentação (`docs/architecture/*`).
- Estilo: seguir tema existente (tokens em `tailwind.config.js`) e classes utilitárias do Tailwind; manter tom profissional no copy.
- Deploy: focar em artefatos estáticos; se sugerir SEO/meta ou SSG, citar necessidade de ADR antes.
