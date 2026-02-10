"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const PercursosPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cardsToShow, setCardsToShow] = useState(18);
  const [cursoSelecionado, setCursoSelecionado] = useState('ciencia_computacao');
  const [periodoSelecionado, setPeriodoSelecionado] = useState('todos');

  const disciplines = [
    // Ciência da Computação - Baseado na grade oficial do README
    // 1º Período
    { name: "Cálculo Diferencial e Integral I", slug: 'calculo1', curso: 'ciencia_computacao', periodo: 1, tipo: 'Obrigatória' },
    { name: "Cálculo Vetorial e Geometria Analítica", slug: 'vetorial', curso: 'ciencia_computacao', periodo: 1, tipo: 'Obrigatória' },
    { name: "Matemática Discreta", slug: 'discreta', curso: 'ciencia_computacao', periodo: 1, tipo: 'Obrigatória' },
    { name: "Introdução à Ciência da Computação", slug: 'ic', curso: 'ciencia_computacao', periodo: 1, tipo: 'Obrigatória' },
    { name: "Introdução à Programação", slug: 'ip', curso: 'ciencia_computacao', periodo: 1, tipo: 'Obrigatória' },
    { name: "Metodologia do Trabalho Científico", slug: 'metodologia', curso: 'ciencia_computacao', periodo: 1, tipo: 'Obrigatória' },
    { name: "Pesquisa Aplicada à Computação", slug: 'pesquisa', curso: 'ciencia_computacao', periodo: 1, tipo: 'Obrigatória' },

    // 2º Período
    { name: "Cálculo Diferencial e Integral II", slug: 'calculo2', curso: 'ciencia_computacao', periodo: 2, tipo: 'Obrigatória' },
    { name: "Introdução à Álgebra Linear", slug: 'linear', curso: 'ciencia_computacao', periodo: 2, tipo: 'Obrigatória' },
    { name: "Lógica Aplicada à Computação", slug: 'logica', curso: 'ciencia_computacao', periodo: 2, tipo: 'Obrigatória' },
    { name: "Arquitetura de Computadores I", slug: 'arquitetura1', curso: 'ciencia_computacao', periodo: 2, tipo: 'Obrigatória' },
    { name: "Programação Orientada a Objetos", slug: 'poo', curso: 'ciencia_computacao', periodo: 2, tipo: 'Obrigatória' },

    // 3º Período
    { name: "Cálculo Numérico", slug: 'numerico', curso: 'ciencia_computacao', periodo: 3, tipo: 'Obrigatória' },
    { name: "Cálculo das Probabilidades e Estatística I", slug: 'probabilidade', curso: 'ciencia_computacao', periodo: 3, tipo: 'Obrigatória' },
    { name: "Linguagens Formais e Computabilidade", slug: 'formais', curso: 'ciencia_computacao', periodo: 3, tipo: 'Obrigatória' },
    { name: "Arquitetura de Computadores II", slug: 'arquitetura2', curso: 'ciencia_computacao', periodo: 3, tipo: 'Obrigatória' },
    { name: "Estruturas de Dados e Algoritmos I", slug: 'eda1', curso: 'ciencia_computacao', periodo: 3, tipo: 'Obrigatória' },
    { name: "Programação Funcional", slug: 'funcional', curso: 'ciencia_computacao', periodo: 3, tipo: 'Obrigatória' },

    // 4º Período
    { name: "Introdução à Inteligência Artificial", slug: 'ia', curso: 'ciencia_computacao', periodo: 4, tipo: 'Obrigatória' },
    { name: "Redes de Computadores I", slug: 'redes', curso: 'ciencia_computacao', periodo: 4, tipo: 'Obrigatória' },
    { name: "Processamento Digital de Imagens", slug: 'imagens', curso: 'ciencia_computacao', periodo: 4, tipo: 'Obrigatória' },
    { name: "Sistemas Operacionais I", slug: 'so', curso: 'ciencia_computacao', periodo: 4, tipo: 'Obrigatória' },
    { name: "Estruturas de Dados e Algoritmos II", slug: 'eda2', curso: 'ciencia_computacao', periodo: 4, tipo: 'Obrigatória' },
    { name: "Engenharia de Software", slug: 'es', curso: 'ciencia_computacao', periodo: 4, tipo: 'Obrigatória' },

    // 5º Período
    { name: "Sistemas Baseados em Conhecimento", slug: 'sbc', curso: 'ciencia_computacao', periodo: 5, tipo: 'Obrigatória' },
    { name: "Análise e Projeto de Algoritmos", slug: 'apa', curso: 'ciencia_computacao', periodo: 5, tipo: 'Obrigatória' },
    { name: "Paradigmas de Linguagens de Programação", slug: 'paradigmas_linguagens', curso: 'ciencia_computacao', periodo: 5, tipo: 'Obrigatória' },
    { name: "Programação Concorrente e Distribuída", slug: 'concorrente', curso: 'ciencia_computacao', periodo: 5, tipo: 'Obrigatória' },
    { name: "Banco de Dados I", slug: 'bd', curso: 'ciencia_computacao', periodo: 5, tipo: 'Obrigatória' },
    { name: "Especificação de Requisitos de Software", slug: 'requisitos', curso: 'ciencia_computacao', periodo: 5, tipo: 'Obrigatória' },

    // 6º Período
    { name: "Paradigmas de Aprendizagem de Máquina", slug: 'aprendizagem_maquina', curso: 'ciencia_computacao', periodo: 6, tipo: 'Obrigatória' },
    { name: "Segurança Computacional", slug: 'seguranca', curso: 'ciencia_computacao', periodo: 6, tipo: 'Obrigatória' },
    { name: "Construção de Compiladores I", slug: 'compiladores', curso: 'ciencia_computacao', periodo: 6, tipo: 'Obrigatória' },
    { name: "Sistemas Distribuídos", slug: 'sistema_distribuidos', curso: 'ciencia_computacao', periodo: 6, tipo: 'Obrigatória' },
    { name: "Inovação de Base Científica-Tecnológica", slug: 'inovacao', curso: 'ciencia_computacao', periodo: 6, tipo: 'Obrigatória' },
    { name: "Métodos de Projeto de Software", slug: 'metodos_psoft', curso: 'ciencia_computacao', periodo: 6, tipo: 'Obrigatória' },

    // 7º Período
    { name: "Sistemas de Informação nas Organizações", slug: 'sistemas_informacao', curso: 'ciencia_computacao', periodo: 7, tipo: 'Obrigatória' },
    { name: "Interação Humano-Computador", slug: 'ihc', curso: 'ciencia_computacao', periodo: 7, tipo: 'Obrigatória' },
    { name: "Engenharia de Sistemas Distribuídos", slug: 'engenharia_sistemas', curso: 'ciencia_computacao', periodo: 7, tipo: 'Obrigatória' },
    { name: "Gerenciamento de Projeto de Software", slug: 'gerencimento_psoft', curso: 'ciencia_computacao', periodo: 7, tipo: 'Obrigatória' },
    { name: "Teste de Software", slug: 'teste_software', curso: 'ciencia_computacao', periodo: 7, tipo: 'Obrigatória' },

    // 8º Período
    { name: "Computadores e Sociedade", slug: 'sociedade', curso: 'ciencia_computacao', periodo: 8, tipo: 'Obrigatória' },

    // Optativas - Ciência da Computação
    { name: "Fundamentos da Interação Humano-Computador", slug: 'fund_ihc', curso: 'ciencia_computacao', periodo: null, tipo: 'Optativa' },
    { name: "Teoria dos Grafos Aplicada", slug: 'teoria_grafos', curso: 'ciencia_computacao', periodo: null, tipo: 'Optativa' },
    { name: "Reuso de Software", slug: 'reuso_software', curso: 'ciencia_computacao', periodo: null, tipo: 'Optativa' },
    { name: "Implementação de Sistemas para Dispositivos Móveis", slug: 'implementacao', curso: 'ciencia_computacao', periodo: null, tipo: 'Optativa' },
    { name: "Métodos Formais para Desenvolvimento de Software", slug: 'metodos_formais', curso: 'ciencia_computacao', periodo: null, tipo: 'Optativa' },
    { name: "Visualização de Dados", slug: 'visualizacao', curso: 'ciencia_computacao', periodo: null, tipo: 'Optativa' },
    { name: "Séries Temporais", slug: 'series', curso: 'ciencia_computacao', periodo: null, tipo: 'Optativa' },
    { name: "IA Aplicada à Saúde", slug: 'ia_saude', curso: 'ciencia_computacao', periodo: null, tipo: 'Optativa' },
    { name: "Big Data", slug: 'big_data', curso: 'ciencia_computacao', periodo: null, tipo: 'Optativa' },
    { name: "Aprendizado Profundo", slug: 'deep_learn', curso: 'ciencia_computacao', periodo: null, tipo: 'Optativa' },
    { name: "Princípios de Economia", slug: 'econ', curso: 'ciencia_computacao', periodo: null, tipo: 'Optativa' },
    { name: "Pesquisa Operacional", slug: 'po', curso: 'ciencia_computacao', periodo: null, tipo: 'Optativa' },
    { name: "Álgebra Linear Computacional", slug: 'linear_comp', curso: 'ciencia_computacao', periodo: null, tipo: 'Optativa' },
    { name: "Redes sem Fio", slug: 'redes_sem_fio', curso: 'ciencia_computacao', periodo: null, tipo: 'Optativa' },
    { name: "Sistemas de Informação e Decisão", slug: 'sistemas_informacao_decisao', curso: 'ciencia_computacao', periodo: null, tipo: 'Optativa' },
    { name: "Administração de Sistemas", slug: 'administracao_sistemas', curso: 'ciencia_computacao', periodo: null, tipo: 'Optativa' },

    // Engenharia da Computação - Estimativa baseada na ordem atual
    { name: "Cálculo Vetorial e Geometria Analítica", slug: 'vetorial', curso: 'engenharia_computacao', periodo: 1, tipo: 'Obrigatória' },
    { name: "Cálculo Diferencial e Integral I", slug: 'calculo1', curso: 'engenharia_computacao', periodo: 1, tipo: 'Obrigatória' },
    { name: "Metodologia do Trabalho Científico", slug: 'metodologia', curso: 'engenharia_computacao', periodo: 1, tipo: 'Obrigatória' },
    { name: "Introdução à Engenharia de Computação", slug: 'intro_eng', curso: 'engenharia_computacao', periodo: 1, tipo: 'Obrigatória' },
    { name: "Laboratório de Introdução à Programação", slug: 'lab_ip', curso: 'engenharia_computacao', periodo: 1, tipo: 'Obrigatória' },
    { name: "Introdução à Programação para Engenharia de Computação", slug: 'ip_ec', curso: 'engenharia_computacao', periodo: 1, tipo: 'Obrigatória' },
    { name: "Materiais para Micro e Nano Tecnologia", slug: 'materiais', curso: 'engenharia_computacao', periodo: 2, tipo: 'Obrigatória' },
    { name: "Física Aplicada à Computação I", slug: 'fisica1', curso: 'engenharia_computacao', periodo: 2, tipo: 'Obrigatória' },
    { name: "Cálculo Diferencial e Integral II", slug: 'calculo2', curso: 'engenharia_computacao', periodo: 2, tipo: 'Obrigatória' },
    { name: "Laboratório de Linguagem de Programação I", slug: 'lab_lp1', curso: 'engenharia_computacao', periodo: 2, tipo: 'Obrigatória' },
    { name: "Linguagem de Programação I", slug: 'lp1', curso: 'engenharia_computacao', periodo: 2, tipo: 'Obrigatória' },
    { name: "Circuitos Lógicos I", slug: 'circuitos_logicos1', curso: 'engenharia_computacao', periodo: 3, tipo: 'Obrigatória' },
    { name: "Eletricidade e Circuitos para Computação I", slug: 'eletricidade1', curso: 'engenharia_computacao', periodo: 3, tipo: 'Obrigatória' },
    { name: "Física Experimental para Computação", slug: 'fisica_exp', curso: 'engenharia_computacao', periodo: 3, tipo: 'Obrigatória' },
    { name: "Introdução à Álgebra Linear", slug: 'linear', curso: 'engenharia_computacao', periodo: 3, tipo: 'Obrigatória' },
    { name: "Cálculo Diferencial e Integral III", slug: 'calculo3', curso: 'engenharia_computacao', periodo: 3, tipo: 'Obrigatória' },
    { name: "Pesquisa Aplicada à Computação", slug: 'pesquisa', curso: 'engenharia_computacao', periodo: 4, tipo: 'Obrigatória' },
    { name: "Cálculo das Probabilidades I", slug: 'probabilidade', curso: 'engenharia_computacao', periodo: 4, tipo: 'Obrigatória' },
    { name: "Circuitos Lógicos II", slug: 'circuitos_logicos2', curso: 'engenharia_computacao', periodo: 4, tipo: 'Obrigatória' },
    { name: "Eletricidade e Circuitos para Computação II", slug: 'eletricidade2', curso: 'engenharia_computacao', periodo: 4, tipo: 'Obrigatória' },
    { name: "Mecânica para Engenharia da Computação", slug: 'mecanica', curso: 'engenharia_computacao', periodo: 4, tipo: 'Obrigatória' },
    { name: "Física Aplicada à Computação II", slug: 'fisica2', curso: 'engenharia_computacao', periodo: 5, tipo: 'Obrigatória' },
    { name: "Séries e Equações Diferenciais Ordinárias", slug: 'series_edo', curso: 'engenharia_computacao', periodo: 5, tipo: 'Obrigatória' },
    { name: "Linguagem de Programação II", slug: 'lp2', curso: 'engenharia_computacao', periodo: 5, tipo: 'Obrigatória' },
    { name: "Estrutura de Dados", slug: 'ed', curso: 'engenharia_computacao', periodo: 5, tipo: 'Obrigatória' },
    { name: "Eletrônica Aplicada I", slug: 'eletronica1', curso: 'engenharia_computacao', periodo: 5, tipo: 'Obrigatória' },
    { name: "Arquitetura de Computadores", slug: 'arquitetura', curso: 'engenharia_computacao', periodo: 6, tipo: 'Obrigatória' },
    { name: "Arquitetura Avançada de Computadores", slug: 'arquitetura_avancada', curso: 'engenharia_computacao', periodo: 6, tipo: 'Obrigatória' },
    { name: "Banco de Dados I", slug: 'bd', curso: 'engenharia_computacao', periodo: 6, tipo: 'Obrigatória' },
    { name: "Cálculo Numérico", slug: 'numerico', curso: 'engenharia_computacao', periodo: 6, tipo: 'Obrigatória' },
    { name: "Análise e Projeto de Algoritmos", slug: 'apa', curso: 'engenharia_computacao', periodo: 6, tipo: 'Obrigatória' },
    { name: "Eletrônica Aplicada II", slug: 'eletronica2', curso: 'engenharia_computacao', periodo: 7, tipo: 'Obrigatória' },
    { name: "Introdução à Mecânica dos Fluídos", slug: 'fluidos', curso: 'engenharia_computacao', periodo: 7, tipo: 'Obrigatória' },
    { name: "Introdução à Microeletrônica", slug: 'microeletronica', curso: 'engenharia_computacao', periodo: 7, tipo: 'Obrigatória' },
    { name: "Engenharia de Software", slug: 'es', curso: 'engenharia_computacao', periodo: 7, tipo: 'Obrigatória' },
    { name: "Microcontroladores", slug: 'microcontroladores', curso: 'engenharia_computacao', periodo: 7, tipo: 'Obrigatória' },
    { name: "Pesquisa Operacional", slug: 'po', curso: 'engenharia_computacao', periodo: 8, tipo: 'Obrigatória' },
    { name: "Redes de Computadores I", slug: 'redes', curso: 'engenharia_computacao', periodo: 8, tipo: 'Obrigatória' },
    { name: "Sinais e Sistemas Dinâmicos", slug: 'sinais', curso: 'engenharia_computacao', periodo: 8, tipo: 'Obrigatória' },
    { name: "Sistemas Operacionais I", slug: 'so', curso: 'engenharia_computacao', periodo: 8, tipo: 'Obrigatória' },
    { name: "Avaliação de Desempenho de Sistemas Operacionais", slug: 'avaliacao_desempenho', curso: 'engenharia_computacao', periodo: 9, tipo: 'Obrigatória' },
    { name: "Introdução à Computação Gráfica", slug: 'cg', curso: 'engenharia_computacao', periodo: 9, tipo: 'Obrigatória' },
    { name: "Introdução ao Processamento Digital de Imagens", slug: 'pdi', curso: 'engenharia_computacao', periodo: 9, tipo: 'Obrigatória' },
    { name: "Sistemas e Controle de Automação", slug: 'controle_automacao', curso: 'engenharia_computacao', periodo: 9, tipo: 'Obrigatória' },
    { name: "Sistemas Embarcados I", slug: 'embarcados1', curso: 'engenharia_computacao', periodo: 9, tipo: 'Obrigatória' },
    { name: "Introdução à Inteligência Artificial", slug: 'ia', curso: 'engenharia_computacao', periodo: 9, tipo: 'Obrigatória' },
    { name: "Robótica", slug: 'robotica', curso: 'engenharia_computacao', periodo: 10, tipo: 'Obrigatória' },
    { name: "Concepção Estruturada de Circuitos Integrados", slug: 'circuitos_integrados', curso: 'engenharia_computacao', periodo: 10, tipo: 'Obrigatória' },
    { name: "Introdução à Teoria da Informação", slug: 'teoria_informacao', curso: 'engenharia_computacao', periodo: 10, tipo: 'Obrigatória' },
    { name: "Economia I", slug: 'economia', curso: 'engenharia_computacao', periodo: 10, tipo: 'Obrigatória' },
    { name: "Administração para Engenharia", slug: 'adm_eng', curso: 'engenharia_computacao', periodo: 10, tipo: 'Obrigatória' },
    { name: "Computadores e Sociedade", slug: 'sociedade', curso: 'engenharia_computacao', periodo: 10, tipo: 'Obrigatória' },
    { name: "Trabalho de Conclusão de Curso I", slug: 'tcc1', curso: 'engenharia_computacao', periodo: 10, tipo: 'Obrigatória' },
    { name: "Trabalho de Conclusão de Curso II", slug: 'tcc2', curso: 'engenharia_computacao', periodo: 10, tipo: 'Obrigatória' },
    { name: "Redes sem Fio", slug: 'redes_sem_fio', curso: 'engenharia_computacao', periodo: null, tipo: 'Optativa' },
    { name: "Física Aplicada à Computação II (Optativa)", slug: 'fisica2_opt', curso: 'engenharia_computacao', periodo: null, tipo: 'Optativa' },
    { name: "Arquitetura Avançada de Computadores (Optativa)", slug: 'arquitetura_avancada_opt', curso: 'engenharia_computacao', periodo: null, tipo: 'Optativa' },

    // Ciência de Dados e IA - Baseado no arquivo percursos
    { name: "Introdução à CDIA", slug: 'intro_cdia', curso: 'ciencia_dados_ia', periodo: 1, tipo: 'Obrigatória' },
    { name: "Introdução ao Computador", slug: 'intro_computador', curso: 'ciencia_dados_ia', periodo: 1, tipo: 'Obrigatória' },
    { name: "Introdução à Programação", slug: 'ip', curso: 'ciencia_dados_ia', periodo: 1, tipo: 'Obrigatória' },
    { name: "Cálculo I", slug: 'calculo1', curso: 'ciencia_dados_ia', periodo: 1, tipo: 'Obrigatória' },
    { name: "Álgebra Linear", slug: 'linear', curso: 'ciencia_dados_ia', periodo: 1, tipo: 'Obrigatória' },
    { name: "Metodologia Científica", slug: 'metodologia', curso: 'ciencia_dados_ia', periodo: 1, tipo: 'Obrigatória' },
    { name: "Programação Estruturada", slug: 'programacao_estruturada', curso: 'ciencia_dados_ia', periodo: 2, tipo: 'Obrigatória' },
    { name: "Programação Orientada a Objetos", slug: 'poo', curso: 'ciencia_dados_ia', periodo: 2, tipo: 'Obrigatória' },
    { name: "Cálculo II", slug: 'calculo2', curso: 'ciencia_dados_ia', periodo: 2, tipo: 'Obrigatória' },
    { name: "Matemática Discreta", slug: 'discreta', curso: 'ciencia_dados_ia', periodo: 2, tipo: 'Obrigatória' },
    { name: "Cálculo Vetorial", slug: 'vetorial', curso: 'ciencia_dados_ia', periodo: 2, tipo: 'Obrigatória' },
    { name: "Estrutura de Dados", slug: 'estrutura_dados', curso: 'ciencia_dados_ia', periodo: 3, tipo: 'Obrigatória' },
    { name: "Teorias de Probabilidades", slug: 'teorias_probabilidades', curso: 'ciencia_dados_ia', periodo: 3, tipo: 'Obrigatória' },
    { name: "Cálculo III", slug: 'calculo3', curso: 'ciencia_dados_ia', periodo: 3, tipo: 'Obrigatória' },
    { name: "Álgebra Linear Computacional", slug: 'linear_computacional', curso: 'ciencia_dados_ia', periodo: 3, tipo: 'Obrigatória' },
    { name: "Introdução à IA", slug: 'intro_IA', curso: 'ciencia_dados_ia', periodo: 4, tipo: 'Obrigatória' },
    { name: "Análise e Projeto de Algoritmos", slug: 'apa', curso: 'ciencia_dados_ia', periodo: 4, tipo: 'Obrigatória' },
    { name: "Inferência Estatística", slug: 'inferencia_estatistica', curso: 'ciencia_dados_ia', periodo: 4, tipo: 'Obrigatória' },
    { name: "Métodos Numéricos", slug: 'metodos_numericos', curso: 'ciencia_dados_ia', periodo: 4, tipo: 'Obrigatória' },
    { name: "Banco de Dados", slug: 'bd', curso: 'ciencia_dados_ia', periodo: 5, tipo: 'Obrigatória' },
    { name: "Aprendizagem de Máquina", slug: 'aprendizagem_maquina', curso: 'ciencia_dados_ia', periodo: 6, tipo: 'Obrigatória' },
    { name: "Mineração Estatística", slug: 'mineracao_estatistica', curso: 'ciencia_dados_ia', periodo: 6, tipo: 'Obrigatória' },
    { name: "Inteligência Computacional", slug: 'inteligencia_computacional', curso: 'ciencia_dados_ia', periodo: 6, tipo: 'Obrigatória' },
    { name: "Otimização", slug: 'otimizacao', curso: 'ciencia_dados_ia', periodo: 7, tipo: 'Obrigatória' },
    { name: "Engenharia de Software", slug: 'es', curso: 'ciencia_dados_ia', periodo: 7, tipo: 'Obrigatória' },
    { name: "Computadores e Sociedade", slug: 'sociedade', curso: 'ciencia_dados_ia', periodo: 8, tipo: 'Obrigatória' },

    // Optativas CDIA
    { name: "Visualização de Dados", slug: 'visualizacao_dados', curso: 'ciencia_dados_ia', periodo: null, tipo: 'Optativa' },
    { name: "Séries Temporais", slug: 'series', curso: 'ciencia_dados_ia', periodo: null, tipo: 'Optativa' },
    { name: "Teoria dos Grafos", slug: 'teoria_grafos', curso: 'ciencia_dados_ia', periodo: null, tipo: 'Optativa' },
    { name: "Big Data", slug: 'big_data', curso: 'ciencia_dados_ia', periodo: null, tipo: 'Optativa' },
    { name: "Processamento de Imagens", slug: 'imagens', curso: 'ciencia_dados_ia', periodo: null, tipo: 'Optativa' },
    { name: "Processamento de Linguagem Natural", slug: 'linguagem_natural', curso: 'ciencia_dados_ia', periodo: null, tipo: 'Optativa' },
    { name: "Sistema de Recomendação", slug: 'sistema_recomendacao', curso: 'ciencia_dados_ia', periodo: null, tipo: 'Optativa' },
    { name: "Recuperação de Informação", slug: 'recuperacao_informacao', curso: 'ciencia_dados_ia', periodo: null, tipo: 'Optativa' },
    { name: "Análise Multivariada", slug: 'analise_multivariada', curso: 'ciencia_dados_ia', periodo: null, tipo: 'Optativa' },
    { name: "Ciência de Dados e IA em Finanças", slug: 'cdia_financas', curso: 'ciencia_dados_ia', periodo: null, tipo: 'Optativa' },
    { name: "Empreendedorismo", slug: 'empreendedorismo', curso: 'ciencia_dados_ia', periodo: null, tipo: 'Optativa' },
    { name: "Equações Diferenciais", slug: 'equacoes_diferenciais', curso: 'ciencia_dados_ia', periodo: null, tipo: 'Optativa' },
    { name: "Gerência de Projetos", slug: 'gerencia_projetos', curso: 'ciencia_dados_ia', periodo: null, tipo: 'Optativa' },
    { name: "Internet das Coisas", slug: 'iot', curso: 'ciencia_dados_ia', periodo: null, tipo: 'Optativa' },
    { name: "Métodos Matemáticos", slug: 'metodos_matematicos', curso: 'ciencia_dados_ia', periodo: null, tipo: 'Optativa' },
    { name: "Otimização Não-Linear", slug: 'otimizacao_nao-linear', curso: 'ciencia_dados_ia', periodo: null, tipo: 'Optativa' },
    { name: "Pesquisa Aplicada", slug: 'pesquisa_aplicada', curso: 'ciencia_dados_ia', periodo: null, tipo: 'Optativa' },
    { name: "Pesquisa Operacional", slug: 'po', curso: 'ciencia_dados_ia', periodo: null, tipo: 'Optativa' },
    { name: "Sistemas Operacionais", slug: 'so', curso: 'ciencia_dados_ia', periodo: null, tipo: 'Optativa' },
    { name: "Arquitetura de Computadores I", slug: 'arquitetura1', curso: 'ciencia_dados_ia', periodo: null, tipo: 'Optativa' },
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
    arquitetura2: "/ac_icon.svg",
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
    // CDIA específicos
    analise_multivariada: "/estatistica_icon.svg",
    calculo3: "/c1_icon.svg",
    cdia_financas: "/estatistica_icon.svg",
    empreendedorismo: "/icc_icon.svg",
    equacoes_diferenciais: "/c1_icon.svg",
    estrutura_dados: "/eda_icon.svg",
    gerencia_projetos: "/eds_icon.svg",
    inferencia_estatistica: "/estatistica_icon.svg",
    inteligencia_computacional: "/ia_icon.svg",
    intro_cdia: "/icc_icon.svg",
    intro_computador: "/icc_icon.svg",
    intro_IA: "/ia_icon.svg",
    iot: "/redes_icon.svg",
    linear_computacional: "/cv_icon.svg",
    linguagem_natural: "/ia_icon.svg",
    metodos_matematicos: "/c1_icon.svg",
    metodos_numericos: "/c1_icon.svg",
    mineracao_estatistica: "/estatistica_icon.svg",
    otimizacao: "/apa_icon.svg",
    "otimizacao_nao-linear": "/apa_icon.svg",
    pesquisa_aplicada: "/pa_icon.svg",
    programacao_estruturada: "/ip_icon.svg",
    recuperacao_informacao: "/bd_icon.svg",
    sistema_recomendacao: "/ia_icon.svg",
    teorias_probabilidades: "/estatistica_icon.svg",
    // Engenharia da Computação
    vetorial: "/cv_icon.svg",
    calculo1: "/c1_icon.svg",
    metodologia: "/mtc_icon.svg",
    intro_eng: "/icc_icon.svg",
    lab_ip: "/ip_icon.svg",
    ip_ec: "/ip_icon.svg",
    materiais: "/cv_icon.svg",
    fisica1: "/cv_icon.svg",
    calculo2: "/c1_icon.svg",
    lab_lp1: "/ip_icon.svg",
    lp1: "/ip_icon.svg",
    circuitos_logicos1: "/ac_icon.svg",
    eletricidade1: "/ac_icon.svg",
    fisica_exp: "/cv_icon.svg",
    linear: "/cv_icon.svg",
    calculo3: "/c1_icon.svg",
    pesquisa: "/pa_icon.svg",
    probabilidade: "/estatistica_icon.svg",
    circuitos_logicos2: "/ac_icon.svg",
    eletricidade2: "/ac_icon.svg",
    mecanica: "/cv_icon.svg",
    fisica2: "/cv_icon.svg",
    series_edo: "/c1_icon.svg",
    lp2: "/ip_icon.svg",
    ed: "/eda_icon.svg",
    eletronica1: "/ac_icon.svg",
    arquitetura: "/ac_icon.svg",
    arquitetura_avancada: "/ac_icon.svg",
    bd: "/bd_icon.svg",
    numerico: "/c1_icon.svg",
    apa: "/apa_icon.svg",
    eletronica2: "/ac_icon.svg",
    fluidos: "/cv_icon.svg",
    microeletronica: "/ac_icon.svg",
    es: "/eds_icon.svg",
    microcontroladores: "/ac_icon.svg",
    po: "/estatistica_icon.svg",
    redes: "/redes_icon.svg",
    sinais: "/cv_icon.svg",
    so: "/ac_icon.svg",
    avaliacao_desempenho: "/ac_icon.svg",
    redes_sem_fio: "/redes_icon.svg",
    cg: "/pdi_icon.svg",
    pdi: "/pdi_icon.svg",
    controle_automacao: "/ac_icon.svg",
    embarcados1: "/ac_icon.svg",
    ia: "/ia_icon.svg",
    robotica: "/ia_icon.svg",
    circuitos_integrados: "/ac_icon.svg",
    teoria_informacao: "/estatistica_icon.svg",
    economia: "/cv_icon.svg",
    adm_eng: "/eds_icon.svg",
    sociedade: "/ihc_icon.svg",
    tcc1: "/mtc_icon.svg",
    tcc2: "/mtc_icon.svg",
    fisica2_opt: "/cv_icon.svg",
    arquitetura_avancada_opt: "/ac_icon.svg",
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

  const filteredDisciplines = disciplines.filter(discipline => {
    const matchesCurso = discipline.curso === cursoSelecionado;
    const matchesSearch = discipline.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
      .includes(searchTerm.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase());

    let matchesPeriodo = true;
    if (periodoSelecionado === 'optativas') {
      matchesPeriodo = discipline.tipo === 'Optativa';
    } else if (periodoSelecionado !== 'todos') {
      matchesPeriodo = discipline.periodo === parseInt(periodoSelecionado);
    }

    return matchesCurso && matchesSearch && matchesPeriodo;
  });

  // Obter períodos únicos do curso selecionado
  const periodosDisponiveis = [...new Set(
    disciplines
      .filter(d => d.curso === cursoSelecionado && d.periodo !== null)
      .map(d => d.periodo)
  )].sort((a, b) => a - b);

  const temOptativas = disciplines.some(d => d.curso === cursoSelecionado && d.tipo === 'Optativa');

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
              <button
                className={`${styles.courseButton} ${cursoSelecionado === 'ciencia_computacao' ? styles.courseButtonActive : ''}`}
                onClick={() => setCursoSelecionado('ciencia_computacao')}
              >
                Ciência da Computação
              </button>
              <button
                className={`${styles.courseButton} ${cursoSelecionado === 'engenharia_computacao' ? styles.courseButtonActive : ''}`}
                onClick={() => setCursoSelecionado('engenharia_computacao')}
              >
                Engenharia da Computação
              </button>
              <button
                className={`${styles.courseButton} ${cursoSelecionado === 'ciencia_dados_ia' ? styles.courseButtonActive : ''}`}
                onClick={() => setCursoSelecionado('ciencia_dados_ia')}
              >
                Ciência de Dados e IA
              </button>

            </div>

            {/* Filtro de Períodos */}
            <div className={styles.periodFilter}>
              <button
                className={`${styles.periodButton} ${periodoSelecionado === 'todos' ? styles.periodButtonActive : ''}`}
                onClick={() => setPeriodoSelecionado('todos')}
              >
                Todos
              </button>
              {periodosDisponiveis.map(periodo => (
                <button
                  key={periodo}
                  className={`${styles.periodButton} ${periodoSelecionado === String(periodo) ? styles.periodButtonActive : ''}`}
                  onClick={() => setPeriodoSelecionado(String(periodo))}
                >
                  {periodo}º Período
                </button>
              ))}
              {temOptativas && (
                <button
                  className={`${styles.periodButton} ${styles.periodButtonOptativas} ${periodoSelecionado === 'optativas' ? styles.periodButtonActive : ''}`}
                  onClick={() => setPeriodoSelecionado('optativas')}
                >
                  Optativas
                </button>
              )}
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

            <div className={styles.scrollContainer}>
              <div className={styles.resourceCards}>
                {filteredDisciplines.length > 0 ? (
                  filteredDisciplines
                    .slice(0, cardsToShow)
                    .map((discipline, index) => (
                      <Link
                        href={`/recursos/${discipline.curso}/${discipline.slug}`}
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
