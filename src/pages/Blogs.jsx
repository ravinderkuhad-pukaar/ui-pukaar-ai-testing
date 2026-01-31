import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, HeartHandshake } from 'lucide-react';
import { blogs } from '../data/blogs';

const Blogs = () => {

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto flex flex-col items-center"
                    >
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 text-primary">
                            <HeartHandshake size={32} />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#292929] mb-4">Blogs</h1>
                        <p className="text-lg text-[#666666] max-w-2xl mx-auto">
                            Insights, Tips, and Stories for Empowered Parenting
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog List Section */}
            <section className="pb-20">
                <div className="container mx-auto px-6 md:px-32">
                    <div className="flex flex-col gap-8">
                        {blogs.map((blog, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
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

                                    <a href={blog.link} className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group">
                                        Read more
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;
