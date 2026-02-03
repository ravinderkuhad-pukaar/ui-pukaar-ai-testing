import React from 'react';
import { motion } from 'framer-motion';

const Desktop = () => {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#F9F5FB] to-white pt-24 sm:pt-32 pb-12 sm:pb-20">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    {/* Logo */}
                    <div className="flex justify-center mb-6 sm:mb-8">
                        <img 
                            src="/images/logo.png" 
                            alt="Pukaar AI Logo" 
                            className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl sm:rounded-2xl object-cover shadow-lg"
                        />
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#292929] mb-3 sm:mb-4">
                        Download <span className="text-primary">Pukaar.ai</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base sm:text-lg text-[#666666] mb-8 sm:mb-12 max-w-xl mx-auto px-4">
                        Get the app on your preferred platform and start your smart parenting journey today.
                    </p>

                    {/* Download Options */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
                        {/* Android */}
                        <motion.a
                            href="https://play.google.com/store/apps/details?id=com.pukaar.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center gap-3 sm:gap-4 min-w-[200px] sm:min-w-[240px]"
                        >
                            {/* Android Icon */}
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#3DDC84] rounded-xl sm:rounded-2xl flex items-center justify-center">
                                <svg className="w-7 h-7 sm:w-10 sm:h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.523 15.341c-.5 0-.91-.41-.91-.91s.41-.91.91-.91.91.41.91.91-.41.91-.91.91m-11.046 0c-.5 0-.91-.41-.91-.91s.41-.91.91-.91.91.41.91.91-.41.91-.91.91m11.4-6.02l1.97-3.41c.11-.19.05-.43-.14-.54-.19-.11-.43-.05-.54.14l-2 3.46c-1.55-.7-3.29-1.09-5.15-1.09s-3.6.39-5.15 1.09l-2-3.46c-.11-.19-.35-.25-.54-.14-.19.11-.25.35-.14.54l1.97 3.41C2.79 11.1.5 14.48.5 18.38h23c0-3.9-2.29-7.28-5.63-9.06"/>
                                </svg>
                            </div>
                            <div className="text-center">
                                <p className="text-xs sm:text-sm text-[#666666] mb-1">Download for</p>
                                <p className="text-lg sm:text-xl font-bold text-[#292929]">Android</p>
                            </div>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                                alt="Get it on Google Play" 
                                className="h-10 sm:h-12"
                            />
                        </motion.a>

                        {/* iOS */}
                        <motion.a
                            href="https://apps.apple.com/app/pukaar-ai/id6670170498"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center gap-3 sm:gap-4 min-w-[200px] sm:min-w-[240px]"
                        >
                            {/* Apple Icon */}
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-xl sm:rounded-2xl flex items-center justify-center">
                                <svg className="w-7 h-7 sm:w-10 sm:h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                </svg>
                            </div>
                            <div className="text-center">
                                <p className="text-xs sm:text-sm text-[#666666] mb-1">Download for</p>
                                <p className="text-lg sm:text-xl font-bold text-[#292929]">iOS</p>
                            </div>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                                alt="Download on the App Store" 
                                className="h-10 sm:h-12"
                            />
                        </motion.a>
                    </div>

                    {/* App Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-12 sm:mt-16"
                    >
                        <img
                            src="/images/img.png"
                            alt="Pukaar App Preview"
                            className="max-w-[220px] sm:max-w-[300px] mx-auto"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
};

export default Desktop;
