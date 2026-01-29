import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');


function findDisciplinaDirectory(baseDir, disciplina) {
  if (!fs.existsSync(baseDir)) return null;
  const items = fs.readdirSync(baseDir, { withFileTypes: true });

  for (const item of items) {
    if (item.isDirectory()) {
      if (item.name === disciplina) {
        return path.join(baseDir, item.name);
      }
      const found = findDisciplinaDirectory(path.join(baseDir, item.name), disciplina);
      if (found) return found;
    }
  }
  return null;
}

export function getDisciplinaContent(disciplina, fileName, curso) {

  if (!disciplina || !fileName || !curso) {
    throw new Error(`Faltando parâmetros: disciplina=${disciplina}, fileName=${fileName}, curso=${curso}`);
  }

  let contentDirectory = path.join(process.cwd(), 'content', curso, disciplina);

  if (!fs.existsSync(contentDirectory)) {
    const courseRoot = path.join(process.cwd(), 'content', curso);
    const foundDir = findDisciplinaDirectory(courseRoot, disciplina);
    if (foundDir) {
      contentDirectory = foundDir;
    }
  }
  const fullPath = path.join(contentDirectory, `${fileName}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = remark()
      .use(html)
      .processSync(matterResult.content);

    const contentHtml = processedContent.toString();

    return {
      title: matterResult.data.title,
      contentHtml,
    };
  } catch (error) {
    console.error("Erro ao ler o arquivo:", error);
    throw error;
  }
}
