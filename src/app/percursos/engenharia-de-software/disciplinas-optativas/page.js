import React from 'react';
import styles from './page.module.css';

const PercursosPage = () => {
  const disciplinas = [
    {
      code: "DSCO00026",
      name: "Fundamentos da Interação Humano-Computador",
      description: "Aprenda os princípios de design centrado no usuário e como construir interfaces eficientes.",
    },
    {
      code: "DSCO00025",
      name: "Design de Interação",
      description: "Explore como criar experiências de usuário envolventes e funcionais.",
    },
    {
      code: "DINF00064",
      name: "Reuso de Software",
      description: "Descubra como reutilizar componentes e padrões de software para aumentar a eficiência do desenvolvimento.",
    },
    {
      code: "GDCOC0091",
      name: "Teoria dos Grafos Aplicada",
      description: "Entenda a aplicação prática de grafos na solução de problemas computacionais complexos.",
    },
    {
      code: "DINF00066",
      name: "Implementação de Sistemas para Dispositivos Móveis",
      description: "Desenvolva habilidades práticas na criação de aplicativos móveis robustos.",
    },
    {
      code: "1107203",
      name: "Métodos Formais para Desenvolvimento de Software",
      description: "Aprenda técnicas rigorosas para especificação e verificação de sistemas de software.",
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>DISCIPLINAS OPTATIVAS</h1>
        <p className={styles.subtitle}>
          Explore as disciplinas optativas do percurso <strong>Engenharia de Software</strong>. Cada etapa é um passo essencial no desenvolvimento de habilidades avançadas.
        </p>
      </header>

      <div className={styles.roadmap}>
        {disciplinas.map((disciplina, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardCode}>{disciplina.code}</span>
              <h2 className={styles.cardTitle}>{disciplina.name}</h2>
            </div>
            <p className={styles.cardDescription}>{disciplina.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PercursosPage;
