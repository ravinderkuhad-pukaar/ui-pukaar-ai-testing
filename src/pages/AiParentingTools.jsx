import React from 'react';
import SEO from '../components/Common/SEO';

const AiParentingTools = () => {
    return (
        <div className="pt-20 min-h-screen bg-white">
            <SEO
                title="AI Parenting Tools | Pukaar.ai"
                description="Explore AI-powered parenting tools by Pukaar.ai that help you understand your baby’s needs, track milestones, and feel more supported every day."
                keywords="AI parenting tools, smart parenting, baby care technology, AI for parents"
                url="/ai-parenting-tools"
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
                                AI Parenting Tools
                            </h1>
                            <p className="text-[#666666] text-base md:text-lg">
                                From cry analysis to learning content, Pukaar.ai brings together AI tools that support you through every stage of early parenting.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools Overview */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-32 space-y-10">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-4">
                            What you can do with Pukaar.ai
                        </h2>
                        <p className="text-[#666666] max-w-3xl">
                            Our AI parenting tools are designed to feel simple, helpful, and human.
                            They don&apos;t replace your instincts—they amplify them with structured information and support.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-[#F9F9F9] rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-[#292929] mb-2">Cry insights</h3>
                            <p className="text-[#666666]">
                                Use cry analysis as one more signal in understanding what your baby might be trying to say.
                            </p>
                        </div>
                        <div className="bg-[#F9F9F9] rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-[#292929] mb-2">Health & symptom support</h3>
                            <p className="text-[#666666]">
                                Learn which signs are urgent, which can be monitored at home, and when to reach out to a doctor.
                            </p>
                        </div>
                        <div className="bg-[#F9F9F9] rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-[#292929] mb-2">Daily learning</h3>
                            <p className="text-[#666666]">
                                Age-appropriate tips and content that move with your baby&apos;s development—not generic one-size-fits-all advice.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AiParentingTools;

