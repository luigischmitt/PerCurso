import styles from './page.module.css';

export default function Page() {
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
                  <li>
                    Dominar técnicas avançadas de desenvolvimento de software, incluindo metodologias ágeis e práticas DevOps.</li>
                  <li>
                    Utilizar ferramentas de versionamento, automação e integração contínua para garantir qualidade e eficiência do software.
                  </li>
                  <li>
                    Aplicar princípios de engenharia de software para resolver problemas reais em áreas como educação, saúde, e-commerce, etc.
                  </li>
                  <li>
                    Analisar e otimizar sistemas legados para melhor desempenho e manutenção a longo prazo.
                  </li>
                </ul>
              </div>
            </div>
            <aside className={styles.labs}>
              <h3>Laboratórios & Ligas</h3>
              <ul>
                <li>ARIA</li>
                <li>TRILL</li>
                <li>LASER</li>
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
                codigo: "DINF00047",
                nome: "ESTRUTURA DE DADOS E ALGORITMOS I",
                tipo: "Obrigatória",
                periodo: 3,
                descricao: "Descubra como manipular e organizar dados de forma eficiente, explorando algoritmos essenciais para resolver problemas complexos.",
              },
              {
                codigo: "1107128",
                nome: "ENGENHARIA DE SOFTWARE",
                tipo: "Obrigatória",
                periodo: 4,
                descricao: "Entenda como projetar, desenvolver e gerenciar sistemas de software com qualidade e eficiência, aplicando práticas e metodologias modernas.",
              },
              {
                codigo: "1107184",
                nome: "ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE",
                tipo: "Obrigatória",
                periodo: 5,
                descricao: "Aprenda a entender e documentar as necessidades dos usuários, criando requisitos claros para o desenvolvimento de software eficaz.",
              },
              {
                codigo: "1107202",
                nome: "MÉTODOS DE PROJETO DE SOFTWARE",
                tipo: "Obrigatória",
                periodo: 6,
                descricao: "Estude técnicas e metodologias para projetar sistemas de software escaláveis e eficientes, com foco em arquitetura e design.",
              },
              {
                codigo: "DINF00054",
                nome: "TESTE DE SOFTWARE",
                tipo: "Obrigatória",
                periodo: 7,
                descricao: "Compreenda as melhores práticas para garantir a qualidade e funcionalidade do software por meio de testes automatizados e manuais.",
              },
              {
                codigo: "DSCO00026",
                nome: "FUNDAMENTOS DA INTERAÇÃO HUMANO-COMPUTADOR",
                tipo: "Optativa",
                periodo: 0,
                descricao: "Explore como os seres humanos interagem com os sistemas computacionais, priorizando a usabilidade e a experiência do usuário.",
              },
              {
                codigo: "DSCO00025",
                nome: "DESIGN DE INTERAÇÃO",
                tipo: "Optativa",
                periodo: 8,
                descricao: "Desenvolva habilidades para projetar interfaces intuitivas e agradáveis, criando uma experiência de usuário envolvente e eficiente.",
              },
              {
                codigo: "DINF00064",
                nome: "REUSO DE SOFTWARE",
                tipo: "Optativa",
                periodo: 5,
                descricao: "Aprenda a reutilizar componentes e código para aumentar a produtividade, reduzir erros e melhorar a manutenção de sistemas.",
              },
              {
                codigo: "GDCOC0091",
                nome: "TEORIA DOS GRAFOS APLICADA",
                tipo: "Optativa",
                periodo: 4,
                descricao: "Aprofunde-se no estudo de grafos, com foco em sua aplicação prática em algoritmos e resolução de problemas complexos.",
              },
              {
                codigo: "DINF00066 ",
                nome: "IMPLEMENTAÇÃO DE SISTEMAS PARA DISPOSITIVOS MÓVEIS",
                tipo: "Optativa",
                periodo: 6,
                descricao: "Estude as tecnologias e práticas necessárias para desenvolver aplicativos eficientes e funcionais para plataformas móveis.",
              },
              {
                codigo: "1107203",
                nome: "MÉTODOS FORMAIS PARA DESENVOLVIMENTO DE SOFTWARE",
                tipo: "Optativa",
                periodo: 7,
                descricao: "Explore abordagens matemáticas e lógicas para garantir a precisão, correção e segurança no desenvolvimento de sistemas de software complexos.",
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
  );
}
