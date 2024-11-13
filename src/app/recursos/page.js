import React from 'react';
import styles from './page.module.css'; // Arquivo CSS para os estilos específicos da página
import Link from 'next/link';

const PercursosPage = () => {
  return (
    <div>
      <main className={styles.main}>
        <section className={styles.introSection}>
          <div className={styles.introText}>
            <h2 className={styles.title}>Materiais de Estudo</h2>
            <p>
              Para começar, basta escolher uma matéria e explorar os conteúdos e recursos disponíveis. Aqui você encontrará uma variedade de conteúdos, para facilitar sua revisão e aprofundamento nos temas abordados em aula. Aproveite todos os recursos para aprender de maneira eficiente e agradável!
            </p>
          </div>
          <div className={styles.introText}>
            <h2 className={styles.title}>Contribua com o PerCurso!</h2>
            <p>
              Tem materiais úteis, sugestões ou atividades para compartilhar? Você pode colaborar com o PerCurso enviando conteúdo que possa ajudar outros estudantes por meio do botão “editar” em cada disciplina. Seu apoio é muito bem-vindo para construir uma comunidade de aprendizado ainda mais rica!
            </p>
          </div>
        </section>

        <section className={styles.resourcesSection}>
          <h2 className={styles.sectionTitle}>RECURSOS</h2>
          <div className={styles.searchContainer}>
            <input type="text" placeholder="Pesquisar cadeira..." className={styles.searchInput} />
            <button className={styles.searchButton}>
              🔍
            </button>
          </div>

          <div className={styles.resourceCards}>
            <div className={styles.card}>📘 Cálculo diferencial e integral I</div>
            <div className={styles.card}>🖥️ Introdução à programação</div>
            <div className={styles.card}>📚 Metodologia do trabalho científico</div>
            <div className={styles.card}>🔢 Matemática discreta</div>
            <div className={styles.card}>📐 Cálculo vetorial e geometria analítica</div>
            <div className={styles.card}>💻 Introdução à ciência da computação</div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 PerCurso, Todos os direitos reservados</p>
        <a href="#politica" className={styles.footerLink}>Políticas de Privacidade</a>
      </footer>
    </div>
  );
};

export default PercursosPage;
