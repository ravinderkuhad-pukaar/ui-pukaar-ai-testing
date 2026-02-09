import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import SEO from '../Common/SEO';

const BlogDetailTemplate = ({ 
    title, 
    date, 
    image, 
    imageAlt,
    seoTitle,
    seoDescription,
    seoKeywords,
    seoUrl,
    children 
}) => {
    return (
        <div className="pt-20 min-h-screen bg-white">
            <SEO
                title={seoTitle || title}
                description={seoDescription}
                keywords={seoKeywords}
                url={seoUrl}
            />

            {/* Blog Content Container */}
            <article className="container mx-auto px-6 md:px-8 lg:px-12 py-8 md:py-12">
                <div className="max-w-[900px] mx-auto">
                    {/* Back Button */}
                    <Link 
                        to="/blogs" 
                        className="inline-flex items-center gap-1 text-[#292929] text-sm font-medium mb-6 hover:text-primary transition-colors"
                    >
                        <ChevronLeft size={18} />
                        Back
                    </Link>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#292929] leading-tight mb-3">
                        {title}
                    </h1>

                    {/* Date */}
                    <p className="text-[#888888] text-sm mb-8">
                        {date}
                    </p>

                    {/* Featured Image */}
                    {image && (
                        <div className="mb-10">
                            <div className="rounded-2xl overflow-hidden bg-[#f5f5f5]">
                                <img 
                                    src={image} 
                                    alt={imageAlt || title}
                                    className="w-full h-auto object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                        </div>
                    )}

                    {/* Blog Content */}
                    <div className="blog-content">
                        {children}
                    </div>
                </div>
            </article>

            {/* Blog Content Styles */}
            <style>{`
                .blog-content p {
                    color: #444444;
                    font-size: 16px;
                    line-height: 1.75;
                    margin-bottom: 1.25rem;
                }

                .blog-content h2 {
                    color: #292929;
                    font-size: 24px;
                    font-weight: 700;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    line-height: 1.3;
                }

                @media (min-width: 768px) {
                    .blog-content h2 {
                        font-size: 28px;
                    }
                }

                .blog-content h3 {
                    color: #292929;
                    font-size: 20px;
                    font-weight: 700;
                    margin-top: 2rem;
                    margin-bottom: 0.75rem;
                    line-height: 1.3;
                }

                .blog-content strong {
                    font-weight: 600;
                    color: #292929;
                }

                .blog-content ul {
                    margin-bottom: 1.25rem;
                    padding-left: 0;
                }

                .blog-content ul li {
                    color: #444444;
                    font-size: 16px;
                    line-height: 1.75;
                    margin-bottom: 0.5rem;
                    padding-left: 1.5rem;
                    position: relative;
                }

                .blog-content ul li::before {
                    content: "•";
                    position: absolute;
                    left: 0.25rem;
                    color: #444444;
                }

                .blog-content a {
                    color: #734388;
                    text-decoration: none;
                }

                .blog-content a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
};

export default BlogDetailTemplate;
