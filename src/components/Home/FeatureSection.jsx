import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const FeatureSection = ({ title, description, items, image, reversed = false }) => {
    return (
        <section className="py-20 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${reversed ? 'lg:flex-row-reverse' : ''}`}>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        <h2 className="text-[28px] md:text-[36px] font-bold text-[#292929] mb-6 leading-tight">
                            {title}
                        </h2>
                        <p className="text-[16px] text-[#666666] mb-8 leading-relaxed">
                            {description}
                        </p>

                        {items && (
                            <ul className="space-y-4">
                                {items.map((item, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="mt-1 bg-purple-100 p-1 rounded-full">
                                            <Check className="text-primary w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#292929] text-lg mb-1">{item.title}</h4>
                                            <p className="text-[#666666] text-sm">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </motion.div>

                    {/* Image/Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 w-full"
                    >
                        <img
                            src={image || "https://placehold.co/600x600/f3f4f6/734388?text=Feature+Mockup"}
                            alt={title}
                            className="rounded-3xl shadow-xl w-full max-w-lg mx-auto"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
