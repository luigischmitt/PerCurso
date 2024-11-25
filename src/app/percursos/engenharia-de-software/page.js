"use client";

import styles from './page.module.css';
import * as d3 from 'd3';
import { useEffect, useState } from 'react';

export default function Page() {
  const [selectedDiscipline, setSelectedDiscipline] = useState(null);

  useEffect(() => {
    const disciplinas = [
      { id: "root", nome: "Engenharia de Software", periodo: 0, obrigatoria: true },
      { id: "ENG_SOFT", nome: "Engenharia de Software", periodo: 4, obrigatoria: true },
      { id: "FUND_IHC", nome: "Fundamentos da IHC", periodo: 0, obrigatoria: false },
      { id: "DESIGN_INTERACAO", nome: "Design de Interação", periodo: 8, obrigatoria: false },
      { id: "IHC", nome: "Interação Humano-Computador", periodo: 7, obrigatoria: true },
      { id: "REUSO_SOFTWARE", nome: "Reuso de Software", periodo: 5, obrigatoria: false },
      { id: "TEORIA_GRAFOS", nome: "Teoria dos Grafos Aplicada", periodo: 4, obrigatoria: false },
      { id: "METODOS_FORMAIS", nome: "Métodos Formais para Desenvolvimento de Software", periodo: 7, obrigatoria: false },
      { id: "LOGICA", nome: "Lógica Aplicada à Computação", periodo: 2, obrigatoria: true },
      { id: "METODOS_PROJETO", nome: "Métodos de Projeto de Software", periodo: 6, obrigatoria: true },
      { id: "ESPECIFICACAO", nome: "Especificação de Requisitos de Software", periodo: 5, obrigatoria: true },
      { id: "TESTE_SOFTWARE", nome: "Teste de Software", periodo: 7, obrigatoria: true },
      { id: "REDES", nome: "Redes de Computadores I", periodo: 4, obrigatoria: true },
      { id: "BANCO_DADOS", nome: "Banco de Dados I", periodo: 5, obrigatoria: true },
      { id: "ESTRUTURA_DADOS", nome: "Estrutura de Dados e Algoritmos I", periodo: 3, obrigatoria: true },
      { id: "IMPLEMENTAÇÃO", nome: "Implementação de Sistemas para Dispositivos Móveis", periodo: 6, obrigatoria: false },
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
              <img src="/eda_icon.svg" alt="Logo engenharia de software" className={styles.icon} />
              <div>
                <h1 className={styles.title}>ENGENHARIA DE SOFTWARE</h1>
                <ul className={styles.objectives}>
                  <li>Dominar técnicas avançadas de desenvolvimento de software, incluindo metodologias ágeis e práticas DevOps.</li>
                  <li>Utilizar ferramentas de versionamento, automação e integração contínua para garantir qualidade e eficiência do software.</li>
                  <li>Aplicar princípios de engenharia de software para resolver problemas reais em áreas como educação, saúde, e-commerce, etc.</li>
                  <li>Analisar e otimizar sistemas legados para melhor desempenho e manutenção a longo prazo.</li>
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

      <div id="roadmap" className={styles.map}></div>

      <div className={styles.backgroundRectangle2}>
      <div className={styles.lineMid}></div> 
        <div className={styles.container}>
          <section className={styles.courses}>
            <h2 className={styles.subtitle}>DISCIPLINAS</h2>
            <div className={styles.courseCards}>
            {[
              {
                id: "intro_prog",
                codigo: "1107136",
                nome: "INTRODUÇÃO À PROGRAMAÇÃO",
                tipo: "Obrigatória",
                periodo: 1,
                descricao: "Entenda os fundamentos da lógica de programação e aprenda a criar soluções práticas com código eficiente.",
              },
              {
                id: "poo",
                codigo: "GDCOC0101",
                nome: "PROGRAMAÇÃO ORIENTADA A OBJETOS",
                tipo: "Obrigatória",
                periodo: 2,
                descricao: "Aprenda a modelar soluções com base em objetos, encapsulando dados e comportamentos para desenvolver sistemas mais organizados e reutilizáveis.",
              },
              {
                id: "estrutura_dados",
                codigo: "DINF00047",
                nome: "ESTRUTURA DE DADOS E ALGORITMOS I",
                tipo: "Obrigatória",
                periodo: 3,
                descricao: "Descubra como manipular e organizar dados de forma eficiente, explorando algoritmos essenciais para resolver problemas complexos.",
              },
              {
                id: "eng_soft",
                codigo: "1107128",
                nome: "ENGENHARIA DE SOFTWARE",
                tipo: "Obrigatória",
                periodo: 4,
                descricao: "Entenda como projetar, desenvolver e gerenciar sistemas de software com qualidade e eficiência, aplicando práticas e metodologias modernas.",
              },
              {
                id: "especificacao",
                codigo: "1107184",
                nome: "ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE",
                tipo: "Obrigatória",
                periodo: 5,
                descricao: "Aprenda a entender e documentar as necessidades dos usuários, criando requisitos claros para o desenvolvimento de software eficaz.",
              },
              {
                id: "metodos_projeto",
                codigo: "1107202",
                nome: "MÉTODOS DE PROJETO DE SOFTWARE",
                tipo: "Obrigatória",
                periodo: 6,
                descricao: "Estude técnicas e metodologias para projetar sistemas de software escaláveis e eficientes, com foco em arquitetura e design.",
              },
              {
                id: "teste_software",
                codigo: "DINF00054",
                nome: "TESTE DE SOFTWARE",
                tipo: "Obrigatória",
                periodo: 7,
                descricao: "Compreenda as melhores práticas para garantir a qualidade e funcionalidade do software por meio de testes automatizados e manuais.",
              },
              {
                id: "fund_ihc",
                codigo: "DSCO00026",
                nome: "FUNDAMENTOS DA INTERAÇÃO HUMANO-COMPUTADOR",
                tipo: "Optativa",
                periodo: 0,
                descricao: "Explore como os seres humanos interagem com os sistemas computacionais, priorizando a usabilidade e a experiência do usuário.",
              },
              {
                id: "design_interacao",
                codigo: "DSCO00025",
                nome: "DESIGN DE INTERAÇÃO",
                tipo: "Optativa",
                periodo: 8,
                descricao: "Desenvolva habilidades para projetar interfaces intuitivas e agradáveis, criando uma experiência de usuário envolvente e eficiente.",
              },
              {
                id: "reuso_software",
                codigo: "DINF00064",
                nome: "REUSO DE SOFTWARE",
                tipo: "Optativa",
                periodo: 5,
                descricao: "Aprenda a reutilizar componentes e código para aumentar a produtividade, reduzir erros e melhorar a manutenção de sistemas.",
              },
              {
                id: "teoria_grafos",
                codigo: "GDCOC0091",
                nome: "TEORIA DOS GRAFOS APLICADA",
                tipo: "Optativa",
                periodo: 4,
                descricao: "Aprofunde-se no estudo de grafos, com foco em sua aplicação prática em algoritmos e resolução de problemas complexos.",
              },
              {
                id: "implementacao",
                codigo: "DINF00066",
                nome: "IMPLEMENTAÇÃO DE SISTEMAS PARA DISPOSITIVOS MÓVEIS",
                tipo: "Optativa",
                periodo: 6,
                descricao: "Estude as tecnologias e práticas necessárias para desenvolver aplicativos eficientes e funcionais para plataformas móveis.",
              },
              {
                id: "metodos_formais",
                codigo: "1107203",
                nome: "MÉTODOS FORMAIS PARA DESENVOLVIMENTO DE SOFTWARE",
                tipo: "Optativa",
                periodo: 7,
                descricao: "Explore abordagens matemáticas e lógicas para garantir a precisão, correção e segurança no desenvolvimento de sistemas de software complexos.",
              },
            ].map((disciplina) => (
              <div
                className={`${styles.card} ${selectedDiscipline === disciplina.id ? styles.selectedCard : ""}`}
                key={disciplina.id} // Adicionando o key único aqui
                id={`disciplina-${disciplina.id}`}
              >
                <p>{disciplina.nome}</p>
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
