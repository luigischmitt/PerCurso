import { getDisciplinaContent } from '@/lib/markdown';
import styles from './page.module.css';
import DisciplinaContent from '../DisciplinaContent.js';

export async function generateStaticParams() {
  return [
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
    { curso: 'ciencia_computacao', disciplina: 'series' },
    { curso: 'ciencia_computacao', disciplina: 'po' },
    { curso: 'ciencia_computacao', disciplina: 'redes_sem_fio' },
    { curso: 'ciencia_computacao', disciplina: 'sistemas_informacao_decisao' },
    { curso: 'ciencia_computacao', disciplina: 'administracao_sitemas' },
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
  administracao_sistemas: "ADMINISTRAÇÃO DE SISTEMAS"
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

export default function DisciplinaPage({ params }) {
  const dicas = getDisciplinaContent(params.disciplina, 'dicas');
  const dificuldades = getDisciplinaContent(params.disciplina, 'dificuldades');
  const listas = getDisciplinaContent(params.disciplina, 'listas');
  const provas = getDisciplinaContent(params.disciplina, 'provas');
  const extras = getDisciplinaContent(params.disciplina, 'extras');

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
                href={`https://github.com/luigischmitt/PerCurso/tree/main/content/${params.disciplina}`} 
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
