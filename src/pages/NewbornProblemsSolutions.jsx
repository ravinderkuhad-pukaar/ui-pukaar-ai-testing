import React from 'react';
import SEO from '../components/Common/SEO';

const NewbornProblemsSolutions = () => {
    return (
        <div className="pt-20 min-h-screen bg-white">
            <SEO
                title="Newborn Problems & Solutions | Pukaar.ai"
                description="From gas and crying to sleep struggles, explore common newborn problems and calm, evidence-informed solutions."
                keywords="newborn problems, newborn solutions, baby gas, baby crying, newborn issues"
                url="/newborn-problems-solutions"
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
                                Newborn Problems &amp; Solutions
                            </h1>
                            <p className="text-[#666666] text-base md:text-lg">
                                Colic, gas, crying, cluster feeding—these challenges are common, but that doesn&apos;t make them easy.
                                Here&apos;s structured support to help you feel less alone.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problems & Solutions */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-32 space-y-10">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-3">
                            Common newborn challenges
                        </h2>
                        <p className="text-[#666666] max-w-3xl">
                            Many newborn &quot;problems&quot; are actually signs of a healthy, adjusting baby—
                            but that doesn&apos;t mean you should struggle in silence. Pukaar.ai helps you
                            differentiate typical phases from signs that might need extra care.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#F9F9F9] rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-[#292929] mb-2">Crying & fussiness</h3>
                            <p className="text-[#666666]">
                                Learn patterns behind crying spells, simple soothing strategies, and when persistent crying might be colic or another concern.
                            </p>
                        </div>
                        <div className="bg-[#F9F9F9] rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-[#292929] mb-2">Everyday problem-solving</h3>
                            <p className="text-[#666666]">
                                From reflux worries to gassy tummies, get small, practical ideas to try—always with the option to loop in your pediatrician.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewbornProblemsSolutions;

