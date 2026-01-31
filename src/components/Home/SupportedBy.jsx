import React from 'react';

const SupportedBy = () => {
    const logos = [
        { name: "AWS", width: "80px" },
        { name: "Wadhwani Foundation", width: "120px" },
        { name: "GINSERV", width: "100px" },
        { name: "DPIIT", width: "90px" },
        { name: "#startupindia", width: "110px" }
    ];

    return (
        <section className="py-12 border-b border-gray-100 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {logos.map((logo, index) => (
                        <div key={index} className="bg-gray-200 h-12 flex items-center justify-center rounded text-xs text-gray-400 font-bold" style={{ width: logo.width }}>
                            {logo.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SupportedBy;
