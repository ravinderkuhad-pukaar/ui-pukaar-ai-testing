import React from 'react';
import SEO from '../components/Common/SEO';

const BabyHealthSymptoms = () => {
    return (
        <div className="pt-20 min-h-screen bg-white">
            <SEO
                title="Baby Health Symptoms | Pukaar.ai"
                description="Learn which baby health symptoms are common, which need monitoring, and when it's important to call your pediatrician."
                keywords="baby health symptoms, newborn health signs, when to call doctor, baby warning signs"
                url="/baby-health-symptoms"
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
                                Baby Health Symptoms
                            </h1>
                            <p className="text-[#666666] text-base md:text-lg">
                                Not every symptom is an emergency, but some deserve quick attention. Learn how to read the signs with calm, clear guidance.
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
                            <span className="text-gray-400 text-sm">Baby Health Symptoms Image</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits Section */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-10 text-center">
                        Common vs. Concerning Symptoms
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-[#F9F9F9] rounded-2xl p-6 md:p-8">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#292929] mb-3">
                                Know What&apos;s Normal
                            </h3>
                            <p className="text-[#666666]">
                                Many symptoms like mild fussiness, occasional spit-up, and hiccups are perfectly normal in newborns.
                            </p>
                        </div>
                        <div className="bg-[#F9F9F9] rounded-2xl p-6 md:p-8">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#292929] mb-3">
                                Watch &amp; Monitor
                            </h3>
                            <p className="text-[#666666]">
                                Some symptoms need watching over a few hours or days. Learn what to track so you can share details with your doctor.
                            </p>
                        </div>
                        <div className="bg-[#F9F9F9] rounded-2xl p-6 md:p-8">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#292929] mb-3">
                                When to Call the Doctor
                            </h3>
                            <p className="text-[#666666]">
                                High fever, breathing changes, or persistent lethargy are signs to contact your pediatrician right away.
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
                                How Pukaar.ai Helps with Symptoms
                            </h2>
                            <p className="text-[#666666] mb-4">
                                Every baby will have moments of fussiness, gas, or mild congestion. Pukaar.ai helps you understand when symptoms are typically mild and when they might signal something worth checking with your doctor.
                            </p>
                            <p className="text-[#666666] mb-4">
                                Instead of panic-searching symptoms online and finding worst-case scenarios, you get calm, structured guidance reviewed by pediatricians.
                            </p>
                            <p className="text-[#666666]">
                                The app also helps you log and track symptoms over time, making doctor visits more productive and focused.
                            </p>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <div className="w-full h-64 md:h-80 bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-400 text-sm">Symptom Support Image</span>
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
                                <span className="text-gray-400 text-sm">Health Features Image</span>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-6">
                                Symptoms the App Covers
                            </h2>
                            <p className="text-[#666666] mb-6">
                                Pukaar.ai provides guidance on the most common baby health symptoms parents encounter.
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                    <p className="text-[#666666]"><strong>Fever &amp; Temperature:</strong> What counts as fever and when to act</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                    <p className="text-[#666666]"><strong>Rashes &amp; Skin Changes:</strong> Common newborn rashes vs. ones that need attention</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                    <p className="text-[#666666]"><strong>Breathing Patterns:</strong> Normal newborn breathing vs. signs of distress</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                    <p className="text-[#666666]"><strong>Feeding Issues:</strong> Spit-up, reflux, and changes in appetite</p>
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
                        Why Trust Pukaar.ai for Health Guidance
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#292929] mb-3">
                                    Doctor-Reviewed Content
                                </h3>
                                <p className="text-[#666666]">
                                    All symptom guidance is written and reviewed by qualified pediatricians, not crowd-sourced forums.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#292929] mb-3">
                                    Calm, Not Alarming
                                </h3>
                                <p className="text-[#666666]">
                                    We present information clearly without causing unnecessary panic—helping you think, not worry.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#292929] mb-3">
                                    Track What You Notice
                                </h3>
                                <p className="text-[#666666]">
                                    Log patterns like fever, rashes, or feeding changes to make pediatrician conversations more focused.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#292929] mb-3">
                                    Never Replaces a Doctor
                                </h3>
                                <p className="text-[#666666]">
                                    Pukaar.ai supports but never replaces professional medical care. If you&apos;re worried, always call your doctor.
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
                        How to Use the Symptom Guide
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#292929] mb-2">Notice a Symptom</h3>
                                    <p className="text-[#666666]">When something seems off—a rash, fever, unusual fussiness—open the app for initial guidance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#292929] mb-2">Check the Guidance</h3>
                                    <p className="text-[#666666]">Read doctor-reviewed information about the symptom, including whether it&apos;s typically mild or needs attention.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                    3
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#292929] mb-2">Log and Monitor</h3>
                                    <p className="text-[#666666]">Track the symptom over time so you have clear information to share with your pediatrician if needed.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                    4
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#292929] mb-2">Know When to Call</h3>
                                    <p className="text-[#666666]">Follow clear guidelines on when a symptom warrants a doctor visit versus home monitoring.</p>
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
                            Stay Informed, Stay Calm
                        </h2>
                        <p className="text-[#666666] text-lg mb-8">
                            Download Pukaar.ai for doctor-reviewed health symptom guidance that helps you make informed decisions with confidence.
                        </p>
                        <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg">
                            Download Pukaar.ai App
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BabyHealthSymptoms;
