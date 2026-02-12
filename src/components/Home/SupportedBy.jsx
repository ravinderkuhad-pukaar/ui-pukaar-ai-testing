import React from 'react';

const SupportedBy = () => {
    const logos = [
        { name: "Wadhwani Foundation", src: "/images/Wadhwani-Foundation-Logo.webp" },
        { name: "GINSERV", src: "/images/ginserv-logo.png" },
        { name: "DPIIT", src: "/images/DPIIT-header.png" },
        { name: "AWS", src: "/images/amazon-web-services-aws-logo-png_seeklogo-319188.png" },
    ];

    // Double the logos for seamless infinite scroll
    const duplicatedLogos = [...logos, ...logos];

    return (
        <section className="py-8 sm:py-12 border-b border-gray-100 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <p className="text-center text-xs sm:text-sm text-gray-500 font-medium mb-6 sm:mb-8">
                    Supported by
                </p>
            </div>
            
            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                {/* Gradient Overlays for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Scrolling Track – duplicated for seamless infinite loop */}
                <div
                    className="flex w-max"
                    style={{
                        animation: 'supported-by-marquee 25s linear infinite',
                    }}
                >
                    {duplicatedLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 mx-8 sm:mx-12 md:mx-16 h-12 sm:h-16 flex items-center justify-center"
                        >
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="h-10 sm:h-14 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SupportedBy;
