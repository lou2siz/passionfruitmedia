// src/utils/articles.js
import matter from 'gray-matter';

/**
 * Fetches the list of all articles from the public/articlesList.json file.
 * @returns {Promise<Array>} An array of article metadata.
 */
export async function getAllArticles() {
  try {
    const response = await fetch('/articlesList.json');
    if (!response.ok) {
      throw new Error('Failed to fetch articles list');
    }
    const articlesList = await response.json();

    // Optionally, sort articles here if not sorted in articlesList.json
    return articlesList.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('Error fetching articles list:', error);
    return [];
  }
}

/**
 * Fetches a single article's content based on the provided slug.
 * @param {string} slug - The unique identifier for the article.
 * @returns {Promise<Object|null>} An object containing article data or null if not found.
 */
export async function getArticleBySlug(slug) {
  try {
    const response = await fetch(`/articles/${slug}.md`);
    if (!response.ok) {
      throw new Error(`Failed to fetch article: ${slug}`);
    }
    const fileContents = await response.text();
    const { data, content } = matter(fileContents);

    return {
      slug,
      ...data,
      content,
    };
  } catch (error) {
    console.error(`Error fetching article "${slug}":`, error);
    return null;
  }
}
