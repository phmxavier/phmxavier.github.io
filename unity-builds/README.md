## Builds WebGL do Unity

Coloque aqui o conteúdo exportado pelo Unity (index.html + pastas Build/ e TemplateData/).

Para cada jogo, crie uma pasta com o mesmo nome usado em `localWebBuild("<nome>")` dentro de `src/data/games.ts`.

Exemplo:

- Pasta: `public/unity-builds/neon-runner/`
- Arquivo de entrada do Unity: `public/unity-builds/neon-runner/index.html`
- No array `games`, defina `webBuildUrl: localWebBuild("neon-runner")`.

Assim o botão **Jogar online** abrirá o build que viaja junto com o build desta aplicação.

> GitHub Pages não envia o header `Content-Encoding`, então não use arquivos `.gz` ou `.br` no deploy final. Exporte do Unity com compressão desativada ou descompacte os arquivos (`build.data.gz`, `build.framework.js.gz`, `build.wasm.gz`) para usar as versões sem extensão.
