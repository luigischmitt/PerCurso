import { getDisciplinaContent } from '@/lib/markdown';
import styles from './page.module.css';
import DisciplinaContent from '../../DisciplinaContent.js';

const cursoMap = {
  ciencia_computacao: 'cc',
  ciencia_dados_ia: 'cdia',
  engenharia_computacao: 'ec',
};

export async function generateStaticParams() {
  return [
    // Ciência da Computação
    { curso: 'ciencia_computacao', disciplina: 'calculo1' },
    { curso: 'ciencia_computacao', disciplina: 'calculo2' },
    { curso: 'ciencia_computacao', disciplina: 'numerico' },
    { curso: 'ciencia_computacao', disciplina: 'ia' },
    { curso: 'ciencia_computacao', disciplina: 'sbc' },
    { curso: 'ciencia_computacao', disciplina: 'aprendizagem_maquina' },
    { curso: 'ciencia_computacao', disciplina: 'vetorial' },
    { curso: 'ciencia_computacao', disciplina: 'linear' },
    { curso: 'ciencia_computacao', disciplina: 'probabilidade' },
    { curso: 'ciencia_computacao', disciplina: 'redes' },
    { curso: 'ciencia_computacao', disciplina: 'apa' },
    { curso: 'ciencia_computacao', disciplina: 'seguranca' },
    { curso: 'ciencia_computacao', disciplina: 'sistemas_informacao' },
    { curso: 'ciencia_computacao', disciplina: 'sociedade' },
    { curso: 'ciencia_computacao', disciplina: 'discreta' },
    { curso: 'ciencia_computacao', disciplina: 'logica' },
    { curso: 'ciencia_computacao', disciplina: 'formais' },
    { curso: 'ciencia_computacao', disciplina: 'imagens' },
    { curso: 'ciencia_computacao', disciplina: 'paradigmas_linguagens' },
    { curso: 'ciencia_computacao', disciplina: 'compiladores' },
    { curso: 'ciencia_computacao', disciplina: 'ihc' },
    { curso: 'ciencia_computacao', disciplina: 'ic' },
    { curso: 'ciencia_computacao', disciplina: 'arquitetura1' },
    { curso: 'ciencia_computacao', disciplina: 'arquitetura2' },
    { curso: 'ciencia_computacao', disciplina: 'so' },
    { curso: 'ciencia_computacao', disciplina: 'concorrente' },
    { curso: 'ciencia_computacao', disciplina: 'sistema_distribuidos' },
    { curso: 'ciencia_computacao', disciplina: 'engenharia_sistemas' },
    { curso: 'ciencia_computacao', disciplina: 'ip' },
    { curso: 'ciencia_computacao', disciplina: 'poo' },
    { curso: 'ciencia_computacao', disciplina: 'eda1' },
    { curso: 'ciencia_computacao', disciplina: 'eda2' },
    { curso: 'ciencia_computacao', disciplina: 'bd' },
    { curso: 'ciencia_computacao', disciplina: 'inovacao' },
    { curso: 'ciencia_computacao', disciplina: 'gerencimento_psoft' },
    { curso: 'ciencia_computacao', disciplina: 'metodologia' },
    { curso: 'ciencia_computacao', disciplina: 'funcional' },
    { curso: 'ciencia_computacao', disciplina: 'es' },
    { curso: 'ciencia_computacao', disciplina: 'requisitos' },
    { curso: 'ciencia_computacao', disciplina: 'metodos_psoft' },
    { curso: 'ciencia_computacao', disciplina: 'teste_software' },
    { curso: 'ciencia_computacao', disciplina: 'pesquisa' },
    { curso: 'ciencia_computacao', disciplina: 'fund_ihc' },
    { curso: 'ciencia_computacao', disciplina: 'teoria_grafos' },
    { curso: 'ciencia_computacao', disciplina: 'reuso_software' },
    { curso: 'ciencia_computacao', disciplina: 'implementacao' },
    { curso: 'ciencia_computacao', disciplina: 'metodos_formais' },
    { curso: 'ciencia_computacao', disciplina: 'visualizacao' },
    { curso: 'ciencia_computacao', disciplina: 'series' },
    { curso: 'ciencia_computacao', disciplina: 'ia_saude' },
    { curso: 'ciencia_computacao', disciplina: 'deep_learn' },
    { curso: 'ciencia_computacao', disciplina: 'econ' },
    { curso: 'ciencia_computacao', disciplina: 'po' },
    { curso: 'ciencia_computacao', disciplina: 'redes_sem_fio' },
    { curso: 'ciencia_computacao', disciplina: 'sistemas_informacao_decisao' },
    { curso: 'ciencia_computacao', disciplina: 'administracao_sistemas' },

    // Ciência de Dados e IA
    { curso: 'ciencia_dados_ia', disciplina: 'big_data' },
    { curso: 'ciencia_dados_ia', disciplina: 'analise_multivariada' },
    { curso: 'ciencia_dados_ia', disciplina: 'apa' },
    { curso: 'ciencia_dados_ia', disciplina: 'aprendizagem_maquina' },
    { curso: 'ciencia_dados_ia', disciplina: 'arquitetura1' },
    { curso: 'ciencia_dados_ia', disciplina: 'bd' },
    { curso: 'ciencia_dados_ia', disciplina: 'big_data' },
    { curso: 'ciencia_dados_ia', disciplina: 'calculo1' },
    { curso: 'ciencia_dados_ia', disciplina: 'calculo2' },
    { curso: 'ciencia_dados_ia', disciplina: 'calculo3' },
    { curso: 'ciencia_dados_ia', disciplina: 'cdia_financas' },
    { curso: 'ciencia_dados_ia', disciplina: 'discreta' },
    { curso: 'ciencia_dados_ia', disciplina: 'empreendedorismo' },
    { curso: 'ciencia_dados_ia', disciplina: 'equacoes_diferenciais' },
    { curso: 'ciencia_dados_ia', disciplina: 'es' },
    { curso: 'ciencia_dados_ia', disciplina: 'estrutura_dados' },
    { curso: 'ciencia_dados_ia', disciplina: 'gerencia_projetos' },
    { curso: 'ciencia_dados_ia', disciplina: 'imagens' },
    { curso: 'ciencia_dados_ia', disciplina: 'inferencia_estatistica' },
    { curso: 'ciencia_dados_ia', disciplina: 'inteligencia_computacional' },
    { curso: 'ciencia_dados_ia', disciplina: 'intro_cdia' },
    { curso: 'ciencia_dados_ia', disciplina: 'intro_computador' },
    { curso: 'ciencia_dados_ia', disciplina: 'intro_IA' },
    { curso: 'ciencia_dados_ia', disciplina: 'iot' },
    { curso: 'ciencia_dados_ia', disciplina: 'ip' },
    { curso: 'ciencia_dados_ia', disciplina: 'linear' },
    { curso: 'ciencia_dados_ia', disciplina: 'linear_computacional' },
    { curso: 'ciencia_dados_ia', disciplina: 'linguagem_natural' },
    { curso: 'ciencia_dados_ia', disciplina: 'metodologia' },
    { curso: 'ciencia_dados_ia', disciplina: 'metodos_matematicos' },
    { curso: 'ciencia_dados_ia', disciplina: 'metodos_numericos' },
    { curso: 'ciencia_dados_ia', disciplina: 'mineracao_estatistica' },
    { curso: 'ciencia_dados_ia', disciplina: 'otimizacao' },
    { curso: 'ciencia_dados_ia', disciplina: 'otimizacao_nao-linear' },
    { curso: 'ciencia_dados_ia', disciplina: 'pesquisa_aplicada' },
    { curso: 'ciencia_dados_ia', disciplina: 'po' },
    { curso: 'ciencia_dados_ia', disciplina: 'poo' },
    { curso: 'ciencia_dados_ia', disciplina: 'programacao_estruturada' },
    { curso: 'ciencia_dados_ia', disciplina: 'recuperacao_informacao' },
    { curso: 'ciencia_dados_ia', disciplina: 'series' },
    { curso: 'ciencia_dados_ia', disciplina: 'sistema_recomendacao' },
    { curso: 'ciencia_dados_ia', disciplina: 'so' },
    { curso: 'ciencia_dados_ia', disciplina: 'sociedade' },
    { curso: 'ciencia_dados_ia', disciplina: 'teoria_grafos' },
    { curso: 'ciencia_dados_ia', disciplina: 'teorias_probabilidades' },
    { curso: 'ciencia_dados_ia', disciplina: 'vetorial' },
    { curso: 'ciencia_dados_ia', disciplina: 'visualizacao_dados' },
  ];
}


