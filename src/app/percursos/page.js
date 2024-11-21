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
        'A proposta do TRILAB, ou apenas TRIL, está baseada em uma tríade conceitual que dá origem ao seu nome: SEIZE, SHAPE e SOLVE. Este modelo holístico “3S” tem como objetivo implementar um portfólio de soluções para setores estratégicos da nossa economia e sociedade, atuando em horizontes de pesquisa que perpassam tópicos interdisciplinares.',
      imgSrc: "/tril_logo.svg",
      link: "https://tril.ci.ufpb.br/en/",
    },
    {
      id: "lavid",
      title: "LAVID",
      description:
        "O LAVID surgiu da proposta de desenvolver projetos de pesquisa e desenvolvimento em hardware e software voltados para plataformas de sistemas e aplicações multimídia. Atualmente, o LAVID possui 18 pesquisadores docentes credenciados, mais de 150 alunos pesquisadores e 9 patentes registradas nas suas áreas de atuação.",
      imgSrc: "/lavid_logo.svg",
      link: "http://lavid.ufpb.br/",
    },
    {
      id: "aria",
      title: "ARIA",
      description:
        "O ARIA (ARtificial Intelligence Applications laboratory) acredita que as experiências definem a aprendizagem. Assim, o ARIA constrói experiências para máquinas e para pessoas, formando especialistas na área de inteligência artificial e ciência de dados, desenvolvendo aplicações e pesquisando seus métodos.",
      imgSrc: "/aria_logo.svg",
      link: "https://aria.ci.ufpb.br/",
    },
    {
      id: "laser",
      title: "LASER",
      description:
        "Criado em 2013, o Laboratório de Engenharia de Sistemas e Robótica - LASER surgiu da proposta de desenvolver projetos de pesquisa em hardware e software voltados às áreas de Robótica, Sistemas Embarcados e Inteligência Artificial. Hoje ele se destaca por projetos de excelência nas áreas, Robótica Móvel, Sistemas Embarcados e Projeto de Hardware, Otimização e Logística.",
      imgSrc: "/laser_logo.svg",
      link: "https://sites.google.com/view/laser-ufpb/",
    },
    {
      id: "lmi",
      title: "LMI",
      description:
        "O Laboratório de Medidas e Instrumentação (LMI) tem o intuito de desenvolver pesquisas na área de eletrônica, microeletrônica aplicadas no uso de sensores e atuadores. Fazem parte do escopo das pesquisas desenvolver novos sensores bem como aplicações ligadas aos conceitos: smart-home, tecnologia assistiva, reabilitação virtual e monitoramento remoto.",
      imgSrc: "/lmi_logo.svg",
      link: "https://lmi.ci.ufpb.br/",
    },
    {
      id: "lasid",
      title: "LASID",
      description:
        "O Laboratório de Sistemas Digitais (LASID) tem a proposta de realizar pesquisas em desenvolvimento de hardware, sistemas embarcados e processamento de sinais. Também está ligado ao Programa de Pós Graduação em Informática (PPGI) e já participou de diversos projetos, ganhando conhecimento, experiência e infra-estrutura.",
      imgSrc: "/lasid_logo.svg",
      link: "http://www.lasid.di.ufpb.br/",
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
    <div className={styles.lineTop}></div> 
    <div className={styles.backgroundRectangle}>
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

    <div className={styles.lineTop}></div>
    <div className={styles.laboratorios}>
      <h2 className={styles.sectionTitle2}>LABORATÓRIOS</h2>
      <div className={styles.carouselContainer}>
        <button
          className={`${styles.carouselButton} ${styles.left}`}
          onClick={handleLabPrev}
        >
          &lt;
        </button>
        <div className={styles.labCard}>
          <a href={labs[labIndex].link} target="_blank" rel="noopener noreferrer">
            <img
              src={labs[labIndex].imgSrc}
              alt={`Logo ${labs[labIndex].title}`}
              className={styles.cardImage}
            />
          </a>
          <h3 className={styles.cardTitle}>{labs[labIndex].title}</h3>
          <p className={styles.cardTextlab}>{labs[labIndex].description}</p>
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
    </div>
    <div className={styles.lineTop}>
    </div>
    <footer className={styles.footer}>
        <p>© 2024 PerCurso, Todos os direitos reservados</p>
        <a href="https://github.com/luigischmitt/PerCurso/blob/main/C%C3%B3digo_de_conduta.md" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Código de Conduta</a>
    </footer>
  </div>
  );
};

export default PercursosPage;
