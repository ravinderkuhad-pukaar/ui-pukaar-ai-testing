import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'About us', href: '/about-us' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-sm py-4' : 'py-5'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 cursor-pointer select-none">
                    <img 
                        src="/images/logo.png" 
                        alt="Pukaar AI Logo" 
                        className="h-10 w-10 rounded-lg object-cover"
                    />
                    <span className="font-bold text-[22px] text-primary tracking-tight">pukaar.ai</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={`text-[15px] font-medium transition-colors ${isActive(link.href) ? 'text-primary font-semibold' : 'text-[#666666] hover:text-primary'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://play.google.com/store/apps/details?id=com.prakarann.goonj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-[#683f7d] text-white px-6 py-2.5 rounded-full font-semibold text-[14px] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                        Get App
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`text-lg font-medium ${isActive(link.href) ? 'text-primary' : 'text-gray-700'
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://play.google.com/store/apps/details?id=com.prakarann.goonj"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary text-white text-center py-3 rounded-full font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get App
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