const disciplinaNomes = {
  calculo1: "CÁLCULO DIFERENCIAL E INTEGRAL I",
  calculo2: "CÁLCULO DIFERENCIAL E INTEGRAL II",
  numerico: "CÁLCULO NUMÉRICO",
  ia: "INTRODUÇÃO À INTELIGÊNCIA ARTIFICIAL",
  sbc: "SISTEMAS BASEADOS EM CONHECIMENTO",
  aprendizagem_maquina: "PARADIGMAS DE APRENDIZAGEM DE MÁQUINA",
  vetorial: "CÁLCULO VETORIAL E GEOMETRIA ANALÍTICA",
  linear: "INTRODUÇÃO À ÁLGEBRA LINEAR",
  probabilidade: "CÁLCULO DAS PROBABILIDADES E ESTATÍSTICA I",
  redes: "REDES DE COMPUTADORES I",
  apa: "ANÁLISE E PROJETO DE ALGORITMOS",
  seguranca: "SEGURANÇA COMPUTACIONAL",
  sistemas_informacao: "SISTEMAS DE INFORMAÇÃO NAS ORGANIZAÇÕES",
  sociedade: "COMPUTADORES E SOCIEDADE",
  discreta: "MATEMÁTICA DISCRETA",
  logica: "LÓGICA APLICADA À COMPUTAÇÃO",
  formais: "LINGUAGENS FORMAIS E COMPUTABILIDADE",
  imagens: "INTRODUÇÃO AO PROCESSAMENTO DIGITAL DE IMAGENS",
  paradigmas_linguagens: "PARADIGMAS DE LINGUAGENS DE PROGRAMAÇÃO",
  compiladores: "CONSTRUÇÃO DE COMPILADORES I",
  ihc: "INTERAÇÃO HUMANO-COMPUTADOR",
  ic: "INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO",
  arquitetura1: "ARQUITETURA DE COMPUTADORES I",
  arquitetura2: "ARQUITETURA DE COMPUTADORES II",
  so: "SISTEMAS OPERACIONAIS I",
  concorrente: "PROGRAMAÇÃO CONCORRENTE E DISTRIBUÍDA",
  sistema_distribuidos: "SISTEMAS DISTRIBUÍDOS",
  engenharia_sistemas: "ENGENHARIA DE SISTEMAS DISTRIBUÍDOS",
  ip: "INTRODUÇÃO À PROGRAMAÇÃO",
  poo: "PROGRAMAÇÃO ORIENTADA A OBJETOS",
  eda1: "ESTRUTURAS DE DADOS E ALGORITMOS I",
  eda2: "ESTRUTURAS DE DADOS E ALGORITMOS II",
  bd: "BANCO DE DADOS I",
  inovacao: "INOVAÇÃO DE BASE CIENTÍFICA-TECNOLÓGICA E EMPREENDEDORISMO",
  gerencimento_psoft: "GERENCIAMENTO DE PROJETO DE SOFTWARE",
  metodologia: "METODOLOGIA DO TRABALHO CIENTÍFICO",
  funcional: "PROGRAMAÇÃO FUNCIONAL",
  es: "ENGENHARIA DE SOFTWARE",
  requisitos: "ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE",
  metodos_psoft: "MÉTODOS DE PROJETO DE SOFTWARE",
  teste_software: "TESTE DE SOFTWARE",
  pesquisa: "PESQUISA APLICADA À COMPUTAÇÃO",
  fund_ihc: "FUNDAMENTOS DA INTERAÇÃO HUMANO-COMPUTADOR",
  teoria_grafos: "TEORIA DOS GRAFOS APLICADA",
  reuso_software: "REUSO DE SOFTWARE",
  implementacao: "IMPLEMENTAÇÃO DE SISTEMAS PARA DISPOSITIVOS MÓVEIS",
  metodos_formais: "MÉTODOS FORMAIS PARA DESENVOLVIMENTO DE SOFTWARE",
  visualizacao: "VISUALIZAÇÃO DE DADOS",
  series: "SÉRIES TEMPORAIS",
  ia_saude: "IA APLICADA À SAÚDE",
  big_data: "BIG DATA",
  deep_learn: "APRENDIZADO PROFUNDO",
  econ: "PRINCÍPIOS DE ECONOMIA",
  po: "PESQUISA OPERACIONAL",
  linear_comp: "ÁLGEBRA LINEAR COMPUTACIONAL",
  redes_sem_fio: "REDES SEM FIO",
  sistemas_informacao_decisao: "SISTEMAS DE INFORMAÇÃO E DECISÃO",
  administracao_sistemas: "ADMINISTRAÇÃO DE SISTEMAS",
  // CDIA específicos
  analise_multivariada: "ANÁLISE MULTIVARIADA",
  calculo3: "CÁLCULO III",
  cdia_financas: "CIÊNCIA DE DADOS E IA EM FINANÇAS",
  empreendedorismo: "EMPREENDEDORISMO",
  equacoes_diferenciais: "EQUAÇÕES DIFERENCIAIS",
  estrutura_dados: "ESTRUTURA DE DADOS",
  gerencia_projetos: "GERÊNCIA DE PROJETOS",
  inferencia_estatistica: "INFERÊNCIA ESTATÍSTICA",
  inteligencia_computacional: "INTELIGÊNCIA COMPUTACIONAL",
  intro_cdia: "INTRODUÇÃO À CDIA",
  intro_computador: "INTRODUÇÃO AO COMPUTADOR",
  intro_IA: "INTRODUÇÃO À IA",
  iot: "INTERNET DAS COISAS",
  linear_computacional: "ÁLGEBRA LINEAR COMPUTACIONAL",
  linguagem_natural: "PROCESSAMENTO DE LINGUAGEM NATURAL",
  metodos_matematicos: "MÉTODOS MATEMÁTICOS",
  metodos_numericos: "MÉTODOS NUMÉRICOS",
  mineracao_estatistica: "MINERAÇÃO ESTATÍSTICA",
  otimizacao: "OTIMIZAÇÃO",
  "otimizacao_nao-linear": "OTIMIZAÇÃO NÃO-LINEAR",
  pesquisa_aplicada: "PESQUISA APLICADA",
  programacao_estruturada: "PROGRAMAÇÃO ESTRUTURADA",
  recuperacao_informacao: "RECUPERAÇÃO DE INFORMAÇÃO",
  sistema_recomendacao: "SISTEMA DE RECOMENDAÇÃO",
  teorias_probabilidades: "TEORIAS DE PROBABILIDADES",
  visualizacao_dados: "VISUALIZAÇÃO DE DADOS"
};

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
  visualizacao_dados: "/estatistica_icon.svg",
};

