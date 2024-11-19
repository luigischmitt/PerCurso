import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const PercursosPage = () => {
    return (
       <div>
         <main className={styles.main}>
         <section className={styles.introSection}>
            <h2 className={styles.title}>CIÊNCIA DE DADOS & IA</h2>
            <p className={styles.description}>
            O Percurso <strong className={styles.accent}>Ciência de Dados & IA</strong> é voltado para estudantes que desejam explorar o universo do Aprendizado de Máquina, Inteligência Artificial e Análise de Dados. Esse percurso funciona como um guia, auxiliando você a escolher disciplinas, ligas acadêmicas e laboratórios que aprofundam suas competências na área.
            </p>
            <p className={styles.description2}>
            Ao seguir esse percurso, você terá a oportunidade de desenvolver habilidades essenciais para atuar em um dos campos mais promissores da tecnologia. Algumas das competências incluem:
            </p>
            <ul className={styles.description3}>
              <li>Dominar técnicas avançadas de extração e visualização de dados.</li>
              <li>Desenvolver modelos preditivos e sistemas inteligentes baseados em Machine Learning e Deep Learning.</li>
              <li>Utilizar ferramentas modernas para manipulação e análise de grandes volumes de dados.</li>
              <li>Implementar soluções práticas em áreas como saúde, finanças, indústria e muito mais.</li>
            </ul>
            <p className={styles.description3}>
            Com uma abordagem teórica e prática, o Percurso de Ciência de Dados & IA prepara você para enfrentar desafios do mercado de trabalho e contribuir para avanços significativos na tecnologia e sociedade.
            </p>
         </section>

         <section className={styles.buttonsSection}>
           <Link href="/percursos/ciencia-dados-ia/disciplinas-optativas" className={styles.button}>
             DISCIPLINAS OPTATIVAS
           </Link>
           <Link href="/percursos/ciencia-dados-ia/laboratorios-e-ligas" className={styles.button}>
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