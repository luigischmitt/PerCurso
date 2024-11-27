"use client";

import styles from './page.module.css';
import * as d3 from 'd3';
import { useEffect, useState } from 'react';

export default function Page() {
  const [selectedDiscipline, setSelectedDiscipline] = useState(null);

  useEffect(() => {
    const disciplinas = [
      { id: "root", nome: "Pesquisa Operacional",periodo: 0, obrigatoria: true }, 
      { id: "ALGEBRA", nome: "Introdução à Álgebra Linear",periodo: 2, obrigatoria: true }, 
      { id: "APA", nome: "Análise de Projetos e Algoritmos",periodo: 5, obrigatoria: true }, 
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
              <img src="/estatistica_icon.svg" alt="Logo pesquisa operacional" className={styles.icon} />
              <div>
                <h1 className={styles.title}>PESQUISA OPERACIONAL</h1>
                <ul className={styles.objectives}>
                  <li>
                    Modelar e resolver problemas de otimização para maximizar resultados ou minimizar custos.</li>
                  <li>
                    Analisar sistemas complexos e propor soluções com base em métodos matemáticos e computacionais.
                  </li>
                  <li>
                    Aplicar técnicas avançadas de simulação e modelagem em diferentes setores, como logística, manufatura e finanças.
                  </li>
                  <li>
                    Compreender e implementar algoritmos eficientes para problemas de decisão em larga escala.
                  </li>
                </ul>
              </div>
            </div>
            <aside className={styles.labs}>
              <div className={styles.lineVertical}></div>
              <div className={styles.labsText}>
                <h3>Laboratórios & Ligas</h3>
                <ul>
                  <li>LASER</li>
                  <li>LOG</li>
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
                  id: "PROG",
                  codigo: "GDCOC0101",
                  nome: "PROGRAMAÇÃO ORIENTADA A OBJETO",
                  tipo: "Obrigatória",
                  periodo: 2,
                  descricao: "Aprenda a modelar soluções com base em objetos, encapsulando dados e comportamentos para desenvolver sistemas mais organizados e reutilizáveis.",
                },
                {
                  id: "ALGEBRA",
                  codigo: "5102007",
                  nome: "INTRODUÇÃO À ALGEBRA LINEAR",
                  tipo: "Obrigatória",
                  periodo: 2,
                  descricao: "Essa disciplina aborda os fundamentos da Álgebra Linear, como sistemas de equações lineares, matrizes, determinantes, vetores e espaços vetoriais. ",
                },
                {
                  id: "PO",
                  codigo: "5102007",
                  nome: "PESQUISA OPERACIONAL",
                  tipo: "Optativa",
                  periodo: 3,
                  descricao: "Estudo de técnicas de modelagem matemática para otimização de processos e tomada de decisão, aplicáveis em logística, planejamento e gestão.",
                },
                {
                  id: "ALG",
                  codigo: "5102009",
                  nome: "ALGEBRA LINEAR COMPUTACIONAL",
                  tipo: "Optativa",
                  periodo: 3,
                  descricao: "Oferece métodos para resolver sistemas de equações lineares e otimizar problemas com restrições, essenciais para modelagem matemática e análise em Pesquisa Operacional.",
                },
                {
                  id: "EDA",
                  codigo: "DINF00047",
                  nome: "ESTRUTURA DE DADOS E ALGORITMOS I",
                  tipo: "Obrigatória",
                  periodo: 3,
                  descricao: "Descubra como manipular e organizar dados de forma eficiente, explorando algoritmos essenciais para resolver problemas complexos.",
                },
                {
                  id: "GRAFOS",
                  codigo: "GDCOC0091",
                  nome: "TEORIA DOS GRAFOS APLICADA",
                  tipo: "Optativa",
                  periodo: 4,
                  descricao: "Explora redes e conexões, permitindo resolver problemas de roteamento, escalonamento e alocação de recursos em Pesquisa Operacional.",
                },
                {
                  id: "APA",
                  codigo: "GDCOC0076",
                  nome: "ANÁLISE E PROJETO DE ALGORITMOS",
                  tipo: "OBRIGATÓRIA",
                  periodo: 5,
                  descricao: "Estudo de técnicas para criar algoritmos eficientes, essenciais na pesquisa operacional para resolver problemas de otimização e tomada de decisão.",
                },
                {
                  id: "ECON",
                  codigo: "PSAE00251",
                  nome: "PRINCÍPIOS DE ECONOMIA",
                  tipo: "Optativa",
                  periodo: 0,
                  descricao: "Introduz conceitos econômicos, como análise de custos e alocação eficiente de recursos, que orientam decisões estratégicas em projetos de Pesquisa Operacional.",
                },
                
              ].map((disciplina) => (
                <div
                className={`${styles.card} ${selectedDiscipline === disciplina.id ? styles.selectedCard : ""}`}
                key={disciplina.id}
                id={`disciplina-${disciplina.id}`}
                >
                  <p>{disciplina.codigo}</p>
                  <p>{disciplina.nome}</p>
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