export default function DisciplinaPage({ params }) {
  const cursoFolder = cursoMap[params.curso] || 'cc'; // Default fallback

  const dicas = getDisciplinaContent(params.disciplina, 'dicas', cursoFolder);
  const dificuldades = getDisciplinaContent(params.disciplina, 'dificuldades', cursoFolder);
  const listas = getDisciplinaContent(params.disciplina, 'listas', cursoFolder);
  const provas = getDisciplinaContent(params.disciplina, 'provas', cursoFolder);
  const extras = getDisciplinaContent(params.disciplina, 'extras', cursoFolder);

  const disciplinaNome = disciplinaNomes[params.disciplina] || "Disciplina";
  const disciplinaIcone = disciplinaIcones[params.disciplina] || "Icone";

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.backgroundRectangle}>
        <div className={styles.lineTop}></div>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.iconTitle}>
              <img src={disciplinaIcone} className={styles.icon} />
              <h1 className={styles.title}>{disciplinaNome}</h1>
            </div>
            <div className={styles.buttonsWrapper}>
              <a
                href={`https://github.com/luigischmitt/PerCurso/tree/main/content/${cursoFolder}/${params.disciplina}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.editButton}
              >
                EDITAR ESTA CADEIRA
              </a>
              <a
                href="https://github.com/luigischmitt/PerCurso/blob/main/GuiaDoPrimeiroPR.md"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.howEditButton}
              >
                COMO EDITAR
              </a>
            </div>
          </header>
        </div>
        <div className={styles.lineBottom}></div>
      </div>
      <div className={styles.container}>
        <DisciplinaContent
          dicas={dicas}
          dificuldades={dificuldades}
          listas={listas}
          provas={provas}
          extras={extras}
        />
      </div>
      <footer className={styles.footer}>
        <p>© 2024 PerCurso, Todos os direitos reservados</p>
        <a href="https://github.com/luigischmitt/PerCurso/blob/main/C%C3%B3digo_de_conduta.md" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Código de Conduta</a>
      </footer>
    </div>
  );
}
