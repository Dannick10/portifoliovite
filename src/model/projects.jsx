import CaminhoDigital from "/Project_img/CaminhoDigital.png";
import reduxStore from "/Project_img/reduxStore.png";
import wikimoeda from "/Project_img/wikimoeda.jpg";
import mypad from "/Project_img/mypad.jpg";
import nebulaclima from "/Project_img/nebulaclima.jpg";
import repoimage from "/Project_img/repoImage.jpg";


const projects = [
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
      info: "Wikimoeda é um projeto sobre o mundo financeiro desenvolvido utilizando React, TailwindCSS, TypeScript, animaçoes, api de noticias do ibge, api de cotações e integração com wikipedia. O objetivo é manter os usuários atualizados com as últimas cotações de moedas, notícias financeiras e informações detalhadas sobre diversos investimentos.",
      linksite: "https://wikimoeda.vercel.app/",
      linkgit: "https://github.com/Dannick10/wikimoeda",
      stacks: {
        tailwind: true,
        typescript: true,
        react: true,
        color: "white",
      },
    },
    {
      img: nebulaclima,
      title: "nebulaclima",
      info: "Nebulaclima é uma aplicação que fornece informações meteorológicas detalhadas para qualquer cidade do Brasil. Desenvolvida com Next.js, TypeScript, DaisyUI e Frame Motion, a aplicação utiliza múltiplas APIs para oferecer uma experiência de usuário fluida, permitindo a seleção de cidades e países, além de suporte para mudança de tema com persistência em LocalStorage.",
      linksite: "https://nebulaclima.vercel.app/",
      linkgit: "https://github.com/Dannick10/Nebulaclima",
      stacks: {
        tailwind: true,
        typescript: true,
        next: true,
        color: "black",
      },
    },
    {
      img: repoimage,
      title: "repo-images",
      info: "repoImages é uma aplicação desenvolvida para pesquisar e exibir imagens utilizando a API do Pexels. A aplicação permite visualizar imagens em uma versão expandida com animações suaves e acessar o perfil do usuário que postou a imagem no Pexels. Além disso, a aplicação implementa paginação para facilitar a navegação entre as imagens. O projeto foi desenvolvido com Next.js, TailwindCSS, DaisyUI, TypeScript e Frame Motion.",
      linksite: "https://repo-images.vercel.app/",
      linkgit: "https://github.com/Dannick10/repoImages",
      stacks: {
        tailwind: true,
        typescript: true,
        next: true,
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

 
  ];

  export default projects