"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const PercursosPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const disciplines = [
    { name: "📘 Cálculo diferencial e integral I", slug: 'calculo1' },
    { name: "📗 Cálculo diferencial e integral II", slug: 'calculo2' },
    { name: "📙 Cálculo Numérico", slug: 'numerico' },
    { name: "🤖 Introdução à Inteligência Artificial", slug: 'ia' },
    { name: "📐 Sistemas Baseados em Conhecimento", slug: 'sbc' },
    { name: "📊 Paradigmas de Aprendizagem de Máquina", slug: 'aprendizagem_maquina' },
    { name: "📏 Cálculo Vetorial e Geometria Analítica", slug: 'vetorial' },
    { name: "📏 Introdução à Álgebra Linear", slug: 'linear' },
    { name: "📈 Cálculo das Probabilidades e Estatística I", slug: 'probabilidade' },
    { name: "🌐 Redes de Computadores I", slug: 'redes' },
    { name: "📉 Análise e Projeto de Algoritmos", slug: 'apa' },
    { name: "🔒 Segurança Computacional", slug: 'seguranca' },
    { name: "💼 Sistemas de Informação nas Organizações", slug: 'sistemas_informacao' },
    { name: "🌍 Computadores e Sociedade", slug: 'sociedade' },
    { name: "🔢 Matemática Discreta", slug: 'discreta' },
    { name: "🧩 Lógica Aplicada à Computação", slug: 'logica' },
    { name: "📜 Linguagens Formais e Computabilidade", slug: 'formais' },
    { name: "🖼️ Processamento Digital de Imagens", slug: 'imagens' },
    { name: "💻 Paradigmas de Linguagens de Programação", slug: 'paradigmas_linguagens' },
    { name: "🔠 Construção de Compiladores I", slug: 'compiladores' },
    { name: "🖥️ Interação Humano-Computador", slug: 'ihc' },
    { name: "💻 Introdução à ciência da computação", slug: 'ic' },
    { name: "🔧 Arquitetura de Computadores I", slug: 'arquitetura1' },
    { name: "🔧 Arquitetura de Computadores II", slug: 'arquitetura2' },
    { name: "⚙️ Sistemas Operacionais I", slug: 'so' },
    { name: "🌐 Programação Concorrente e Distribuída", slug: 'concorrente' },
    { name: "🖥️ Sistemas Distribuídos", slug: 'sistema_distribuidos' },
    { name: "💼 Engenharia de Sistemas Distribuídos", slug: 'engenharia_sistemas' },
    { name: "🖥️ Introdução à Programação", slug: 'ip' },
    { name: "🧑‍💻 Programação Orientada a Objetos", slug: 'poo' },
    { name: "🧮 Estruturas de Dados e Algoritmos I", slug: 'eda1' },
    { name: "📊 Estruturas de Dados e Algoritmos II", slug: 'eda2' },
    { name: "💾 Banco de Dados I", slug: 'bd' },
    { name: "🚀 Inovação de Base Científica-Tecnológica", slug: 'inovacao' },
    { name: "📅 Gerenciamento de Projeto de Software", slug: 'gerencimento_psoft' },
    { name: "📚 Metodologia do trabalho científico", slug: 'metodologia' },
    { name: "🔣 Programação Funcional", slug: 'funcional' },
    { name: "⚙️ Engenharia de Software", slug: 'es' },
    { name: "📝 Especificação de Requisitos de Software", slug: 'requisitos' },
    { name: "🛠️ Métodos de Projeto de Software", slug: 'metodos_psoft' },
    { name: "🧪 Teste de Software", slug: 'teste_software' },
    { name: "🔍 Pesquisa Aplicada à Computação", slug: 'pesquisa' }
  ];  

  const filteredDisciplines = disciplines.filter(discipline =>
    discipline.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <main className={styles.main}>
        <section className={styles.introSection}>
          <img src="./././girl_studying.svg" alt="Imagem ilustrativa do PerCurso" className={styles.bannerImage} />
          <div className={styles.introText}>
            <h2 className={styles.title}>📂 Materiais de Estudo</h2>
            <p className={styles.title_p}>
              Para começar, basta escolher uma matéria e explorar os <strong className={styles.accent}>conteúdos e recursos</strong> disponíveis. Aqui você encontrará uma variedade de conteúdos, para facilitar sua revisão e aprofundamento nos temas abordados em aula. Aproveite todos os recursos para <strong className={styles.accent}>aprender</strong> de maneira eficiente e agradável!
            </p>
          </div>
          <div className={styles.introText}>
            <h2 className={styles.title}>✨ Contribua com o PerCurso!</h2>
            <p className={styles.title_p}>
              Tem materiais úteis, sugestões ou atividades para compartilhar? Você pode <strong className={styles.accent}>colaborar</strong> com o PerCurso enviando conteúdo que possa ajudar outros estudantes por meio do botão <strong className={styles.accent}>“editar”</strong> em cada disciplina.<strong className={styles.accent}>Seu apoio</strong> é muito bem-vindo para construir uma comunidade de aprendizado ainda mais rica!
            </p>
          </div>
        </section>

        <section className={styles.resourcesSection}>
          <h2 className={styles.sectionTitle}>RECURSOS</h2>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Pesquisar cadeira..."
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className={styles.searchButton}>
              🔍
            </button>
          </div>

          <div className={styles.resourceCards}>
            {filteredDisciplines.map((discipline, index) => (
              <Link href={`/recursos/${discipline.slug}`} key={index} passHref>
                <div className={styles.card}>
                  {discipline.name}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 PerCurso, Todos os direitos reservados</p>
        <a href="#politica" className={styles.footerLink}>Políticas de Privacidade</a>
      </footer>
    </div>
  );
};

export default PercursosPage;
