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
    { disciplina: 'gerenciamento_psfot' },
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

export default function DisciplinaPage({ params }) {
  const dicas = getDisciplinaContent(params.disciplina, 'dicas');
  const dificuldades = getDisciplinaContent(params.disciplina, 'dificuldades');
  const listas = getDisciplinaContent(params.disciplina, 'listas');
  const provas = getDisciplinaContent(params.disciplina, 'provas');
  const extras = getDisciplinaContent(params.disciplina, 'extras');

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>CÁLCULO DIFERENCIAL E INTEGRAL I</h1>
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
