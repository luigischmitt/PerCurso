"use client";

import styles from './page.module.css';
import * as d3 from 'd3';
import { useEffect, useState } from 'react';

export default function Page() {
  const [selectedDiscipline, setSelectedDiscipline] = useState(null);

  useEffect(() => {
    const disciplinas = [
      { id: "root", nome: "Engenharia de Software", periodo: 0, obrigatoria: true },
      { id: "ENG_SOFT", nome: "Eng. de Software", periodo: 4, obrigatoria: true },
      { id: "FUND_IHC", nome: "Fundamentos da IHC", periodo: 0, obrigatoria: false },
      { id: "DESIGN_INTERACAO", nome: "Design de Interação", periodo: 8, obrigatoria: false },
      { id: "IHC", nome: "IHC", periodo: 7, obrigatoria: true },
      { id: "REUSO_SOFTWARE", nome: "Reuso de Soft.", periodo: 5, obrigatoria: false },
      { id: "TEORIA_GRAFOS", nome: "Teoria dos Grafos Aplicada", periodo: 4, obrigatoria: false },
      { id: "METODOS_FORMAIS", nome: "Métodos Formais Para Desenvol. de Soft.", periodo: 7, obrigatoria: false },
      { id: "LOGICA", nome: "Lógica Aplicada", periodo: 2, obrigatoria: true },
      { id: "METODOS_PROJETO", nome: "Métodos de Projeto de Soft.", periodo: 6, obrigatoria: true },
      { id: "ESPECIFICACAO", nome: "Espec. de Requisitos de Soft.", periodo: 5, obrigatoria: true },
      { id: "TESTE_SOFTWARE", nome: "Teste de Soft.", periodo: 7, obrigatoria: true },
      { id: "REDES", nome: "Redes de Comp. I", periodo: 4, obrigatoria: true },
      { id: "BANCO_DADOS", nome: "Banco de Dados I", periodo: 5, obrigatoria: true },
      { id: "ESTRUTURA_DADOS", nome: "EDA I", periodo: 3, obrigatoria: true },
      { id: "IMPLEMENTAÇÃO", nome: "Sistemas para Disposivos Móveis", periodo: 6, obrigatoria: false },
    ];
    
    const links = [
      { source: "root", target: "ENG_SOFT" },
      { source: "root", target: "FUND_IHC" },
      { source: "root", target: "LOGICA" },
      { source: "root", target: "REDES" },
      { source: "root", target: "ESTRUTURA_DADOS" },
      { source: "ENG_SOFT", target: "IHC" },
      { source: "ENG_SOFT", target: "REUSO_SOFTWARE" },
      { source: "ENG_SOFT", target: "METODOS_PROJETO" },
      { source: "ENG_SOFT", target: "ESPECIFICACAO" },
      { source: "ENG_SOFT", target: "TESTE_SOFTWARE" },
      { source: "METODOS_PROJETO", target: "METODOS_FORMAIS" },
      { source: "LOGICA", target: "METODOS_FORMAIS" },
      { source: "IHC", target: "DESIGN_INTERACAO" },
      { source: "ESTRUTURA_DADOS", target: "BANCO_DADOS" },
      { source: "ESTRUTURA_DADOS", target: "TEORIA_GRAFOS" },
      { source: "REDES", target: "IMPLEMENTAÇÃO" },
      { source: "BANCO_DADOS", target: "IMPLEMENTAÇÃO" },
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
              <img src="/eda_icon.svg" alt="Logo engenharia de software" className={styles.icon} />
              <div>
                <h1 className={styles.title}>ENGENHARIA DE SOFTWARE</h1>
                <ul className={styles.objectives}>
                  <li>Dominar técnicas avançadas de desenvolvimento, metodologias ágeis e práticas DevOps.</li>
                  <li>Utilizar ferramentas de versionamento, automação e integração contínua para garantir qualidade e eficiência.</li>
                  <li>Aplicar princípios de engenharia de software para resolver problemas reais em áreas como educação, saúde e e-commerce.</li>
                  <li>Analisar e otimizar sistemas antigos para melhor desempenho e manutenção a longo prazo.</li>
                </ul>
              </div>
            </div>
            <aside className={styles.labs}>
              <div className={styles.lineVertical}></div>
              <div className={styles.labsText}>
                <h3>Laboratórios & Ligas</h3>
                <ul>
                  <li>TRIL</li>
                  <li>ARIA</li>
                  <li>LASER</li>
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
        <h2 className={styles.subtitle}>DISCIPLINAS</h2>
        <div className={styles.courseCards}>
            {[
              {
                id: "FUND_IHC",
                codigo: "DSCO00026",
                nome: "FUNDAMENTOS DA INTERAÇÃO HUMANO-COMPUTADOR",
                tipo: "Optativa",
                periodo: 0,
                descricao:
                  "Explore como os seres humanos interagem com os sistemas computacionais, priorizando a usabilidade e a experiência do usuário.",
              },
              {
                id: "LOGICA",
                codigo: "1107136",
                nome: "LÓGICA APLICADA À COMPUTAÇÃO",
                tipo: "Obrigatória",
                periodo: 2,
                descricao:
                  "Estudo dos fundamentos lógicos para resolver problemas computacionais, abrangendo proposições, conectivos e sistemas formais.",
              },
              {
                id: "ESTRUTURA_DADOS",
                codigo: "DINF00048",
                nome: "ESTRUTURA DE DADOS E ALGORITMOS I",
                tipo: "Obrigatória",
                periodo: 3,
                descricao:
                  "Conceitos fundamentais de estruturas de dados e algoritmos, como listas, filas, pilhas e árvores, com análises de complexidade.",
              },
              {
                id: "ENG_SOFT",
                codigo: "1107128",
                nome: "ENGENHARIA DE SOFTWARE",
                tipo: "Obrigatória",
                periodo: 4,
                descricao:
                  "Entenda como projetar, desenvolver e gerenciar sistemas de software com qualidade e eficiência, aplicando práticas e metodologias modernas.",
              },
              {
                id: "REDES",
                codigo: "DINF00047",
                nome: "REDES DE COMPUTADORES I",
                tipo: "Obrigatória",
                periodo: 4,
                descricao:
                  "Introdução às redes de computadores, cobrindo conceitos de comunicação, protocolos e infraestrutura de rede.",
              },
              {
                id: "TEORIA_GRAFOS",
                codigo: "1108300",
                nome: "TEORIA DOS GRAFOS APLICADA",
                tipo: "Optativa",
                periodo: 4,
                descricao:
                  "Explora grafos como modelos para resolver problemas em redes, roteamento e conectividade.",
              },
              {
                id: "ESPECIFICACAO",
                codigo: "1107184",
                nome: "ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE",
                tipo: "Obrigatória",
                periodo: 5,
                descricao:
                  "Estudo de técnicas para entender, documentar e gerenciar os requisitos dos usuários em projetos de software.",
              },
              {
                id: "BANCO_DADOS",
                codigo: "DINF00064",
                nome: "BANCO DE DADOS I",
                tipo: "Obrigatória",
                periodo: 5,
                descricao:
                  "Conceitos de banco de dados, modelagem de dados e linguagens de consulta como SQL.",
              },
              {
                id: "REUSO_SOFTWARE",
                codigo: "1108200",
                nome: "REUSO DE SOFTWARE",
                tipo: "Optativa",
                periodo: 5,
                descricao:
                  "Conceitos e técnicas para reaproveitar componentes de software, aumentando a produtividade e a qualidade dos sistemas.",
              },
              {
                id: "METODOS_PROJETO",
                codigo: "1107202",
                nome: "MÉTODOS DE PROJETO DE SOFTWARE",
                tipo: "Obrigatória",
                periodo: 6,
                descricao:
                  "Estudo de práticas e ferramentas para projetar sistemas de software escaláveis e eficientes.",
              },
              {
                id: "IMPLEMENTAÇÃO",
                codigo: "DINF00066",
                nome: "IMPLEMENTAÇÃO DE SISTEMAS PARA DISPOSITIVOS MÓVEIS",
                tipo: "Optativa",
                periodo: 6,
                descricao:
                  "Desenvolvimento de aplicativos móveis eficientes, cobrindo tecnologias e boas práticas.",
              },
              {
                id: "IHC",
                codigo: "1108100",
                nome: "INTERAÇÃO HUMANO-COMPUTADOR",
                tipo: "Obrigatória",
                periodo: 7,
                descricao:
                  "Estudo de princípios e práticas para projetar interfaces de usuário intuitivas e eficazes.",
              },
              {
                id: "TESTE_SOFTWARE",
                codigo: "DINF00054",
                nome: "TESTE DE SOFTWARE",
                tipo: "Obrigatória",
                periodo: 7,
                descricao:
                  "Estudo de práticas de verificação e validação para garantir a qualidade e funcionalidade dos sistemas de software.",
              },
              {
                id: "METODOS_FORMAIS",
                codigo: "1107203",
                nome: "MÉTODOS FORMAIS PARA DESENVOLVIMENTO DE SOFTWARE",
                tipo: "Optativa",
                periodo: 7,
                descricao:
                  "Técnicas baseadas em matemática para garantir precisão e segurança no desenvolvimento de software.",
              },

            ].map((disciplina) => (
              <div
                className={`${styles.card} ${selectedDiscipline === disciplina.id ? styles.selectedCard : ""}`}
                key={disciplina.id}
                id={`disciplina-${disciplina.id}`}
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
      </div>
      </div>
      <footer className={styles.footer}>
        <p>© 2024 PerCurso, Todos os direitos reservados</p>
        <a href="https://github.com/luigischmitt/PerCurso/blob/main/C%C3%B3digo_de_conduta.md" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Código de Conduta</a>
      </footer>
    </div>
  );
}
