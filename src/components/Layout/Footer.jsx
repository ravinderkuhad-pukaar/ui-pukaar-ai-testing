import React from 'react';
import { Instagram, Linkedin, Twitter, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="container mx-auto px-6 text-center">

                <h2 className="text-3xl font-bold text-[#292929] mb-8">
                    Join the Parenting Platform India’s Been Waiting For
                </h2>

                <button className="bg-primary hover:bg-primary-dark text-white px-10 py-3.5 rounded-full font-bold text-lg shadow-lg hover:-translate-y-1 transition-all mb-16">
                    Join Now
                </button>

                <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-100 pt-10">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <Link to="/" className="font-bold text-2xl text-primary tracking-tight">pukaar.ai</Link>
                    </div>

                    <p className="text-gray-500 text-sm flex items-center gap-1 mb-4 md:mb-0">
                        Made with <Heart className="text-red-500 fill-red-500 w-4 h-4" /> from India
                    </p>

                    <div className="flex gap-4">
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
                    </div>
                </div>

                <div className="mt-8 text-xs text-gray-400 space-x-4">
                    <a href="#" className="hover:text-primary">Privacy Policy</a>
                    <span>•</span>
                    <a href="#" className="hover:text-primary">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
