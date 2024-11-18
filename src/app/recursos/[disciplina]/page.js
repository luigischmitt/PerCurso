import { getDisciplinaContent } from '@/lib/markdown';
import styles from './page.module.css';
import DisciplinaContent from '../DisciplinaContent.js';

export async function generateStaticParams() {
  return [
    { disciplina: 'calculo1' },
    { disciplina: 'calculo2' },
    { disciplina: 'numerico' },
    { disciplina: 'ia' },
    { disciplina: 'sbc' },
    { disciplina: 'aprendizagem_maquina' },
    { disciplina: 'vetorial' },
    { disciplina: 'linear' },
    { disciplina: 'probabilidade' },
    { disciplina: 'redes' },
    { disciplina: 'apa' },
    { disciplina: 'seguranca' },
    { disciplina: 'sistemas_informacao' },
    { disciplina: 'sociedade' },
    { disciplina: 'discreta' },
    { disciplina: 'logica' },
    { disciplina: 'formais' },
    { disciplina: 'imagens' },
    { disciplina: 'paradigmas_linguagens' },
    { disciplina: 'compiladores' },
    { disciplina: 'ihc' },
    { disciplina: 'ic' },
    { disciplina: 'arquitetura1' },
    { disciplina: 'arquitetura2' },
    { disciplina: 'so' },
    { disciplina: 'concorrente' },
    { disciplina: 'sistema_distribuidos' },
    { disciplina: 'engenharia_sistemas' },
    { disciplina: 'ip' },
    { disciplina: 'poo' },
    { disciplina: 'eda1' },
    { disciplina: 'eda2' },
    { disciplina: 'bd' },
    { disciplina: 'inovacao' },
    { disciplina: 'gerencimento_psoft' },
    { disciplina: 'metodologia' },
    { disciplina: 'funcional' },
    { disciplina: 'es' },
    { disciplina: 'requisitos' },
    { disciplina: 'metodos_psoft' },
    { disciplina: 'teste_software' },
    { disciplina: 'pesquisa' },
    // Adicione optativas ou disciplinas futuras aqui
  ];
}

// Mapeamento dos slugs para os nomes completos das disciplinas
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
  // Adicione outras disciplinas e optativas aqui
};

export default function DisciplinaPage({ params }) {
  const dicas = getDisciplinaContent(params.disciplina, 'dicas');
  const dificuldades = getDisciplinaContent(params.disciplina, 'dificuldades');
  const listas = getDisciplinaContent(params.disciplina, 'listas');
  const provas = getDisciplinaContent(params.disciplina, 'provas');
  const extras = getDisciplinaContent(params.disciplina, 'extras');

  // Obter o nome da disciplina com base no slug
  const disciplinaNome = disciplinaNomes[params.disciplina] || "Disciplina";

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{disciplinaNome}</h1>
        <a 
          href={`https://github.com/luigischmitt/PerCurso/tree/main/content/${params.disciplina}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.editButton}
        >
          EDITAR ESTA CADEIRA
        </a>
      </header>

      {/* Use o componente DisciplinaContent para o conteúdo interativo */}
      <DisciplinaContent
        dicas={dicas}
        dificuldades={dificuldades}
        listas={listas}
        provas={provas}
        extras={extras}
      />
    </div>
  );
}

