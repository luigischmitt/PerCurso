import React from 'react';
import styles from './page.module.css';

const PercursosPage = () => {
    return (
       <div>
         <main className={styles.main}>
            <h2 className={styles.title}>ENGENHARIA DE SOFTWARE</h2>
            <p className={styles.description}>
            Vivemos em uma era impulsionada por dados. A cada dia, cerca de 500 milhões de tweets são postados, capturando o humor e as opiniões de pessoas ao redor do mundo em tempo real. Com bilhões de dispositivos conectados, desde smartphones até sensores em cidades inteligentes, o volume global de dados dobra a cada dois anos. No Brasil, 67% das compras de produtos e serviços já ocorrem online, impulsionando o e-commerce e gerando um volume de transações que exige sistemas cada vez mais inteligentes e seguros.
            </p>
            <p className={styles.description2} >
            Essa explosão de dados cria desafios e oportunidades únicas. Setores como saúde, transporte e agricultura estão se transformando: hospitais utilizam algoritmos de machine learning para prever surtos de doenças e personalizar tratamentos, enquanto produtores agrícolas aplicam técnicas de IA para maximizar a produtividade e reduzir desperdícios. Na indústria de entretenimento, plataformas de streaming como Netflix e Spotify utilizam ciência de dados para personalizar recomendações, moldando a forma como consumimos música, filmes e séries.
            </p>
            <p className={styles.description3} >
            Com a demanda crescente por especialistas capazes de interpretar e transformar dados em valor real, o percurso de Ciência de Dados e Inteligência Artificial oferece uma formação prática e avançada para quem quer estar à frente dessas transformações. Seguindo esse percurso, você desenvolverá habilidades essenciais para analisar dados, criar modelos preditivos e construir soluções inovadoras com impacto direto na sociedade e no mercado
            </p>
         </main>

         <footer className={styles.footer} >
            <p>© 2024 PerCurso, Todos os direitos reservados</p>
            <a href="#politica" className={styles.footerLink}>Políticas de Privacidade</a>
         </footer>
       </div> 
        
    );
};

export default PercursosPage;