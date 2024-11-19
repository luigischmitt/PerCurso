import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const PercursosPage = () => {
    return (
       <div>
         <main className={styles.main}>
         <section className={styles.introSection}>
            <h2 className={styles.title}>PESQUISA OPERACIONAL</h2>
            <p className={styles.description}>
            O Percurso <strong className={styles.accent}>Pesquisa Operacional</strong> é voltado para estudantes interessados em solucionar problemas complexos de maneira eficiente. Este percurso oferece um guia estruturado, auxiliando na escolha de disciplinas, ligas acadêmicas e laboratórios que aprofundam o conhecimento na área de otimização e análise de sistemas.
            </p>
            <p className={styles.description2}>
            Ao optar por esse percurso, você desenvolverá habilidades fundamentais para atuar em setores que exigem análises críticas e soluções práticas. Algumas competências incluem:
            </p>
            <ul className={styles.description3}>
              <li>Modelar e resolver problemas de otimização para maximizar resultados ou minimizar custos.</li>
              <li>Analisar sistemas complexos e propor soluções com base em métodos matemáticos e computacionais.</li>
              <li>Aplicar técnicas avançadas de simulação e modelagem em diferentes setores, como logística, manufatura e finanças.</li>
              <li>Compreender e implementar algoritmos eficientes para problemas de decisão em larga escala.</li>
            </ul>
            <p className={styles.description3}>
            A UFPB é referência no Brasil nessa área e o Percurso de Pesquisa Operacional capacita você a criar soluções inovadoras e a enfrentar desafios em áreas estratégicas do mercado e da academia.
            </p>
         </section>

         <section className={styles.buttonsSection}>
           <Link href="/percursos/pesquisa-operacional/disciplinas-optativas" className={styles.button}>
             DISCIPLINAS OPTATIVAS
           </Link>
           <Link href="/percursos/pesquisa-operacional/laboratorios-e-ligas" className={styles.button}>
             LABORATÓRIOS E LIGAS ACADÊMICAS
           </Link>
         </section>
         </main>

         <footer className={styles.footer}>
            <p>© 2024 PerCurso, Todos os direitos reservados</p>
         </footer>
       </div> 
    );
};

export default PercursosPage;