"use client";

import styles from './page.module.css';
import * as d3 from 'd3';
import { useEffect, useState } from 'react';

export default function Page() {
  const [selectedDiscipline, setSelectedDiscipline] = useState(null);

  useEffect(() => {
    const disciplinas = [
      { id: "root", nome: "Ciência de Dados & IA", periodo: 0, obrigatoria: true },
      { id: "eda1", nome: "EDA I", periodo: 3, obrigatoria: true },
      { id: "probabilidade", nome: "Probabilidades e Estatística I", periodo: 3, obrigatoria: true },
      { id: "ia", nome: "Introdução à IA", periodo: 4, obrigatoria: true },
      { id: "bd", nome: "Banco de Dados I", periodo: 5, obrigatoria: true },
      { id: "aprendizagem_maquina", nome: "Paradigmas de Aprendizagem de Máquina", periodo: 6, obrigatoria: true },
      { id: "VIS_DADOS", nome: "Visualização de Dados", periodo: 5, obrigatoria: false },
      { id: "SERIES_TEMP", nome: "Séries Temporais", periodo: 4, obrigatoria: false },
      { id: "GRAFOS", nome: "Teoria dos Grafos Aplicada", periodo: 4, obrigatoria: false },
      { id: "IA_SAUDE", nome: "IA Aplicada à Saúde", periodo: 5, obrigatoria: false },
      { id: "BIG_DATA", nome: "Big Data", periodo: 6, obrigatoria: false },
      { id: "DEEP_LEARN", nome: "Aprendizado Profundo", periodo: 7, obrigatoria: false },
    ];

    const links = [
      { source: "root", target: "eda1" },
      { source: "eda1", target: "VIS_DADOS" },
      { source: "eda1", target: "GRAFOS" },
      { source: "root", target: "probabilidade" },
      { source: "probabilidade", target: "SERIES_TEMP" },
      { source: "root", target: "ia" },
      { source: "ia", target: "IA_SAUDE" },
      { source: "root", target: "bd" },
      { source: "bd", target: "BIG_DATA" },
      { source: "root", target: "aprendizagem_maquina" },
      { source: "aprendizagem_maquina", target: "DEEP_LEARN" },
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

      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span>OBRIGATÓRIAS</span>
        </div>
        <div className={styles.legendItem}>
          <span>OPTATIVAS</span>
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
                  id: "eda1",
                  codigo: "1103118",
                  nome: "ESTRUTURA DE DADOS E ALGORITMOS I",
                  tipo: "OBRIGATÓRIA",
                  periodo: 3,
                  descricao:
                    "Conceitos fundamentais de estruturas de dados e algoritmos, como listas, filas, pilhas e árvores. Inclui análises de complexidade e aplicações práticas.",
                },
                {
                  id: "probabilidade",
                  codigo: "1108100",
                  nome: "CÁLCULO DAS PROBABILIDADES E ESTATÍSTICA I",
                  tipo: "OBRIGATÓRIA",
                  periodo: 3,
                  descricao:
                    "Introdução à probabilidade, variáveis aleatórias, distribuições e estatística descritiva. Inclui conceitos básicos de inferência estatística e testes de hipóteses.",
                },
                {
                  id: "ia",
                  codigo: "1107191",
                  nome: "INTRODUÇÃO À INTELIGÊNCIA ARTIFICIAL",
                  tipo: "OBRIGATÓRIA",
                  periodo: 4,
                  descricao:
                    "Apresentação dos fundamentos da IA, incluindo técnicas básicas de busca, representação de conhecimento, raciocínio lógico e aprendizado de máquina.",
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
                  id: "bd",
                  codigo: "1107209",
                  nome: "BANCO DE DADOS I",
                  tipo: "OBRIGATÓRIA",
                  periodo: 5,
                  descricao:
                    "Introdução ao conceito de bancos de dados, modelagem de dados, normalização e linguagens de consulta como SQL.",
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
                  id: "aprendizagem_maquina",
                  codigo: "DINF00051",
                  nome: "PARADIGMAS DE APRENDIZAGEM DE MÁQUINA",
                  tipo: "OBRIGATÓRIA",
                  periodo: 6,
                  descricao:
                    "Explora abordagens e técnicas de aprendizado de máquina, como aprendizado supervisionado, não supervisionado e por reforço, além de aplicações práticas em dados reais.",
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
