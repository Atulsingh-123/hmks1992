import React from 'react';
import NGO from '../images/NGO.jpg';

const ContactUs = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
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
                        <h1 className="text-4xl md:text-6xl font-bold font-serif">Contact Us</h1>
                        <p className="text-lg md:text-2xl mt-6 max-w-3xl mx-auto font-serif">
                            Empowering Women and Communities Through Support, Education, and Compassion.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-12 md:py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Contact Form */}
                        <div className="bg-white p-8 shadow-lg rounded-lg">
                            <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">Get in Touch</h2>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 text-left">Your Name</label>
                                    <input
                                        type="text"
                                        className="mt-1 p-3 block w-full shadow-sm border border-gray-300 rounded-md"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 text-left">Email Address</label>
                                    <input
                                        type="email"
                                        className="mt-1 p-3 block w-full shadow-sm border border-gray-300 rounded-md"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 text-left">Message</label>
                                    <textarea
                                        className="mt-1 p-3 block w-full shadow-sm border border-gray-300 rounded-md"
                                        placeholder="Type your message"
                                        rows="5"
                                    ></textarea>
                                </div>
                                <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-all">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col justify-between">
                            <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">Our Contact Info</h2>
                            <div className="space-y-4">
                                <p className="text-lg text-gray-700">
                                    <strong>Address:</strong> 221403-Khandhak, Sikhari, Varanasi, India
                                </p>
                                <p className="text-lg text-gray-700">
                                    <strong>Phone:</strong>+91-9889503191
                                </p>
                                <p className="text-lg text-gray-700">
                                    <strong>Email:</strong> hemamks1992@gmail.com
                                </p>
                                <p className="text-lg text-gray-700">
                                    <strong>Working Hours:</strong> Mon-Fri, 9am-6pm
                                </p>
                            </div>
                            {/* Map placeholder */}
                            <div className="w-full h-56 bg-gray-300 mt-6 flex items-center justify-center rounded-md">
                                <p className="text-gray-600">Map Address</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-green-600 text-white py-6">
                <div className="container mx-auto text-center">
                    <p>© 2024 Hema Mahila Kalyan Samiti. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default ContactUs;
