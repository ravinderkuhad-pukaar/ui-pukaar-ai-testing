import React from 'react';
import SEO from '../components/Common/SEO';

const BabyFeedingGuide = () => {
    return (
        <div className="pt-20 min-h-screen bg-white">
            <SEO
                title="Baby Feeding Guide for New Parents | Pukaar.ai"
                description="A practical baby feeding guide for new parents, with tips on hunger cues, feeding schedules, and common baby feeding problems."
                keywords="baby feeding guide, newborn feeding, infant feeding tips, baby feeding schedule, baby feeding problems, breastfeeding tips, bottle feeding tips"
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
                                Baby Feeding Guide for New Parents
                            </h1>
                            <p className="text-[#666666] text-base md:text-lg mb-4">
                                Feeding a baby is one of the most important parts of early parenting, but it can also be confusing. New parents often worry about how much to feed, how often to feed, and whether their baby is getting enough nutrition.
                            </p>
                            <p className="text-[#666666] text-base md:text-lg">
                                Every baby is different, and feeding patterns can change frequently, especially in the first few months.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hero Image Section */}
            <section className="py-8 md:py-12">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="/image_100.jpg"
                            alt="Mother breastfeeding baby in peaceful environment"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-32">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-[#666666] text-lg mb-6">
                            This baby feeding guide is written to help new parents feel more confident. It explains how feeding schedules usually work, shares practical infant feeding tips, and discusses common baby feeding problems in a clear and reassuring way.
                        </p>
                        <p className="text-[#666666] text-lg mb-6">
                            There is no single perfect routine, but understanding the basics can make daily feeding decisions easier.
                        </p>
                        <p className="text-[#666666] text-lg">
                            Feeding time is not only about nutrition. It is also about comfort, bonding, and learning your baby's cues over time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Understanding Feeding Schedules Section */}
            <section className="py-12 md:py-16 bg-[#F9F9F9]">
                <div className="container mx-auto px-6 md:px-32">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-6">
                                Understanding Baby Feeding Schedules
                            </h2>
                            <p className="text-[#666666] mb-4">
                                A baby feeding schedule often looks different from what new parents expect. In the early weeks, babies usually feed frequently, sometimes every two to three hours. This is normal and helps support healthy growth and development.
                            </p>
                            <p className="text-[#666666] mb-4">
                                Instead of following a strict clock-based routine, many parents find it helpful to focus on hunger cues. Signs such as sucking movements, bringing hands to the mouth, or becoming more alert often indicate that a baby is ready to feed. Crying is usually a late sign of hunger.
                            </p>
                            <p className="text-[#666666]">
                                As babies grow, feeding patterns slowly become more predictable. However, growth spurts can temporarily increase feeding frequency. A baby feeding schedule should be flexible, especially during the first year.
                            </p>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="/image_101.jpg"
                                alt="Mother caring for baby after feeding"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Infant Feeding Tips Section */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-32">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="/image_102.jpg"
                                alt="Baby bottle feeding with purple bottle"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-6">
                                Infant Feeding Tips for Everyday Care
                            </h2>
                            <p className="text-[#666666] mb-6">
                                Feeding can feel overwhelming at times, especially for first-time parents. These simple infant feeding tips can help make the process smoother:
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                                    <p className="text-[#666666]">Feed your baby when they show hunger cues rather than waiting too long</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                                    <p className="text-[#666666]">Create a calm feeding environment with minimal distractions</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                                    <p className="text-[#666666]">Hold your baby comfortably and support their head during feeding</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                                    <p className="text-[#666666]">Allow your baby to feed at their own pace</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                                    <p className="text-[#666666]">Burp your baby gently after feeding if needed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Self-Care for Parents Section */}
            <section className="py-12 md:py-16 bg-[#F9F9F9]">
                <div className="container mx-auto px-6 md:px-32">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-6">
                            Taking Care of Yourself Matters Too
                        </h2>
                        <p className="text-[#666666] text-lg mb-6">
                            It is also important for parents to take care of themselves. Staying hydrated, eating balanced meals, and resting when possible can make feeding time less stressful.
                        </p>
                        <p className="text-[#666666] text-lg">
                            Feeding routines often improve with time. What feels difficult in the beginning usually becomes easier as parents and babies learn together.
                        </p>
                    </div>
                </div>
            </section>

            {/* Common Feeding Problems Section */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-8 text-center">
                        Common Baby Feeding Problems
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-[#666666] text-lg mb-8 text-center">
                            Many parents experience baby feeding problems at some point, and most of these challenges are temporary.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#292929] mb-3">
                                    🍼 Baby Refusing to Feed
                                </h3>
                                <p className="text-[#666666]">
                                    One common concern is a baby refusing to feed or feeding less than usual. This can happen due to tiredness, distraction, or minor discomfort.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#292929] mb-3">
                                    💧 Spitting Up After Feeds
                                </h3>
                                <p className="text-[#666666]">
                                    Spitting up after feeds is another common issue and is often normal in young babies. As long as the baby is gaining weight and seems comfortable, this usually improves with time.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#292929] mb-3">
                                    😣 Gas or Fussiness
                                </h3>
                                <p className="text-[#666666]">
                                    Gas or fussiness during feeding can also occur and may be eased by adjusting feeding position or pace.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#292929] mb-3">
                                    ⚖️ Not Feeding Enough
                                </h3>
                                <p className="text-[#666666]">
                                    Some parents worry that their baby is not feeding enough. If a baby has regular wet diapers, steady growth, and appears satisfied after feeding, these are usually good signs.
                                </p>
                            </div>
                        </div>
                        
                        <div className="mt-8 bg-purple-50 border-l-4 border-primary rounded-lg p-6">
                            <p className="text-[#666666] text-lg">
                                <strong>Important:</strong> If feeding problems continue or cause concern, it is always best to speak with a healthcare professional.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feeding Basics Cards */}
            <section className="py-12 md:py-16 bg-[#F9F9F9]">
                <div className="container mx-auto px-6 md:px-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-8 text-center">
                        Feeding Basics for Newborns
                    </h2>
                    <div class="max-w-4xl mx-auto">
                        <p className="text-[#666666] text-lg mb-8 text-center">
                            Whether you're breastfeeding, formula-feeding, or doing a mix of both, it's normal to have questions. Pukaar.ai helps you track patterns while staying focused on your baby, not just the numbers.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200">
                                <h3 className="text-xl font-semibold text-[#292929] mb-3">
                                    👀 Hunger Cues
                                </h3>
                                <p className="text-[#666666]">
                                    Learn early hunger signs—like rooting and hand-to-mouth movements—so you can respond before crying becomes intense.
                                </p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200">
                                <h3 className="text-xl font-semibold text-[#292929] mb-3">
                                    🩺 When to Reach Out
                                </h3>
                                <p className="text-[#666666]">
                                    Get simple guidance on when feeding difficulties, weight concerns, or fewer wet diapers might need a pediatric check-in.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Building Confidence Section */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-32">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-6">
                            Building Confidence Around Baby Feeding
                        </h2>
                        <p className="text-[#666666] text-lg mb-6">
                            Feeding a baby is a learning process, not something that has to be perfect right away. Schedules change, routines shift, and challenges come and go. What matters most is responding to your baby's needs with patience and care.
                        </p>
                        <p className="text-[#666666] text-lg">
                            With time, observation, and support, feeding becomes a more comfortable and confident part of daily parenting. Trust yourself, stay flexible, and remember that every parent's journey looks a little different.
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-12 md:py-16 bg-gradient-to-b from-purple-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-4">
                            Need Help Understanding Your Baby's Feeding Patterns?
                        </h2>
                        <p className="text-[#666666] text-lg mb-8">
                            Pukaar.ai helps you track feeding patterns and understand your baby's unique cues with confidence.
                        </p>
                        <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg">
                            Get Started with Pukaar.ai
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BabyFeedingGuide;
