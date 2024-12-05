import React from 'react';
import Link from 'next/link'; // Importa o Link do Next.js
import styles from './page.module.css';

const HomePage = () => {
  return (
    <div>
      <div className={styles.backgroundRectangle}>
        <div className={styles.lineMid}></div>
        <main className={`${styles.container} ${styles.main}`}>
          <h2 className={styles.title}>BEM-VINDOS!</h2>
          <div className={styles.contentContainer}>
            <div className={styles.textButtonContainer}>
              <p className={styles.description}>
                No <strong className={styles.accent}>PerCurso</strong>, você encontra conteúdos e recursos organizados de forma acessível, focados especialmente para estudantes de Ciência da Computação da UFPB. Este é um projeto Open Source, desenvolvido por alunos, que oferece um caminho claro e objetivo para guiar o aprendizado de maneira eficiente e colaborativa.
              </p>
              <div className={styles.buttonContainer}>
                <Link href="/recursos">
                  <button className={styles.button}>RECURSOS</button>
                </Link>
                <Link href="/percursos">
                  <button className={styles.button}>PERCURSOS</button>
                </Link>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <img src="/img2.svg" alt="Descrição da imagem" className={styles.mainImage} />
            </div>
          </div>
        </main>
        <div className={styles.lineBottom}></div>
      </div>

      <div className={styles.container2}>
        <section className={styles.section}>
          <div className={styles.columns}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Como funciona?</h3>
              <p className={styles.columnText}>
              Os alunos <strong className={styles.accent}>colaboram</strong> para abastecer o site com listas, provas antigas e dicas sobre as cadeiras. Todo esse conteúdo é organizado em nosso repositório do <a href="https://github.com/luigischmitt/PerCurso" target="_blank" className={styles.accent}>GitHub</a>, além de estar acessível diretamente aqui.
              </p>
            </div>

            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Regras</h3>
              <ol className={styles.columnTable}>
                <li>
                  Respeite o <a href="https://github.com/luigischmitt/PerCurso/blob/main/CODE_OF_CONDUCT.md" target="_blank" rel="noopener noreferrer" className={styles.accent}>código de conduta</a>.
                </li>
                <li>Não faça ataques ao corpo docente.</li>
                <li>Não compartilhe soluções de atividades avaliativas.</li>
              </ol>
            </div>

            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Como contribuir?</h3>
              <p className={styles.columnText}>
                Se você percebeu que alguma <strong className={styles.accent}>informação</strong> está desatualizada ou encontrou algo que pode ser melhorado no site, não hesite em contribuir conosco. Para tal, leia 
                o nosso 
                <span>&nbsp;</span>
                <a 
                  href="https://github.com/luigischmitt/PerCurso/blob/main/CONTRIBUTING.md" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.accent}
                >
                  Guia de Contribuição!
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
        <footer className={styles.footer}>
          <p>© 2024 PerCurso, Todos os direitos reservados</p>
          <a href="https://github.com/luigischmitt/PerCurso/blob/main/CODE_OF_CONDUCT.md" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Código de Conduta</a>
        </footer>
    </div>
  );
};

export default HomePage;