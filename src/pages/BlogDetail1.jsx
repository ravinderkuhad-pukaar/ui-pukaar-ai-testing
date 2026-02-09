import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, AlertCircle } from 'lucide-react';
import SEO from '../components/Common/SEO';

const BlogDetail1 = () => {
    const challenges = [
        "Baby crying without a clear reason",
        "Feeding routines feeling inconsistent",
        "Difficulty understanding sleep patterns",
        "Worrying if behaviour is normal",
        "Feeling overwhelmed by too much advice"
    ];

    const howPukaarHelps = [
        "Identifies patterns in crying, feeding, and sleep",
        "Explains things clearly without medical jargon",
        "Keeps baby care information organised",
        "Reduces confusion from mixed advice"
    ];

    return (
        <div className="pt-20 min-h-screen bg-white">
            <SEO
                title="Smart Baby Care App for Calm & Confident Parenting | Pukaar AI"
                description="Pukaar AI is a smart baby care app designed to help parents understand their baby with simple, clear support—without stress or overload."
                keywords="smart baby care app, baby care, parenting app, newborn care, baby crying, feeding patterns, sleep patterns, first-time parents"
                url="/blogs/smart-baby-care-app"
            />

            {/* Hero Section with Main Banner */}
            <section className="relative overflow-hidden">
                {/* Purple Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-200/60 via-purple-100/40 to-white">
                    <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-purple-300/50 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-purple-300/50 to-transparent"></div>
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 py-12 md:py-20 relative z-10">
                    {/* Back Button */}
                    <Link 
                        to="/blogs" 
                        className="inline-flex items-center gap-2 text-primary font-medium mb-8 hover:gap-3 transition-all"
                    >
                        <ArrowLeft size={18} />
                        Back to Blogs
                    </Link>

                    {/* Main Banner Image */}
                    <div className="max-w-4xl mx-auto mb-10">
                        <div className="rounded-3xl overflow-hidden shadow-xl">
                            <img 
                                src="/images/blog-smart-baby-care.jpg" 
                                alt="Smart Baby Care App"
                                className="w-full h-64 md:h-96 object-cover bg-gradient-to-br from-purple-100 to-purple-200"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = '<div class="w-full h-64 md:h-96 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center"><span class="text-primary text-xl font-semibold">Smart Baby Care App</span></div>';
                                }}
                            />
                        </div>
                    </div>

                    {/* H1 Title */}
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl md:text-5xl font-bold text-[#292929] mb-6 leading-tight">
                            Smart Baby Care App for Calm & Confident Parenting
                        </h1>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-32">
                    <div className="max-w-4xl mx-auto">
                        
                        {/* Introduction */}
                        <div className="prose prose-lg max-w-none mb-12">
                            <p className="text-lg md:text-xl text-[#666666] leading-relaxed mb-6">
                                Parenting a newborn can feel confusing—especially in the early days. One moment your baby is calm, the next they're crying, and you're not sure why.
                            </p>
                            <p className="text-lg md:text-xl text-primary font-semibold mb-8">
                                This is completely normal.
                            </p>
                            
                            {/* App Download Links */}
                            <div className="bg-gradient-to-r from-purple-50 to-purple-100/50 rounded-2xl p-6 md:p-8 mb-8">
                                <p className="text-[#444444] text-lg leading-relaxed mb-6">
                                    <strong className="text-primary">Pukaar AI</strong> is a smart baby care app designed to help parents understand these moments with simple, clear support—without stress or overload. Everything you need stays in one place, so you don't have to keep guessing or searching.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <a 
                                        href="https://apps.apple.com/app/pukaar-ai" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
                                    >
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                        </svg>
                                        App Store
                                    </a>
                                    <a 
                                        href="https://play.google.com/store/apps/details?id=com.pukaar.ai" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
                                    >
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                                        </svg>
                                        Google Play
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* A Smarter Way Section */}
                        <div className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-6">
                                A Smarter Way to Care for Your Baby
                            </h2>
                            <p className="text-lg text-[#666666] leading-relaxed mb-4">
                                Modern parenting needs clarity, not confusion. Pukaar AI fits into real daily life, where routines change and every baby is different.
                            </p>
                            <p className="text-lg text-[#666666] leading-relaxed mb-4">
                                It gently helps you notice patterns, small changes, and daily habits—nothing complicated, nothing forced.
                            </p>
                            <p className="text-lg text-primary font-semibold">
                                The goal is simple: make everyday baby care easier to understand.
                            </p>
                        </div>

                        {/* Common Challenges Section */}
                        <div className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-6">
                                Common Challenges Parents Face
                            </h2>
                            <div className="bg-[#FFF5F5] rounded-2xl p-6 md:p-8">
                                <ul className="space-y-4">
                                    {challenges.map((challenge, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-[#444444] text-lg">{challenge}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* How Pukaar AI Helps Section */}
                        <div className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-6">
                                How Pukaar AI Helps
                            </h2>
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8">
                                <ul className="space-y-4">
                                    {howPukaarHelps.map((help, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-[#444444] text-lg">{help}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Support for New Parents Section */}
                        <div className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-6">
                                Support for New & First-Time Parents
                            </h2>
                            <p className="text-lg text-[#666666] leading-relaxed mb-4">
                                Feeling unsure as a new parent is normal. Pukaar AI doesn't replace your instincts—it supports them.
                            </p>
                            <p className="text-lg text-[#666666] leading-relaxed mb-6">
                                As your baby grows, the app adapts, helping you understand both the easy days and the hard ones.
                            </p>
                            <p className="text-lg text-[#444444] leading-relaxed font-medium">
                                If you're looking for calmer, more supportive baby care, Pukaar AI is here to help make each day feel more manageable.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-200 my-12"></div>

                        {/* New Subheading Section */}
                        <div className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-6">
                                Everyday Challenges Parents Face
                            </h2>
                            {/* Placeholder for future content */}
                            <div className="bg-gray-50 rounded-2xl p-8 text-center">
                                <p className="text-[#999999] italic">More content coming soon...</p>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="bg-gradient-to-r from-primary to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to Start Your Calm Parenting Journey?
                            </h3>
                            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                Download Pukaar AI today and experience a smarter way to care for your baby.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <a 
                                    href="https://apps.apple.com/app/pukaar-ai" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                    </svg>
                                    Download for iOS
                                </a>
                                <a 
                                    href="https://play.google.com/store/apps/details?id=com.pukaar.ai" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                                    </svg>
                                    Download for Android
                                </a>
                            </div>
                        </div>

                        {/* Back to Blogs */}
                        <div className="mt-12 text-center">
                            <Link 
                                to="/blogs" 
                                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                            >
                                <ArrowLeft size={18} />
                                Back to All Blogs
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetail1;
