import React from 'react';
import styles from './page.module.css';

const LigasELaboratoriosPage = () => {
  return (
    <div>
      <main className={styles.main}>
        <h2 className={styles.title}>CIÊNCIA DE DADOS & IA</h2>
        <section className={styles.container}>
          <div className={styles.column}>
            <h3 className={styles.sectionTitle}>LIGAS ACADÊMICAS</h3>
            <div className={styles.card}>
              <a
                href="https://tail-tech.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/tail_logo.svg" alt="Logo TAIL" className={styles.cardImage} />
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
                <img src="/tril_logo.svg" alt="Logo TRIL" className={styles.cardImage} />
              </a>
              <p className={styles.cardText}>
                A proposta do <strong className={styles.accent}>TRILab</strong>, ou apenas TRIL, está baseada em uma tríade conceitual que dá origem ao seu nome: <strong>SEIZE, SHAPE e SOLVE</strong>. Este modelo holístico "3S" tem como objetivo implementar um portfólio de soluções para setores estratégicos da nossa economia e sociedade.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LigasELaboratoriosPage;
