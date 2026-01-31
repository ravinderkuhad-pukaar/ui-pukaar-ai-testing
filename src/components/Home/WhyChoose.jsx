import React from 'react';
import { motion } from 'framer-motion';

const WhyChoose = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-[32px] md:text-[40px] font-bold text-[#292929] mb-6">
                        Why Choose Pukaar.ai?
                    </h2>
                    <p className="text-[16px] md:text-[18px] text-[#666666] max-w-4xl mx-auto leading-relaxed">
                        Pukaar.ai is your partner in parenting—helping you navigate every stage of early childhood with smart tools, trusted advice, and real-time health support.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChoose;
