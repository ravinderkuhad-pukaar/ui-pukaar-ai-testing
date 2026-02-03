import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const screenshots = [
    '/images/screenshot-1.png',
    '/images/screenshot-2.png',
    '/images/screenshot-3.png',
    '/images/screenshot-4.png',
    '/images/screenshot-5.png',
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(2);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % screenshots.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const getVisibleScreens = () => {
        const screens = [];
        const range = isMobile ? 1 : 2;
        for (let i = -range; i <= range; i++) {
            const index = (currentIndex + i + screenshots.length) % screenshots.length;
            screens.push({ index, position: i });
        }
        return screens;
    };

    return (
        <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-20 overflow-hidden bg-gradient-to-b from-white to-gray-50/30">
            <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto flex flex-col items-center"
                >
                    {/* Shark Tank Banner */}
                    <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                        <span className="text-[#666] text-xs sm:text-sm font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase">AS SEEN ON</span>
                        <div className="flex items-center gap-1.5 transform translate-y-[-1px]">
                            <span className="text-shark-purple font-extrabold text-xl sm:text-2xl md:text-3xl tracking-tighter">SHARK TANK</span>
                            <span className="text-shark-gold font-extrabold text-xl sm:text-2xl md:text-3xl tracking-tighter">INDIA</span>
                        </div>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight text-[#292929] mb-3 sm:mb-4 leading-[1.15] px-2">
                        Parenting Made Smarter with <br className="hidden sm:block" />
                        <span className="text-primary">AI-powered insights</span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-sm sm:text-base md:text-lg text-[#666666] mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-normal px-4">
                        Decode your baby's emotions, get analytics, and ensure their well-being—all in one app
                    </p>

                    {/* Buttons */}
                    <div className="mb-10 sm:mb-16">
                        <a 
                            href="https://onelink.to/c63hvu" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-primary hover:bg-primary-dark text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium text-sm sm:text-base shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Download Now !
                        </a>
                    </div>
                </motion.div>

                {/* Multi-Phone Mockup Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full max-w-7xl mx-auto mt-4 h-[420px] sm:h-[500px] md:h-[680px]"
                >
                    <div className="relative w-full h-full flex items-center justify-center">
                        <AnimatePresence mode="popLayout">
                            {getVisibleScreens().map(({ index, position }) => {
                                const isCenter = position === 0;
                                const isAdjacent = Math.abs(position) === 1;

                                // Mobile-specific values
                                const mobileX = position * (isAdjacent ? 140 : 0);
                                const mobileScale = isCenter ? 1 : 0.7;
                                const mobileOpacity = isCenter ? 1 : 0.5;

                                // Desktop values
                                const desktopX = position * (isCenter ? 0 : isAdjacent ? 320 : 560);
                                const desktopScale = isCenter ? 1 : isAdjacent ? 0.75 : 0.55;
                                const desktopOpacity = isCenter ? 1 : isAdjacent ? 0.6 : 0.3;

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{
                                            opacity: isMobile ? mobileOpacity : desktopOpacity,
                                            scale: isMobile ? mobileScale : desktopScale,
                                            x: isMobile ? mobileX : desktopX,
                                            y: isCenter ? 0 : isMobile ? 20 : (isAdjacent ? 30 : 60),
                                            zIndex: isCenter ? 30 : 20,
                                        }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{
                                            duration: 0.6,
                                            ease: [0.32, 0.72, 0, 1],
                                        }}
                                        className="absolute"
                                        style={{
                                            filter: isCenter ? 'none' : 'blur(1px)',
                                        }}
                                    >
                                        {/* Phone Frame */}
                                        <div className="relative w-[200px] sm:w-[240px] md:w-[320px] h-[400px] sm:h-[480px] md:h-[650px]">
                                            {/* Phone Border/Frame */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] shadow-2xl p-1 sm:p-1.5">
                                                {/* Screen */}
                                                <div className="relative w-full h-full bg-white rounded-[1.75rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
                                                    {/* Screenshot */}
                                                    <img
                                                        src={screenshots[index]}
                                                        alt={`App Screenshot ${index + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <button
                            onClick={() => setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)}
                            className="absolute left-2 sm:left-4 md:left-16 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-xl z-40 transition-all duration-300 hover:scale-110"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setCurrentIndex((prev) => (prev + 1) % screenshots.length)}
                            className="absolute right-2 sm:right-4 md:right-16 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-xl z-40 transition-all duration-300 hover:scale-110"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center gap-2 mt-4 sm:mt-8">
                        {screenshots.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 transition-all duration-300 rounded-full ${currentIndex === index ? 'w-6 sm:w-8 bg-primary' : 'w-2 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
