"use client";

import styles from './page.module.css';
import * as d3 from 'd3';
import { useEffect, useState } from 'react';

export default function Page() {
  const [selectedDiscipline, setSelectedDiscipline] = useState(null);

  useEffect(() => {
    const disciplinas = [
      { id: "root", nome: "Segurança da Informação", periodo: 0, obrigatoria: true },
      { id: "REDES", nome: "Redes de Computadores", periodo: 4, obrigatoria: true },
      { id: "SEG_COMP", nome: "Segurança Computacional", periodo: 6, obrigatoria: true },
      { id: "SIS_DIST", nome: "Sistemas Distribuídos", periodo: 6, obrigatoria: true },
      { id: "INFO_DEC", nome: "Sistemas de Informação e Decisão", periodo: 0, obrigatoria: false },
      { id: "REDES_SEM_FIO", nome: "Redes Sem Fio", periodo: 5, obrigatoria: false },
      { id: "ADM_SIS", nome: "Administração de Sistemas", periodo: 6, obrigatoria: false },
    ];
    
    const links = [
      { source: "root", target: "REDES" },
      { source: "REDES", target: "SEG_COMP" },
      { source: "REDES", target: "REDES_SEM_FIO" },
      { source: "REDES", target: "ADM_SIS" },
      { source: "SEG_COMP", target: "SIS_DIST" },
      { source: "root", target: "INFO_DEC" },
    ];    
    
    const width = 1000;
    const height = 480;

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
      .force("radial", d3.forceRadial((d) => d.periodo * 50, width / 2, height / 2.5))
      .force("center", d3.forceCenter(width / 2.5, height / 2));

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
              <img src="/sc_icon.svg" alt="Logo engenharia de software" className={styles.icon} />
              <div>
                <h1 className={styles.title}>SEGURANÇA DA INFORMAÇÃO</h1>
                <ul className={styles.objectives}>
                  <li>
                    Projetar sistemas seguros e implementar políticas de proteção de dados sensíveis.
                  </li>
                  <li>
                    Analisar vulnerabilidades em softwares e redes, identificando pontos críticos para mitigação de riscos.
                  </li>
                  <li>
                   Aplicar técnicas avançadas de criptografia e autenticação para garantir a integridade e a confidencialidade de dados.
                  </li>
                  <li>
                    Monitorar e responder a incidentes de segurança, garantindo a continuidade operacional de sistemas críticos.
                  </li>
                </ul>
              </div>
            </div>
            <aside className={styles.labs}>
              <div className={styles.lineVertical}></div>
              <div className={styles.labsText}>
                <h3>Laboratórios & Ligas</h3>
                <ul>
                  <li>Em breve...</li>
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
                id: "INFO_DEC",
                codigo: "GDADM0117",
                nome: "SISTEMAS DE INFORMAÇÃO E DECISÃO",
                tipo: "Optativa",
                periodo: 0,
                descricao: "Aprenda a integrar tecnologia e processos para suporte à tomada de decisão nas organizações.",
              },
              {
                id: "REDES",
                codigo: "DSCO00021",
                nome: "REDES DE COMPUTADORES",
                tipo: "Obrigatória",
                periodo: 4,
                descricao: "Explore os fundamentos da comunicação entre sistemas, aprendendo como projetar, configurar e gerenciar redes locais e globais de forma eficiente.",
              },
              {
                id: "REDES_SEM_FIO",
                codigo: "GDSCO0032",
                nome: "REDES SEM FIO",
                tipo: "Optativa",
                periodo: 5,
                descricao: "Estude os princípios e tecnologias que possibilitam comunicação sem fio, como Wi-Fi e redes móveis.",
              },
              {
                id: "SEG_COMP",
                codigo: "DSCO00021",
                nome: "SEGURANÇA COMPUTACIONAL",
                tipo: "Obrigatória",
                periodo: 6,
                descricao: "Explore as técnicas e práticas para proteger sistemas e dados contra ataques e vulnerabilidades.",
              },
              {
                id: "SIS_DIST",
                codigo: "DSCO00022",
                nome: "SISTEMAS DISTRIBUÍDOS",
                tipo: "Obrigatória",
                periodo: 6,
                descricao: "Entenda como projetar e implementar sistemas que operam em vários computadores interconectados.",
              },
              {
                id: "ADM_SIS",
                codigo: "DSCO00032",
                nome: "ADMINISTRAÇÃO DE SISTEMAS",
                tipo: "Optativa",
                periodo: 6,
                descricao: "Descubra como gerenciar e configurar sistemas operacionais, servidores e redes de maneira eficiente.",
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
