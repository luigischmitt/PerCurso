import { getDisciplinaContent } from '@/lib/markdown';
import styles from './page.module.css';
import DisciplinaContent from '../DisciplinaContent.js';

export async function generateStaticParams() {
  return [
    { disciplina: 'calculo1' },
    { disciplina: 'ip' },
    { disciplina: 'metodologia' },
    { disciplina: 'discreta' },
    { disciplina: 'vetorial' },
    { disciplina: 'ic' },
    // Adicione outras disciplinas aqui
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
