"use client";

import React, { useState } from 'react';
import Link from 'next/link'; 
import styles from './page.module.css';

const PercursosPage = () => {
  const [labIndex, setLabIndex] = useState(0);

  const labs = [
    {
      id: "tril",
      title: "TRILAB",
      description:
        'A proposta do TRILAB, ou apenas TRIL, está baseada em uma tríade conceitual que dá origem ao seu nome: SEIZE, SHAPE e SOLVE. Este modelo holístico “3S” tem como objetivo implementar um portfólio de soluções para setores estratégicos da nossa economia e sociedade.',
      imgSrc: "/tril_logo.svg",
      link: "https://tril.ci.ufpb.br/en/",
    },
    {
      id: "tail",
      title: "TAIL",
      description:
        "Technology and Artificial Intelligence League, ou simplesmente TAIL, incrementa a bagagem intelectual de seus associados nos mais diversos assuntos da área de dados e no ramo da Inteligência Artificial.",
      imgSrc: "/tail_logo.svg",
      link: "https://tail-tech.com/",
    },
    {
      id: "mccufpb",
      title: "MCCUFPB",
      description:
        "Meninas na Ciência da Computação busca incentivar a participação feminina em áreas tecnológicas, promovendo inclusão e capacitação em Ciência da Computação.",
      imgSrc: "/mcc_logo.svg",
      link: "https://mccufpb.ufpb.br/",
    },
  ];

  const handleLabPrev = () => {
    setLabIndex((prevIndex) =>
      prevIndex === 0 ? labs.length - 1 : prevIndex - 1
    );
  };

  const handleLabNext = () => {
    setLabIndex((prevIndex) =>
      prevIndex === labs.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
  <div>
    <div className={styles.backgroundRectangle}>
      <div className={styles.lineMid}></div>
      <div className={`${styles.container} ${styles.percursos}`}>
        <div className={styles.heroText}>
          <h2 className={styles.sectionTitle}>PERCURSOS</h2>
          <p className={styles.percursosDescription}>
            O sistema de percursos permite que você se especialize em uma área de interesses, ajudando a orientar suas escolhas de disciplinas optativas, ligas acadêmicas e laboratórios que mais se alinham ao tópico que deseja se especializar.
          </p>
          <p className={styles.percursosDescription}>
            Ao seguir um percurso, você se beneficia de uma orientação direcionada, aproveitando ao máximo o que o curso oferece e fazendo escolhas mais assertivas para atingir seus objetivos.
          </p>
        </div>
        <img src="/image2.svg" alt="Homem olhando para horizonte" className={styles.image}/>
      </div>
      <div className={styles.lineBottom}></div>
    </div>

    <div className={`${styles.container} ${styles.cardsContainer}`}>
    <Link href="/percursos/engenharia-de-software" className={styles.card}>
      <div>
        <img src="/eda_icon.svg" height="60px"></img>
        <h3 className={styles.cardTitle}>ENGENHARIA DE SOFTWARE</h3>
        <p className={styles.cardText}>
          Aplica princípios e práticas de engenharia para o desenvolvimento, manutenção e gerenciamento de softwares seguros, gerenciando qualidade de entrega em projetos.
        </p>
        <p className={styles.cardLink}>Clique para saber mais!</p>
      </div>
    </Link>

      <Link href="/percursos/ciencia-dados-ia" className={styles.card}>
        <div>
          <img src="/ia_icon.svg" height="60px"></img>
          <h3 className={styles.cardTitle}>CIÊNCIA DE DADOS & IA</h3>
          <p className={styles.cardText}>
          Une estatística, programação e aprendizado de máquina para extrair insights de dados, criando sistemas inteligentes aplicados a previsões, reconhecimento de padrões e automação.
          </p>
          <p className={styles.cardLink}>Clique para saber mais!</p>
        </div>
      </Link>

      <Link href="/percursos/seguranca-da-informacao" className={styles.card}>
        <div>
          <img src="/sc_icon.svg" height="60px"></img>
          <h3 className={styles.cardTitle}>SEGURANÇA DA INFORMAÇÃO</h3>
          <p className={styles.cardText}>
            Protege dados e sistemas contra acessos não autorizados, garantindo confidencialidade e integridade. Envolve práticas como criptografia, controle de acessos e gestão de riscos.
          </p>
          <p className={styles.cardLink}>Clique para saber mais!</p>
        </div>
      </Link>

      <Link href="/percursos/pesquisa-operacional" className={styles.card}>
        <div>
          <img src="/estatistica_icon.svg" height="60px"></img>
          <h3 className={styles.cardTitle}>PESQUISA OPERACIONAL</h3>
          <p className={styles.cardText}>
            Utiliza métodos matemáticos e computacionais para otimizar processos e tomar decisões estratégicas, sendo aplicada em áreas como logística, planejamento e alocação de recursos.
          </p>
          <p className={styles.cardLink}>Clique para saber mais!</p>
        </div>
      </Link>
    </div>

    <section className={styles.laboratorios}>
        <h2 className={styles.sectionTitle2}>LABORATÓRIOS</h2>
        <div className={styles.carousel}>
          <button
            className={`${styles.carouselButton} ${styles.left}`}
            onClick={handleLabPrev}
          >
            &lt;
          </button>
          <div className={styles.card2}>
            <a href={labs[labIndex].link} target="_blank" rel="noopener noreferrer">
              <img
                src={labs[labIndex].imgSrc}
                alt={`Logo ${labs[labIndex].title}`}
                className={styles.cardImage}
              />
            </a>
            <h3 className={styles.cardTitle}>{labs[labIndex].title}</h3>
            <p className={styles.cardText}>{labs[labIndex].description}</p>
            <p className={styles.cardLink}>
              <a href={labs[labIndex].link} target="_blank" rel="noopener noreferrer">
                Clique para saber mais!
              </a>
            </p>
          </div>
          <button
            className={`${styles.carouselButton} ${styles.right}`}
            onClick={handleLabNext}
          >
            &gt;
          </button>
        </div>
      </section>

  </div>
  );
};

export default PercursosPage;
