import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogs } from '../data/blogs';
import SEO from '../components/Common/SEO';

const Blogs = () => {

    return (
        <div className="pt-20 min-h-screen bg-white">
            <SEO
                title="Blogs"
                description="Insights, Tips, and Stories for Empowered Parenting. Read our latest blogs on AI baby care and smart parenting."
                keywords="parenting tips, baby care blog, infant health, parenting advice, baby development"
                url="/blogs"
            />
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Purple Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-200/60 via-purple-100/40 to-white">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-purple-300/50 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-purple-300/50 to-transparent"></div>
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
                    {/* Centered Card */}
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg p-8 md:p-12 text-center">
                            {/* Logo Icon */}
                            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md overflow-hidden">
                                <img 
                                    src="/images/logo.png" 
                                    alt="Pukaar AI" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl font-bold text-[#292929] mb-3">
                                Blogs
                            </h1>
                            
                            {/* Subtitle */}
                            <p className="text-[#666666] text-base md:text-lg">
                                Insights, Tips, and Stories for Empowered Parenting
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog List Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 md:px-32">
                    <div className="flex flex-col gap-8">
                        {blogs.map((blog, index) => (
                            <div
                                key={index}
                                className="bg-[#F9F9F9] rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 hover:shadow-lg transition-shadow duration-300 items-center"
                            >
                                {/* Thumbnail Image */}
                                <div className="w-full md:w-1/3 h-56 md:h-48 flex-shrink-0">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover rounded-[1.5rem]"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col justify-center items-start">
                                    <h2 className="text-xl md:text-2xl font-bold text-[#292929] mb-6 leading-tight hover:text-primary transition-colors cursor-pointer">
                                        {blog.title}
                                    </h2>

                                    {blog.link.startsWith('/') ? (
                                        <Link to={blog.link} className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group">
                                            Read more
                                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    ) : (
                                        <a href={blog.link} className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group">
                                            Read more
                                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;
