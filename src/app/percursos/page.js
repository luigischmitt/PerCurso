import React from 'react';
import Link from 'next/link'; // Importa o componente Link do Next.js
import styles from './page.module.css'; // Importa os estilos específicos para esta página

const PercursosPage = () => {
  return (
    <div>
      <main className={styles.main}>
        <section className={styles.introSection}>
          <h2 className={styles.title}>PERCURSOS</h2>
          <p className={styles.description}>
            O <strong className={styles.accent}>sistema de percursos</strong> permite que você se especialize em uma área de interesse, ajudando a orientar suas escolhas de disciplinas optativas, ligas acadêmicas e laboratórios que mais se alinham ao tópico que deseja se especializar.
          </p>
          <img src="././image2.svg" alt="Imagem ilustrativa do PerCurso" className={styles.image} />
          <p className={styles.subtitle}>
            Ao seguir um percurso, você se beneficia de uma orientação direcionada, aproveitando ao máximo o que o curso oferece e fazendo escolhas mais assertivas para atingir seus objetivos.
          </p>
        </section>

        <section className={styles.buttonsSection}>
          <Link href="/percursos/engenharia-de-software" className={styles.button}>
            ENGENHARIA DE SOFTWARE
          </Link>
          <Link href="/percursos/ciencia-dados-ia" className={styles.button}>
            CIÊNCIA DE DADOS & IA
          </Link>
          <Link href="/percursos/seguranca-da-informacao" className={styles.button}>
            SEGURANÇA DA INFORMAÇÃO
          </Link>
          <Link href="/percursos/pesquisa-operacional" className={styles.button}>
            PESQUISA OPERACIONAL
          </Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 PerCurso, Todos os direitos reservados</p>
        <a href="https://github.com/luigischmitt/PerCurso/blob/main/C%C3%B3digo_de_conduta.md" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Código de Conduta</a>
      </footer>
    </div>
  );
};

export default PercursosPage;
