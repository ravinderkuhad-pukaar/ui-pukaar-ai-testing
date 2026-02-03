import React from 'react';
import Hero from '../components/Home/Hero';
import SupportedBy from '../components/Home/SupportedBy';
import WhyChoose from '../components/Home/WhyChoose';
import FeatureSection from '../components/Home/FeatureSection';
import HowItWorks from '../components/Home/HowItWorks';
import CTABanner from '../components/Home/CTABanner';
import SEO from '../components/Common/SEO';

const Home = () => {
    const features = [
        {
            title: "Decoding Your Baby's Cries",
            description: "Understand your baby's emotions through cry analysis.",
            items: [
                { title: "Get AI-generated insights", desc: "with doctor-reviewed explanations" },
                { title: "Track mood changes", desc: "and share notes with healthcare providers" }
            ],
            image: "/images/about-1.png",
            reversed: true
        },
        {
            title: "Smarter Health Screenings",
            description: "Early detection is key. Our AI-powered screening tools help you identify potential health concerns from the comfort of your home.",
            items: [
                { title: "Non-invasive", desc: "No uncomfortable tests" },
                { title: "Doctor Verified", desc: "Content approved by pediatricians" }
            ],
            image: "/images/about-2.png",
            reversed: false
        },
        {
            title: "Learn What Matters to You",
            description: "Personalized content based on your child's age and developmental stage. No more generic advice—get tips that actually apply to you.",
            items: [
                { title: "Daily Tips", desc: "Bite-sized advice every day" },
                { title: "Milestone Tracking", desc: "Monitor growth and development" }
            ],
            image: "/images/about-3.png",
            reversed: true
        }
    ];

    return (
        <main>
            <SEO 
                title="AI Baby Cry Translator"
                description="Pukaar.ai uses AI to decode your baby's cries and help you understand their needs instantly. Smart parenting made simple."
                keywords="baby cry translator, AI parenting, baby care app, infant cry analysis, smart parenting, baby health"
                url="/"
            />
            <Hero />
            <SupportedBy />
            <WhyChoose />

            <div className="space-y-0">
                {features.map((feature, index) => (
                    <FeatureSection
                        key={index}
                        {...feature}
                    />
                ))}
            </div>

            <HowItWorks />
            <CTABanner />
        </main>
    );
};

export default Home;
