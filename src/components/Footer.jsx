import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import { useInView } from 'react-intersection-observer'; // Import useInView hook
import { FaLinkedin, FaInstagram, FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';
import logo from '../assets/new_logo.png';

const Footer = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 }); // Intersection observer hook

    return (
        <footer className="bg-gray-900 text-gray-300 py-8 md:py-12">
            <motion.div 
                className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8"
                ref={ref} // Reference for the observer
                initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
                animate={inView ? { opacity: 1, x: 0 } : {}} // Animate when in view
                transition={{ duration: 0.8 }} // Animation timing
            >
                {/* Left Section - About the NGO, Logo, and Social Media Links */}
                <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                    {/* Logo and NGO Name */}
                    <img 
                        src={logo} 
                        alt="Hema Mahila Kalyan Samiti Logo" 
                        className="h-16 w-16 mb-2" 
                    />
                    <h1 className="text-2xl md:text-3xl font-bold text-green-500">Hema Mahila Kalyan Samiti</h1>
                    <p className="py-4 text-sm md:text-base text-gray-400 text-center lg:text-left">
                        Hema Mahila Kalyan Samiti is dedicated to empowering women and uplifting communities through education, health initiatives, and economic opportunities.
                    </p>
                    <div className="flex justify-center lg:justify-start space-x-6 mt-4">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                            <FaLinkedin size={28} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                            <FaInstagram size={28} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                            <FaTwitterSquare size={28} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                            <FaFacebookSquare size={28} />
                        </a>
                    </div>
                </div>

                {/* Middle Section - Navigation Links */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
                    animate={inView ? { opacity: 1, x: 0 } : {}} // Animate when in view
                    transition={{ duration: 0.8, delay: 0.2 }} // Delay for staggered effect
                >
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-8 text-center lg:text-left mt-1 md:mt-20">
                        <div>
                            <h6 className="text-lg font-semibold text-gray-400 mb-4">Our Work</h6>
                            <ul className="space-y-2 text-sm">
                                <li>Women's Empowerment</li>
                                <li>Education Programs</li>
                                <li>Health Initiatives</li>
                                <li>Community Outreach</li>
                                <li>Skill Development</li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="text-lg font-semibold text-gray-400 mb-4">Contact</h6>
                            <ul className="space-y-2 text-sm">
                                <li>Email: <a href="mailto:info@hema-mahila.org" className="hover:text-blue-500 transition-colors duration-300">hemamks1992@gmail.com</a></li>
                                <li>Phone: <a href="tel:1234567890" className="hover:text-blue-500 transition-colors duration-300">+91-9889503191</a></li>
                                <li>Address: Khanddak(Sikhadi), Varanasi, UP, India (221313)</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Quick Links Section */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
                    animate={inView ? { opacity: 1, x: 0 } : {}} // Animate when in view
                    transition={{ duration: 0.8, delay: 0.4 }} // Stagger delay for last section
                >
                    <div className="grid grid-cols-1 md:grid-cols- gap-8 text-center lg:text-left mt-1 md:mt-20">
                        <div>
                            <h6 className="text-lg font-semibold text-gray-400 mb-4">Quick Links</h6>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#about" className="hover:text-blue-500 transition-colors duration-300">About Us</a></li>
                                <li><a href="#projects" className="hover:text-blue-500 transition-colors duration-300">Our Projects</a></li>
                                <li><a href="#volunteer" className="hover:text-blue-500 transition-colors duration-300">Volunteer</a></li>
                                <li><a href="#donate" className="hover:text-blue-500 transition-colors duration-300">Donate</a></li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Bottom Section */}
            <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-6">
                <p>&copy; {new Date().getFullYear()} Hema Mahila Kalyan Samiti. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
