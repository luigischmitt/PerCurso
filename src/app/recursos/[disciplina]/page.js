import { getDisciplinaContent } from '@/lib/markdown';

export async function generateStaticParams() {
  return [
    { disciplina: 'calculo1' },
    { disciplina: 'introducao-programacao' },
    { disciplina: 'metodologia-trabalho-cientifico' },
    { disciplina: 'matematica-discreta' },
    { disciplina: 'calculo-vetorial' },
    { disciplina: 'introducao-ciencia-computacao' },
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
    <div>
      <h1>{dicas.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: dicas.contentHtml }} />
      <h1>{dificuldades.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: dificuldades.contentHtml }} />
      <h1>{listas.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: listas.contentHtml }} />
      <h1>{provas.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: provas.contentHtml }} />
      <h1>{extras.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: extras.contentHtml }} />
    </div>
  );
}
