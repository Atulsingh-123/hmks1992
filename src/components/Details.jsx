import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import { useInView } from 'react-intersection-observer'; // Import IntersectionObserver hook

const NgoDetails = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const textVariant = {
    hidden: { opacity: 0, y: 50 }, // Start below and invisible
    visible: { opacity: 1, y: 0 }  // Fade in and move up
  };

  const containerVariant = {
    visible: {
      transition: {
        staggerChildren: 0.7, // Increase the delay between each child animation for a slower effect
      }
    }
  };

  return (
    <section className="py-10 px-4 md:px-6 bg-white text-gray-800">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-6 text-center font-serif"
          initial={{ opacity: 0, y: -50 }} // Start off-screen above
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
          transition={{ duration: 1 }} // Longer animation duration
        >
          About Hema Mahila Kalyan Samiti
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p variants={textVariant} transition={{ duration: 1 }} className="text-base md:text-lg leading-relaxed font-serif mb-4">
            <strong>Hema Mahila Kalyan Samiti</strong> is a non-profit organization dedicated to empowering women and uplifting marginalized communities in India. Since its inception, we have focused on providing essential support through education, vocational training, health awareness, and self-help groups. Our aim is to create sustainable change by fostering an environment where women can gain confidence, develop skills, and contribute meaningfully to their families and society.
          </motion.p>

          <motion.p variants={textVariant} transition={{ duration: 1 }} className="text-base md:text-lg leading-relaxed font-serif mb-4">
            We work closely with local communities to identify their unique challenges and opportunities. Our programs are designed to address these specific needs, whether it's through organizing health camps, providing micro-loans for small businesses, or setting up adult literacy classes. Every initiative we undertake is driven by our core belief in the power of women to transform their lives and the lives of those around them.
          </motion.p>

          <motion.p variants={textVariant} transition={{ duration: 1 }} className="text-base md:text-lg leading-relaxed font-serif mb-6">
            Join us in our mission to create a world where every woman is empowered, every child is educated, and every community is self-sufficient. Together, we can make a lasting impact and bring about positive change for future generations.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default NgoDetails;
