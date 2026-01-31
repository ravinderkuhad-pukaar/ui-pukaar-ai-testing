import React from 'react';

const AsSeenOn = () => {
    return (
        <section className="py-10 bg-white border-b border-gray-100">
            <div className="container mx-auto px-6 text-center">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                    Featured & Recognized By
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Replicating the Shark Tank text style if image unavailable */}
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-2xl font-serif text-gray-800">SHARK TANK</span>
                        <span className="bg-accent text-white text-xs font-bold px-1 py-0.5 rounded">INDIA</span>
                    </div>
                    {/* Other placeholders */}
                    <span className="text-xl font-bold text-gray-400">YourStory</span>
                    <span className="text-xl font-bold text-gray-400">Inc42</span>
                    <span className="text-xl font-bold text-gray-400">DailyHunt</span>
                </div>
            </div>
        </section>
    );
};

export default AsSeenOn;
