import styles from './page.module.css';

export default function Page() {
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
                    Modelar e resolver problemas de otimização para maximizar resultados ou minimizar custos.
                  </li>
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

      <section className={styles.map}>
        <img
          src="/cdia_roadmap.svg"
          alt="Mapa de Disciplinas"
          className={styles.mapImage}
        />
      </section>

      <div className={styles.backgroundRectangle2}>
      <div className={styles.lineMid}></div>
      <div className={styles.container}>
        <section className={styles.courses}>
          <h2 className={styles.subtitle}>DISCIPLINAS</h2>
          <div className={styles.courseCards}>
            {[
              {
                codigo: "5102007",
                nome: "PESQUISA OPERACIONAL",
                tipo: "Optativa",
                periodo: 3,
                descricao: "Estudo de técnicas de modelagem matemática para otimização de processos e tomada de decisão, aplicáveis em logística, planejamento e gestão.",
              },
              {
                codigo: "5102009",
                nome: "ALGEBRA LINEAR COMPUTACIONAL",
                tipo: "Optativa",
                periodo: 3,
                descricao: "Oferece métodos para resolver sistemas de equações lineares e otimizar problemas com restrições, essenciais para modelagem matemática e análise em Pesquisa Operacional.",
              },
              {
                codigo: "GDCOC0091",
                nome: "TEORIA DOS GRAFOS APLICADA",
                tipo: "Optativa",
                periodo: 4,
                descricao: "Explora redes e conexões, permitindo resolver problemas de roteamento, escalonamento e alocação de recursos em Pesquisa Operacional.",
              },
              {
                codigo: "PSAE00251",
                nome: "PRINCÍPIOS DE ECONOMIA",
                tipo: "Optativa",
                periodo: 0,
                descricao: "Introduz conceitos econômicos, como análise de custos e alocação eficiente de recursos, que orientam decisões estratégicas em projetos de Pesquisa Operacional.",
              },
                        
            ].map((disciplina, index) => (
              <div className={styles.card} key={index}>
                <h3>{disciplina.codigo}</h3>
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
