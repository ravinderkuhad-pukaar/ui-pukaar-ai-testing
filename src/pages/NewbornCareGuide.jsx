import React from 'react';
import SEO from '../components/Common/SEO';

const NewbornCareGuide = () => {
    return (
        <div className="pt-20 min-h-screen bg-white">
            <SEO
                title="Newborn Care Guide | Pukaar.ai"
                description="A simple newborn care guide for first-time parents—covering sleep, feeding, crying, and everyday care with AI-assisted support."
                keywords="newborn care guide, newborn basics, first time parents, baby care tips"
                url="/newborn-care-guide"
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
                                Newborn Care Guide
                            </h1>
                            <p className="text-[#666666] text-base md:text-lg">
                                The first weeks are intense. Here&apos;s a calm, structured guide to the everyday basics—backed by Pukaar.ai.
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
                            <span className="text-gray-400 text-sm">Newborn Care Guide Image</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits Section */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-10 text-center">
                        Newborn Essentials Every Parent Needs
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-[#F9F9F9] rounded-2xl p-6 md:p-8">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#292929] mb-3">
                                Sleep &amp; Soothing
                            </h3>
                            <p className="text-[#666666]">
                                Learn safe sleep positions, realistic expectations for newborn sleep, and gentle soothing techniques you can fall back on.
                            </p>
                        </div>
                        <div className="bg-[#F9F9F9] rounded-2xl p-6 md:p-8">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#292929] mb-3">
                                Feeding &amp; Diapers
                            </h3>
                            <p className="text-[#666666]">
                                Understand hunger cues, typical feeding patterns, and diaper output so you know what &quot;normal&quot; can look like.
                            </p>
                        </div>
                        <div className="bg-[#F9F9F9] rounded-2xl p-6 md:p-8">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#292929] mb-3">
                                Health &amp; Safety
                            </h3>
                            <p className="text-[#666666]">
                                Know which symptoms are common, when to call the doctor, and how to keep your newborn safe at home.
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
                                Why a Newborn Care Guide Helps
                            </h2>
                            <p className="text-[#666666] mb-4">
                                From safe sleep to feeding cues, it&apos;s normal to feel like there&apos;s too much to remember. This guide is designed to keep things simple and focus on what matters most day to day.
                            </p>
                            <p className="text-[#666666] mb-4">
                                Instead of searching through dozens of websites at 2 AM, you can rely on one structured resource that&apos;s been reviewed by pediatricians and designed by parents.
                            </p>
                            <p className="text-[#666666]">
                                Pukaar.ai turns overwhelming information into calm, clear steps you can act on right away.
                            </p>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <div className="w-full h-64 md:h-80 bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-400 text-sm">Newborn Care Image</span>
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
                                <span className="text-gray-400 text-sm">Care Guide Features Image</span>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-6">
                                What This Guide Covers
                            </h2>
                            <p className="text-[#666666] mb-6">
                                A practical, everyday reference for the first weeks and months of your baby&apos;s life.
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                    <p className="text-[#666666]"><strong>Safe Sleep Basics:</strong> Positioning, environment, and bedtime routines</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                    <p className="text-[#666666]"><strong>Feeding Guidance:</strong> Breastfeeding, bottle feeding, and hunger cues</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                    <p className="text-[#666666]"><strong>Crying &amp; Comfort:</strong> Understanding why babies cry and how to respond</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                    <p className="text-[#666666]"><strong>Health Monitoring:</strong> What to watch for and when to seek help</p>
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
                        What Makes This Guide Different
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#292929] mb-3">
                                    No Information Overload
                                </h3>
                                <p className="text-[#666666]">
                                    Focused on the essentials, not every edge case. You get what you need without drowning in details.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#292929] mb-3">
                                    Pediatrician-Reviewed
                                </h3>
                                <p className="text-[#666666]">
                                    Every section is reviewed by qualified doctors so you can trust the advice you&apos;re reading.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#292929] mb-3">
                                    Built by Parents
                                </h3>
                                <p className="text-[#666666]">
                                    Created by people who&apos;ve been through the newborn phase and know what actually helps at 3 AM.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#292929] mb-3">
                                    AI-Enhanced Support
                                </h3>
                                <p className="text-[#666666]">
                                    Pukaar.ai adds personalized, adaptive guidance on top of the guide so it stays relevant as your baby grows.
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
                        How to Use This Guide
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#292929] mb-2">Start with the Basics</h3>
                                    <p className="text-[#666666]">Read through the sleep, feeding, and safety essentials before your baby arrives—or whenever you need a refresher.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#292929] mb-2">Use It as a Quick Reference</h3>
                                    <p className="text-[#666666]">Bookmark sections you return to often—like soothing techniques or feeding schedules—for easy access.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                    3
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#292929] mb-2">Pair It with the App</h3>
                                    <p className="text-[#666666]">Use Pukaar.ai alongside this guide for personalized, real-time support when questions come up.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                    4
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#292929] mb-2">Share with Your Partner</h3>
                                    <p className="text-[#666666]">Keep everyone on the same page by sharing the guide and app with your co-parent or caregiver.</p>
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
                            Feel More Prepared for the Newborn Phase
                        </h2>
                        <p className="text-[#666666] text-lg mb-8">
                            Download Pukaar.ai for a guided, doctor-reviewed newborn care experience—right in your pocket.
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

export default NewbornCareGuide;
