import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        icon: (
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                <path d="M15 5l2 2-2 2" />
                <path d="M9 5L7 7l2 2" />
            </svg>
        ),
        title: "Create Your Parenting Hub",
        description: "Build your profile and access tools personalized for your baby's age, needs, and routine"
    },
    {
        icon: (
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6L12 2z" />
                <circle cx="18" cy="6" r="2" fill="currentColor" />
            </svg>
        ),
        title: "Go Beyond Guesswork",
        description: "From cries to milestones—let AI and experts guide your parenting choices"
    },
    {
        icon: (
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
        ),
        title: "Act Early, Parent Confidently",
        description: "Receive timely alerts and insights on health, behavior, and development"
    }
];

const HowItWorks = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#292929] mb-10 sm:mb-16"
                >
                    How it works
                </motion.h2>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-8 sm:mb-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-left sm:text-left"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                                {step.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg sm:text-xl font-bold text-[#292929] mb-2 sm:mb-3">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-8 sm:mt-12"
                >
                    <a
                        href="https://onelink.to/c63hvu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#3d3d3d] hover:bg-[#2d2d2d] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Try now
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
