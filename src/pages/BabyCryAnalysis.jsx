import React from 'react';
import SEO from '../components/Common/SEO';

const BabyCryAnalysis = () => {
    return (
        <div className="pt-20 min-h-screen bg-white">
            <SEO
                title="Baby Cry Analysis | Pukaar.ai"
                description="Use AI-powered baby cry analysis to better understand what your baby may be trying to communicate and respond with more confidence."
                keywords="baby cry analysis, baby cry meaning, AI baby cry, infant cry analysis, baby communication"
                url="/baby-cry-analysis"
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
                                Baby Cry Analysis
                            </h1>
                            <p className="text-[#666666] text-base md:text-lg">
                                Decode your baby&apos;s cries with AI-supported insights, so you spend less time guessing and more time comforting.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-32">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-4">
                                What is baby cry analysis?
                            </h2>
                            <p className="text-[#666666] mb-4">
                                Baby cry analysis uses patterns in sound, pitch, and duration to give you
                                clues about what your baby might be feeling—whether they&apos;re hungry,
                                uncomfortable, sleepy, or simply needing comfort.
                            </p>
                            <p className="text-[#666666]">
                                With Pukaar.ai, this analysis is combined with doctor-reviewed guidance so
                                you get practical, actionable next steps instead of just raw data.
                            </p>
                        </div>

                        <div className="bg-[#F9F9F9] rounded-2xl p-6 md:p-8 space-y-4">
                            <h3 className="text-xl font-semibold text-[#292929] mb-2">
                                How Pukaar.ai helps
                            </h3>
                            <ul className="space-y-3 text-[#666666]">
                                <li className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                                    <span>AI-assisted interpretation of your baby&apos;s cries.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                                    <span>Doctor-reviewed explanations that stay grounded in real pediatric guidance.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                                    <span>Simple next steps so you know what to try first.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BabyCryAnalysis;

