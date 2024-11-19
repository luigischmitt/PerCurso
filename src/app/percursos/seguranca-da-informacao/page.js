import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const PercursosPage = () => {
    return (
       <div>
         <main className={styles.main}>
         <section className={styles.introSection}>
            <h2 className={styles.title}>SEGURANÇA DA INFORMAÇÃO</h2>
            <p className={styles.description}>
            O Percurso <strong className={styles.accent}>Segurança da Informação</strong> é direcionado a estudantes que desejam proteger sistemas e dados contra ameaças digitais e ataques cibernéticos. Este percurso funciona como um guia estruturado, auxiliando na escolha de disciplinas, laboratórios e atividades práticas voltadas para a área de cibersegurança.
            </p>
            <p className={styles.description2}>
            Ao seguir este percurso, você será capacitado para enfrentar os crescentes desafios da segurança cibernética, desenvolvendo habilidades como:
            </p>
            <ul className={styles.description3}>
              <li>Projetar sistemas seguros e implementar políticas de proteção de dados sensíveis.</li>
              <li>Analisar vulnerabilidades em softwares e redes, identificando pontos críticos para mitigação de riscos.</li>
              <li>Aplicar técnicas avançadas de criptografia e autenticação para garantir a integridade e a confidencialidade de dados.</li>
              <li>Monitorar e responder a incidentes de segurança, garantindo a continuidade operacional de sistemas críticos.</li>
            </ul>
            <p className={styles.description3}>
            O Percurso de Segurança da Informação prepara você para atuar em um dos mercados mais promissores, com alta demanda por especialistas capazes de proteger as infraestruturas digitais de empresas e governos.
            </p>
         </section>

         <section className={styles.buttonsSection}>
           <Link href="/percursos/seguranca-da-informacao/disciplinas-optativas" className={styles.button}>
             DISCIPLINAS OPTATIVAS
           </Link>
           <Link href="/percursos/seguranca-da-informacao/laboratorios-e-ligas" className={styles.button}>
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