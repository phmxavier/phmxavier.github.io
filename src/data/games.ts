export interface Game {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  techs: string[];
  thumbnailUrl: string;
  thumbnailFit?: "cover" | "contain";
  webBuildUrl?: string;
  unityBuildFolder?: string; // se definido, podemos embedar a build local em /public/unity-builds/<pasta>
}

// Caminho base onde os builds WebGL do Unity ficarão dentro do app.
// Coloque a pasta exportada do Unity (index.html, Build/, TemplateData/) em public/unity-builds/<nome-do-jogo>/
// e use localWebBuild("<nome-da-pasta>") para gerar o link "Jogar online".
const BASE_URL = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");
export const UNITY_BUILDS_BASE_PATH = `${BASE_URL}/unity-builds`;
export const localWebBuild = (folderName: string) => `${UNITY_BUILDS_BASE_PATH}/${folderName}/index.html`;

// Atualize este array com seus jogos reais em Unity.
export const games: Game[] = [

  {
    id: "wooly-way",
    title: "Wooly Way",
    shortDescription: "Ajude o cão pastor para conduzir as ovelhas até a cerca.",
    longDescription:
      "Wooly Way é um minigame onde você controla um cão pastor determinado a organizar o rebanho. O objetivo é simples e caótico: mover-se pelo campo, prever o comportamento das ovelhas e empurrá-las para dentro da cerca antes que fujam por aí.",
    techs: ["Unity", "C#", "WebGL"],
    thumbnailUrl: "/images/wooly-way-cover.png",
    thumbnailFit: "cover",
    unityBuildFolder: "wooly-way"
  },
  {
    id: "grid-games",
    title: "Grid Games",
    shortDescription: "Coleção de minigames em grade.",
    longDescription:
      "O GridGames é um jogo que pretende reunir vários jogos populares que tem como principal caracteristica o GRID. Simples assim. Uma malha contendo linhas e colunas e que pode ser usada para uma infinidade de jogos. Com uma estética que lembra os jogos que jogamos no papel mesmo, como o Jogo da Velha, o Grid Games é um jogo que pretende divertir o jogador casual.",
    techs: ["Unity", "C#", "WebGL"],
    thumbnailUrl:
      "/images/grid-games-cover.png",
    thumbnailFit: "cover",
    unityBuildFolder: "grid-games"
  }
  // ,
  // {
  //   id: "game-1",
  //   title: "Neon Runner",
  //   shortDescription: "Corrida endless com estética neon e trilha synthwave.",
  //   longDescription:
  //     "Projeto focado em polir sensação de velocidade e feedback tátil. Desenvolvi sistemas de power-ups, pipeline de VFX em Unity e otimizei o build WebGL para rodar suave em navegadores modernos.",
  //   techs: ["Unity", "C#", "Cinemachine", "Post Processing"],
  //   thumbnailUrl:
  //     "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=800&q=80",
  //   webBuildUrl: localWebBuild("neon-runner")
  // },
  // {
  //   id: "game-2",
  //   title: "Star Forge Tactics",
  //   shortDescription: "Roguelite tático com mapas procedurais no espaço.",
  //   longDescription:
  //     "Implementei IA de inimigos, balanceamento de armas e sistema de save cross-platform. O build WebGL inclui integração com leaderboard online.",
  //   techs: ["Unity", "C#", "Addressables", "PlayFab"],
  //   thumbnailUrl:
  //     "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80",
  //   webBuildUrl: localWebBuild("star-forge-tactics")
  // },
  // {
  //   id: "game-3",
  //   title: "Echoes of the Abyss",
  //   shortDescription: "Exploração submarina com puzzles sonoros e clima misterioso.",
  //   longDescription:
  //     "Responsável pela direção técnica do projeto: sistema de iluminação volumétrica, mixagem adaptativa e UX para dispositivos móveis e desktop.",
  //   techs: ["Unity", "C#", "FMOD", "Shader Graph"],
  //   thumbnailUrl:
  //     "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?auto=format&fit=crop&w=800&q=80",
  //   webBuildUrl: localWebBuild("echoes-of-the-abyss")
  // }
];
