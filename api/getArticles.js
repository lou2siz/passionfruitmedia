// api/getArticles.js

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const articlesDirectory = path.join(process.cwd(), 'articles');
  const filenames = fs.readdirSync(articlesDirectory);

  const articles = filenames.map((filename) => {
    const filePath = path.join(articlesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return {
      filename,
      content: fileContents,
    };
  });

  res.status(200).json({ articles });
}
