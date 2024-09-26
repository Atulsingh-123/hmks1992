import React from 'react';
import NGO from '../images/NGO.jpg';
import MissionImage from '../images/mission.jpg'; 
import VisionImage from '../images/vision.jpg';
import EmpowermentImage from '../images/empowerment.jpg';
import EducationImage from '../images/education.jpg';
import HealthcareImage from '../images/healthcare.jpg';

const AboutUs = () => {
    return (
        <div className="min-h-screen">

            {/* Hero Section */}
            <section className="relative text-center">
                <img 
                    src={NGO} 
                    alt="Background" 
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Optional overlay for better text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative z-10 py-20 md:py-32 text-white">
                    <div className="container mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold font-serif">About Us</h1>
                        <p className="text-lg md:text-2xl mt-6 max-w-3xl mx-auto font-serif">
                            Empowering Women and Communities Through Support, Education, and Compassion.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-600 font-serif">Our Mission</h2>
                        <p className="text-lg md:text-xl mt-6 text-gray-600 max-w-3xl mx-auto md:mx-0 font-serif">
                            Our mission is to uplift women and communities by providing resources, education, and 
                            a support system that drives positive change.
                        </p>
                    </div>
                    <div>
                        <img src={MissionImage} alt="Our Mission" className="rounded-lg shadow-lg w-full object-cover"/>
                    </div>
                </div>
            </section>

            {/* Our Vision Section */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-gray-100 to-gray-300">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <img src={VisionImage} alt="Our Vision" loading="lazy" className="rounded-lg shadow-lg w-full object-cover"/>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-600 font-serif">Our Vision</h2>
                        <p className="text-lg md:text-xl mt-6 text-gray-700 max-w-3xl mx-auto md:mx-0 font-serif">
                            We envision a world where women have equal opportunities to lead, thrive, and make a 
                            difference in their communities.
                        </p>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-green-600 font-serif">What We Do</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                        <div className="p-8 bg-gray-50 shadow-lg rounded-lg text-center">
                            <img src={EmpowermentImage} loading="lazy" alt="Empowerment" className="h-40 w-full object-cover mb-4 rounded-md"/>
                            <h3 className="text-2xl font-bold text-green-600 font-serif">Empowerment</h3>
                            <p className="text-gray-700 mt-4 font-serif">
                                We empower women through skills training and mentorship programs, 
                                enabling them to take control of their futures.
                            </p>
                        </div>
                        <div className="p-8 bg-gray-50 shadow-lg rounded-lg text-center">
                            <img src={EducationImage} loading="lazy" alt="Education" className="h-40 w-full object-cover mb-4 rounded-md"/>
                            <h3 className="text-2xl font-bold text-green-600 font-serif">Education</h3>
                            <p className="text-gray-700 mt-4 font-serif">
                                Our programs offer education opportunities to underprivileged women and children, 
                                creating a pathway for growth.
                            </p>
                        </div>
                        <div className="p-8 bg-gray-50 shadow-lg rounded-lg text-center">
                            <img src={HealthcareImage} loading="lazy" alt="Healthcare" className="h-40 w-full object-cover mb-4 rounded-md"/>
                            <h3 className="text-2xl font-bold text-green-600 font-serif">Healthcare</h3>
                            <p className="text-gray-700 mt-4 font-serif">
                                We provide access to healthcare, ensuring the well-being of women and children in our communities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 md:py-24 bg-green-600 text-white text-center">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif">Get Involved</h2>
                    <p className="text-lg md:text-xl mt-6 max-w-3xl mx-auto font-serif">
                        Join us in our mission to empower women and communities. Together, we can make a lasting impact.
                    </p>
                    <a href="/volunteer" className="bg-white text-green-600 hover:bg-gray-200 px-8 py-4 mt-8 rounded-full inline-block transition-all duration-300 font-serif">
                        Become a Volunteer
                    </a>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
