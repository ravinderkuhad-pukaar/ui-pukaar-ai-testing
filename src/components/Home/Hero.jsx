import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative pt-36 pb-20 overflow-hidden">
            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto flex flex-col items-center"
                >
                    {/* Shark Tank Banner - Exact replication */}
                    <div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <span className="text-[#666] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase">AS SEEN ON</span>
                        <div className="flex items-center gap-1.5 transform translate-y-[-1px]">
                            <span className="text-shark-purple font-extrabold text-2xl sm:text-3xl tracking-tighter">SHARK TANK</span>
                            <span className="text-shark-gold font-extrabold text-2xl sm:text-3xl tracking-tighter">INDIA</span>
                        </div>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-[64px] font-bold tracking-tight text-[#292929] mb-4 leading-[1.15]">
                        Parenting Made Smarter with <br className="hidden md:block" />
                        <span className="text-primary">AI-powered insights</span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-base sm:text-lg text-[#666666] mb-12 max-w-2xl mx-auto leading-relaxed font-normal">
                        Decode your baby's emotions, get analytics, and <br className="hidden sm:block" /> ensure their well-being—all in one app
                    </p>

                    {/* Buttons */}
                    <div className="mb-16">
                        <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-medium text-base shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                            Download Now !
                        </button>
                    </div>
                </motion.div>

                {/* Hero Image / Mockup placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative max-w-6xl mx-auto mt-4"
                >
                    <img
                        src="https://placehold.co/1200x800/f3f4f6/734388?text=Hero+Carousel+Mockup"
                        alt="App Interface"
                        className="rounded-xl mx-auto"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
