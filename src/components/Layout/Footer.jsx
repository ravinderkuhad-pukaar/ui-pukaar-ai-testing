import React from 'react';
import { Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer>
            {/* Main Footer Content */}
            <div className="bg-white pt-12 sm:pt-16 pb-8 sm:pb-12">
                <div className="container mx-auto px-4 sm:px-6 text-center">
                    {/* Join Now Label */}
                    <p className="text-primary font-semibold text-xs sm:text-sm tracking-wide uppercase mb-3 sm:mb-4">
                        JOIN NOW
                    </p>

                    {/* Main Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#292929] mb-3 sm:mb-4 px-2">
                        Join the Parenting Platform India's Been Waiting For
                    </h2>

                    {/* Description */}
                    <p className="text-[#666666] text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto px-4">
                        Sign up to explore smart baby care tools, expert insights, and a growing parent community
                    </p>

                    {/* Join Now Button */}
                    <a 
                        href="https://chat.whatsapp.com/K0pmK1ELEQu2Zg27Eg81fN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-primary hover:bg-primary-dark text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg font-semibold text-sm sm:text-base shadow-lg hover:-translate-y-0.5 transition-all mb-8 sm:mb-10"
                    >
                        Join Now
                    </a>

                    {/* Made with Love */}
                    <p className="text-primary text-xs sm:text-sm flex items-center justify-center gap-1.5">
                        Made with <Heart className="text-red-400 fill-red-400 w-3.5 h-3.5 sm:w-4 sm:h-4" /> from India
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-primary py-4 sm:py-4">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <p className="text-white/70 text-xs sm:text-sm text-center md:text-left">
                            © PRAKARANN INNOVATION LAB PRIVATE LIMITED 2025
                        </p>

                        {/* Right Side Links */}
                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                            <a href="mailto:admin@prakarann.com" className="text-white text-xs sm:text-sm hover:text-white/80 transition-colors">
                                Contact us
                            </a>
                            <a 
                                href="https://www.pukaarai.com/privacy-policy" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-white text-xs sm:text-sm hover:text-white/80 transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <a 
                                    href="https://www.instagram.com/pukaar.ai/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-white/80 transition-colors border border-white/30 rounded p-1 sm:p-1.5"
                                >
                                    <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
                                </a>
                                <a 
                                    href="https://www.linkedin.com/company/pukaar-ai/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-white/80 transition-colors border border-white/30 rounded p-1 sm:p-1.5"
                                >
                                    <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
