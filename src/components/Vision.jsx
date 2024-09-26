import React from 'react';

const VisionSection = () => {
    return (
        <section className="bg-green-600 py-16 flex flex-col items-center">
            {/* Vision heading */}
            <div className="bg-white py-2 px-6 mb-6 rounded">
                <h2 className="text-green-600 text-2xl md:text-3xl font-bold uppercase text-center">
                    Our Vision
                </h2>
            </div>

            {/* Vision statement */}
            <div className="text-center">
                <p className="text-white text-lg md:text-2xl font-semibold leading-relaxed">
                    TO BRING HOPE TO MANY LIVES <br />
                    AS WE SERVE DIFFERENT COMMUNITIES <br />
                    THROUGH VARIOUS PROJECTS <br />
                    IN THANE AND BEYOND
                </p>
            </div>
        </section>
    );
};

export default VisionSection;
