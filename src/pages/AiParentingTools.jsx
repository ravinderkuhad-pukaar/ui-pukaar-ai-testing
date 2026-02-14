import React from 'react';
import SEO from '../components/Common/SEO';

const AiParentingTools = () => {
    return (
        <div className="pt-20 min-h-screen bg-white">
            <SEO
                title="AI Parenting Tools | Pukaar.ai"
                description="Explore AI-powered parenting tools by Pukaar.ai that help you understand your baby's needs, track milestones, and feel more supported every day."
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

            {/* Hero Image Section */}
            <section className="py-8 md:py-12">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg">
                        <div className="w-full h-64 md:h-96 bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-400 text-sm">AI Parenting Tools Image</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits Section */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-10 text-center">
                        What You Can Do with Pukaar.ai
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-[#F9F9F9] rounded-2xl p-6 md:p-8">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#292929] mb-3">
                                Cry Insights
                            </h3>
                            <p className="text-[#666666]">
                                Use cry analysis as one more signal in understanding what your baby might be trying to say.
                            </p>
                        </div>
                        <div className="bg-[#F9F9F9] rounded-2xl p-6 md:p-8">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#292929] mb-3">
                                Health &amp; Symptom Support
                            </h3>
                            <p className="text-[#666666]">
                                Learn which signs are urgent, which can be monitored at home, and when to reach out to a doctor.
                            </p>
                        </div>
                        <div className="bg-[#F9F9F9] rounded-2xl p-6 md:p-8">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#292929] mb-3">
                                Daily Learning
                            </h3>
                            <p className="text-[#666666]">
                                Age-appropriate tips and content that move with your baby&apos;s development—not generic one-size-fits-all advice.
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
                                How AI Makes Parenting Easier
                            </h2>
                            <p className="text-[#666666] mb-4">
                                AI parenting tools aren&apos;t about replacing your judgment—they&apos;re about giving you organized, reliable information when you need it most.
                            </p>
                            <p className="text-[#666666] mb-4">
                                Whether it&apos;s 3 AM and you&apos;re trying to figure out why your baby won&apos;t stop crying, or you&apos;re unsure if a rash needs a doctor visit, Pukaar.ai provides calm, structured guidance.
                            </p>
                            <p className="text-[#666666]">
                                Every tool in the app is designed with real parenting scenarios in mind—built by parents, reviewed by doctors.
                            </p>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <div className="w-full h-64 md:h-80 bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-400 text-sm">AI Parenting Image</span>
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
                                <span className="text-gray-400 text-sm">Tools Features Image</span>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-6">
                                Tools Built for Real Life
                            </h2>
                            <p className="text-[#666666] mb-6">
                                Our AI parenting tools are designed to feel simple, helpful, and human. They don&apos;t replace your instincts—they amplify them.
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                    <p className="text-[#666666]"><strong>Cry Analyzer:</strong> Understand what your baby&apos;s cries may mean</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                    <p className="text-[#666666]"><strong>Symptom Checker:</strong> Know when to monitor and when to call the doctor</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                    <p className="text-[#666666]"><strong>Sleep Guidance:</strong> Practical tips for better sleep routines</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                    <p className="text-[#666666]"><strong>Daily Content:</strong> Age-specific tips delivered when you need them</p>
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
                        Why Parents Choose Pukaar.ai
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#292929] mb-3">
                                    Doctor-Approved Content
                                </h3>
                                <p className="text-[#666666]">
                                    All tools and suggestions are reviewed by qualified pediatricians so you can trust the guidance you receive.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#292929] mb-3">
                                    Designed for Tired Parents
                                </h3>
                                <p className="text-[#666666]">
                                    Clean, simple interface that works when you&apos;re exhausted. No overwhelming dashboards or confusing menus.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#292929] mb-3">
                                    Grows with Your Baby
                                </h3>
                                <p className="text-[#666666]">
                                    Content and tools adapt as your baby develops, staying relevant from newborn through toddler stages.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#292929] mb-3">
                                    Privacy Protected
                                </h3>
                                <p className="text-[#666666]">
                                    Your family&apos;s data stays private and secure. We never sell or share personal information.
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
                        Getting Started with AI Parenting Tools
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#292929] mb-2">Download the App</h3>
                                    <p className="text-[#666666]">Get Pukaar.ai from the app store and create your profile in under a minute.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#292929] mb-2">Set Up Your Baby&apos;s Profile</h3>
                                    <p className="text-[#666666]">Add your baby&apos;s age and basic details so the tools can deliver personalized content and guidance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                    3
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#292929] mb-2">Explore the Tools</h3>
                                    <p className="text-[#666666]">From cry analysis to symptom checks, browse the tools and use what feels most helpful for your day.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                    4
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#292929] mb-2">Build Your Routine</h3>
                                    <p className="text-[#666666]">Over time, the app becomes part of your daily rhythm—there when you need it, quiet when you don&apos;t.</p>
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
                            Ready to Try Smarter Parenting Tools?
                        </h2>
                        <p className="text-[#666666] text-lg mb-8">
                            Download Pukaar.ai and discover AI tools designed to make early parenting feel a little more supported.
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

export default AiParentingTools;
