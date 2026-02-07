import React from 'react';

const CTABanner = () => {
    return (
        <section className="py-12 sm:py-16 md:py-24 bg-[#F9F5FB] relative">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
                <div className="bg-[#a67bb8] rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center">
                        {/* Content - Left Side */}
                        <div className="w-full md:w-[35%] p-6 sm:p-8 md:pl-12 md:pr-4 lg:pl-16 lg:pr-6 z-10 text-center md:text-left">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 leading-tight max-w-md mx-auto md:mx-0">
                                Parenting gets easier when answers are within reach.
                            </h2>
                            <div className="flex flex-row gap-2 sm:gap-3 justify-center md:justify-start">
                                {/* Google Play Badge */}
                                <a 
                                    href="https://onelink.to/c63hvu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block hover:opacity-90 transition-opacity"
                                >
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                                        alt="Get it on Google Play" 
                                        className="h-9 sm:h-10 md:h-12"
                                    />
                                </a>
                                {/* App Store Badge */}
                                <a 
                                    href="https://onelink.to/c63hvu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block hover:opacity-90 transition-opacity"
                                >
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                                        alt="Download on the App Store" 
                                        className="h-9 sm:h-10 md:h-12"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Phone Image - Right Side (Desktop) */}
                        <div className="hidden md:flex flex-1 items-end justify-center">
                            <img
                                src="/images/img.png"
                                alt="App Preview"
                                className="w-[340px] lg:w-[440px] xl:w-[500px] h-auto -mb-12"
                            />
                        </div>
                    </div>

                    {/* Mobile Phone Image */}
                    <div className="md:hidden flex justify-center pb-4">
                        <img
                            src="/images/img.png"
                            alt="App Preview"
                            className="w-[180px] sm:w-[220px] h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTABanner;
