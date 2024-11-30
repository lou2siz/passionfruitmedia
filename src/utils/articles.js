// src/utils/articles.js
import matter from 'gray-matter';

/**
 * Array of all articles with their metadata.
 */
const articlesList = [
  {
    id: 1,
    title: 'First Article',
    description: 'An introduction to Passionfruit Media.',
    date: '2023-01-15',
    slug: 'first-article',
  },
  {
    id: 2,
    title: 'Second Article',
    description: 'Exploring advanced features.',
    date: '2023-02-20',
    slug: 'second-article',
  },
  // Add more articles as needed
];

/**
 * Fetches the list of all articles.
 * @returns {Promise<Array>} An array of article metadata.
 */
export async function getAllArticles() {
  try {
    // Simulate asynchronous operation
    return new Promise((resolve) => {
      // Sort articles by date in descending order
      const sortedArticles = articlesList.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      resolve(sortedArticles);
    });
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
    const filePath = `/articles/${slug}.md`;
    const response = await fetch(filePath);

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
