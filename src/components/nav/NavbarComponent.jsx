import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/new_logo.png';
import { IoIosArrowForward } from "react-icons/io";

const NavbarComponent = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation(); // To get the current path for active link

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Prevent scrolling when the menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white shadow-lg text-gray-600' : 'bg-transparent text-white'
            }`}
        >
            <div className="container mx-auto flex justify-between items-center px-4 py-4">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/">
                        <img src={Logo} alt="NGO Logo" className="h-12 md:h-14 lg:h-14  ml-4" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                </div>

                {/* Sidebar */}
                <div
                    className={`fixed inset-0 bg-black bg-opacity-50 transition-transform transform  ${
                        menuOpen ? 'translate-x-0' : 'translate-x-full'
                    } z-50`}
                >
                    <div className="relative w-64 bg-white h-full shadow-lg flex flex-col ml-auto">
                        <button onClick={closeMenu} className="absolute top-4 left-4 focus:outline-none text-black">
                            <IoIosArrowForward className="text-2xl" />
                        </button>
                        <hr className="border-t-1 border-gray-300 mt-12" />
                        <div className="flex flex-col items-start p-4 space-y-4 mt-5">
                            <Link
                                to="/about"
                                onClick={closeMenu}
                                className={`text-xl hover:text-green-600 font-serif ${
                                    location.pathname === '/about' ? 'text-green-600' : 'text-black'
                                }`}
                            >
                                About Us
                            </Link>
                            <Link
                                to="/team"
                                onClick={closeMenu}
                                className={`text-xl hover:text-green-600  font-serif ${
                                    location.pathname === '/team' ? 'text-green-600' : 'text-black'
                                }`}
                            >
                                Our Team
                            </Link>
                            <Link
                                to="/donate"
                                onClick={closeMenu}
                                className={`text-xl hover:text-green-600 font-serif ${
                                    location.pathname === '/donate' ? 'text-green-600' : 'text-black'
                                }`}
                            >
                                Donate
                            </Link>
                            <Link
                                to="/volunteer"
                                onClick={closeMenu}
                                className={`text-xl hover:text-green-600 font-serif ${
                                    location.pathname === '/volunteer' ? 'text-green-600' : 'text-black'
                                }`}
                            >
                                Volunteer
                            </Link>
                            <Link
                                to="/contact"
                                onClick={closeMenu}
                                className={`text-xl hover:text-green-600  font-serif ${
                                    location.pathname === '/contact' ? 'text-green-600' : 'text-black'
                                }`}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Navbar Links for Desktop */}
                <div
                    className={`hidden md:flex flex-col md:flex-row md:space-x-6 lg:space-x-10 text-sm md:text-lg lg:text-xl absolute md:relative top-full md:top-0 left-0 md:left-auto w-full md:w-auto p-4 md:p-0 shadow-lg md:shadow-none z-40 mr-4 gap-4 ${
                        isScrolled ? 'bg-white text-gray-600' : 'bg-transparent text-white'
                    }`}
                >
                    <Link
                        to="/about"
                        className={`block md:inline-block hover:text-green-600 transition-colors duration-300 ${
                            location.pathname === '/about' ? 'text-green-600' : 'text-black'
                        }`}
                    >
                        About Us
                    </Link>
                    <Link
                        to="/team"
                        className={`block md:inline-block hover:text-green-600 transition-colors duration-300 ${
                            location.pathname === '/team' ? 'text-green-600' : 'text-black'
                        }`}
                    >
                        Our Team
                    </Link>
                    <Link
                        to="/donate"
                        className={`block md:inline-block hover:text-green-600 transition-colors duration-300 ${
                            location.pathname === '/donate' ? 'text-green-600' : 'text-black'
                        }`}
                    >
                        Donate
                    </Link>
                    <Link
                        to="/volunteer"
                        className={`block md:inline-block hover:text-green-600 transition-colors duration-300 ${
                            location.pathname === '/volunteer' ? 'text-green-600' : 'text-black'
                        }`}
                    >
                        Volunteer
                    </Link>
                    <Link
                        to="/contact"
                        className={`block md:inline-block hover:text-green-600 transition-colors duration-300 ${
                            location.pathname === '/contact' ? 'text-green-600' : 'text-black'
                        }`}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default React.memo(NavbarComponent);
