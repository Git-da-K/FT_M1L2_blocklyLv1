const LEVELS_RABBIT = [
  // === 1–5: only exit ===
  {
    size: 5,
    grid: [
      "..W..",
      "....E",
      ".W.W.",
      "..R.W",
      ".W.WW"
    ],
    goal: "Chegue até a 🚪 em 4 passos.",
    maxBlocks: 15,
    needCarrots: false,
    hint: "Vá para baixo e para a direita."
  },
  {
    size: 5,
    grid: [
      "R....",
      ".WWWW",
      "...WW",
      ".WEW.",
      "WWWWW"
    ],
    goal: "Chega até a 🚪 evitando as paredes.",
    maxBlocks: 15,
    needCarrots: false,
    hint: "Mova-se ao longo das paredes em ziguezague."
  },
  {
    size: 5,
    grid: [
      "R....",
      "WW.W.",
      ".....",
      ".W.W.",
      "....E"
    ],
    goal: "Chegue até a 🚪 através do labirinto.",
    maxBlocks: 15,
    needCarrots: false,
    hint: "Vá para baixo e depois para a direita."
  },
  {
    size: 5,
    grid: [
      "R.W..",
      ".W.W.",
      "...W.",
      ".W...",
      "...E."
    ],
    goal: "Encontre um caminho até a 🚪.",
    maxBlocks: 15,
    needCarrots: false,
    hint: "Procure um caminho através das áreas livres."
  },
  {
    size: 5,
    grid: [
      "R...W",
      ".W.W.",
      ".....",
      "W.W.W",
      "E...."
    ],
    goal: "Uma rota difícil até a 🚪.",
    maxBlocks: 15,
    needCarrots: false,
    hint: "Mova-se em ziguezague para baixo e para a esquerda."
  },

  // === 6–10: carrots + exit ===
  {
    size: 5,
    grid: [
      "R.CWW",
      ".W..W",
      "..CW.",
      ".W...",
      "..WWE"
    ],
    goal: "Colete as 🥕 e chegue até a 🚪.",
    maxBlocks: 15,
    needCarrots: true,
    hint: "Não deixe passar a cenoura!"
  },
  {
    size: 5,
    grid: [
      "....R",
      "WW.C.",
      "..C.W",
      ".W.W.",
      "....E"
    ],
    goal: "Colete todas as 🥕 e vá até a🚪.",
    maxBlocks: 15,
    needCarrots: true,
    hint: "Dê a volta pelas paredes."
  },
  {
    size: 5,
    grid: [
      "R...C",
      ".W.W.",
      "C...C",
      ".W.W.",
      "E...."
    ],
    goal: "Todas as 🥕 devem ser coletadas!",
    maxBlocks: 15,
    needCarrots: true,
    hint: "Primeiro as cenouras, depois a porta."
  },
  {
    size: 5,
    grid: [
      "R.C.W",
      "W..C.",
      "...C.",
      "W.W..",
      "..E.."
    ],
    goal: "Colete as 🥕 e vá até a🚪.",
    maxBlocks: 15,
    needCarrots: true,
    hint: "Encontre o caminho mais curto até as cenouras."
  },
  {
    size: 5,
    grid: [
      "R.W..",
      ".C..W",
      ".C...",
      ".W.C.",
      "E...."
    ],
    goal: "Última tarefa: colete todas as 🥕 e chegue até a 🚪.",
    maxBlocks: 15,
    needCarrots: true,
    hint: "Você precisará se mover em ziguezague."
  }
];
