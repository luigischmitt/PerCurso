"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const PercursosPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cardsToShow, setCardsToShow] = useState(18);
  const [cursoSelecionado, setCursoSelecionado] = useState('ciencia_computacao');


  const disciplines = [
    { name: "Cálculo diferencial e integral I", slug: 'calculo1', curso: 'ciencia_computacao' },
    { name: "Cálculo diferencial e integral II", slug: 'calculo2', curso: 'ciencia_computacao' },
    { name: "Cálculo Numérico", slug: 'numerico', curso: 'ciencia_computacao' },
    { name: "Introdução à Inteligência Artificial", slug: 'ia', curso: 'ciencia_computacao' },
    { name: "Sistemas Baseados em Conhecimento", slug: 'sbc', curso: 'ciencia_computacao' },
    { name: "Paradigmas de Aprendizagem de Máquina", slug: 'aprendizagem_maquina', curso: 'ciencia_computacao' },
    { name: "Cálculo Vetorial e Geometria Analítica", slug: 'vetorial', curso: 'ciencia_computacao' },
    { name: "Introdução à Álgebra Linear", slug: 'linear', curso: 'ciencia_computacao' },
    { name: "Cálculo das Probabilidades e Estatística I", slug: 'probabilidade', curso: 'ciencia_computacao' },
    { name: "Redes de Computadores I", slug: 'redes', curso: 'ciencia_computacao' },
    { name: "Análise e Projeto de Algoritmos", slug: 'apa', curso: 'ciencia_computacao' },
    { name: "Segurança Computacional", slug: 'seguranca', curso: 'ciencia_computacao' },
    { name: "Sistemas de Informação nas Organizações", slug: 'sistemas_informacao', curso: 'ciencia_computacao' },
    { name: "Computadores e Sociedade", slug: 'sociedade', curso: 'ciencia_computacao' },
    { name: "Matemática Discreta", slug: 'discreta', curso: 'ciencia_computacao' },
    { name: "Lógica Aplicada à Computação", slug: 'logica', curso: 'ciencia_computacao' },
    { name: "Linguagens Formais e Computabilidade", slug: 'formais', curso: 'ciencia_computacao' },
    { name: "Processamento Digital de Imagens", slug: 'imagens', curso: 'ciencia_computacao' },
    { name: "Paradigmas de Linguagens de Programação", slug: 'paradigmas_linguagens', curso: 'ciencia_computacao' },
    { name: "Construção de Compiladores I", slug: 'compiladores', curso: 'ciencia_computacao' },
    { name: "Interação Humano-Computador", slug: 'ihc', curso: 'ciencia_computacao' },
    { name: "Introdução à ciência da computação", slug: 'ic', curso: 'ciencia_computacao' },
    { name: "Arquitetura de Computadores I", slug: 'arquitetura1', curso: 'ciencia_computacao' },
    { name: "Arquitetura de Computadores II", slug: 'arquitetura2', curso: 'ciencia_computacao' },
    { name: "Sistemas Operacionais I", slug: 'so', curso: 'ciencia_computacao' },
    { name: "Programação Concorrente e Distribuída", slug: 'concorrente', curso: 'ciencia_computacao' },
    { name: "Sistemas Distribuídos", slug: 'sistema_distribuidos', curso: 'ciencia_computacao' },
    { name: "Engenharia de Sistemas Distribuídos", slug: 'engenharia_sistemas', curso: 'ciencia_computacao' },
    { name: "Introdução à Programação", slug: 'ip', curso: 'ciencia_computacao' },
    { name: "Programação Orientada a Objetos", slug: 'poo', curso: 'ciencia_computacao' },
    { name: "Estruturas de Dados e Algoritmos I", slug: 'eda1', curso: 'ciencia_computacao' },
    { name: "Estruturas de Dados e Algoritmos II", slug: 'eda2', curso: 'ciencia_computacao' },
    { name: "Banco de Dados I", slug: 'bd', curso: 'ciencia_computacao' },
    { name: "Inovação de Base Científica-Tecnológica", slug: 'inovacao', curso: 'ciencia_computacao' },
    { name: "Gerenciamento de Projeto de Software", slug: 'gerencimento_psoft', curso: 'ciencia_computacao' },
    { name: "Metodologia do trabalho científico", slug: 'metodologia', curso: 'ciencia_computacao' },
    { name: "Programação Funcional", slug: 'funcional', curso: 'ciencia_computacao' },
    { name: "Engenharia de Software", slug: 'es', curso: 'ciencia_computacao' },
    { name: "Especificação de Requisitos de Software", slug: 'requisitos', curso: 'ciencia_computacao' },
    { name: "Métodos de Projeto de Software", slug: 'metodos_psoft', curso: 'ciencia_computacao' },
    { name: "Teste de Software", slug: 'teste_software', curso: 'ciencia_computacao' },
    { name: "Pesquisa Aplicada à Computação", slug: 'pesquisa', curso: 'ciencia_computacao' },
    { name: "Fundamentos da Interação Humano-Computador", slug: 'fund_ihc', curso: 'ciencia_computacao' },
    { name: "Teoria dos Grafos Aplicada", slug: 'teoria_grafos', curso: 'ciencia_computacao' },
    { name: "Reuso de Software", slug: 'reuso_software', curso: 'ciencia_computacao' },
    { name: "Implementação de Sistemas para Dispositivos Móveis", slug: 'implementacao', curso: 'ciencia_computacao' },
    { name: "Métodos Formais para Desenvolvimento de Software", slug: 'metodos_formais', curso: 'ciencia_computacao' },
    { name: "Visualização de Dados", slug: 'visualizacao', curso: 'ciencia_computacao' },
    { name: "Séries Temporais", slug: 'series', curso: 'ciencia_computacao' },
    { name: "IA Aplicada à Saúde", slug: 'ia_saude', curso: 'ciencia_computacao' },
    { name: "Big Data", slug: 'big_data', curso: 'ciencia_dados_ia' },
    { name: "Aprendizado Profundo", slug: 'deep_learn', curso: 'ciencia_computacao' },
    { name: "Princípios de Economia", slug: 'econ', curso: 'ciencia_computacao' },
    { name: "Pesquisa Operacional", slug: 'po', curso: 'ciencia_computacao' },
    { name: "Álgebra Linear Computacional", slug: 'linear_comp', curso: 'ciencia_computacao' },
    { name: "Redes sem Fio", slug: 'redes_sem_fio', curso: 'ciencia_computacao' },
    { name: "Sistemas de informação e decisão", slug: 'sistemas_informacao_decisao', curso: 'ciencia_computacao' },
    { name: "Administração de Sistemas", slug: 'administracao_sistemas', curso: 'ciencia_computacao' },
];


  const disciplinaIcones = {
    calculo1: "/c1_icon.svg",
    calculo2: "/c1_icon.svg",
    ip: "/ip_icon.svg",
    pesquisa: "/pa_icon.svg",
    metodologia: "/mtc_icon.svg",
    vetorial: "/cv_icon.svg",
    ic: "/icc_icon.svg",
    discreta: "/md_icon.svg",
    logica: "/md_icon.svg",
    linear: "/cv_icon.svg",
    arquitetura1: "/ac_icon.svg",
    arquitetura2:"/ac_icon.svg",
    poo: "/ip_icon.svg",
    numerico: "/c1_icon.svg",
    probabilidade: "/estatistica_icon.svg",
    ia: "/ia_icon.svg",
    sbc: "/ia_icon.svg",
    aprendizagem_maquina: "/ia_icon.svg",
    redes: "/redes_icon.svg",
    apa: "/apa_icon.svg",
    seguranca: "/sc_icon.svg",
    sistemas_informacao: "/ihc_icon.svg",
    sociedade: "/ihc_icon.svg",
    formais: "/icc_icon.svg",
    imagens: "/pdi_icon.svg",
    paradigmas_linguagens: "/apa_icon.svg",
    compiladores: "/icc_icon.svg",
    ihc: "/ihc_icon.svg",
    so: "/ac_icon.svg",
    concorrente: "/apa_icon.svg",
    sistema_distribuidos: "/redes_icon.svg",
    engenharia_sistemas: "/redes_icon.svg",
    eda1: "/eda_icon.svg",
    eda2: "/eda_icon.svg",
    bd: "/bd_icon.svg",
    inovacao: "/icc_icon.svg",
    gerencimento_psoft: "/eds_icon.svg",
    funcional: "/ip_icon.svg",
    es: "/eds_icon.svg",
    requisitos: "/eds_icon.svg",
    metodos_psoft: "/eds_icon.svg",
    teste_software: "/eds_icon.svg",
    fund_ihc: "/ihc_icon.svg",
    teoria_grafos: "/estatistica_icon.svg",
    reuso_software: "/eds_icon.svg",
    implementacao: "/redes_icon.svg",
    metodos_formais: "/eds_icon.svg",
    visualizacao: "/estatistica_icon.svg",
    series: "/estatistica_icon.svg",
    ia_saude: "/ia_icon.svg",
    big_data: "/estatistica_icon.svg",
    deep_learn: "/ia_icon.svg",
    econ: "/cv_icon.svg",
    po: "/ip_icon.svg",
    linear_comp: "/cv_icon.svg",
    redes_sem_fio: "/redes_icon.svg",
    sistemas_informacao_decisao: "/ihc_icon.svg",
    administracao_sistemas: "/ihc_icon.svg",
  };

  const updateCardsToShow = () => {
    const width = window.innerWidth;

    if (width >= 1400) {
      setCardsToShow(42); 
    } else if (width >= 1024) {
      setCardsToShow(42); 
    } else if (width >= 800) {
      setCardsToShow(42); 
    } else if (width >= 500) {
      setCardsToShow(42); 
    } else {
      setCardsToShow(42); 
    }
  };

  useEffect(() => {
    updateCardsToShow(); 

    window.addEventListener("resize", updateCardsToShow);

    return () => {
      window.removeEventListener("resize", updateCardsToShow);
    };
  }, []);

  const filteredDisciplines = disciplines.filter(discipline => 
    discipline.curso === cursoSelecionado &&
    discipline.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
      .includes(searchTerm.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase())
  );  

  const disciplinaIcone = "Icone"; 

  return (
    <div className={styles.pageContainer}>
       <main className={`${styles.mainContainer} ${styles.inverted}`}>
        <div className={styles.lineTop}></div>
        <section className={`${styles.container} ${styles.introSection}`}>
          <img src="/img.svg" alt="Imagem ilustrativa do PerCurso" className={styles.bannerImage} />
          <div className={styles.introText}>
            <h2 className={styles.title}>Materiais de Estudo</h2>
            <p className={styles.title_p}>
              Para começar, basta escolher uma matéria e explorar os <strong className={styles.accent}>conteúdos e recursos</strong> disponíveis. Aqui você encontrará uma variedade de conteúdos, para facilitar sua revisão e aprofundamento nos temas abordados em aula. Aproveite todos os recursos para <strong className={styles.accent}>aprender</strong> de maneira eficiente e agradável!
            </p>
          </div>
          <div className={styles.introText}>
            <h2 className={styles.title}>Contribua com o PerCurso!</h2>
            <p className={styles.title_p}>
              Tem materiais úteis, sugestões ou atividades para compartilhar? Você pode <strong className={styles.accent}>colaborar</strong> com o PerCurso enviando conteúdo que possa ajudar outros estudantes por meio do botão <strong className={styles.accent}>“editar”</strong> em cada disciplina.<strong className={styles.accent}>Seu apoio</strong> é muito bem-vindo para construir uma comunidade de aprendizado ainda mais rica!
            </p>
          </div>
        </section>

        <div className={styles.backgroundRectangle}>
        <div className={styles.lineMid}></div>
        <section className={`${styles.container} ${styles.resourcesSection}`}>
            <h2 className={styles.sectionTitle}>RECURSOS</h2>
            <div className={styles.courseFilter}>
              <button className={styles.courseButton} onClick={() => setCursoSelecionado('ciencia_computacao')}>Ciência da Computação</button>
              <button className={styles.courseButton} onClick={() => setCursoSelecionado('engenharia_computacao')}>Engenharia da Computação</button>
              <button className={styles.courseButton} onClick={() => setCursoSelecionado('ciencia_dados_ia')}>Ciência de Dados e IA</button>
            </div>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Pesquisar cadeira..."
                className={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className={styles.searchButton}>
                <img src="/lupa_icon.svg" alt="lupa" className={styles.searchIcon} />
              </button>
            </div>

            <div className={styles.resourceCards}>
              {filteredDisciplines.length > 0 ? (
                filteredDisciplines
                  .slice(0, cardsToShow) 
                  .map((discipline, index) => (
                    <Link
                      href={`/recursos/${discipline.slug}`}
                      key={index}
                      passHref
                    >
                      <div className={`${styles.card} ${styles.resourceCard}`}>
                        <img
                          src={disciplinaIcones[discipline.slug]}
                          alt={discipline.name}
                          className={styles.icon}
                        />
                        {discipline.name}
                      </div>
                    </Link>
                  ))
              ) : (
                <p className={styles.noResults}>
                  Nenhuma cadeira foi encontrada para o termo pesquisado.
                </p>
              )}
            </div>
          </section>
          <div className={styles.lineBottom}></div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 PerCurso, Todos os direitos reservados</p>
        <a href="https://github.com/luigischmitt/PerCurso/blob/main/C%C3%B3digo_de_conduta.md" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Código de Conduta</a>
      </footer>
    </div>
  );
};

export default PercursosPage;
