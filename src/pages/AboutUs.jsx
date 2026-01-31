import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const AboutUs = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="mx-auto w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6">
                            <span className="text-3xl">P</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#292929] mb-4">About Pukaar.ai</h1>
                        <p className="text-lg text-[#666666] max-w-2xl mx-auto">
                            Dedicated to making parenting simpler, smarter, and more rewarding.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-[#292929] mb-6">Empowering Parents with the Power of AI</h2>
                        <p className="text-[#666666] text-lg leading-relaxed">
                            We understand the challenges of modern parenting. Pukaar.ai was founded with the mission to bridge the communication gap between parents and their babies using innovative AI technology.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img
                            src="https://placehold.co/500x400/f3f4f6/734388?text=Mission+Illustration"
                            alt="Mission"
                            className="rounded-3xl shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-20 bg-purple-50/50">
                <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-16">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-[#292929] mb-6">Shaping the Future of Parenting</h2>
                        <p className="text-[#666666] text-lg leading-relaxed">
                            We envision a world where every parent feels confident and connected to their child. By leveraging AI, we're redefining infant care to ensure happier, healthier families.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img
                            src="https://placehold.co/500x400/f3f4f6/734388?text=Vision+Illustration"
                            alt="Vision"
                            className="rounded-3xl shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Our team</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#292929] mb-4">Minds behind the creation</h2>
                    <p className="text-[#666666] max-w-2xl mx-auto mb-16">
                        Discover the dedicated individuals driving Pukaar.ai forward – meet our talented team members behind the innovation.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                        {/* Member 1 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-purple-100">
                                <img src="https://placehold.co/400x400/e2e8f0/475569?text=Karan" alt="Karan Birpali" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-bold text-[#292929]">Karan Birpali</h3>
                            <p className="text-primary font-medium mb-3">Founder & CEO</p>
                            <p className="text-sm text-gray-500 mb-4">IIT Delhi</p>
                            <a href="#" className="text-gray-400 hover:text-[#0077b5] transition-colors"><Linkedin size={20} /></a>
                        </div>

                        {/* Member 2 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-purple-100">
                                <img src="https://placehold.co/400x400/e2e8f0/475569?text=Akash" alt="Akash Dangee" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-bold text-[#292929]">Akash Dangee</h3>
                            <p className="text-primary font-medium mb-3">Co-Founder & CPO</p>
                            <p className="text-sm text-gray-500 mb-4">IIT Roorkee</p>
                            <a href="#" className="text-gray-400 hover:text-[#0077b5] transition-colors"><Linkedin size={20} /></a>
                        </div>

                        {/* Member 3 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-purple-100">
                                <img src="https://placehold.co/400x400/e2e8f0/475569?text=Mishal" alt="Mishal Raj" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-bold text-[#292929]">Mishal Raj</h3>
                            <p className="text-primary font-medium mb-3">CTO</p>
                            <p className="text-sm text-gray-500 mb-4">Ex-Grab, Ex-Razorpay</p>
                            <a href="#" className="text-gray-400 hover:text-[#0077b5] transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
