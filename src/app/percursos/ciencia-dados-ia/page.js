"use client";

import styles from './page.module.css';
import * as d3 from 'd3';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // Dados das disciplinas
    const disciplinas = [
      { id: "root", nome: "Ciência de Dados & IA", periodo: 0 },
      { id: "1103177", nome: "Cálculo I", periodo: 1 },
      { id: "1103179", nome: "Álgebra Linear", periodo: 2 },
      { id: "1108100", nome: "Estatística", periodo: 3 },
      { id: "1107191", nome: "Inteligência Artificial", periodo: 4 },
      { id: "GDCOC0096", nome: "Visualização de Dados", periodo: 5 },
    ];    

    const links = [
      { source: "root", target: "1103177" },
      { source: "1103177", target: "1103179" },
      { source: "1103179", target: "1108100" },
      { source: "1108100", target: "1107191" },
      { source: "1107191", target: "GDCOC0096" },
    ];    

    // Dimensões do SVG
    const width = 1600;
    const height = 600;

    // Criando o SVG
    const svg = d3
      .select('#roadmap')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Simulação de força
    const simulation = d3
      .forceSimulation(disciplinas)
      .force(
        'link',
        d3.forceLink(links).id((d) => d.id).distance(150)
      )
      .force('charge', d3.forceManyBody().strength(-500))
      .force('x', d3.forceX().strength(1).x((d) => width / 6 * d.periodo + 100))
      .force('y', d3.forceY().strength(0.05).y(height / 2))
      .force('center', d3.forceCenter(width / 2, height / 2)); 

    // Links
    const link = svg
      .append('g')
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke', '#999')
      .attr('stroke-width', 2);

    // Nós
    const node = svg
      .append('g')
      .selectAll('circle')
      .data(disciplinas)
      .enter()
      .append('circle')
      .attr('r', 20)
      .attr('fill', (d) => (d.periodo === 0 ? '#5e3aa1' : '#bda7e2'))
      .call(
        d3
          .drag()
          .on('start', (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on('drag', (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on('end', (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      )
      .on('mouseover', function () {
        d3.select(this).attr('fill', '#6747c7').attr('r', 25);
        d3.select(this).classed('node-hover', true);
      })
      .on('mouseout', function () {
        d3.select(this).attr('fill', '#bda7e2').attr('r', 20);
        d3.select(this).classed('node-hover', false);
      })
      .on('click', (event, d) => {
        const coursesSection = document.querySelector(`.${styles.backgroundRectangle2}`);
        if (coursesSection) {
          coursesSection.scrollIntoView({ behavior: 'smooth' });
      
          const targetCard = document.querySelector(`#disciplina-${d.id}`);
            if (targetCard) {
              targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
              targetCard.classList.add('highlight');
              setTimeout(() => {
                targetCard.classList.remove('highlight');
              }, 2000);
            }
        }
      });          

    // Rótulos
    const label = svg
      .append('g')
      .selectAll('text')
      .data(disciplinas)
      .enter()
      .append('text')
      .text((d) => d.nome)
      .attr('x', 8)
      .attr('y', 3)
      .attr('font-size', '12px')
      .attr('fill', '#000');

    // Atualizando posições
    simulation.on('tick', () => {
      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y);

      node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);

      label.attr('x', (d) => d.x).attr('y', (d) => d.y);
    });
  }, []);

  return (
    <div>
      <div className={styles.backgroundRectangle}>
        <div className={styles.lineMid}></div>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.iconTitle}>
              <img src="/ia_icon.svg" alt="Logo Ciência de Dados & IA" className={styles.icon} />
              <div>
                <h1 className={styles.title}>CIÊNCIA DE DADOS & IA</h1>
                <ul className={styles.objectives}>
                  <li>Dominar técnicas avançadas de extração e visualização de dados.</li>
                  <li>
                    Desenvolver modelos preditivos e sistemas inteligentes baseados em Machine Learning e Deep Learning.
                  </li>
                  <li>
                    Utilizar ferramentas modernas para manipulação e análise de grandes volumes de dados.
                  </li>
                  <li>
                    Implementar soluções práticas em áreas como saúde, finanças, indústria e muito mais.
                  </li>
                </ul>
              </div>
            </div>
            <aside className={styles.labs}>
              <div className={styles.lineVertical}></div>
              <div className={styles.labsText}>
                <h3>Laboratórios & Ligas</h3>
                <ul>
                  <li>TAIL</li>
                  <li>ARIA</li>
                  <li>TRIL</li>
                </ul>
              </div>
            </aside>
          </header>
        </div>
        <div className={styles.lineBottom}></div>
      </div>

      <div id="roadmap" className={styles.map}></div>

      <div className={styles.backgroundRectangle2}>
        <div className={styles.lineMid}></div> 
        <div className={styles.container}>
          <section className={styles.courses}>
            <h2 className={styles.subtitle}>DISCIPLINAS</h2>
            <div className={styles.courseCards}>
              {[
                {
                  codigo: "1103118",
                  nome: "CÁLCULO VETORIAL E GEOMETRIA ANÁLITICA",
                  tipo: "OBRIGATÓRIA",
                  periodo: 1,
                  descricao: "Estudo de vetores, curvas e superfícies no espaço, com aplicações em geometriaEstudo de vetores, operações vetoriais e suas aplicações na geometria do espaço. Inclui conceitos como equações de planos, retas e superfícies, além de curvas no espaço e suas propriedades.",
                },
                {
                  codigo: "1103177",
                  nome: "CÁLCULO I",
                  tipo: "OBRIGATÓRIA",
                  periodo: 1,
                  descricao: "Introdução ao cálculo diferencial e integral de funções de uma variável real. Inclui limites, derivadas, integrais e aplicações em problemas de otimização e modelagem.",
                },
                {
                  codigo: "1103178",
                  nome: "CÁLCULO II",
                  tipo: "OBRIGATÓRIA",
                  periodo: 2,
                  descricao: "Continuação de Cálculo I, abordando integrais múltiplas, séries infinitas, equações diferenciais ordinárias e funções de várias variáveis.",
                },
                {
                  codigo: "1103179",
                  nome: "INTRODUÇÃO À ALGEBRA LINEAR",
                  tipo: "OBRIGATÓRIA",
                  periodo: 2,
                  descricao: "Explora matrizes, determinantes, sistemas lineares, vetores, espaços vetoriais e transformações lineares, essencial em aplicações em áreas como computação e ciência de dados.",
                },
                {
                codigo: "1108100",
                nome: "CÁLCULO DAS PROBABILIDADES E ESTATÍSTICA I",
                tipo: "OBRIGATÓRIA",
                periodo: 3,
                descricao: "Introdução à probabilidade, variáveis aleatórias, distribuições e estatística descritiva. Inclui conceitos básicos de inferência estatística e testes de hipóteses.",
                },
                {
                  codigo: "GDCOC0072",
                  nome: "CÁLCULO NUMERICO",
                  tipo: "OBRIGATÓRIA",
                  periodo: 3,
                  descricao: "Estudo de métodos computacionais para resolver problemas matemáticos, como interpolação, integração, derivação numérica e resolução de sistemas lineares.",
                },
                {
                  codigo: "1107191",
                  nome: "INTRODUÇÃO À INTELIGÊNCIA ARTIFICIAL",
                  tipo: "OBRIGATÓRIA",
                  periodo: 4,
                  descricao: "Apresentação dos fundamentos da IA, incluindo técnicas básicas de busca, representação de conhecimento, raciocínio lógico e aprendizado de máquina.",
                },
                {
                  codigo: "1107209",
                  nome: "SISTEMA BASEADO EM CONHECIMENTO",
                  tipo: "OBRIGATÓRIA",
                  periodo: 5,
                  descricao: "Foco em sistemas computacionais que utilizam bancos de conhecimento para resolver problemas específicos. Abrange conceitos de representação de conhecimento e raciocínio automatizado.",
                },
                {
                  codigo: "DINF00051",
                  nome: "PARADIGMAS DE APRENDIZAGEM DE MÁQUINA",
                  tipo: "OBRIGATÓRIA",
                  periodo: 6,
                  descricao: "Explora abordagens e técnicas de aprendizado de máquina, como aprendizado supervisionado, não supervisionado e por reforço, além de aplicações práticas em dados reais.",
                },
                {
                  codigo: "GDCOC0096",
                  nome: "VISUALIZAÇÃO DE DADOS",
                  tipo: "Optativa",
                  periodo: 4,
                  descricao: "Ferramentas e técnicas para transformar dados complexos em gráficos e visualizações interativas, facilitando sua interpretação e análise.",
                },
                {
                  codigo: "GDCOC0114",
                  nome: "SÉRIES TEMPORAIS",
                  tipo: "Optativa",
                  periodo: 4,
                  descricao: "Análise de dados organizados em ordem cronológica para identificar padrões, tendências e previsões futuras.",
                },
                {
                  codigo: "GDSCO0032",
                  nome: "TEORIA DOS GRAFOS APLICADA",
                  tipo: "Optativa",
                  periodo: 4,
                  descricao: "Estudo de grafos para resolver problemas em áreas como redes sociais, rotas logísticas e análise de conectividade",
                },
                {
                  codigo: "DINF00068",
                  nome: "INTELIGÊNCIA ARTIFICIAL APLICADA À SAÚDE",
                  tipo: "Optativa",
                  periodo: 5,
                  descricao: "Uso de algoritmos de IA para diagnósticos, otimização de tratamentos, e avanços na medicina personalizada.",
                },
                {
                  codigo: "GDCOC0098",
                  nome: "BIG DATA",
                  tipo: "Optativa",
                  periodo: 6,
                  descricao: "Conjunto de tecnologias para processar e analisar grandes volumes de dados variados, gerando insights estratégicos.",
                },
                {
                  codigo: "GDCOC0094",
                  nome: "APRENDIZADO PROFUNDO",
                  tipo: "Optativa",
                  periodo: 7,
                  descricao: "Subcampo da IA que utiliza redes neurais profundas para resolver problemas complexos, como reconhecimento de imagens e processamento de linguagem natural.",
                },
                          
              ].map((disciplina, index) => (
                <div className={styles.card} key={index} id={`disciplina-${disciplina.codigo}`}>
                  <p>{disciplina.codigo}</p>
                  <h3>{disciplina.nome}</h3>
                  <p><strong>{disciplina.tipo}</strong></p>
                  <p>Período: {disciplina.periodo}</p>
                  <p>{disciplina.descricao}</p>
                  </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>© 2024 PerCurso, Todos os direitos reservados</p>
        <a href="https://github.com/luigischmitt/PerCurso/blob/main/C%C3%B3digo_de_conduta.md" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Código de Conduta</a>
      </footer>
    </div>
  );
}
