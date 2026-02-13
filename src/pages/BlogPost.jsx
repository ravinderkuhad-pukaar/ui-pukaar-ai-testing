import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import BlogDetailTemplate from '../components/Blog/BlogDetailTemplate';
import { getBlogBySlug } from '../utils/blogs';

const BlogPost = () => {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return <Navigate to="/blogs" replace />;
  }

  return (
    <BlogDetailTemplate
      title={blog.title}
      date={blog.date}
      image={blog.image}
      imageAlt={blog.imageAlt}
      seoTitle={blog.seoTitle || blog.title}
      seoDescription={blog.seoDescription}
      seoKeywords={blog.seoKeywords}
      seoUrl={`/blogs/${blog.slug}`}
    >
      <ReactMarkdown>{blog.body}</ReactMarkdown>
    </BlogDetailTemplate>
  );
};

export default BlogPost;
