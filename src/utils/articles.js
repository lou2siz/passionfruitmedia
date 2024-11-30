// src/utils/articles.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'src', 'content', 'articles');

export function getAllArticles() {
  const fileNames = fs.readdirSync(articlesDirectory);
  const articles = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      ...data,
      content,
    };
  });

  return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getArticleBySlug(slug) {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    ...data,
    content,
  };
}
