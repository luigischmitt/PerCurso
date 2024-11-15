import React from 'react';
import Link from 'next/link'; // Importa o Link do Next.js
import styles from './page.module.css';

const HomePage = () => {
  return (
    <div>
      <div className={styles.backgroundRectangle}>
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
              <img src="././image1.svg" alt="Descrição da imagem" className={styles.mainImage} />
            </div>
          </div>
        </main>
      </div>

      <div className={styles.container}>
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
                <li> Respeite o código de conduta.</li>
                <li> Proibido falar mal dos professores.</li>
                <li> Proibido publicar soluções de atividades avaliativas.</li>
              </ol>
            </div>

            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Como contribuir?</h3>
              <p>
              Alunos do curso colaboram com várias informações como links úteis, resumos, provas e várias dicas. Esses arquivos ficam todos em nosso repositório do GitHub, e também estão disponibilizados aqui no site.
              Qualquer aluno pode pedir um Pull Request 
              ao repositório e isso irá abastecer o site.
              </p>
            </div>
          </div>
        </section>
      </div>
        <footer className={styles.footer}>
          <p>© 2024 PerCurso, Todos os direitos reservados</p>
          <a href="#politica">Políticas de Privacidade</a>
        </footer>
      
    </div>
  );
};

export default HomePage;
