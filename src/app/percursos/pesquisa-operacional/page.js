"use client";

import styles from './page.module.css';
import * as d3 from 'd3';
import { useEffect, useState } from 'react';

export default function Page() {
  const [selectedDiscipline, setSelectedDiscipline] = useState(null);

  useEffect(() => {
    const disciplinas = [
      { id: "root", nome: "Pesquisa Operacional",periodo: 0, obrigatoria: true }, 
      { id: "linear", nome: "Intro à Álgebra Linear",periodo: 2, obrigatoria: true }, 
      { id: "apa", nome: "APA",periodo: 5, obrigatoria: true }, 
      { id: "PO", nome: "Pesquisa Operacional", periodo: 3, obrigatoria: false },
      { id: "ALG", nome: "Álgebra Linear Computacional", periodo: 3, obrigatoria: false }, 
      { id: "poo", nome: "POO", periodo: 2, obrigatoria: true },
      { id: "eda1", nome: "EDA I", periodo: 3, obrigatoria: true }, 
      { id: "econ", nome: "Princípios de Economia", periodo: 0, obrigatoria: false },
      { id: "GRAFOS", nome: "Teoria dos Grafos Aplicada", periodo: 4, obrigatoria: false }, 
    ];

    const links = [
      { source: "root", target: "linear" }, 
      { source: "root", target: "econ" }, 
      { source: "root", target: "eda1" }, 
      { source: "root", target: "poo" }, 
      { source: "linear", target: "PO" },
      { source: "poo", target: "ALG" }, 
      { source: "poo", target: "PO" },
      { source: "eda1", target: "apa" },
      { source: "eda1", target: "GRAFOS" },
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

    const defs = svg.append("defs");

    defs.append("filter")
        .attr("id", "shadow")
        .attr("x", "-50%")
        .attr("y", "-50%")
        .attr("width", "200%")
        .attr("height", "200%")
      .append("feDropShadow")
        .attr("dx", 3)
        .attr("dy", 3) 
        .attr("stdDeviation", 7.9) 
        .attr("flood-color", "rgba(0, 0, 0, 0.08)"); 
  
  
    const node = svg
      .append("g")
      .selectAll("circle")
      .data(disciplinas)
      .enter()
      .append("circle")
      .attr("r", (d) => (d.id === "root" ? 70 : d.obrigatoria ? 25 : 15))
      .attr("fill", (d) => (d.id === "root" ? "#EDF6FF" : d.obrigatoria ? "#957FD8" : "#D4CBFF"))
      .style("cursor", "pointer")
      .attr("filter", "url(#shadow)") 
      .on("mouseover", function () {
        d3.select(this).transition().duration(300)
          .attr("fill", (d) => (d.id === "root" ? "#EDF6FF" : d.obrigatoria ? "#6F59B1" : "#B8AAF8"))
          .attr("r", (d) => (d.id === "root" ? 70 : d.obrigatoria ? 30 : 20));
      })
      .on("mouseout", function () {
        d3.select(this).transition().duration(200)
          .attr("fill", (d) => (d.id === "root" ? "#EDF6FF" : d.obrigatoria ? "#957FD8" : "#D4CBFF"))
          .attr("r", (d) => (d.id === "root" ? 70 : d.obrigatoria ? 25 : 15));
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
        .attr("dy", "1.2em")
        .attr("fill", (d) => (d.id === "root" ? "#6747C7" : "#372179"))
        .attr("x", "50%") 
        .attr("text-anchor", "middle")
        .style("pointer-events", "none")
        .style("text-transform", "uppercase")
        .style("font-size", (d) => (d.id === "root" ? "14px" : "8px"))
        .style("font-weight", (d) => (d.id === "root" ? "900" : "bold"))
        .style("text-shadow", (d) => (d.id === "root" ? "2px 2px 5px rgba(0, 0, 0, 0.3)" : "none"))
        .each(function(d) {
          console.log(d.nome);
      });

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
        <div className={styles.container2}>
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
                <h3>Laboratórios & Grupos</h3>
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

      <div id="roadmap" className={styles.map}>
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span>OBRIGATÓRIAS</span>
        </div>
        <div className={styles.legendItem}>
          <span>OPTATIVAS</span>
        </div>
      </div>
      </div>

      <div className={styles.backgroundRectangle2}>
      <div className={styles.lineMid}></div> 
        <div className={styles.container}>
          <section className={styles.courses}>
            <h2 className={styles.subtitle}>DISCIPLINAS</h2>
            <div className={styles.courseCards}>
              {[
                {
                  id: "econ",
                  codigo: "PSAE00251",
                  nome: "PRINCÍPIOS DE ECONOMIA",
                  tipo: "Optativa",
                  periodo: 0,
                  descricao: "Introduz conceitos econômicos, como análise de custos e alocação eficiente de recursos, que orientam decisões estratégicas em projetos de Pesquisa Operacional.",
                },
                {
                  id: "poo",
                  codigo: "GDCOC0101",
                  nome: "PROGRAMAÇÃO ORIENTADA A OBJETO",
                  tipo: "Obrigatória",
                  periodo: 2,
                  descricao: "Aprenda a modelar soluções com base em objetos, encapsulando dados e comportamentos para desenvolver sistemas mais organizados e reutilizáveis.",
                },
                {
                  id: "linear",
                  codigo: "5102007",
                  nome: "INTRODUÇÃO À ALGEBRA LINEAR",
                  tipo: "Obrigatória",
                  periodo: 2,
                  descricao: "Essa disciplina aborda os fundamentos da Álgebra Linear, como sistemas de equações lineares, matrizes, determinantes, vetores e espaços vetoriais. ",
                },
                {
                  id: "eda1",
                  codigo: "DINF00047",
                  nome: "ESTRUTURA DE DADOS E ALGORITMOS I",
                  tipo: "Obrigatória",
                  periodo: 3,
                  descricao: "Descubra como manipular e organizar dados de forma eficiente, explorando algoritmos essenciais para resolver problemas complexos.",
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
                  id: "GRAFOS",
                  codigo: "GDCOC0091",
                  nome: "TEORIA DOS GRAFOS APLICADA",
                  tipo: "Optativa",
                  periodo: 4,
                  descricao: "Explora redes e conexões, permitindo resolver problemas de roteamento, escalonamento e alocação de recursos em Pesquisa Operacional.",
                },
                {
                  id: "apa",
                  codigo: "GDCOC0076",
                  nome: "ANÁLISE E PROJETO DE ALGORITMOS",
                  tipo: "OBRIGATÓRIA",
                  periodo: 5,
                  descricao: "Estudo de técnicas para criar algoritmos eficientes, essenciais na pesquisa operacional para resolver problemas de otimização e tomada de decisão.",
                },
              ].map((disciplina) => (
                <div
                  key={disciplina.id}
                  id={`disciplina-${disciplina.id}`}
                  className={`${styles.card} ${selectedDiscipline === disciplina.id ? styles.selectedCard : ""}`}
                  onClick={(e) => {
                    e.preventDefault();  
                    setSelectedDiscipline(disciplina.id);  
                    setTimeout(() => {
                      window.location.href = `/recursos/${disciplina.id}`;  
                    }, 200);  
                  }}
                >
                  <p>{disciplina.codigo}</p>
                  <h3>{disciplina.nome}</h3>
                  <p>
                    <strong>{disciplina.tipo}</strong>
                  </p>
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
