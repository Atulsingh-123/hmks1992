import React, { useState } from 'react';
import NGO from '../images/NGO.jpg';
import DonationQuoteImage from '../images/donation.jpg';

const DonatePage = () => {
    const [customAmount, setCustomAmount] = useState('');
    const [selectedAmount, setSelectedAmount] = useState('');

    const handleAmountClick = (amount) => {
        setSelectedAmount(amount);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e) => {
        setCustomAmount(e.target.value);
        setSelectedAmount('');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
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
                        <h1 className="text-4xl md:text-6xl font-bold font-serif">Donate Now</h1>
                        <p className="text-lg md:text-2xl mt-6 max-w-3xl mx-auto font-serif">
                            Empowering Women and Communities Through Support, Education, and Compassion.
                        </p>
                    </div>
                </div>
            </section>

            {/* Donation Quote Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-green-600 mb-6 font-serif">Your Generosity Changes Lives</h2>
                    <p className="text-lg md:text-2xl max-w-3xl mx-auto font-serif mb-6">
                        "The best way to find yourself is to lose yourself in the service of others." – Mahatma Gandhi
                    </p>
                    <img 
                        src={DonationQuoteImage} 
                        alt="Donation Quote" 
                        loading="lazy"
                        className="mx-auto w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-lg"
                    />
                </div>
            </section>

            {/* Donate Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-green-600 text-center mb-10 font-serif">Make a Difference Today</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        
                        {/* Donation Options */}
                        <div className="bg-gray-50 p-8 shadow-lg rounded-lg">
                            <h3 className="text-2xl font-bold text-green-600 mb-6 font-serif">Choose a Donation Amount</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {['₹500', '₹1000', '₹2500', '₹5000'].map((amount) => (
                                    <button
                                        key={amount}
                                        className={`p-4 rounded-lg text-lg font-bold ${selectedAmount === amount ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-green-500 transition-all`}
                                        onClick={() => handleAmountClick(amount)}
                                    >
                                        {amount}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-6">
                                <label className="block text-lg font-medium text-gray-700 mb-2 font-serif">Custom Amount</label>
                                <input
                                    type="number"
                                    value={customAmount}
                                    onChange={handleCustomAmountChange}
                                    className="w-full p-4 rounded-lg border border-gray-300 shadow-sm"
                                    placeholder="Enter your custom amount"
                                />
                            </div>
                        </div>

                        {/* Donation Form */}
                        <div className="bg-gray-50 p-8 shadow-lg rounded-lg">
                            <h3 className="text-2xl font-bold text-green-600 mb-6 font-serif">Your Information</h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 text-left">Full Name</label>
                                    <input
                                        type="text"
                                        className="mt-1 p-3 block w-full shadow-sm border border-gray-300 rounded-md"
                                        placeholder="Enter your full name"
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
                                    <label className="block text-sm font-medium text-gray-700 text-left">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="mt-1 p-3 block w-full shadow-sm border border-gray-300 rounded-md"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-all font-serif">
                                    Donate Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-green-600 text-white py-6">
                <div className="container mx-auto text-center font-serif">
                    <p>© 2024 Hema Mahila Kalyan Samiti. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default DonatePage;
