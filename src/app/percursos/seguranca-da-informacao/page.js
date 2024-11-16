import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const PercursosPage = () => {
    return (
       <div>
         <main className={styles.main}>
         <section className={styles.introSection}>
            <h2 className={styles.title}>SEGURANCA DA INFORMAÇÃO</h2>
            <p className={styles.description}>
            A transformação digital trouxe inúmeras vantagens, mas também aumentou os riscos associados à proteção de dados. Com bilhões de transações online e informações sensíveis sendo compartilhadas a todo momento, a segurança da informação tornou-se um dos maiores desafios do mundo moderno. Em um cenário onde ataques cibernéticos são cada vez mais sofisticados, as empresas precisam de sistemas de segurança cada vez mais eficazes.
            </p>
            <p className={styles.description2} >
            Essa crescente ameaça cria oportunidades únicas em áreas como proteção de dados, segurança em nuvem e criptografia. Organizações em todos os setores estão investindo em profissionais qualificados para proteger informações críticas e garantir a confiança de seus usuários. De grandes corporações a pequenas startups, a segurança da informação é fundamental para manter a integridade e a privacidade de dados em um ambiente digital.
            </p>
            <p className={styles.description3} >
            O percurso de Segurança da Informação oferece uma formação especializada para aqueles que desejam atuar na proteção de dados, desenvolvendo soluções inovadoras para garantir a segurança e a privacidade em um mundo cada vez mais interconectado.
            </p>
         </section>

         <section className={styles.buttonsSection}>
           <Link href="/percusos/seguranca-da-informacao/disciplinas-optativas" className={styles.button}>
             DISCIPLINAS OPTATIVAS
           </Link>
           <Link href="/percusos/seguranca-da-informacao/laboratios-e-ligas" className={styles.button}>
           LABORATÓRIOS E LIGAS ACADÊMICAS
           </Link>
         </section>
         </main>

         <footer className={styles.footer} >
            <p>© 2024 PerCurso, Todos os direitos reservados</p>
            <a href="#politica" className={styles.footerLink}>Políticas de Privacidade</a>
         </footer>
       </div> 
        
    );
};

export default PercursosPage;