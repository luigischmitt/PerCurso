import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export function getDisciplinaContent(disciplina, fileName) {
  const fullPath = path.join(contentDirectory, disciplina, `${fileName}.md`);
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
}
