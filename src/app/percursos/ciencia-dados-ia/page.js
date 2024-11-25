"use client";

import styles from './page.module.css';
import * as d3 from 'd3';
import { useEffect, useState } from 'react';

export default function Page() {
  const [selectedDiscipline, setSelectedDiscipline] = useState(null);

  useEffect(() => {
    const disciplinas = [
      { id: "root", nome: "Pesquisa Operacional", periodo: 0, obrigatoria: true },
      { id: "ALGEBRA", nome: "Introdução à Álgebra Linear", periodo: 2, obrigatoria: true },
      { id: "APA", nome: "Análise de Projetos e Algoritmos", periodo: 5, obrigatoria: true },
      { id: "PO", nome: "Pesquisa Operacional", periodo: 3, obrigatoria: false },
      { id: "ALG", nome: "Álgebra Linear Computacional", periodo: 3, obrigatoria: false },
      { id: "PROG", nome: "Programação Orientada a Objetos", periodo: 2, obrigatoria: true },
      { id: "EDA", nome: "Estrutura de Dados e Algoritmos I", periodo: 3, obrigatoria: true },
      { id: "ECON", nome: "Princípios de Economia", periodo: 0, obrigatoria: false },
      { id: "GRAFOS", nome: "Teoria dos Grafos Aplicada", periodo: 4, obrigatoria: false },
    ];

    const links = [
      { source: "root", target: "ALGEBRA" },
      { source: "root", target: "ECON" },
      { source: "root", target: "EDA" },
      { source: "root", target: "PROG" },
      { source: "ALGEBRA", target: "PO" },
      { source: "PROG", target: "ALG" },
      { source: "PROG", target: "PO" },
      { source: "EDA", target: "APA" },
      { source: "EDA", target: "GRAFOS" },
    ];

    const width = 1000;
    const height = 600;

    const svg = d3
      .select("#roadmap")
      .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .style("width", "100%")
      .style("height", "auto");

    window.addEventListener("resize", () => {
      d3.select("#roadmap").select("svg").attr("viewBox", `0 0 ${width} ${height}`);
    });

    const simulation = d3
      .forceSimulation(disciplinas)
      .force("link", d3.forceLink(links).id((d) => d.id).distance(115))
      .force("charge", d3.forceManyBody().strength(-150))
      .force("radial", d3.forceRadial((d) => d.periodo * 50, width / 2, height / 2))
      .force("center", d3.forceCenter(width / 2, height / 2));

    const link = svg
      .append("g")
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", "#999")
      .attr("stroke-width", 2);

    const node = svg
      .append("g")
      .selectAll("circle")
      .data(disciplinas)
      .enter()
      .append("circle")
      .attr("r", (d) => (d.id === "root" ? 40 : d.obrigatoria ? 25 : 15))
      .attr("fill", (d) => (d.id === "root" ? "#9C6ADE" : d.obrigatoria ? "#5e3aa1" : "#bda7e2"))
      .style("cursor", "pointer")
      .on("mouseover", function () {
        d3.select(this).transition().duration(200).attr("fill", "#6747C7").attr("r", (d) => (d.id === "root" ? 45 : d.obrigatoria ? 30 : 20));
      })
      .on("mouseout", function () {
        d3.select(this).transition().duration(200).attr("fill", (d) => (d.id === "root" ? "#9C6ADE" : d.obrigatoria ? "#5e3aa1" : "#bda7e2")).attr("r", (d) => (d.id === "root" ? 40 : d.obrigatoria ? 25 : 15));
      })
      .on("click", function (event, d) {
        const targetId = `disciplina-${d.id}`;
        const targetElement = document.getElementById(targetId);
        if (!targetElement) {
          console.warn(`Elemento com ID ${targetId} não encontrado.`);
          return;
        }
        targetElement.scrollIntoView({ behavior: "smooth" });
        setSelectedDiscipline(d.id);

        setTimeout(() => {
          setSelectedDiscipline(null);
        }, 1500);
      });

    node.call(
      d3.drag()
        .on("start", (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on("drag", (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on("end", (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        })
    );

    const label = svg
      .append("g")
      .selectAll("text")
      .data(disciplinas)
      .enter()
      .append("text")
      .text((d) => d.nome)
      .attr("dy", ".35em")
      .attr("font-size", "10px")
      .attr("fill", "#000")
      .attr("text-anchor", "middle")
      .style("pointer-events", "none");

    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      label.attr("x", (d) => d.x).attr("y", (d) => d.y - 10);
    });

    return () => {
      d3.select("#roadmap").select("svg").remove();
    };
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
                  id: "P3_EDA",
                  codigo: "1103118",
                  nome: "ESTRUTURA DE DADOS E ALGORITMOS I",
                  tipo: "OBRIGATÓRIA",
                  periodo: 3,
                  descricao:
                    "Conceitos fundamentais de estruturas de dados e algoritmos, como listas, filas, pilhas e árvores. Inclui análises de complexidade e aplicações práticas.",
                },
                {
                  id: "P3_PROB",
                  codigo: "1108100",
                  nome: "CÁLCULO DAS PROBABILIDADES E ESTATÍSTICA I",
                  tipo: "OBRIGATÓRIA",
                  periodo: 3,
                  descricao:
                    "Introdução à probabilidade, variáveis aleatórias, distribuições e estatística descritiva. Inclui conceitos básicos de inferência estatística e testes de hipóteses.",
                },
                {
                  id: "P4_IA",
                  codigo: "1107191",
                  nome: "INTRODUÇÃO À INTELIGÊNCIA ARTIFICIAL",
                  tipo: "OBRIGATÓRIA",
                  periodo: 4,
                  descricao:
                    "Apresentação dos fundamentos da IA, incluindo técnicas básicas de busca, representação de conhecimento, raciocínio lógico e aprendizado de máquina.",
                },
                {
                  id: "P5_BD1",
                  codigo: "1107209",
                  nome: "BANCO DE DADOS I",
                  tipo: "OBRIGATÓRIA",
                  periodo: 5,
                  descricao:
                    "Introdução ao conceito de bancos de dados, modelagem de dados, normalização e linguagens de consulta como SQL.",
                },
                {
                  id: "P6_ML",
                  codigo: "DINF00051",
                  nome: "PARADIGMAS DE APRENDIZAGEM DE MÁQUINA",
                  tipo: "OBRIGATÓRIA",
                  periodo: 6,
                  descricao:
                    "Explora abordagens e técnicas de aprendizado de máquina, como aprendizado supervisionado, não supervisionado e por reforço, além de aplicações práticas em dados reais.",
                },
                {
                  id: "VIS_DADOS",
                  codigo: "GDCOC0096",
                  nome: "VISUALIZAÇÃO DE DADOS",
                  tipo: "OPTATIVA",
                  periodo: 4,
                  descricao:
                    "Ferramentas e técnicas para transformar dados complexos em gráficos e visualizações interativas, facilitando sua interpretação e análise.",
                },
                {
                  id: "SERIES_TEMP",
                  codigo: "GDCOC0114",
                  nome: "SÉRIES TEMPORAIS",
                  tipo: "OPTATIVA",
                  periodo: 4,
                  descricao:
                    "Análise de dados organizados em ordem cronológica para identificar padrões, tendências e previsões futuras.",
                },
                {
                  id: "GRAFOS",
                  codigo: "GDSCO0032",
                  nome: "TEORIA DOS GRAFOS APLICADA",
                  tipo: "OPTATIVA",
                  periodo: 4,
                  descricao:
                    "Estudo de grafos para resolver problemas em áreas como redes sociais, rotas logísticas e análise de conectividade.",
                },
                {
                  id: "IA_SAUDE",
                  codigo: "DINF00068",
                  nome: "IA APLICADA À SAÚDE",
                  tipo: "OPTATIVA",
                  periodo: 5,
                  descricao:
                    "Uso de algoritmos de IA para diagnósticos, otimização de tratamentos, e avanços na medicina personalizada.",
                },
                {
                  id: "BIG_DATA",
                  codigo: "GDCOC0098",
                  nome: "BIG DATA",
                  tipo: "OPTATIVA",
                  periodo: 6,
                  descricao:
                    "Conjunto de tecnologias para processar e analisar grandes volumes de dados variados, gerando insights estratégicos.",
                },
                {
                  id: "DEEP_LEARN",
                  codigo: "GDCOC0094",
                  nome: "APRENDIZADO PROFUNDO",
                  tipo: "OPTATIVA",
                  periodo: 7,
                  descricao:
                    "Subcampo da IA que utiliza redes neurais profundas para resolver problemas complexos, como reconhecimento de imagens e processamento de linguagem natural.",
                },
              ].map((disciplina) => (
                <div
                className={`${styles.card} ${selectedDiscipline === disciplina.id ? styles.selectedCard : ""}`}
                key={disciplina.id}
                id={`disciplina-${disciplina.id}`}
                >
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
