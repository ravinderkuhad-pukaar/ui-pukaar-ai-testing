import fm from 'front-matter';

const markdownFiles = import.meta.glob('/src/content/blogs/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const blogs = Object.entries(markdownFiles).map(([path, raw]) => {
  const { attributes, body } = fm(raw);
  const fileName = path.split('/').pop().replace('.md', '');
  return {
    ...attributes,
    slug: attributes.slug || fileName,
    body,
  };
});

// Sort by date descending (newest first)
blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

export function getAllBlogs() {
  return blogs;
}

export function getBlogBySlug(slug) {
  return blogs.find((blog) => blog.slug === slug);
}
