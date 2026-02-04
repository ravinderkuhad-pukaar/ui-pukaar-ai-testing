import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import SEO from '../components/Common/SEO';

const AboutUs = () => {
    return (
        <div className="pt-20 bg-white">
            <SEO
                title="About Us"
                description="Learn more about Pukaar.ai and our mission to empower parents with AI-driven childcare solutions. Meet the team behind the innovation."
                keywords="about pukaar, baby care startup, AI parenting company, childcare technology"
                url="/about"
            />
            
            {/* Hero Section with Purple Gradient */}
            <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-100 via-purple-50 to-white">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-30">
                        <div className="absolute top-20 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-purple-200 rounded-full blur-3xl"></div>
                        <div className="absolute top-10 right-1/4 w-24 sm:w-48 h-24 sm:h-48 bg-purple-300 rounded-full blur-3xl"></div>
                    </div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl mx-auto"
                    >
                        {/* Card Container */}
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl py-8 sm:py-12 px-6 sm:px-8 border border-white/50 shadow-xl">
                            <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 shadow-lg">
                                <img src="/images/logo.png" alt="Pukaar.ai" className="w-full h-full object-cover" />
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#292929] mb-3 sm:mb-4">About Pukaar.ai</h1>
                            <p className="text-base sm:text-lg text-[#666666] max-w-xl mx-auto">
                                Dedicated to making parenting simpler, smarter, and more rewarding.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm mb-2 sm:mb-3 block">OUR MISSION</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#292929] mb-4 sm:mb-6">Empowering Parents with the Power of AI</h2>
                        <p className="text-[#666666] text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                            We understand the challenges of modern parenting. Pukaar.ai was founded with the mission to bridge the communication gap between parents and their babies using innovative AI technology.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* How It All Began Section */}
            <section className="py-12 sm:py-16 bg-gray-50/50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 max-w-6xl mx-auto">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex-1 w-full"
                        >
                            <div className="bg-purple-50 rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex items-center justify-center">
                                <img
                                    src="/images/about-6.png"
                                    alt="How it all began"
                                    className="w-full max-w-[250px] sm:max-w-sm rounded-xl sm:rounded-2xl shadow-lg"
                                />
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex-1 text-center md:text-left"
                        >
                            <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm mb-2 sm:mb-3 block">OUR MISSION</span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#292929] mb-4 sm:mb-6">How It All Began</h2>
                            <p className="text-[#666666] text-base sm:text-lg leading-relaxed">
                                Karan (Founder), realized that understanding a baby's needs shouldn't rely on guesswork. With a team of passionate developers, pediatricians, and designers, Pukaar.ai was born to provide parents with actionable insights, rooted in science and delivered through technology.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision Section - Shaping the Future */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-12 max-w-6xl mx-auto">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex-1 w-full"
                        >
                            <div className="bg-purple-50 rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex items-center justify-center">
                                <img
                                    src="/images/about-5.png"
                                    alt="Shaping the future"
                                    className="w-full max-w-[250px] sm:max-w-sm rounded-xl sm:rounded-2xl shadow-lg"
                                />
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex-1 text-center md:text-left"
                        >
                            <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm mb-2 sm:mb-3 block">OUR VISION</span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#292929] mb-4 sm:mb-6">Shaping the Future of Parenting</h2>
                            <p className="text-[#666666] text-base sm:text-lg leading-relaxed">
                                We envision a world where every parent feels confident and connected to their child. By leveraging AI, we're redefining infant care to ensure happier, healthier families.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm mb-2 sm:mb-3 block">OUR TEAM</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#292929] mb-3 sm:mb-4">Minds behind the creation</h2>
                        <p className="text-[#666666] text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-16">
                            Discover the dedicated individuals driving Pukaar.ai forward – meet our talented team members behind the innovation.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
                        {/* Member 1 - Karan */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0 }}
                            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-start justify-between mb-3 sm:mb-4">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-purple-100">
                                    <img src="/images/karan.jpeg" alt="Karan Birpali" className="w-full h-full object-cover object-top" />
                                </div>
                                <a 
                                    href="https://www.linkedin.com/in/karan-birpali/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-7 h-7 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                                >
                                    <Linkedin size={14} className="sm:w-4 sm:h-4" />
                                </a>
                            </div>
                            <div className="text-left">
                                <h3 className="text-base sm:text-lg font-bold text-[#292929]">Karan Birpali</h3>
                                <p className="text-[#666666] text-xs sm:text-sm">Founder & CEO , IIT Delhi</p>
                            </div>
                        </motion.div>

                        {/* Member 2 - Akash */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-start justify-between mb-3 sm:mb-4">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-purple-100">
                                    <img src="/images/akas.jpeg" alt="Akash Dangee" className="w-full h-full object-cover object-top" />
                                </div>
                                <a 
                                    href="https://www.linkedin.com/in/akash-dangee/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-7 h-7 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                                >
                                    <Linkedin size={14} className="sm:w-4 sm:h-4" />
                                </a>
                            </div>
                            <div className="text-left">
                                <h3 className="text-base sm:text-lg font-bold text-[#292929]">Akash Dangee</h3>
                                <p className="text-[#666666] text-xs sm:text-sm">Co-Founder & CPO, IIT Roorkee</p>
                            </div>
                        </motion.div>

                        {/* Member 3 - Mishal */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-start justify-between mb-3 sm:mb-4">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-purple-100">
                                    <img src="/images/mish.png" alt="Mishal Raj" className="w-full h-full object-cover object-top" />
                                </div>
                                <a 
                                    href="https://www.linkedin.com/in/mishal-raj-b74137169/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-7 h-7 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                                >
                                    <Linkedin size={14} className="sm:w-4 sm:h-4" />
                                </a>
                            </div>
                            <div className="text-left">
                                <h3 className="text-base sm:text-lg font-bold text-[#292929]">Mishal Raj</h3>
                                <p className="text-[#666666] text-xs sm:text-sm">CTO, Ex-Grab , Ex-Razorpay</p>
                            </div>
                        </motion.div>

                        {/* Member 4 - Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-start justify-between mb-3 sm:mb-4">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-purple-100 bg-gray-100 flex items-center justify-center">
                                    <span className="text-2xl text-gray-400">?</span>
                                </div>
                                <a 
                                    href="#" 
                                    className="w-7 h-7 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                                >
                                    <Linkedin size={14} className="sm:w-4 sm:h-4" />
                                </a>
                            </div>
                            <div className="text-left">
                                <h3 className="text-base sm:text-lg font-bold text-[#292929]">Team Member</h3>
                                <p className="text-[#666666] text-xs sm:text-sm">Role, Background</p>
                            </div>
                        </motion.div>

                        {/* Member 5 - Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-start justify-between mb-3 sm:mb-4">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-purple-100 bg-gray-100 flex items-center justify-center">
                                    <span className="text-2xl text-gray-400">?</span>
                                </div>
                                <a 
                                    href="#" 
                                    className="w-7 h-7 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                                >
                                    <Linkedin size={14} className="sm:w-4 sm:h-4" />
                                </a>
                            </div>
                            <div className="text-left">
                                <h3 className="text-base sm:text-lg font-bold text-[#292929]">Team Member</h3>
                                <p className="text-[#666666] text-xs sm:text-sm">Role, Background</p>
                            </div>
                        </motion.div>

                        {/* Member 6 - Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-start justify-between mb-3 sm:mb-4">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-purple-100 bg-gray-100 flex items-center justify-center">
                                    <span className="text-2xl text-gray-400">?</span>
                                </div>
                                <a 
                                    href="#" 
                                    className="w-7 h-7 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                                >
                                    <Linkedin size={14} className="sm:w-4 sm:h-4" />
                                </a>
                            </div>
                            <div className="text-left">
                                <h3 className="text-base sm:text-lg font-bold text-[#292929]">Team Member</h3>
                                <p className="text-[#666666] text-xs sm:text-sm">Role, Background</p>
                            </div>
                        </motion.div>

                        {/* Member 7 - Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-start justify-between mb-3 sm:mb-4">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-purple-100 bg-gray-100 flex items-center justify-center">
                                    <span className="text-2xl text-gray-400">?</span>
                                </div>
                                <a 
                                    href="#" 
                                    className="w-7 h-7 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                                >
                                    <Linkedin size={14} className="sm:w-4 sm:h-4" />
                                </a>
                            </div>
                            <div className="text-left">
                                <h3 className="text-base sm:text-lg font-bold text-[#292929]">Team Member</h3>
                                <p className="text-[#666666] text-xs sm:text-sm">Role, Background</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
