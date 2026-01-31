import React from 'react';
import Hero from '../components/Home/Hero';
import SupportedBy from '../components/Home/SupportedBy';
import WhyChoose from '../components/Home/WhyChoose';
import FeatureSection from '../components/Home/FeatureSection';
import CTABanner from '../components/Home/CTABanner';

const Home = () => {
    const features = [
        {
            title: "Decoding Your Baby’s Cries",
            description: "Understand your baby’s emotions through cry analysis.",
            items: [
                { title: "Get AI-generated insights", desc: "with doctor-reviewed explanations" },
                { title: "Track mood changes", desc: "and share notes with healthcare providers" }
            ],
            image: "https://placehold.co/600x600/f3f4f6/734388?text=Cry+Analyzer+Mockup",
            reversed: true // Image First (Left)
        },
        {
            title: "Smarter Health Screenings",
            description: "Early detection is key. Our AI-powered screening tools help you identify potential health concerns from the comfort of your home.",
            items: [
                { title: "Non-invasive", desc: "No uncomfortable tests" },
                { title: "Doctor Verified", desc: "Content approved by pediatricians" }
            ],
            image: "https://placehold.co/600x600/f3f4f6/734388?text=Screening+Tool+Mockup",
            reversed: false // Text First (Left)
        },
        {
            title: "Learn What Matters to You",
            description: "Personalized content based on your child's age and developmental stage. No more generic advice—get tips that actually apply to you.",
            items: [
                { title: "Daily Tips", desc: "Bite-sized advice every day" },
                { title: "Milestone Tracking", desc: "Monitor growth and development" }
            ],
            image: "https://placehold.co/600x600/f3f4f6/734388?text=Personalized+Feed+Mockup",
            reversed: true // Image First (Left)
        }
    ];

    return (
        <main>
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

            <CTABanner />
        </main>
    );
};

export default Home;
