import React from 'react';
import Link from 'next/link'; 
import styles from './page.module.css';

const PercursosPage = () => {
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
      <Link href="/percursos/engenharia-de-software">
        <a className={styles.button}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>ENGENHARIA DE SOFTWARE</h3>
            <p className={styles.cardText}>
              É a disciplina que aplica princípios e práticas de engenharia para o desenvolvimento, manutenção e gerenciamento de softwares seguros, gerenciando qualidade de entrega em projetos.
            </p>
            <p className={styles.cardLink}>Clique para saber mais!</p>
          </div>
        </a>
      </Link>

      <div className={styles.card}>
        <h3 className={styles.cardTitle}>CIÊNCIA DE DADOS & IA</h3>
        <p className={styles.cardText}>
          Combina estatística, programação e otimização para explorar grandes volumes de dados e aplicar inteligência artificial em processos.
        </p>
        <p className={styles.cardLink}>Clique para saber mais!</p>
      </div>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>SEGURANÇA DA INFORMAÇÃO</h3>
        <p className={styles.cardText}>
          Combina análise de vulnerabilidades e aplicação de princípios de segurança para proteção de dados e sistemas.
        </p>
        <p className={styles.cardLink}>Clique para saber mais!</p>
      </div>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>PESQUISA OPERACIONAL</h3>
        <p className={styles.cardText}>
          Combina métodos analíticos e computacionais para tomada de decisões e melhoria de processos.
        </p>
        <p className={styles.cardLink}>Clique para saber mais!</p>
      </div>
    </div>

    <section className={styles.laboratorios}>
      <h2 className={styles.sectionTitle}>LABORATÓRIOS</h2>
      <div className={styles.highlightLab}>
        <img src="trilab-logo.png" alt="TRILAB logo" className={styles.highlightLogo} />
        <div className={styles.highlightText}>
          <h3 className={styles.highlightTitle}>TRILAB</h3>
          <p className={styles.highlightSubtitle}>ciência de dados & ia</p>
          <p className={styles.highlightDescription}>
            A proposta do TRILAB, ou apenas TRIL, está baseada em uma tríade conceitual que dá origem ao seu nome: SIEZE, SHAPE e SOLVE. Este modelo holístico “3S” tem como objetivo implementar um portfólio de soluções para setores estratégicos da nossa economia e sociedade.
          </p>
          <p className={styles.cardLink}>Clique para saber mais!</p>
        </div>
      </div>
      <div className={styles.otherLabs}>
        <div className={styles.labCard}>
          <h3 className={styles.labTitle}>TAIL</h3>
          <p className={styles.labSubtitle}>Liga Acadêmica</p>
          <p className={styles.labText}>
            Technology and Artificial Intelligence League, ou simplesmente TAIL, incrementa a bagagem intelectual de seus associados nos mais diversos assuntos da área de dados e no ramo da Inteligência Artificial.
          </p>
        </div>
        <div className={styles.labCard}>
          <h3 className={styles.labTitle}>MCCUFPB</h3>
          <p className={styles.labSubtitle}>Meninas na Ciência da Computação</p>
          <p className={styles.labText}>
            Technology and Artificial Intelligence League, ou simplesmente TAIL, incrementa a bagagem intelectual de seus associados nos mais diversos assuntos da área de dados e no ramo da Inteligência Artificial.
          </p>
        </div>
      </div>
    </section>
  </div>
  );
};

export default PercursosPage;
