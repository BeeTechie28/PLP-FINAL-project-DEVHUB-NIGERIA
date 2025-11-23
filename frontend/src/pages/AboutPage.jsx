import React from 'react';
import { ShieldCheck, Zap, BookOpen, Users, CheckCircle } from 'lucide-react';

const ACCENT_COOL = '#13F9F9';
const ACCENT_WARM = '#FF7F5C';
const ULTRA_DARK_BG = '#0a0a0a';

const valueProps = [
    {
        icon: ShieldCheck,
        title: 'Structured Accountability',
        description: 'Our system ensures you never drop out. Weekly check-ins and Techie Mentor reports keep your journey on track.',
        color: ACCENT_COOL,
    },
    {
        icon: Zap,
        title: 'Industry-Led Curriculum',
        description: 'Learn stacks like React and Git/GitHub that are demanded by top global and Nigerian tech companies.',
        color: ACCENT_WARM,
    },
    {
        icon: BookOpen,
        title: 'Free Entry Point',
        description: 'Start with our free Frontend Basics course to test the waters and build your initial foundation.',
        color: ACCENT_COOL,
    },
    {
        icon: Users,
        title: 'Exclusive Network',
        description: 'Connect with hundreds of talented developers for collaboration, project feedback, and career opportunities.',
        color: ACCENT_WARM,
    },
];

const FeatureCard = ({ icon: Icon, title, description, color }) => (
    <div 
        className="p-8 bg-[#1e293b]/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-white/80 hover:shadow-[0_0_40px_rgba(19,249,249,0.2)] h-full relative overflow-hidden group"
        style={{ backgroundColor: ULTRA_DARK_BG, borderTop: `4px solid ${color === ACCENT_COOL ? ACCENT_COOL : ACCENT_WARM}` }}
    >
        <Icon size={40} className={`mb-4 transition-transform duration-500 group-hover:scale-110`} style={{ color }} />
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-md">{description}</p>
    </div>
);

const AboutPage = () => {
    return (
        <div className="min-h-screen font-['Inter']" style={{ backgroundColor: ULTRA_DARK_BG }}>
            <section className="py-24 text-center">
                <h1 className="text-5xl font-extrabold text-white mb-6">About DevHub</h1>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                    DevHub is a community-driven platform where aspiring developers gain the skills, mentorship, and connections needed to succeed in tech.
                </p>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h2 className="text-4xl font-extrabold text-center text-white mb-16">
                        Four Pillars of <span style={{ color: ACCENT_COOL }}>Guaranteed Growth</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {valueProps.map((prop, index) => (
                            <FeatureCard 
                                key={index} 
                                icon={prop.icon} 
                                title={prop.title} 
                                description={prop.description} 
                                color={prop.color} 
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-t border-gray-800">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-4xl font-extrabold text-white mb-4">Join Our Community</h2>
                    <p className="text-gray-400 text-lg mb-10">
                        Plug into our digital channels and start collaborating with like-minded developers today.
                    </p>
                    <a 
                        href="/community" 
                        className="inline-flex items-center font-bold py-4 px-10 rounded-full text-xl text-black bg-[#FF7F5C] hover:scale-[1.05] transition-transform"
                    >
                        Explore Community
                    </a>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
