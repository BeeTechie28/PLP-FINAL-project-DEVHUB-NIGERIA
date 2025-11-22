import React from 'react';
import { ShieldCheck, Zap, BookOpen, Users, Send, MessageCircle, Linkedin, Handshake, Briefcase, Heart, ArrowRight, CheckCircle, GraduationCap } from 'lucide-react';

// --- COLOR AND STYLE CONSTANTS ---
const ACCENT_COOL = '#13F9F9'; // Electric Cyan
const ACCENT_WARM = '#FF7F5C'; // Coral Orange
const DARK_BG_BLUE = '#0d1b4d'; // Deep navy background for cards
const ULTRA_DARK_BG = '#0a0a0a'; // Main section background

// --- MOCK DATA ---

// 1. Why Choose Us / Value Proposition
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

// 2. Social Channels
const socialChannels = [
    {
        name: 'Telegram Channel',
        description: 'Real-time discussions, quick help, and event announcements.',
        icon: Send, 
        color: 'bg-blue-600/20 text-blue-400 border-blue-400',
    },
    {
        name: 'WhatsApp Group',
        description: 'Direct communication, focused mentorship sub-groups, and local meetups.',
        icon: MessageCircle,
        color: 'bg-green-600/20 text-green-400 border-green-400',
    },
    {
        name: 'LinkedIn Network',
        description: 'Professional opportunities, job postings, and thought leadership content.',
        icon: Linkedin,
        color: 'bg-cyan-600/20 text-cyan-400 border-cyan-400',
    },
];

// --- Sub-Components for Cleanliness ---

const FeatureCard = ({ icon: Icon, title, description, color, index }) => (
    <div 
        key={index} 
        className="p-8 bg-[#1e293b]/50 backdrop-blur-sm rounded-xl border border-gray-700/50 transition-all duration-500 hover:border-white/80 hover:shadow-[0_0_40px_rgba(19,249,249,0.2)] h-full relative overflow-hidden group"
        style={{ backgroundColor: ULTRA_DARK_BG, borderTop: `4px solid ${color === ACCENT_COOL ? ACCENT_COOL : ACCENT_WARM}` }}
    >
        {/* Hover overlay effect */}
        <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
            style={{ backgroundImage: `radial-gradient(circle at 100% 0%, ${color === ACCENT_COOL ? ACCENT_COOL : ACCENT_WARM} 1%, transparent 60%)` }}
        ></div>

        <Icon size={40} className={`mb-4 transition-transform duration-500 group-hover:scale-110`} style={{ color }} />
        <h3 className="text-xl font-bold text-white mb-2 relative z-10">{title}</h3>
        <p className="text-gray-400 text-md relative z-10">{description}</p>
    </div>
);

// --- Main Component ---

