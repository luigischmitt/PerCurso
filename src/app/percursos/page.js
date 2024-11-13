import React from 'react';
import styles from './page.module.css'; // Importa os estilos específicos para esta página

const PercursosPage = () => {
  return (
    <div>
      <main className={styles.main}>
        <section className={styles.introSection}>
          <h2 className={styles.title}>PERCURSOS</h2>
          <p className={styles.description}>
            O sistema de percursos permite que você se especialize em uma área de interesse, ajudando a orientar suas escolhas de disciplinas optativas, ligas acadêmicas e laboratórios que mais se alinham ao tópico que deseja se especializar.
          </p>
          <img src="/path/to/your/image.png" alt="Estudante olhando para o caminho" className={styles.image} />
          <p className={styles.subtitle}>
            Ao seguir um percurso, você se beneficia de uma orientação direcionada, aproveitando ao máximo o que o curso oferece e fazendo escolhas mais assertivas para atingir seus objetivos.
          </p>
        </section>

        <section className={styles.buttonsSection}>
          <button className={styles.button}>ENGENHARIA DE SOFTWARE</button>
          <button className={styles.button}>CIÊNCIA DE DADOS & IA</button>
          <button className={styles.button}>SEGURANÇA DA INFORMAÇÃO</button>
          <button className={styles.button}>PESQUISA OPERACIONAL</button>
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
