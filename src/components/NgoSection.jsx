import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Women from '../assets/NGO_women.jpg';

const NGOSection = () => {
    const controlsLeft = useAnimation(); // For the left image
    const controlsRight = useAnimation(); // For the right content

    const [refLeft, inViewLeft] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refRight, inViewRight] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inViewLeft) {
            controlsLeft.start({ opacity: 1, x: 0 });
        }
        if (inViewRight) {
            controlsRight.start({ opacity: 1, x: 0 });
        }
    }, [controlsLeft, controlsRight, inViewLeft, inViewRight]);

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center">
                
                {/* Left side image with motion effect */}
                <motion.div
                    className="lg:w-1/2 mb-8 lg:mb-0"
                    ref={refLeft}  // Attach the ref to track visibility
                    initial={{ opacity: 0, x: -100 }}  // Start hidden and left
                    animate={controlsLeft}  // Animate on scroll into view
                    transition={{ duration: 0.8 }}  // Animation duration
                >
                    <img 
                        src={Women}
                        alt="Children"
                        loading="lazy"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </motion.div>

                {/* Right side content with motion effect */}
                <motion.div
                    className="lg:w-1/2 lg:pl-12"
                    ref={refRight}  // Attach the ref to track visibility
                    initial={{ opacity: 0, x: 100 }}  // Start hidden and right
                    animate={controlsRight}  // Animate on scroll into view
                    transition={{ duration: 0.8, delay: 0.2 }}  // Delayed animation for right side
                >
                    <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif">
                        We are Driven by Optimism
                    </h2>
                    <p className="text-lg text-gray-700 mb-6 font-serif ">
                        At <span className='font-bold font-serif'>Hema Mahila Kalyan Samiti</span>, we strive for meaningful change. Through volunteering, we aim to build a society that empowers every individual to reshape the conversation with their voices and stories.
                        Among grassroots NGOs in India, we have a strong reputation for success. We focus on two areas: Education & Volunteerism.
                    </p>
                    <p className="italic text-gray-600 font-serif">
                        The cornerstones of our work: Volunteer. Lead. Inspire.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default NGOSection;
