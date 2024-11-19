import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const PercursosPage = () => {
    return (
       <div>
         <main className={styles.main}>
         <section className={styles.introSection}>
            <h2 className={styles.title}>ENGENHARIA DE SOFTWARE</h2>
            <p className={styles.description}>
            O Percurso <strong className={styles.accent}>Engenharia de Software</strong> é voltado para estudantes que desejam se especializar na área de desenvolvimento de software. Esse percurso funciona como um guia, ajudando você a se orientar durante o curso, por meio de disciplinas, ligas acadêmicas e laboratórios relacionados à área.
            </p>
            <p className={styles.description2}>
            Ao seguir esse Percurso, os participantes estarão aptos a desempenhar diversas habilidades avançadas como cientistas da computação, incluindo:
            </p>
            <ul className={styles.description3}>
              <li>Gerenciar sistemas de software de grande porte, compostos por diversos programas de alta complexidade.</li>
              <li>Desenvolver soluções para lidar com grandes volumes de dados, utilizando técnicas avançadas de Big Data, Mineração de Dados e Aprendizado de Máquina.</li>
              <li>Liderar equipes de desenvolvimento de software com eficiência e visão estratégica.</li>
              <li>Comunicar-se de forma eficaz com clientes e usuários, compreendendo profundamente suas necessidades, desafios e expectativas.</li>
            </ul>
            <p className={styles.description3}>
            O Percurso de Engenharia de Software é ideal para quem busca combinar teoria e prática de forma inovadora, desenvolvendo competências essenciais para o futuro da computação e o impacto positivo no mercado.
            </p>
         </section>

         <section className={styles.buttonsSection}>
           <Link href="/percusos/engenharia-de-software/disciplinas-optativas" className={styles.button}>
             DISCIPLINAS OPTATIVAS
           </Link>
           <Link href="/percusos/engenharia-de-software/laboratios-e-ligas" className={styles.button}>
           LABORATÓRIOS E LIGAS ACADÊMICAS
           </Link>
         </section>
         </main>

         <footer className={styles.footer} >
            <p>© 2024 PerCurso, Todos os direitos reservados</p>
         </footer>
       </div> 
        
    );
};

export default PercursosPage;