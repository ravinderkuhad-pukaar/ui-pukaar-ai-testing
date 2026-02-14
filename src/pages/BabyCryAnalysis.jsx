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

            {/* Hero Image Section */}
            <section className="py-8 md:py-12">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg">
                        <div className="w-full h-64 md:h-96 bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-400 text-sm">Baby Cry Analysis Image</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits Section */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-10 text-center">
                        Why Cry Analysis Matters
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-[#F9F9F9] rounded-2xl p-6 md:p-8">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#292929] mb-3">
                                Identify Patterns
                            </h3>
                            <p className="text-[#666666]">
                                AI helps detect recurring cry patterns that may indicate hunger, fatigue, discomfort, or overstimulation.
                            </p>
                        </div>
                        <div className="bg-[#F9F9F9] rounded-2xl p-6 md:p-8">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#292929] mb-3">
                                Respond with Care
                            </h3>
                            <p className="text-[#666666]">
                                Move from confusion to calm action with doctor-reviewed suggestions tailored to what your baby may need.
                            </p>
                        </div>
                        <div className="bg-[#F9F9F9] rounded-2xl p-6 md:p-8">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#292929] mb-3">
                                Track Over Time
                            </h3>
                            <p className="text-[#666666]">
                                Build a picture of your baby&apos;s habits and rhythms, making it easier to anticipate needs before they escalate.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-12 md:py-16 bg-[#F9F9F9]">
                <div className="container mx-auto px-6 md:px-32">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-6">
                                What Is Baby Cry Analysis?
                            </h2>
                            <p className="text-[#666666] mb-4">
                                Baby cry analysis uses patterns in sound, pitch, and duration to give you clues about what your baby might be feeling—whether they&apos;re hungry, uncomfortable, sleepy, or simply needing comfort.
                            </p>
                            <p className="text-[#666666] mb-4">
                                With Pukaar.ai, this analysis is combined with doctor-reviewed guidance so you get practical, actionable next steps instead of just raw data.
                            </p>
                            <p className="text-[#666666]">
                                It&apos;s not about replacing your intuition—it&apos;s about giving you one more tool to feel confident in your response.
                            </p>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <div className="w-full h-64 md:h-80 bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-400 text-sm">Cry Analysis Image</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-32">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <div className="w-full h-64 md:h-80 bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-400 text-sm">Analysis Features Image</span>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-6">
                                How Pukaar.ai Analyzes Cries
                            </h2>
                            <p className="text-[#666666] mb-6">
                                Our analysis goes beyond simple sound detection to provide meaningful, doctor-informed context for every cry.
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                    <p className="text-[#666666]"><strong>Sound Pattern Matching:</strong> AI compares your baby&apos;s cry against known patterns</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                    <p className="text-[#666666]"><strong>Contextual Suggestions:</strong> Guidance considers time of day, last feeding, and more</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                    <p className="text-[#666666]"><strong>Doctor-Reviewed Outputs:</strong> Every insight is validated by pediatric professionals</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                    <p className="text-[#666666]"><strong>Learning Engine:</strong> The more you use it, the better it understands your baby</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Makes It Different Section */}
            <section className="py-12 md:py-16 bg-[#F9F9F9]">
                <div className="container mx-auto px-6 md:px-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-8 text-center">
                        What Sets Our Analysis Apart
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#292929] mb-3">
                                    Beyond Basic Detection
                                </h3>
                                <p className="text-[#666666]">
                                    We don&apos;t just detect crying—we analyze pitch, rhythm, and intensity to suggest possible causes.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#292929] mb-3">
                                    Grounded in Science
                                </h3>
                                <p className="text-[#666666]">
                                    Our models are built on pediatric research about infant communication and cry characteristics.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#292929] mb-3">
                                    Actionable, Not Alarmist
                                </h3>
                                <p className="text-[#666666]">
                                    Results are designed to calm and guide you—not create unnecessary anxiety about normal baby behavior.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#292929] mb-3">
                                    Personalized Over Time
                                </h3>
                                <p className="text-[#666666]">
                                    The analysis adapts to your baby&apos;s unique patterns, becoming more accurate with continued use.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-8 text-center">
                        How to Use Cry Analysis
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#292929] mb-2">Open the App</h3>
                                    <p className="text-[#666666]">Launch Pukaar.ai when your baby starts crying. The interface is designed for one-handed, eyes-free use.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#292929] mb-2">Capture the Cry</h3>
                                    <p className="text-[#666666]">Tap record and hold your phone near your baby for a few seconds. That&apos;s all the AI needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                    3
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#292929] mb-2">Review the Insights</h3>
                                    <p className="text-[#666666]">See possible reasons for the cry along with suggested soothing actions reviewed by pediatricians.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                    4
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#292929] mb-2">Log and Learn</h3>
                                    <p className="text-[#666666]">Confirm what worked so the app improves its suggestions over time, tailored to your baby.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-12 md:py-16 bg-gradient-to-b from-purple-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-4">
                            Start Understanding Your Baby&apos;s Cries Today
                        </h2>
                        <p className="text-[#666666] text-lg mb-8">
                            Try Pukaar.ai&apos;s baby cry analysis and gain the confidence to respond to your baby with clarity and calm.
                        </p>
                        <a href="https://onelink.to/c63hvu" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg">
                            Download Pukaar.ai App
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BabyCryAnalysis;
