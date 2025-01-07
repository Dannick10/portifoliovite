import CaminhoDigital from "/Project_img/CaminhoDigital.png";
import reduxStore from "/Project_img/reduxStore.png";
import wikimoeda from "/Project_img/wikimoeda.jpg";
import mypad from "/Project_img/mypad.jpg";
import nebulaclima from "/Project_img/nebulaclima.jpg";
import repoimage from "/Project_img/repoImage.jpg";
import yokominiurl from "/Project_img/ykminiurl.jpg"

const projects = [
    {
      img: yokominiurl,
      title: "YKMiniURL",
      info: `YKMiniURL é uma solução eficiente e gratuita para gerenciar e compartilhar links. Desenvolvido com tecnologias modernas, nosso serviço oferece
      Encurtamento de Links Longos: Torne seus links curtos e fáceis de compartilhar.
      Proteção com Senha: Adicione uma camada extra de segurança aos seus links.
      Estatísticas Detalhadas: Visualize dados sobre cliques, data de criação e desempenho dos seus links.
      Redirecionamento Simples: Acesse o link original com apenas um clique.`,
      linksite: "https://ykminiurl.vercel.app/",
      linkgit: "https://github.com/Dannick10/frontend-ykminiurl",
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
    },{
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