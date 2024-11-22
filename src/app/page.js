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
              <img src="/image1.svg" alt="Descrição da imagem" className={styles.mainImage} />
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
              <ol>
                <li> Escolha um percurso: Explore áreas de interesse.</li>
                <li> Acesse etapas guiadas: Conteúdos organizados para cada fase do curso.</li>
                <li> Aproveite recursos colaborativos: Atualizado pela comunidade acadêmica.</li>
              </ol>
            </div>

            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Regras</h3>
              <ol>
                <li>
                  Respeite o <a href="https://github.com/luigischmitt/PerCurso/blob/main/C%C3%B3digo_de_conduta.md" target="_blank" rel="noopener noreferrer" className={styles.accent}>código de conduta</a>.
                </li>
                <li>Proibido falar mal dos professores.</li>
                <li>Proibido publicar soluções de atividades avaliativas.</li>
              </ol>
            </div>

            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Como contribuir?</h3>
              <p className={styles.columnText}>
                Alunos do curso <strong className={styles.accent}>colaboram</strong> com várias informações como links úteis, resumos, provas e várias dicas. Esses arquivos ficam todos em nosso repositório do 
                <a 
                  href="https://github.com/luigischmitt/PerCurso" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.accent}
                >
                  GitHub
                </a>, e também estão disponibilizados aqui no site.
              </p>
            </div>
          </div>
        </section>
      </div>
        <footer className={styles.footer}>
          <p>© 2024 PerCurso, Todos os direitos reservados</p>
          <a href="https://github.com/luigischmitt/PerCurso/blob/main/C%C3%B3digo_de_conduta.md" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Código de Conduta</a>
        </footer>
    </div>
  );
};

export default HomePage;
