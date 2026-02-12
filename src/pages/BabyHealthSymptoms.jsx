import React from 'react';
import SEO from '../components/Common/SEO';

const BabyHealthSymptoms = () => {
    return (
        <div className="pt-20 min-h-screen bg-white">
            <SEO
                title="Baby Health Symptoms | Pukaar.ai"
                description="Learn which baby health symptoms are common, which need monitoring, and when it’s important to call your pediatrician."
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
                                Not every symptom is an emergency, but some deserve quick attention.
                                Learn how to read the signs with calm, clear guidance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Symptoms Guidance */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-32 space-y-10">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-3">
                            Common vs. concerning symptoms
                        </h2>
                        <p className="text-[#666666] max-w-3xl">
                            Every baby will have moments of fussiness, gas, or mild congestion.
                            Pukaar.ai helps you understand when symptoms are typically mild and when they
                            might signal something worth checking with your doctor.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#F9F9F9] rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-[#292929] mb-2">Track what you notice</h3>
                            <p className="text-[#666666]">
                                Logging patterns—like fever, rashes, or changes in feeding—can make
                                conversations with your pediatrician more focused and helpful.
                            </p>
                        </div>
                        <div className="bg-[#F9F9F9] rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-[#292929] mb-2">Always follow medical advice</h3>
                            <p className="text-[#666666]">
                                Pukaar.ai supports, but never replaces, professional medical care.
                                If you&apos;re worried, trust your instincts and reach out to a doctor.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BabyHealthSymptoms;

