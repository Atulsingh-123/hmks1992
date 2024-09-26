import React from 'react';
import NGO from '../images/NGO.jpg';
import pramod from '../assets/pramod.jpeg';

const teamMembers = [
    {
        name: 'Pramod Pandey',
        role: 'Founder & CEO',
        image: pramod,
        bio: 'Pramod Pandey is the visionary behind our NGO, driving change with his passion and leadership.',
    },
    // {
    //     name: 'Jane Smith',
    //     role: 'Project Manager',
    //     image: 'https://picsum.photos/200/300',
    //     bio: 'Jane ensures our projects are completed on time and within budget.',
    // },
    // {
    //     name: 'Alice Johnson',
    //     role: 'Community Outreach',
    //     image: 'https://picsum.photos/200/300',
    //     bio: 'Alice connects with communities to bring real impact on the ground.',
    // },
    // {
    //     name: 'Mark Wilson',
    //     role: 'Fundraising Coordinator',
    //     image: 'https://picsum.photos/200/300',
    //     bio: 'Mark leads our fundraising efforts to ensure sustainable growth.',
    // },
];

const TeamMember = ({ name, role, image, bio }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105">
            <div className="w-full h-64 overflow-hidden"> 
                <img
                    src={image}
                    loading="lazy"
                    alt={`${name}'s profile`}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                <p className="text-gray-600">{role}</p>
                <p className="mt-4 text-gray-600 text-sm">{bio}</p>
            </div>
        </div>
    );
};

const OurTeam = () => {
    return (
        <>
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
                        <h1 className="text-4xl md:text-6xl font-bold font-serif">Our Team</h1>
                        <p className="text-lg md:text-2xl mt-6 max-w-3xl mx-auto font-serif">
                        "Coming together is a beginning. Keeping together is progress. Working together is success."
                        <br />— Henry Ford
                    </p>
                    </div>
                </div>
            </section>
            {/* Team Members Section */}
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {teamMembers.map((member, index) => (
                            <TeamMember
                                key={index}
                                name={member.name}
                                role={member.role}
                                image={member.image}
                                bio={member.bio}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurTeam;