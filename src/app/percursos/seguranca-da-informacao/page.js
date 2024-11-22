import styles from './page.module.css';

export default function Page() {
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
                  <li>TAIL</li>
                  <li>TRIL</li>
                  <li>ARIA</li>
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

      <div className={styles.container}>
        <section className={styles.courses}>
          <h2 className={styles.subtitle}>DISCIPLINAS</h2>
          <div className={styles.courseCards}>
            {[
              {
                codigo: "1107136",
                nome: "INTRODUÇÃO À PROGRAMAÇÃO",
                tipo: "Obrigatória",
                periodo: 1,
                descricao: "Entenda os fundamentos da lógica de programação e aprenda a criar soluções práticas com código eficiente.",
              },
              {
                codigo: "GDCOC0101",
                nome: "PROGRAMAÇÃO ORIENTADA A OBJETOS",
                tipo: "Obrigatória",
                periodo: 2,
                descricao: "Aprenda a modelar soluções com base em objetos, encapsulando dados e comportamentos para desenvolver sistemas mais organizados e reutilizáveis.",
              },
              {
                codigo: "DSCO00021",
                nome: "REDES DE COMPUTADORES",
                tipo: "Obrigatória",
                periodo: 4,
                descricao: "Explore os fundamentos da comunicação entre sistemas, aprendendo como projetar, configurar e gerenciar redes locais e globais de forma eficiente.",
              },
              {
                codigo: "DSCO00021",
                nome: "SEGURANÇA COMPUTACIONAL",
                tipo: "Obrigatória",
                periodo: 6,
                descricao: "Explore as técnicas e práticas para proteger sistemas e dados contra ataques e vulnerabilidades.",
              },
              {
                codigo: "DSCO00022",
                nome: "SISTEMAS DISTRIBUÍDOS",
                tipo: "Obrigatória",
                periodo: 6,
                descricao: "Entenda como projetar e implementar sistemas que operam em vários computadores interconectados.",
              },
              {
                codigo: "GDADM0117",
                nome: "SISTEMAS DE INFORMAÇÃO E DECISÃO",
                tipo: "Optativa",
                periodo: 0,
                descricao: "Aprenda a integrar tecnologia e processos para suporte à tomada de decisão nas organizações.",
              },
              {
                codigo: "GDSCO0032",
                nome: "REDES SEM FIO",
                tipo: "Optativa",
                periodo: 5,
                descricao: "Estude os princípios e tecnologias que possibilitam comunicação sem fio, como Wi-Fi e redes móveis.",
              },
              {
                codigo: "DSCO00032",
                nome: "ADMINISTRAÇÃO DE SISTEMAS",
                tipo: "Optativa",
                periodo: 6,
                descricao: "Descubra como gerenciar e configurar sistemas operacionais, servidores e redes de maneira eficiente.",
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
      <footer className={styles.footer}>
        <p>© 2024 PerCurso, Todos os direitos reservados</p>
        <a href="https://github.com/luigischmitt/PerCurso/blob/main/C%C3%B3digo_de_conduta.md" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Código de Conduta</a>
      </footer>
    </div>
  );
}
