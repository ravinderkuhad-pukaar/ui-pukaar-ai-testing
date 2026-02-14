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

            {/* Hero Image Section */}
            <section className="py-8 md:py-12">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg">
                        <div className="w-full h-64 md:h-96 bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-400 text-sm">Baby Sleep Tips Image</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits Section */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-10 text-center">
                        What to Expect from Newborn Sleep
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-[#F9F9F9] rounded-2xl p-6 md:p-8">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#292929] mb-3">
                                Short Sleep Cycles
                            </h3>
                            <p className="text-[#666666]">
                                Newborns sleep in short bursts of 2–4 hours. This is biologically normal and protects their development.
                            </p>
                        </div>
                        <div className="bg-[#F9F9F9] rounded-2xl p-6 md:p-8">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#292929] mb-3">
                                Day-Night Confusion
                            </h3>
                            <p className="text-[#666666]">
                                Babies don&apos;t know night from day at first. Gentle light and routine cues help them adjust over time.
                            </p>
                        </div>
                        <div className="bg-[#F9F9F9] rounded-2xl p-6 md:p-8">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#292929] mb-3">
                                Safe Sleep Matters
                            </h3>
                            <p className="text-[#666666]">
                                Always place your baby on their back to sleep, on a firm surface, with no loose bedding or pillows nearby.
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
                                Building Better Sleep Habits
                            </h2>
                            <p className="text-[#666666] mb-4">
                                Newborns wake frequently—it&apos;s how their brains and bodies protect them. Instead of chasing strict schedules, focus on patterns, safe sleep, and gentle ways to help them (and you) get more rest over time.
                            </p>
                            <p className="text-[#666666] mb-4">
                                Small, consistent cues—like dimming lights, swaddling, and white noise—help your baby start associating certain routines with sleep.
                            </p>
                            <p className="text-[#666666]">
                                Pukaar.ai provides age-appropriate sleep guidance that evolves as your baby grows, so you always have realistic expectations.
                            </p>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <div className="w-full h-64 md:h-80 bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-400 text-sm">Sleep Habits Image</span>
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
                                <span className="text-gray-400 text-sm">Sleep Tips Features Image</span>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-6">
                                Practical Soothing Techniques
                            </h2>
                            <p className="text-[#666666] mb-6">
                                Simple strategies that help most babies settle—no expensive gadgets required.
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                    <p className="text-[#666666]"><strong>Swaddling:</strong> Mimics the snug feeling of the womb and reduces startle reflexes</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                    <p className="text-[#666666]"><strong>White Noise:</strong> Steady background sound that helps babies stay asleep longer</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                    <p className="text-[#666666]"><strong>Bedtime Routine:</strong> Consistent pre-sleep cues like feeding, dimming lights, and gentle rocking</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                    <p className="text-[#666666]"><strong>Wake Windows:</strong> Learn age-appropriate awake times to prevent overtiredness</p>
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
                        Sleep Guidance You Can Trust
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#292929] mb-3">
                                    No Guilt, No Pressure
                                </h3>
                                <p className="text-[#666666]">
                                    We don&apos;t push rigid methods. Our tips are flexible and designed to work with your parenting style.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#292929] mb-3">
                                    Evidence-Based Tips
                                </h3>
                                <p className="text-[#666666]">
                                    All sleep guidance is grounded in pediatric research and reviewed by qualified doctors.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#292929] mb-3">
                                    Age-Appropriate Advice
                                </h3>
                                <p className="text-[#666666]">
                                    Sleep needs change fast. Our tips update as your baby grows so they&apos;re always relevant.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#292929] mb-3">
                                    When to Seek Help
                                </h3>
                                <p className="text-[#666666]">
                                    Know when sleep issues might signal something more, so you can talk to your pediatrician with confidence.
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
                        Start Improving Sleep Tonight
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#292929] mb-2">Set the Environment</h3>
                                    <p className="text-[#666666]">Dim the lights, reduce noise, and keep the room at a comfortable temperature before bedtime.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#292929] mb-2">Follow a Simple Routine</h3>
                                    <p className="text-[#666666]">A short sequence—feed, swaddle, white noise—signals to your baby that it&apos;s time to wind down.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                    3
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#292929] mb-2">Watch for Sleep Cues</h3>
                                    <p className="text-[#666666]">Yawning, eye rubbing, and fussiness are signs your baby is ready for sleep. Act before overtiredness kicks in.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                    4
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#292929] mb-2">Be Patient and Consistent</h3>
                                    <p className="text-[#666666]">Sleep improves gradually. Stick with routines and adjust as your baby grows—Pukaar.ai helps you adapt.</p>
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
                            Better Sleep Starts with Better Support
                        </h2>
                        <p className="text-[#666666] text-lg mb-8">
                            Download Pukaar.ai for personalized, doctor-reviewed baby sleep guidance tailored to your baby&apos;s age and needs.
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

export default BabySleepTips;
