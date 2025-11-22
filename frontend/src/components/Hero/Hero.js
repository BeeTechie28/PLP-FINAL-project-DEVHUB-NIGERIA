import React from 'react';
import { Terminal, ArrowRight, BookOpen } from 'lucide-react';

const Hero = ({ 
    headline = "Build the Future. Ship Your Code.",
    tagline = "Join Nigeria's fastest-growing tech community for hands-on learning, expert mentorship, and real-world project experience."
}) => {
    
    // Simple code snippet for the visual terminal
    const codeSnippet = [
        '// DevHub: The Future of Nigerian Tech Talent',
        'const developer = { role: "Software Engineer", status: "HIRED" };',
        'if (developer.status === "HIRED") {',
        '    console.log("🚀 Success: Career launched!");',
        '}',
        '// Get started with DevHub...',
    ];

    // Define custom styles and Tailwind overrides for the unique look
    const customStyles = `
        /* Custom Colors */
        .bg-navy-main { background-color: #011032; }
        .bg-navy-dark { background-color: #0d1b4d; }
        .text-cyan-accent { color: #13F9F9; }
        .bg-cyan-accent { background-color: #13F9F9; }
        .text-coral-accent { color: #FF7F5C; }
        .bg-coral-accent { background-color: #FF7F5C; }
        
        /* Gradient Background */
        .hero-bg-gradient {
            background: linear-gradient(135deg, #011032 0%, #0d1b4d 85%);
        }

        /* 1. Typing Animation for Code */
        @keyframes typing {
            from { width: 0 }
            to { width: 100% }
        }

        .code-line {
            white-space: pre;
            overflow: hidden;
            width: 0;
            animation: typing 0.1s steps(40, end) forwards;
            font-family: 'Consolas', 'Courier New', monospace;
            line-height: 1.6;
        }

        /* 2. Floating Background Shapes (Subtle Glow) */
        @keyframes float {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(20px, 15px); }
        }

        .floating-shape {
            animation: float 15s ease-in-out infinite;
            filter: blur(80px);
            opacity: 0.1;
        }

        .shape-cyan { background: #13F9F9; }
        .shape-coral { background: #FF7F5C; animation-delay: -7.5s; }

        /* 3. CTA Hover Effects */
        .cta-primary:hover {
            box-shadow: 0 5px 30px rgba(19, 249, 249, 0.7);
            transform: translateY(-2px);
        }
        .cta-secondary:hover {
            box-shadow: 0 0 15px rgba(255, 127, 92, 0.7);
            transform: translateY(-1px);
        }
    `;

    // Function to simulate navigation (since this is a single file)
    const handleNavigate = (path) => {
        console.log(`Navigating to: ${path}`);
        // In a real multi-page app (like using React Router), you would use:
        // navigate(path); 
        // For this single-file environment, we simulate the action.
    };

    return (
        <section className="hero-bg-gradient min-h-screen pt-24 pb-12 sm:pt-32 sm:pb-20 relative overflow-hidden font-inter text-white">
            <style>{customStyles}</style>

            {/* --- Floating Background Shapes --- */}
            <div className="floating-shape shape-cyan absolute top-[10%] left-[5%] w-64 h-64 rounded-full"></div>
            <div className="floating-shape shape-coral absolute bottom-[10%] right-[5%] w-80 h-80 rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* --- Text Content and CTAs --- */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-white drop-shadow-lg">
                            {headline}
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-xl lg:max-w-none mx-auto lg:mx-0">
                            {tagline}
                        </p>

                        <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6">
                            {/* Primary CTA: Cyan Glow */}
                            <div
                                onClick={() => handleNavigate('/start-coding')}
                                className="cta-primary flex items-center space-x-2 px-8 py-4 text-lg font-bold rounded-full 
                                           bg-cyan-accent text-navy-main transition-all duration-300 cursor-pointer 
                                           shadow-lg shadow-cyan-accent/30"
                                role="button"
                                tabIndex="0"
                            >
                                <Terminal className="w-6 h-6" />
                                <span>Start Coding Today</span>
                                <ArrowRight className="w-5 h-5 ml-1" />
                            </div>

                            {/* Secondary CTA: Coral Border and Hover */}
                            <div
                                onClick={() => handleNavigate('/courses')}
                                className="cta-secondary flex items-center space-x-2 px-8 py-4 text-lg font-bold rounded-full 
                                           bg-transparent text-coral-accent border-2 border-coral-accent transition-all duration-300 cursor-pointer 
                                           hover:bg-coral-accent hover:text-white"
                                role="button"
                                tabIndex="0"
                            >
                                <BookOpen className="w-6 h-6" />
                                <span>Explore Courses</span>
                            </div>
                        </div>
                    </div>

                    {/* --- Visual Terminal Code Snippet --- */}
                    <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
                        <div className="w-full max-w-lg bg-[#171c28] rounded-xl shadow-2xl border border-cyan-accent/30 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                            
                            {/* Window Header */}
                            <div className="bg-[#2c303a] p-3 flex items-center space-x-2 border-b border-gray-700">
                                <span className="w-3 h-3 bg-[#ff5f56] rounded-full"></span>
                                <span className="w-3 h-3 bg-[#ffbd2e] rounded-full"></span>
                                <span className="w-3 h-3 bg-[#27c93f] rounded-full"></span>
                                <span className="text-xs text-gray-400 font-mono ml-4">
                                    devhub-bootcamp/main.js
                                </span>
                            </div>

                            {/* Code Editor Area */}
                            <div className="p-4 sm:p-6 text-sm sm:text-base h-72">
                                {codeSnippet.map((line, index) => (
                                    <p 
                                        key={index} 
                                        className="code-line" 
                                        style={{ 
                                            // Sequential typing animation delay
                                            animationDelay: `${index * 0.1 + 0.5}s`, 
                                            // Apply color coding based on line content
                                            color: index === 0 ? '#b2ccd6' : (index === 1 ? '#f95972' : (index === 3 ? '#13F9F9' : '#b2ccd6'))
                                        }}
                                    >
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;