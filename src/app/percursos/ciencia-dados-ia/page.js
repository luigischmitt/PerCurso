import styles from './page.module.css';

export default function Page() {
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

      <section className={styles.map}>
        <img
          src="/cdia_roadmap2.svg"
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
                <div className={styles.card} key={index}>
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