const App = () => {
    return (
        <div className="min-h-screen font-['Inter']" style={{ backgroundColor: ULTRA_DARK_BG }}>
            
            {/* 1. Hero / Title Section (Pulsating Gradient Effect) */}
            <section className="relative pt-32 pb-24 text-center overflow-hidden" 
                style={{ 
                    backgroundImage: `linear-gradient(180deg, ${ULTRA_DARK_BG} 0%, ${DARK_BG_BLUE} 100%)`,
                }}
            >
                
                {/* Stylized SVG Shape Overlay for dynamic, glowing effect */}
                <svg className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none animate-pulse" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
                    <path fill={ACCENT_WARM} d="M700.5,302.5C620,392.5,417,392,347.5,353.5C278,315,283.5,237.5,223,178C162.5,118.5,38.5,76.5,4,228.5C-30.5,380.5,123,500,323.5,500C524,500,781,379.5,700.5,302.5Z" transform="translate(100 0) rotate(15)" style={{filter: 'blur(120px)'}}/>
                    <path fill={ACCENT_COOL} d="M667.5,160.5C578.5,200,327,150,265,190C203,230,172,370,229.5,419.5C287,469,433.5,468,546.5,444C659.5,420,742,373,766,281.5C790,190,756.5,121,667.5,160.5Z" transform="translate(150 50) rotate(-10)" style={{filter: 'blur(120px)'}}/>
                </svg>
                
                <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                    <p 
                        className="text-white font-semibold uppercase tracking-[0.3em] text-sm mb-4 inline-block px-4 py-1 rounded-full border border-white/30"
                        style={{ color: ACCENT_COOL, backgroundColor: `${ACCENT_COOL}20` }}
                    >
                        The DevHub Ecosystem
                    </p>
                    <h1 
                        className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl leading-tight"
                    >
                        It's More Than Code. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7F5C] to-[#fa6b3e]">It's Community.</span>
                    </h1>
                    <p 
                        className="mt-8 max-w-3xl mx-auto text-xl text-gray-300"
                    >
                        We provide the environment, the mentors, and the connections you need to not just start, but to *finish* your tech journey successfully.
                    </p>
                </div>
            </section>

            {/* 2. Why Choose Us (Value Proposition Grid) */}
            <section className="py-24" style={{ backgroundColor: ULTRA_DARK_BG }}>
                <div className="container mx-auto px-6 max-w-7xl">
                    <h2 
                        className="text-4xl font-extrabold text-center text-white mb-16"
                    >
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
                                index={index} 
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Accountability Program & Image Enhancement (The Techie Mentor Stack) */}
            <section className="py-24 border-t border-gray-800" style={{ backgroundColor: DARK_BG_BLUE }}>
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Left Column: Dynamic Visual Representation */}
                        <div className="w-full h-[28rem] relative flex items-center justify-center">
                            
                            {/* Base Card: Program Frame */}
                            <div className="absolute w-[90%] h-[90%] bg-gray-900 rounded-2xl border-2 border-gray-700/50 shadow-2xl shadow-black/50 transform rotate-[-3deg] z-10"></div>
                            
                            {/* Middle Card: Mentor Profile Placeholder */}
                            <div className="absolute w-[80%] h-[80%] bg-gray-800 rounded-2xl border-4 border-white/10 flex items-center justify-center shadow-2xl shadow-black/70 transform rotate-[1deg] z-20">
                                <GraduationCap size={60} className="text-gray-600 opacity-50" />
                                <p className="absolute bottom-6 text-gray-500 font-medium">Techie Mentor Profile</p>
                            </div>

                            {/* Top Card: Interaction/Report */}
                            <div 
                                className="absolute w-[70%] h-[70%] bg-white/5 backdrop-blur-md rounded-2xl border-4 border-white/20 p-6 flex flex-col justify-center shadow-2xl shadow-[#13F9F9]/40 z-30 transition-transform duration-500 hover:scale-[1.05]"
                                style={{ transform: 'rotate(0deg)' }}
                            >
                                <h4 className="text-white text-2xl font-bold mb-3">Weekly Progress Report</h4>
                                <div className="space-y-2">
                                    <p className="flex items-center text-sm text-gray-300">
                                        <CheckCircle size={16} className="text-[#13F9F9] mr-2 flex-shrink-0" />
                                        Task Completion: 95%
                                    </p>
                                    <p className="flex items-center text-sm text-gray-300">
                                        <CheckCircle size={16} className="text-[#13F9F9] mr-2 flex-shrink-0" />
                                        Code Review Done: Yes
                                    </p>
                                    <p className="flex items-center text-sm text-gray-300">
                                        <CheckCircle size={16} className="text-[#13F9F9] mr-2 flex-shrink-0" />
                                        Next Goal Set: Backend Integration
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Accountability & Mentorship Text */}
                        <div>
                            <span className="text-white font-semibold uppercase tracking-widest text-sm mb-2 block" style={{ color: ACCENT_COOL }}>Our Pledge</span>
                            <h2 className="text-5xl font-extrabold text-white mb-6 leading-tight">
                                The <span style={{ color: ACCENT_WARM }}>Techie Mentor</span> Accountability Program
                            </h2>
                            <p className="text-gray-300 text-lg mb-8">
                                Finishing a bootcamp is the hardest part. That’s why we pair every student with a **dedicated Techie Mentor**—an industry expert committed to helping you finish your curriculum and secure your first role.
                            </p>
                            
                            <ul className="space-y-5">
                                <li className="flex items-start gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-700">
                                    <CheckCircle size={24} className="mt-1 flex-shrink-0" style={{ color: ACCENT_COOL }} />
                                    <div>
                                        <strong className="text-white">Personalized Curriculum Checks:</strong> 
                                        <p className="text-gray-400">Weekly sessions to review progress, tackle roadblocks, and adjust learning paths.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-700">
                                    <CheckCircle size={24} className="mt-1 flex-shrink-0" style={{ color: ACCENT_COOL }} />
                                    <div>
                                        <strong className="text-white">Project Feedback:</strong> 
                                        <p className="text-gray-400">Deep, actionable critiques on your portfolio projects and code quality to meet professional standards.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-700">
                                    <CheckCircle size={24} className="mt-1 flex-shrink-0" style={{ color: ACCENT_COOL }} />
                                    <div>
                                        <strong className="text-white">Career Guidance:</strong> 
                                        <p className="text-gray-400">Advice on interviews, salary negotiation, professional networking, and job market trends.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Community Channels */}
            <section className="py-24" style={{ backgroundColor: ULTRA_DARK_BG }}>
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <Users className="w-12 h-12 mx-auto mb-4" style={{ color: ACCENT_WARM }} />
                        <h2 
                            className="text-4xl font-extrabold text-white mb-4"
                        >
                            Connect to Our <span style={{ color: ACCENT_COOL }}>Digital Channels</span>
                        </h2>
                        <p 
                            className="text-gray-400 text-lg max-w-2xl mx-auto"
                        >
                            Plug into the vibrant discussions and resource sharing across our main platforms. Your support system is just a click away.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {socialChannels.map((channel, index) => {
                            const Icon = channel.icon;
                            return (
                                <a 
                                    key={index}
                                    href="#" 
                                    className={`p-8 rounded-xl border flex flex-col items-center text-center transition-all duration-500 hover:scale-[1.05] shadow-xl hover:shadow-2xl`}
                                    style={{ backgroundColor: DARK_BG_BLUE, borderColor: channel.color.split(' ')[1], boxShadow: `0 8px 30px ${channel.color.split(' ')[1].replace('text-', '').replace('-400', '')}/20` }}
                                >
                                    <Icon size={48} className={`mb-4 transition-colors`} style={{ color: channel.color.split(' ')[1].replace('text-', '#') }} />
                                    <h3 className="text-2xl font-bold text-white mb-2">{channel.name}</h3>
                                    <p className="text-gray-300 text-md">{channel.description}</p>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 5. Partnership / Hiring / Mentorship Feature */}
            <section className="py-24 border-t border-gray-800" style={{ backgroundColor: DARK_BG_BLUE }}>
                <div className="container mx-auto px-6 max-w-7xl">
                    <h2 
                        className="text-4xl font-extrabold text-center text-white mb-16"
                    >
                        Collaborate and <span style={{ color: ACCENT_WARM }}>Grow</span> With DevHub
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        
                        {/* Hiring / Recruiting Card */}
                        <div 
                            className="p-10 rounded-2xl shadow-2xl h-full border border-white/10 transition-transform duration-300 hover:scale-[1.02] relative overflow-hidden"
                            style={{ backgroundColor: ULTRA_DARK_BG }}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-20" style={{ backgroundColor: ACCENT_COOL }}></div>
                            <Briefcase className="w-12 h-12 mb-4 relative z-10" style={{ color: ACCENT_COOL }} />
                            <h3 className="text-3xl font-extrabold text-white mb-3 relative z-10">Recruit Top Talent</h3>
                            <p className="text-gray-400 text-lg mb-8 relative z-10">
                                Looking for highly trained, accountable, and job-ready developers? Our bootcamp graduates are technically proficient in modern stacks (React, Git, etc.). Partner with us for exclusive access to our talent pool.
                            </p>
                            <a href="#" className="inline-flex items-center font-bold group transition duration-300 text-lg relative z-10" style={{ color: ACCENT_COOL, textShadow: `0 0 5px ${ACCENT_COOL}50` }}>
                                Hire a DevHub Graduate 
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                        
                        {/* Volunteer / Mentorship Card */}
                        <div 
                            className="p-10 rounded-2xl shadow-2xl h-full border border-white/10 transition-transform duration-300 hover:scale-[1.02] relative overflow-hidden"
                            style={{ backgroundColor: ULTRA_DARK_BG }}
                        >
                            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full transform -translate-x-1/2 translate-y-1/2 opacity-20" style={{ backgroundColor: ACCENT_WARM }}></div>
                            <Heart className="w-12 h-12 mb-4 relative z-10" style={{ color: ACCENT_WARM }} />
                            <h3 className="text-3xl font-extrabold text-white mb-3 relative z-10">Contribute & Inspire</h3>
                            <p className="text-gray-400 text-lg mb-8 relative z-10">
                                Are you a seasoned developer or industry expert? Join our mission to pay it forward! Contribute your time as a Techie Mentor or guest speaker and inspire the next wave of African talent.
                            </p>
                            <a href="#" className="inline-flex items-center font-bold group transition duration-300 text-lg relative z-10" style={{ color: ACCENT_WARM, textShadow: `0 0 5px ${ACCENT_WARM}50` }}>
                                Join the Mentorship Roster
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* 6. Join Our Team CTA (Final Call) */}
            <section className="py-20 border-t border-gray-700/50" style={{ backgroundColor: ULTRA_DARK_BG }}>
                <div className="container mx-auto px-6 max-w-4xl text-center p-10 rounded-xl border-4 border-dashed border-gray-800/50 hover:border-white/20 transition-colors duration-500">
                    <Handshake className="w-12 h-12 mx-auto mb-4" style={{ color: ACCENT_COOL }} />
                    <h2 className="text-4xl font-extrabold text-white mb-4">
                        Ready to Build the Future with Us?
                    </h2>
                    <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
                        We are always looking for passionate people to join the core DevHub team—from instructional design to community management.
                    </p>
                    {/* Bolder, Glowing Final Button */}
                    <a 
                        href="#" 
                        className="inline-flex items-center font-bold py-4 px-10 rounded-full text-xl group transition duration-300 transform hover:scale-[1.05]"
                        style={{ 
                            backgroundColor: ACCENT_WARM, 
                            color: ULTRA_DARK_BG, 
                            boxShadow: `0 10px 30px ${ACCENT_WARM}50`,
                            border: '2px solid transparent'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.boxShadow = `0 15px 40px ${ACCENT_WARM}80`}
                        onMouseOut={(e) => e.currentTarget.style.boxShadow = `0 10px 30px ${ACCENT_WARM}50`}
                    >
                        Explore Core Team Roles 
                        <ArrowRight size={24} className="ml-3 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </section>
            
        </div>
    );
};

export default App;