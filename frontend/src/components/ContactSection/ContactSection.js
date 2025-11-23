import React from 'react';
import { Mail, Send, Sparkles } from 'lucide-react'; // Added Sparkles for flair

// Main component, exported as App
const App = () => {
    // Placeholder handlers for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Contact Form Submitted!");
        // Add visual confirmation here instead of alert()
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log("Subscription Submitted!");
    };

    return (
        // SECTION CONTAINER: Deep black gradient, subtle neon border/glow effect on the whole section
        <section className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16 md:py-32 relative overflow-hidden font-sans">
            
            {/* Background Glow Effect - Simulates a massive ambient light source */}
            <div className="absolute top-0 left-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl transform -translate-x-1/2 opacity-30 animate-pulse-slow pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                
                {/* Main Grid Layout: Balanced 2-column on desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 gap-16 items-start">
                    
                    {/* LEFT SIDE: Contact Info & Newsletter CTA */}
                    <div className="space-y-6">
                        
                        {/* Tag */}
                        <span className="text-lime-400 font-extrabold uppercase text-sm tracking-[0.2em] mb-4 inline-flex items-center gap-2">
                            <Sparkles size={16} /> Get in Touch
                        </span>
                        
                        {/* Heading */}
                        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
                            Have a Question? <span className="text-sky-400">Let's Build</span> Together.
                        </h2>
                        
                        {/* Body Text */}
                        <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                            Whether you're curious about a program, need technical support, or just want to chat about the future of tech in Nigeria, our team is ready to connect.
                        </p>
                        
                        {/* Email Link */}
                        <p className="text-xl text-gray-200 pt-4">
                            Direct Email:
                            <a 
                                href="mailto:hello@devhubnigeria.com" 
                                className="text-sky-400 font-mono font-semibold transition duration-300 hover:text-sky-300 hover:tracking-wide ml-3 border-b border-sky-600 pb-0.5"
                            >
                                hello@devhubnigeria.com
                            </a>
                        </p>
                        
                        {/* Newsletter Call to Action - Glassmorphism Style */}
                        <div className="mt-16 p-6 md:p-8 bg-white/5 backdrop-blur-md rounded-2xl border-t-4 border-lime-400 shadow-xl shadow-lime-900/10 transition duration-500 hover:shadow-lime-900/30">
                            <h3 className="text-2xl font-bold text-lime-400 mb-3">
                                Get Exclusive Tech Insights
                            </h3>
                            <p className="text-base text-gray-300 mb-6">
                                Subscribe for course launches, community news, and deep-dive technical articles.
                            </p>
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                                <input 
                                    type="email" 
                                    placeholder="your.professional@email.com" 
                                    required 
                                    className="flex-grow p-3 rounded-xl border border-gray-700 bg-gray-900/70 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition shadow-inner shadow-black/30"
                                />
                                <button 
                                    type="submit" 
                                    className="bg-lime-400 text-gray-900 px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-lime-300 transform hover:scale-[1.02] transition duration-300 shadow-lg shadow-lime-500/40"
                                >
                                    Subscribe <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Contact Form - Elevated & Styled Card */}
                    <div className="bg-gray-800/80 p-8 md:p-12 rounded-3xl border border-sky-700/50 shadow-2xl shadow-sky-900/50 transition duration-500 hover:shadow-sky-800/70 backdrop-blur-sm">
                        
                        <h3 className="text-3xl font-extrabold text-sky-400 mb-8 text-center border-b border-sky-700/50 pb-4">
                            Initiate Contact
                        </h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            {/* Name Input */}
                            <div className="form-group">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Name
                                </label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    placeholder="Input your full name" 
                                    required 
                                    className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900/70 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition"
                                />
                            </div>
                            
                            {/* Email Input */}
                            <div className="form-group">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Professional Email
                                </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="name@company.com" 
                                    required 
                                    className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900/70 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition"
                                />
                            </div>
                            
                            {/* Message Textarea */}
                            <div className="form-group">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Inquiry Details
                                </label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="4" 
                                    placeholder="I'm interested in..." 
                                    className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900/70 text-white placeholder-gray-500 resize-y focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition"
                                ></textarea>
                            </div>
                            
                            {/* Submit Button - Gradient & Hover Effect */}
                            <button 
                                type="submit" 
                                className="w-full mt-8 p-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-gray-900 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition duration-500 transform hover:scale-[1.01] shadow-xl hover:shadow-cyan-500/70"
                            >
                                Submit Inquiry <Mail size={18} className="stroke-2" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default App;