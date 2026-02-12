import React from 'react';
import SEO from '../components/Common/SEO';

const BabyFeedingGuide = () => {
    return (
        <div className="pt-20 min-h-screen bg-white">
            <SEO
                title="Baby Feeding Guide | Pukaar.ai"
                description="A practical baby feeding guide for new parents, with tips on hunger cues, feeding patterns, and when to seek help."
                keywords="baby feeding guide, newborn feeding, breastfeeding tips, bottle feeding tips"
                url="/baby-feeding-guide"
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
                                Baby Feeding Guide
                            </h1>
                            <p className="text-[#666666] text-base md:text-lg">
                                Every baby is different. This guide helps you understand patterns, not perfection—so you can feed with more confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feeding Basics */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-32 space-y-10">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-3">
                            Feeding basics for newborns
                        </h2>
                        <p className="text-[#666666] max-w-3xl">
                            Whether you&apos;re breastfeeding, formula-feeding, or doing a mix of both,
                            it&apos;s normal to have questions. Pukaar.ai helps you track patterns while
                            staying focused on your baby, not just the numbers.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#F9F9F9] rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-[#292929] mb-2">Hunger cues</h3>
                            <p className="text-[#666666]">
                                Learn early hunger signs—like rooting and hand-to-mouth movements—so you can respond before crying becomes intense.
                            </p>
                        </div>
                        <div className="bg-[#F9F9F9] rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-[#292929] mb-2">When to reach out</h3>
                            <p className="text-[#666666]">
                                Get simple guidance on when feeding difficulties, weight concerns, or fewer wet diapers might need a pediatric check-in.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BabyFeedingGuide;

