import React from 'react';
import styles from './page.module.css';

const LigasELaboratoriosPage = () => {
  return (
    <div>
      <main className={styles.main}>
        <h2 className={styles.title}>PESQUISA OPERACIONAL</h2>
        <section className={styles.container}>
          <div className={styles.column}>
            <h3 className={styles.sectionTitle}>LIGAS ACADÊMICAS</h3>
            <div className={styles.card}>
              <a
                href="https://tail-tech.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/log_logo.svg" alt="Logo LOG" className={styles.cardImage} />
              </a>
              <p className={styles.cardText}>
                A <strong className={styles.accent}>Technology and Artificial Intelligence League</strong>, ou simplesmente TAIL, é a primeira liga acadêmica de IA da Paraíba. A TAIL busca incrementar a bagagem intelectual e social dos seus membros por meio do estudo e aplicação de novas ideias no ramo da Inteligência Artificial.
              </p>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.sectionTitle}>LABORATÓRIOS</h3>
            <div className={styles.card}>
              <a
                href="https://tril.ci.ufpb.br/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/log_logo.svg" alt="Logo LOG" className={styles.cardImage} />
              </a>
              <p className={styles.cardText}>
              O <strong className={styles.accent}>Logistics and Optimization Group</strong> ou apenas LOG, é um grupo 
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LigasELaboratoriosPage;
