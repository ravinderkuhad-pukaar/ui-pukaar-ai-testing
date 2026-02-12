import React from 'react';
import SEO from '../components/Common/SEO';

const BabySleepTips = () => {
    return (
        <div className="pt-20 min-h-screen bg-white">
            <SEO
                title="Baby Sleep Tips | Pukaar.ai"
                description="Realistic baby sleep tips for tired parents—learn about newborn sleep patterns, soothing routines, and when to worry."
                keywords="baby sleep tips, newborn sleep, infant sleep schedule, soothe baby"
                url="/baby-sleep-tips"
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
                                Baby Sleep Tips
                            </h1>
                            <p className="text-[#666666] text-base md:text-lg">
                                Sleep is never perfect with a newborn—but it can feel more manageable with realistic expectations and simple routines.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tips Section */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-32 space-y-10">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-3">
                            What to expect from newborn sleep
                        </h2>
                        <p className="text-[#666666] max-w-3xl">
                            Newborns wake frequently—it&apos;s how their brains and bodies protect them.
                            Instead of chasing strict schedules, focus on patterns, safe sleep, and gentle
                            ways to help them (and you) get more rest over time.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#F9F9F9] rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-[#292929] mb-2">Simple soothing ideas</h3>
                            <p className="text-[#666666]">
                                Try swaddling, white noise, and consistent bedtime cues so your baby begins to associate certain routines with sleep.
                            </p>
                        </div>
                        <div className="bg-[#F9F9F9] rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-[#292929] mb-2">When to ask for help</h3>
                            <p className="text-[#666666]">
                                Understand when prolonged fussiness, breathing changes, or very little sleep might be worth discussing with your pediatrician.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BabySleepTips;

