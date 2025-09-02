import CaminhoDigital from "/Project_img/CaminhoDigital.png";
import wikimoeda from "/Project_img/wikimoeda.jpg";
import mypad from "/Project_img/mypad.jpg";
import yokominiurl from "/Project_img/ykminiurl.jpg";
import soleilByboca from "/Project_img/soleilbyboca.jpg"
import yksynck from "/Project_img/yksynck.jpg"
import futurodevacademy from "/Project_img/futurodevJohn.jpg"

const projects = [
  {
    img: futurodevacademy,
    title: "FuturoDevAcademy",
    info: `Fui contratado pelo YouTuber FuturoDevJohn para atuar como Frontend e UI/UX Designer na FD Academy, uma plataforma educacional online focada em ajudar estudantes a evoluírem progressivamente em programação. Criei mais de 15 protótipos no Figma, pensando nos projetos e na experiência dos usuários, e desenvolvi componentes reutilizáveis com Chakra UI e TypeScript. Também atuei diretamente na plataforma, integrando o frontend com o backend em .NET, utilizando Redux e React Query, dentro de um ambiente com Docker e Azure.`,
    linksite: "https://app.futurodevacademy.com/",
    linkgit: "https://app.futurodevacademy.com/",
    stacks: {
      next: true,
      typescript: true,
      chakraui: true,
      redux: true,
      query: true,
      figma: true,
      color: "black",
    },
  },
  {
    img: soleilByboca,
    title: "Soleil By Boca",
    info: `Na BravimTech, desenvolvi em uma semana o design e frontend de uma landing page de luxo focada em captação de leads. Criei o layout no Figma, alinhado à identidade da marca, e implementei a página com Next.js, TailwindCSS, TypeScript e animações suaves com Framer Motion. O formulário integrado via EmailJS garantiu captação eficiente de contatos. O resultado foi uma página elegante, interativa e bem recebida pelos stakeholders.`,
    linksite: "https://lancamentoslavvi.online/",
    linkgit: "https://github.com/Dannick10/Soleil",
    stacks: {
      next: true,
      typescript: true,
      tailwind: true,
      figma: true,
      color: "white",
    },
  },
  {
    img: yksynck,
    title: "YkSynck",
    info: `Desenvolvi o YkSynck, um gerenciador completo de projetos com to-do list, Kanban automático, calendário integrado e gráficos de produtividade. Atuei em frontend e backend, usando Next.js, TypeScript, TailwindCSS, Framer Motion, Redux Toolkit, Node.js, Express e MongoDB. Criei componentes reutilizáveis, animações suaves e funcionalidades de arrastar e soltar, garantindo sincronização eficiente de tarefas e experiência intuitiva para o usuário.`,
    linksite: "https://yksynck.vercel.app/",
    linkgit: "https://github.com/Dannick10/yksynck",
    stacks: {
      next: true,
      typescript: true,
      tailwind: true,
      nodejs: true,
      color: "black",
    },
  },
    {
    img: yokominiurl,
    title: "YKMiniURL",
    info: `YKMiniURL é uma solução eficiente e gratuita para gerenciar e compartilhar links. Desenvolvido com tecnologias modernas, nosso serviço oferece
      Encurtamento de Links Longos: Torne seus links curtos e fáceis de compartilhar.
      Proteção com Senha: Adicione uma camada extra de segurança aos seus links.
      Estatísticas Detalhadas: Visualize dados sobre cliques, data de criação e desempenho dos seus links.
      Redirecionamento Simples: Acesse o link original com apenas um clique.`,
    linksite: "https://ykminiurl.vercel.app/",
    linkgit: "https://github.com/Dannick10/yksync_frontend",
    stacks: {
      next: true,
      typescript: true,
      tailwind: true,
      nodejs: true,
      express: true,
      mongodb: true,
      color: "black",
    },
  },
  {
    img: CaminhoDigital,
    title: "Caminho Digital da Biblia",
    info: "O Caminho Digital da Bíblia é uma plataforma digital desenvolvida para proporcionar uma experiência moderna e acessível no estudo da Bíblia, com blog para interações de usuario e banco de dados. Utilizando Html, Css, Javascript, Git, React, Firebase, Web Storage API, SpeechSynthesis API, Bible API e Dicionário Aberto API. Nesse projeto aprendi manipular aplicativos com múltiplas api, também implementar um CRUD com o sistema do firebase.",
    linksite: "https://caminhodigitaldabiblia.vercel.app/",
    linkgit: "https://github.com/Dannick10/CaminhoDigitaldaBiblia",
    stacks: {
      javascript: true,
      react: true,
      firebase: true,
      color: "black",
    },
  },
  {
    img: wikimoeda,
    title: "Wikimoeda",
    info: "Wikimoeda é um projeto sobre o mundo financeiro desenvolvido utilizando React, TailwindCSS, TypeScript, animaçoes, api de noticias do ibge, api de cotações e integração com wikipedia e testes unitários com cypress. O objetivo é manter os usuários atualizados com as últimas cotações de moedas, notícias financeiras e informações detalhadas sobre diversos investimentos.",
    linksite: "https://wikimoeda.vercel.app/",
    linkgit: "https://github.com/Dannick10/wikimoeda",
    stacks: {
      tailwind: true,
      typescript: true,
      react: true,
      cypress: true,
      color: "white",
    },
  },
  {
    img: mypad,
    title: "mypadCookie",
    info: "MyPadCookie é um jogo desenvolvido por mim para treinar habilidades de orientação a objetos. No jogo, você interage com um biscoito para ganhar dinheiro e evoluir seu nível, personalizando seu jogo e gerenciando itens através de um sistema de inventário.",
    linksite: "https://mypadcookie.vercel.app/",
    linkgit: "https://github.com/Dannick10/MypadCookie",
    stacks: {
      tailwind: true,
      javascript: true,
      next: true,
      color: "white",
    },
  },
];

export default projects;
