import React from "react";
import styles from "./ExperiencesTimeline.module.css";

const experiences = [
  {
    year: "2023 Setembro | 2023 outubro",
    title: "Futuro Dev Academy (Freelancer)",
    description: `Tive a oportunidade de atuar em diferentes áreas do desenvolvimento web. Contribuí para o design e implementação de interfaces, criando experiências de UI/UX para outros desenvolvedores como parte de desafios da plataforma.

  Além disso, trabalhei no frontend da própria plataforma, desenvolvendo componentes reutilizáveis com Next.js, TypeScript, Chakra UI, Redux, Git, Transtek, Swagger e métodologia ágeis, garantindo a integração eficiente com o backend ao conectar endpoints para funcionalidades específicas. Meu papel foi colaborar diretamente com outro desenvolvedor, criando componentes que ele utilizava e otimizando fluxos para melhorar a experiência dos usuários finais.`,
  },
  {
    year: "2025 Janeiro | 2025 Agosto",
    title: "BravimTech – Desenvolvedor Front-end (Integral/Contrato)",
    description: `Atuo na BravimTech desenvolvendo **interfaces performáticas, responsivas e visualmente sofisticadas**, focadas em UX, SEO e conversão de leads. Criei landing pages completas desde o design no Figma até a implementação final, integrando formulários com EmailJS para automação de contatos.  

No frontend, utilizei Next.js, React, TypeScript, TailwindCSS e Framer Motion, aplicando animações suaves e interativas, enquanto otimizo animações complexas com GSAP e Anime.js para reduzir tempo de carregamento e melhorar fluidez. Organizo o código de forma escalável, garantindo alta fidelidade visual em relação aos protótipos e consistência com a identidade da marca. Essa experiência consolidou minha capacidade de trabalhar com ciclos completos de projeto, unindo design, código e estratégia de negócios.`,
  },
];

const ExperiencesTimeline = () => {
  return (
    <div className={styles.container}>
      <div className={styles.timeline}>
        <div className={styles.timelineLine}></div>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.experience}>
            <div className={styles.experienceContent}>
              <div className={styles.experienceCircle}></div>
              <div className={styles.title}>{exp.title}</div>
              <p className={styles.year}>{exp.year}</p>
              <p className={styles.description}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencesTimeline;
