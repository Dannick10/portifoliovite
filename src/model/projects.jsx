import jadoo from "/Project_img/jadoo_project.svg";
import nossosol from "/Project_img/nossosol_project.svg";
import educamais from "/Project_img/portal_educa.svg";
import CaminhoDigital from "/Project_img/CaminhoDigital.png";
import reduxStore from "/Project_img/reduxStore.png";
import wikimoeda from "/Project_img/wikimoeda.jpg";
import mypad from "/Project_img/mypad.jpg";

const projects = [
    {
      img: wikimoeda,
      title: "Wikimoeda",
      info: "Wikimoeda é um projeto sobre o mundo financeiro desenvolvido utilizando React, TailwindCSS, TypeScript, animaçoes, api de noticias do ibge, api de cotações e integração com wikipedia. O objetivo é manter os usuários atualizados com as últimas cotações de moedas, notícias financeiras e informações detalhadas sobre diversos investimentos.",
      linksite: "https://wikimoeda.vercel.app/",
      linkgit: "https://github.com/Dannick10/wikimoeda",
      stacks: {
        tailwind: true,
        typescript: true,
        react: true,
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
        color: "white",
      },
    },
    {
      img: reduxStore,
      title: "ReduxStore",
      info: "StoreRedux é uma plataforma de e-commerce desenvolvida para proporcionar uma experiência moderna e acessível na simulação de compras online. Utilizando HTML, CSS, JavaScript, React, Redux e a API do Mercado Livre, o projeto demonstra como gerenciar o estado de uma aplicação complexa. Além disso, ele implementa um sistema com redux para gerenciar o carrinho de compras.",
      linksite: "https://storeredux.vercel.app/",
      linkgit: "https://github.com/Dannick10/Store",
      stacks: {
        javascript: true,
        react: true,
        redux: true,
        color: "black",
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
    {
      img: jadoo,
      title: "JADOO LADING PAGE",
      info: "Um portal de viagens que oferece uma experiência única Uma pagina atraente e responsiva. Utilizando Html, Css,JavaScript,Git e duas bibliotecas vanilla-tilt.js e Notyf. Nesse projeto aprendi estruturar um ótimo HTML para conseguir manipular um site com muitos elementos.",
      linksite: "https://dannick10.github.io/jadoo_landing/",
      linkgit: "https://github.com/Dannick10/jadoo_landing",
      stacks: { html: true, css: true, javascript: true, color: "black" },
    },
    {
      img: nossosol,
      title: "NOSSO SOL",
      info: "Um projeto em equipe de conscientização para destacar a independência energética proporcionada pelos painéis solares. Esse projeto foi feito em colaboração com outro desenvolvedor utilizando o Git,React,vite e biblioteca swipe.",
      linksite: "https://nosso-sol.vercel.app/",
      linkgit: "https://github.com/fabcode01/nosso-sol",
      stacks: {
        react: true,
        javascript: true,
        git: true,
        color: "white",
      },
    },
    {
      img: educamais,
      title: "PORTAL EDUCA+",
      info: "Um projeto de educação mostrando principais cursos e apresentação da administração da instituição. A página é responsiva e tem uma experiência unica com efeitos de animações Utilizando Html, Css,JavaScript,Git. Nesse projeto aprendi administrar e organizar meu tempo por ser parte de um desafio, do @FuturoDevJohn.",
      linksite: "https://dannick10.github.io/educamais/",
      linkgit: "https://github.com/Dannick10/educamais",
      stacks: { html: true, css: true, javascript: true, color: "black" },
    },
  ];

  export default projects