"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const LigasELaboratoriosPage = () => {
  const [ligaIndex, setLigaIndex] = useState(0);
  const [labIndex, setLabIndex] = useState(0);

  const ligas = [
    {
      id: 'tail',
      title: 'TAIL',
      description:
        'A Technology and Artificial Intelligence League, ou simplesmente TAIL, é a primeira liga acadêmica de IA da Paraíba. A TAIL busca incrementar a bagagem intelectual e social dos seus membros por meio do estudo e aplicação de novas ideias no ramo da Inteligência Artificial.',
      imgSrc: '/tail_logo.svg',
      link: 'https://tail-tech.com/',
    },
  ];

  const labs = [
    {
      id: 'tril',
      title: 'TRIL',
      description:
        'A proposta do TRILab, ou apenas TRIL, está baseada em uma tríade conceitual que dá origem ao seu nome: SEIZE, SHAPE e SOLVE. Este modelo holístico "3S" tem como objetivo implementar um portfólio de soluções para setores estratégicos da nossa economia e sociedade.',
      imgSrc: '/tril_logo.svg',
      link: 'https://tril.ci.ufpb.br/en/',
    },
    {
      id: 'lavid',
      title: 'LAVID',
      description:
        'O Laboratório de Aplicações de Vídeo Digital (LAVID) é referência nacional em pesquisa e desenvolvimento de aplicações multimídia, com foco em inovação e tecnologias disruptivas.',
      imgSrc: '/lavid_logo.svg',
      link: 'http://lavid.ufpb.br/',
    },
  ];

  const handleLigaPrev = () => {
    setLigaIndex((prevIndex) => (prevIndex === 0 ? ligas.length - 1 : prevIndex - 1));
  };

  const handleLigaNext = () => {
    setLigaIndex((prevIndex) => (prevIndex === ligas.length - 1 ? 0 : prevIndex + 1));
  };

  const handleLabPrev = () => {
    setLabIndex((prevIndex) => (prevIndex === 0 ? labs.length - 1 : prevIndex - 1));
  };

  const handleLabNext = () => {
    setLabIndex((prevIndex) => (prevIndex === labs.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <main className={styles.main}>
        <h2 className={styles.title}>CIÊNCIA DE DADOS & IA</h2>

        <section className={`${styles.container} ${styles.sectionGap}`}>
          <div className={styles.column}>
            <h3 className={styles.sectionTitle}>LIGAS ACADÊMICAS</h3>
            <div className={styles.carousel}>
              {ligas.length > 1 && (
                <button className={`${styles.carouselButton} ${styles.left}`} onClick={handleLigaPrev}>
                  <span className={styles.arrow}>&lt;</span>
                </button>
              )}
              <div className={styles.card}>
                <a href={ligas[ligaIndex].link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={ligas[ligaIndex].imgSrc}
                    alt={`Logo ${ligas[ligaIndex].title}`}
                    className={styles.cardImage}
                  />
                </a>
                <p className={styles.cardText}>{ligas[ligaIndex].description}</p>
              </div>
              {ligas.length > 1 && (
                <button className={`${styles.carouselButton} ${styles.right}`} onClick={handleLigaNext}>
                  <span className={styles.arrow}>&gt;</span>
                </button>
              )}
            </div>
          </div>
        </section>

        <section className={`${styles.container} ${styles.sectionGap}`}>
          <div className={styles.column}>
            <h3 className={styles.sectionTitle}>LABORATÓRIOS</h3>
            <div className={styles.carousel}>
              {labs.length > 1 && (
                <button className={`${styles.carouselButton} ${styles.left}`} onClick={handleLabPrev}>
                  <span className={styles.arrow}>&lt;</span>
                </button>
              )}
              <div className={styles.card}>
                <a href={labs[labIndex].link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={labs[labIndex].imgSrc}
                    alt={`Logo ${labs[labIndex].title}`}
                    className={styles.cardImage}
                  />
                </a>
                <p className={styles.cardText}>{labs[labIndex].description}</p>
              </div>
              {labs.length > 1 && (
                <button className={`${styles.carouselButton} ${styles.right}`} onClick={handleLabNext}>
                  <span className={styles.arrow}>&gt;</span>
                </button>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LigasELaboratoriosPage;
