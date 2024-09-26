import React from 'react';
import NGO from '../images/NGO.jpg';
import EmpowerWomenImage from '../images/empowerment.jpg';
import SupportInitiativesImage from '../images/support.jpg';
import MakeDifferenceImage from '../images/makedifferent.jpg';
import TeachingAssistantImage from '../images/teaching.jpg';
import HealthcareVolunteerImage from '../images/healthcare.jpg';
import CommunityOutreachImage from '../images/community.jpg';

const VolunteerPage = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative text-center">
                <img
                    src={NGO}
                    alt="Background"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative z-10 py-20 md:py-32 text-white">
                    <div className="container mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold font-serif">Join Us as a Volunteer</h1>
                        <p className="text-lg md:text-2xl mt-6 max-w-3xl mx-auto font-serif">
                            Make a difference in someone's life today!
                        </p>
                        <a
                            href="#volunteer-form"
                            className="inline-block bg-white text-green-600 hover:bg-gray-200 px-6 py-3 mt-6 md:mt-14 rounded-full text-lg transition-all duration-300 font-serif"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Volunteer Section */}
            <section className="why-volunteer-section py-16 px-4 md:px-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 font-serif">Why Volunteer with Us?</h2>
                <p className="text-lg md:text-xl mb-4 font-serif">
                    Volunteering with us is a rewarding experience that allows you to give back to the community,
                    build new skills, and make lasting connections. Whether you have a few hours to spare or
                    are looking to make a long-term commitment, there's a place for you in our team.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <img src={EmpowerWomenImage} loading="lazy" alt="Empower Women" className="h-40 w-full object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold mb-2 font-serif">Empower Women</h3>
                        <p className='font-serif'>Help us empower women in the community through education, support, and resources.</p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <img src={SupportInitiativesImage} loading="lazy" alt="Support Initiatives" className="h-40 w-full object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold mb-2 font-serif">Support Our Initiatives</h3>
                        <p className='font-serif'>Assist in various initiatives that promote health, education, and well-being for women and children.</p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <img src={MakeDifferenceImage} loading="lazy" alt="Make a Difference" className="h-40 w-full object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold mb-2 font-serif">Make a Difference</h3>
                        <p className='font-serif'>Your time and effort can make a real difference in someone's life.</p>
                    </div>
                </div>
            </section>


            {/* Volunteer Form Section */}
            <section id="volunteer-form" className="volunteer-form-section py-16 px-4 md:px-20 bg-gray-100">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-green-600 font-serif">Register as a Volunteer</h2>
                <form className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-lg">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="name">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Your Full Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Your Email Address"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="phone">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Your Phone Number"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="interest">
                            Area of Interest
                        </label>
                        <select
                            id="interest"
                            name="interest"
                            className="w-full px-3 py-2 border rounded-md"
                            required
                        >
                            <option value="">Select an Area of Interest</option>
                            <option value="education">Education</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="community-outreach">Community Outreach</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="message">
                            Message (Optional)
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Tell us why you want to volunteer with us"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-full w-full transition-all duration-300"
                    >
                        Submit
                    </button>
                </form>
            </section>

            {/* Volunteering Opportunities Section */}
            <section className="volunteering-opportunities-section py-16 px-4 md:px-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-green-600">Current Volunteering Opportunities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <img src={TeachingAssistantImage} loading="lazy" alt="Teaching Assistant" className="h-40 w-full object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Teaching Assistant</h3>
                        <p>Assist our teachers in providing quality education to underprivileged children.</p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <img src={HealthcareVolunteerImage} loading="lazy" alt="Healthcare Volunteer" className="h-40 w-full object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Healthcare Volunteer</h3>
                        <p>Join our healthcare team to provide basic medical support and health education.</p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <img src={CommunityOutreachImage} loading="lazy" alt="Community Outreach" className="h-40 w-full object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Community Outreach</h3>
                        <p>Help us reach out to more women in need through community events and programs.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VolunteerPage;
