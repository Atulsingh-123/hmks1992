import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/new_logo.png';
import NGO from '../images/NGO.jpg';
import { motion } from 'framer-motion';
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [displayText, setDisplayText] = useState('');
    const [isTextComplete, setIsTextComplete] = useState(false);
    const fullText = "Welcome to Hema Mahila Kalyan Samiti (NGO)";
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Typewriter effect
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);
                setIsTextComplete(true);
            }
        }, 50);

        return () => clearInterval(interval);
    }, []);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden'); // Cleanup in case of unmount
        };
    }, [menuOpen]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    return (
        <section className="relative h-screen flex flex-col">
            {/* Navbar */}
            <nav
                className={`py-4 w-full z-10 transition-all duration-300 ${isScrolled ? 'fixed bg-white text-gray-600 z-50 shadow-lg' : 'fixed bg-transparent text-gray-600 z-50'}`}
            >
                <div className="container mx-auto flex justify-between items-center px-4 py-2">
                    <div className="flex items-center">
                        <img src={Logo} alt="NGO Logo" loading="lazy" className="h-12 md:h-14 lg:h-14 size-30 ml-4" />
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="focus:outline-none">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex lg:space-x-10 mr-4">
                        <Link to="/about" className="relative text-sm md:text-lg lg:text-xl transition-all duration-300 hover:text-green-600 link-border">About Us</Link>
                        <Link to="/team" className="relative text-sm md:text-lg lg:text-xl transition-all duration-300 hover:text-green-600 link-border">Our Team</Link>
                        <Link to="/donate" className="relative text-sm md:text-lg lg:text-xl transition-all duration-300 hover:text-green-600 link-border">Donate</Link>
                        <Link to="/volunteer" className="relative text-sm md:text-lg lg:text-xl transition-all duration-300 hover:text-green-600 link-border">Volunteer</Link>
                        <Link to="/contact" className="relative text-sm md:text-lg lg:text-xl transition-all duration-300 hover:text-green-600 link-border">Contact Us</Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
                <div className="relative w-64 bg-white h-full shadow-lg flex flex-col ml-auto">
                    <button onClick={closeMenu} className="absolute top-4 left-4 focus:outline-none">
                        <IoIosArrowForward className="text-2xl"/>
                    </button>
                    <hr className="border-t-1 border-gray-300 mt-12" />
                    <div className="flex flex-col items-start p-4 space-y-4 mt-5">
                        <Link to="/about" onClick={closeMenu} className="text-xl hover:text-green-600 font-serif">About Us</Link>
                        <Link to="/team" onClick={closeMenu} className="text-xl hover:text-green-600 font-serif">Our Team</Link>
                        <Link to="/donate" onClick={closeMenu} className="text-xl hover:text-green-600 font-serif">Donate</Link>
                        <Link to="/volunteer" onClick={closeMenu} className="text-xl hover:text-green-600 font-serif">Volunteer</Link>
                        <Link to="/contact" onClick={closeMenu} className="text-xl hover:text-green-600 font-serif">Contact Us</Link>
                    </div>
                </div>
            </div>

            {/* Main content - blurred when sidebar is open */}
            <div className={`relative z-10 flex-grow container mx-auto flex flex-col items-center justify-center text-center md:text-left md:flex-row px-4 ${menuOpen ? 'blur-sm' : ''}`}>
                <img src={NGO} alt="NGO Background" loading="lazy" className="absolute inset-0 w-full h-full object-cover z-0" />

                {/* Animated Text Container */}
                <motion.div
                    className="relative md:ml-10 p-6 rounded-lg z-10 font-serif"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 font-serif"
                        variants={textVariants}
                    >
                        {displayText}
                    </motion.h1>

                    {isTextComplete && (
                        <>
                            <motion.p
                                className="text-xl text-gray-400 md:text-2xl lg:text-3xl mt-4 font-serif"
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                Empowering Women, Transforming Lives
                            </motion.p>

                            <motion.button
                                onClick={() => navigate('/projects')}
                                className="mt-6 inline-block bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-lg text-white transition-all duration-300 font-serif"
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                Learn More
                            </motion.button>
                        </>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default React.memo(Navbar);
