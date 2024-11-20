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
              <h3>Laboratórios & Ligas</h3>
              <ul>
                <li>TAIL</li>
                <li>TRIL</li>
                <li>ARIA</li>
              </ul>
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
            {[...Array(4)].map((_, index) => (
              <div className={styles.card} key={index}>
                <h3>DSC000026</h3>
                <p>Fundamentos de Interação Humano-Computador</p>
                <p><strong>Obrigatória</strong></p>
                <p>Período: 2</p>
                <p>
                  Aprenda os princípios de design centrado no usuário e como construir interfaces eficientes.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
