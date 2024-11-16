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
            Vivemos em um mundo digital em constante evolução, onde as aplicações que utilizamos diariamente dependem de sistemas de software cada vez mais complexos. A cada dia, bilhões de interações acontecem em plataformas online, exigindo soluções robustas e escaláveis. No Brasil, o mercado de tecnologia cresce rapidamente, com empresas investindo em inovações que oferecem experiências mais ágeis e eficientes, desde aplicativos até sistemas corporativos avançados.
            </p>
            <p className={styles.description2} >
            Essa demanda por software de qualidade cria desafios e oportunidades imensas. Setores como finanças, saúde e educação estão se beneficiando de sistemas customizados que aumentam a produtividade e garantem maior acesso a serviços essenciais. As empresas estão em busca de engenheiros de software que saibam como construir, testar e manter sistemas confiáveis, capazes de atender às necessidades de um mundo cada vez mais conectado.
            </p>
            <p className={styles.description3} >
            Com a crescente necessidade de soluções tecnológicas eficazes, o percurso de Engenharia de Software oferece uma formação sólida e prática, preparando você para criar softwares inovadores e de alto desempenho, com impacto direto em diversos setores da sociedade e do mercado.
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
            <a href="#politica" className={styles.footerLink}>Políticas de Privacidade</a>
         </footer>
       </div> 
        
    );
};

export default PercursosPage;