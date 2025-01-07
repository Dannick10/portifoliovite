import React from "react";
import styles from "./ExperiencesTimeline.module.css";

const experiences = [
  {
    year: "2023 Setembro | 2023 outubro",
    title: "Futuro Dev Academy",
    description: `Tive a oportunidade de atuar em diferentes áreas do desenvolvimento web. Contribuí para o design e implementação de interfaces, criando experiências de UI/UX para outros desenvolvedores como parte de desafios da plataforma.

  Além disso, trabalhei no frontend da própria plataforma, desenvolvendo componentes reutilizáveis com Next.js, TypeScript, Chakra UI, Redux, Git, Transtek, Swagger e métodologia ágeis, garantindo a integração eficiente com o backend ao conectar endpoints para funcionalidades específicas. Meu papel foi colaborar diretamente com outro desenvolvedor, criando componentes que ele utilizava e otimizando fluxos para melhorar a experiência dos usuários finais.`,
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
