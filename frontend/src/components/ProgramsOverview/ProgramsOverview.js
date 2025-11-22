import React from 'react';
import { 
    Code, GitBranch, Users, ArrowRight, Zap, Terminal, Globe, Server 
} from 'lucide-react'; 

// --- Custom Styles for Deep Navy, Neon Cyan, and Coral Accent ---
const customStyles = `
  /* Define custom colors */
  .bg-navy-deep { background-color: #000a1f; } /* Almost black, but deep blue */
  .bg-navy-mid { background-color: #04143a; } /* Mid panel color */
  .text-cyan-neon { color: #00ffff; } 
  .shadow-cyan-neon { box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff40; }
  .shadow-coral-neon { box-shadow: 0 0 10px #ff7f5c, 0 0 20px #ff7f5c40; }
  .border-cyan-glow { border: 1px solid #00ffff30; box-shadow: 0 0 8px #00ffff20 inset; }
  
  /* Slanted divider for CTA section */
  .cta-separator-panel {
    position: absolute;
    top: -50px; 
    left: 0;
    width: 100%;
    height: 100px;
    background: #04143a; /* Match mid-navy background */
    transform: skewY(-2deg); 
    z-index: 10;
  }
`;

// =================================================================
// Program Card Component (High-Fidelity Glow Effect)
// =================================================================

const ProgramCard = ({ icon: Icon, title, description, features, accentColor, navigate }) => {
    // Dynamic styling based on accent
    const isCyan = accentColor === 'cyan';
    const accentClass = isCyan ? 'text-cyan-neon border-cyan-glow' : 'text-coral shadow-coral-neon border-[#ff7f5c30]';
    const hoverEffect = isCyan ? 'hover:shadow-cyan-neon' : 'hover:shadow-coral-neon';
    const buttonClass = isCyan 
        ? 'bg-cyan-neon text-navy-deep hover:bg-white hover:shadow-cyan-neon' 
        : 'bg-coral text-navy-deep hover:bg-[#fa6e46] hover:shadow-coral-neon';

    return (
        <div 
            className={`
                bg-navy-mid p-8 rounded-xl border flex flex-col h-full transition-all duration-500
                transform hover:-translate-y-2 cursor-pointer 
                ${accentClass} ${hoverEffect}
            `}
        >
            {/* Header and Icon */}
            <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 flex items-center justify-center rounded-lg bg-navy-deep/50 border ${isCyan ? 'border-cyan-neon/50' : 'border-coral/50'}`}>
                    <Icon size={24} strokeWidth={3} className={isCyan ? 'text-cyan-neon' : 'text-coral'} /> 
                </div>
                <h3 className="text-2xl font-extrabold text-white leading-tight">{title}</h3>
            </div>
            
            <p className="text-gray-400 mb-6 text-sm flex-grow">{description}</p>
            
            {/* Features List */}
            <ul className="space-y-2 mb-8 text-sm text-gray-300">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <Zap size={14} className={`mt-1 mr-3 flex-shrink-0 ${isCyan ? 'text-cyan-neon' : 'text-coral'}`} />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            {/* CTA Button */}
            <button 
                onClick={() => navigate('enroll')}
                className={`flex items-center space-x-2 px-6 py-3 w-full justify-center rounded-full font-bold text-sm transition-all duration-300 
                           ${buttonClass} shadow-md`}
            >
                <span>Launch Program</span>
                <ArrowRight size={18} />
            </button>
        </div>
    );
};

// =================================================================
// Primary Component (Programs and CTA)
// =================================================================

const ProgramsAndCTA = ({ navigate }) => {
    return (
        <div className="bg-navy-deep text-white min-h-screen">
            <style>{customStyles}</style>

            {/* 1. Programs Section - Darker Panel Background */}
            <section className="bg-navy-mid py-20 sm:py-28 px-4 border-b border-[#00ffff10]">
                <div className="max-w-7xl mx-auto">
                    
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <p className="text-sm font-semibold uppercase tracking-widest text-coral mb-3">
                            <span className="bg-coral/20 px-3 py-1 rounded-full border border-coral/50">Core Training Tracks</span>
                        </p>
                        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
                            Choose Your <span className="text-cyan-neon">Path to Code Mastery</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                            Our intensive programs are designed for immediate knowledge transfer and real-world application, covering fundamentals to advanced deployment strategies.
                        </p>
                    </div>

                    {/* Programs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {/* 1. Frontend Focus */}
                        <ProgramCard 
                            icon={Globe}
                            title="Frontend Development Specialist" 
                            description="A four-week sprint to master modern browser technologies, focusing on creating responsive, highly optimized, and interactive user interfaces." 
                            features={["HTML5 & Semantic Structure", "Tailwind CSS & Utility-First Design", "Advanced JavaScript (ES2023)", "React/Vue Component Architecture"]}
                            accentColor="cyan"
                            navigate={navigate}
                        />

                        {/* 2. Full Stack Bootcamp Focus */}
                        <ProgramCard 
                            icon={Server}
                            title="3-Month Full-Stack Career Bootcamp" 
                            description="The flagship, immersive program covering both client and server-side development, designed to take a novice to a job-ready engineer." 
                            features={["Backend API Development (Node/Express)", "Database Management (SQL/NoSQL)", "Authentication & Security", "Project Portfolio & Job Prep"]}
                            accentColor="coral"
                            navigate={navigate}
                        />

                        {/* 3. Git & Collaboration Focus */}
                        <ProgramCard 
                            icon={GitBranch}
                            title="Version Control & Collaboration" 
                            description="Essential for every developer, this track covers professional workflows, distributed version control, and team-based coding protocols." 
                            features={["Deep Dive into Git Internals", "Branching Strategies (GitFlow, Trunk)", "Advanced Merge Conflict Resolution", "CI/CD & Deployment Hooks"]}
                            accentColor="cyan"
                            navigate={navigate}
                        />
                    </div>
                </div>
            </section>

            {/* 2. CTA Section - Deep Navy Background with Slanted Separator */}
            <section className="relative bg-navy-deep py-20 sm:py-32 px-4 overflow-hidden">
                {/* Slanted Separator Element */}
                <div className="cta-separator-panel"></div>

                <div className="relative z-20 max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-snug">
                        <span className="text-coral">Elevate</span> Your Career Trajectory
                    </h2>
                    <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                        Enrollment is highly competitive and spots are limited per cohort to ensure personalized, high-impact mentorship.
                    </p>
                    
                    {/* CTA Button (Primary Action - Cyan Neon Glow) */}
                    <button 
                        onClick={() => navigate('enroll')}
                        className="inline-flex items-center space-x-3 px-10 py-4 text-xl font-bold transition-all duration-400 rounded-full cursor-pointer 
                                   bg-cyan-neon text-navy-deep border-4 border-cyan-neon
                                   transform hover:scale-[1.05] shadow-cyan-neon"
                    >
                        <span>Initiate Enrollment Sequence</span>
                        <ArrowRight size={24} />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ProgramsAndCTA;