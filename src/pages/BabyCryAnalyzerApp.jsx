import React from 'react';
import SEO from '../components/Common/SEO';

const BabyCryAnalyzerApp = () => {
    return (
        <div className="pt-20 min-h-screen bg-white">
            <SEO
                title="Baby Cry Analyzer App | Pukaar.ai"
                description="Discover how the Pukaar.ai baby cry analyzer app helps you understand your baby’s needs using AI and doctor-reviewed insights."
                keywords="baby cry analyzer app, AI baby app, baby cry translator, parenting app"
                url="/baby-cry-analyzer-app"
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-200/60 via-purple-100/40 to-white">
                    <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-purple-300/40 to-transparent" />
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-purple-300/40 to-transparent" />
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg p-8 md:p-12">
                            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-md overflow-hidden">
                                <img
                                    src="/images/logo.png"
                                    alt="Pukaar.ai"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-[#292929] mb-4">
                                Baby Cry Analyzer App
                            </h1>
                            <p className="text-[#666666] text-base md:text-lg">
                                A smarter way to respond to your baby&apos;s cries—powered by AI, built with pediatric input, and designed for real parents.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-32 grid md:grid-cols-3 gap-8">
                    <div className="bg-[#F9F9F9] rounded-2xl p-6">
                        <h2 className="text-xl font-semibold text-[#292929] mb-3">
                            Understand cries faster
                        </h2>
                        <p className="text-[#666666]">
                            Get AI-backed patterns and explanations so you can quickly identify whether your baby might be hungry, sleepy, or uncomfortable.
                        </p>
                    </div>
                    <div className="bg-[#F9F9F9] rounded-2xl p-6">
                        <h2 className="text-xl font-semibold text-[#292929] mb-3">
                            Feel more confident
                        </h2>
                        <p className="text-[#666666]">
                            Reduce guesswork with structured suggestions and checklists, instead of endlessly searching through conflicting advice online.
                        </p>
                    </div>
                    <div className="bg-[#F9F9F9] rounded-2xl p-6">
                        <h2 className="text-xl font-semibold text-[#292929] mb-3">
                            Built with experts
                        </h2>
                        <p className="text-[#666666]">
                            Designed with doctors, product experts, and real parents so technology always supports, not replaces, your instincts.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BabyCryAnalyzerApp;

