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

            {/* Guide Sections */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-32 space-y-10">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-3">Newborn essentials</h2>
                        <p className="text-[#666666]">
                            From safe sleep to feeding cues, it&apos;s normal to feel like there&apos;s too much to remember.
                            This guide is designed to keep things simple and focus on what matters most day to day.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#F9F9F9] rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-[#292929] mb-2">Sleep & soothing</h3>
                            <p className="text-[#666666]">
                                Learn safe sleep positions, realistic expectations for newborn sleep, and gentle soothing techniques you can fall back on.
                            </p>
                        </div>
                        <div className="bg-[#F9F9F9] rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-[#292929] mb-2">Feeding & diapers</h3>
                            <p className="text-[#666666]">
                                Understand hunger cues, typical feeding patterns, and diaper output so you know what &quot;normal&quot; can look like.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewbornCareGuide;

