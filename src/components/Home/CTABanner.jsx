import React from 'react';

const CTABanner = () => {
    return (
        <section className="py-24 bg-[#F9F5FB] relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="bg-primary rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-2xl">
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark opacity-100"></div>

                    <div className="relative z-10 max-w-xl text-center md:text-left mb-10 md:mb-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                            Parenting gets easier when answers are within reach.
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:opacity-90 transition-opacity">
                                <div className="text-left">
                                    <div className="text-[10px] uppercase">Get it on</div>
                                    <div className="text-lg font-bold leading-none">Google Play</div>
                                </div>
                            </button>
                            <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:opacity-90 transition-opacity">
                                <div className="text-left">
                                    <div className="text-[10px] uppercase">Download on the</div>
                                    <div className="text-lg font-bold leading-none">App Store</div>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Mockup overlapping */}
                    <div className="relative z-10 w-full md:w-auto flex justify-center">
                        <img
                            src="https://placehold.co/300x500/f3f4f6/734388?text=Mobile+App"
                            alt="App Preview"
                            className="rounded-[30px] shadow-2xl transform rotate-6 md:absolute md:-bottom-32 md:-right-10 border-8 border-gray-900"
                            style={{ maxWidth: '280px' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTABanner;
