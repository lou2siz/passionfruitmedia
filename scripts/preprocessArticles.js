// scripts/preprocessArticles.js

const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, '..', 'articles');
const outputFile = path.join(__dirname, '..', 'src', 'data', 'articles.json');

const filenames = fs.readdirSync(articlesDir);
const articles = filenames.map((filename) => {
  const filePath = path.join(articlesDir, filename);
  const content = fs.readFileSync(filePath, 'utf8');
  return {
    filename,
    content,
  };
});

fs.writeFileSync(outputFile, JSON.stringify(articles, null, 2));
console.log('Articles preprocessed successfully.');
