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
            Em um mundo repleto de dados e decisões complexas, a pesquisa operacional se destaca como uma ferramenta essencial para otimizar processos e melhorar a eficiência. Empresas de todos os setores buscam soluções para reduzir custos, melhorar a logística e aumentar a produtividade, enfrentando desafios que exigem análises quantitativas avançadas e tomada de decisões estratégicas.
            </p>
            <p className={styles.description2} >
            Com a evolução dos sistemas de informação e da computação, a pesquisa operacional oferece oportunidades únicas em áreas como logística, produção, finanças e saúde. Profissionais qualificados são necessários para aplicar modelos matemáticos e algoritmos que ajudem as organizações a tomar decisões mais informadas e a alcançar melhores resultados.
            </p>
            <p className={styles.description3} >
            O percurso de Pesquisa Operacional oferece uma formação prática e teórica para quem deseja atuar na resolução de problemas complexos, utilizando ferramentas matemáticas e computacionais para otimizar processos e gerar resultados mais eficientes e sustentáveis.
            </p>
         </section>

         <section className={styles.buttonsSection}>
           <Link href="/percusos/pesquisa-operacional/disciplinas-optativas" className={styles.button}>
             DISCIPLINAS OPTATIVAS
           </Link>
           <Link href="/percusos/pesquisa-operacional/laboratios-e-ligas" className={styles.button}>
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