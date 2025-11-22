import React, { useState } from 'react';

// --- Icon Mock Components (Lucide replacements) ---
const Twitter = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2 1.5-1.4 2.3-3.3 2.3-5.3 0-2.3-.9-4.5-2.5-6.2 3.1 1.4 5.3 4.2 6.1 7.6 1.7-1.4 3.7-2.6 6-3.4 0 0 1.2-1.3 2-2.3z"/></svg>;
const Instagram = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const Linkedin = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const Mail = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const Users = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const Briefcase = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const Code = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const Loader = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>;

// --- Constants ---
const DEVHUB_BACKGROUND = '#011032';
const DEVHUB_CYAN = '#13F9F9';
const DEVHUB_ORANGE = '#FF7F5C';

// --- Footer Link Component ---
const FooterLink = ({ href, children }) => (
    <li>
        <a 
            href={href} 
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm font-light leading-7"
        >
            {children}
        </a>
    </li>
);

// --- Newsletter Signup Component ---
const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        // Simulate API call delay
        setTimeout(() => {
            // In a real application, you would send 'email' to a Firebase collection or API endpoint here.
            console.log("Subscribing email:", email);
            
            // Simulating success
            setStatus('success');
            setEmail('');

            setTimeout(() => setStatus('idle'), 3000); 
        }, 1500);
    };

    return (
        <div className="lg:col-span-2 p-6 rounded-xl border border-white/10 bg-black/30 shadow-2xl shadow-cyan/10">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                <Mail className="w-6 h-6 mr-2 text-orange-400" />
                Stay Updated
            </h3>
            <p className="text-sm text-gray-400 mb-4">
                Join our newsletter for the latest course announcements, Nigerian tech news, and exclusive mentorship tips.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                    type="email"
                    placeholder="Your best email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-grow p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                    disabled={status === 'loading'}
                />
                <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className={`
                        p-3 rounded-lg font-semibold whitespace-nowrap transition-all duration-300
                        ${status === 'loading' ? 'bg-gray-600 text-gray-300 cursor-not-allowed' :
                          status === 'success' ? 'bg-green-600 text-white shadow-lg shadow-green-500/30' :
                          'bg-cyan-500 text-gray-900 hover:bg-cyan-400 shadow-lg shadow-cyan-500/30'}
                    `}
                >
                    {status === 'loading' ? <Loader className="animate-spin w-5 h-5 mx-auto" /> :
                     status === 'success' ? 'Subscribed!' :
                     'Subscribe'}
                </button>
            </form>
            {status === 'error' && <p className="text-red-400 mt-2 text-sm">Failed to subscribe. Please try again.</p>}
        </div>
    );
};


const Footer = () => {
    // Styling the Footer background slightly lighter than the main app background for contrast
    const FOOTER_BG = '#031442'; 
    const CURRENT_YEAR = new Date().getFullYear();

    return (
        <footer className={`w-full text-white pt-12 pb-6 border-t border-white/10`} style={{backgroundColor: FOOTER_BG}}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* --- Top Section: Brand, Links & Newsletter --- */}
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 border-b border-white/10 pb-8 mb-6">
                    
                    {/* Column 1 & 2: Brand & Description (2 columns wide on desktop) */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-center">
                            <Code className="w-8 h-8 mr-2" style={{color: DEVHUB_CYAN}} />
                            <div className="text-2xl font-extrabold tracking-widest text-white">DevHub <span style={{color: DEVHUB_CYAN}}>Nigeria</span></div>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-md">
                            Empowering the next generation of Nigerian developers. We combine cutting-edge curriculum with real-world mentorship and a vibrant community to launch successful tech careers.
                        </p>
                        
                        {/* Social Icons */}
                        <div className="flex space-x-4 pt-2">
                            <a href="https://twitter.com/DevHubNigeria" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-gray-700 text-gray-400 hover:text-orange-400 hover:border-orange-400 transition duration-300 transform hover:-translate-y-1">
                                <Twitter size={20} />
                            </a>
                            <a href="https://instagram.com/DevHubNigeria" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-gray-700 text-gray-400 hover:text-orange-400 hover:border-orange-400 transition duration-300 transform hover:-translate-y-1">
                                <Instagram size={20} />
                            </a>
                            <a href="https://linkedin.com/company/DevHubNigeria" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-gray-700 text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition duration-300 transform hover:-translate-y-1">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Column 3: About Us */}
                    <div className="sm:mt-0 mt-8">
                        <h4 className="text-lg font-bold mb-4 uppercase tracking-wider relative">
                            About Us
                            <span className="block w-8 h-[2px] mt-1 rounded" style={{backgroundColor: DEVHUB_ORANGE}}></span>
                        </h4>
                        <ul className="space-y-2">
                            <FooterLink href="/about">Who We Are</FooterLink>
                            <FooterLink href="/team">Our Team</FooterLink>
                            <FooterLink href="/careers">Careers <span className="text-xs ml-1 px-1 py-0.5 rounded bg-orange-500/30 text-orange-400">Hiring</span></FooterLink>
                            <FooterLink href="/faqs">FAQs</FooterLink>
                            <FooterLink href="/testimonials">Testimonials</FooterLink>
                        </ul>
                    </div>

                    {/* Column 4: Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 uppercase tracking-wider relative">
                            Programs
                            <span className="block w-8 h-[2px] mt-1 rounded" style={{backgroundColor: DEVHUB_ORANGE}}></span>
                        </h4>
                        <ul className="space-y-2">
                            <FooterLink href="/home">Home</FooterLink>
                            <FooterLink href="/courses">Courses</FooterLink>
                            <FooterLink href="/community">Community</FooterLink>
                            <FooterLink href="/contact">Contact</FooterLink>
                            <FooterLink href="/enroll">Enroll Now</FooterLink>
                        </ul>
                    </div>
                    
                    {/* Column 5 & 6: Newsletter Signup (2 columns wide on desktop) */}
                    <NewsletterSignup />

                </div>

                {/* --- Bottom Bar: Copyright & Policies --- */}
                <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {CURRENT_YEAR} DevHub Nigeria. All rights reserved.</p>
                    <div className="flex space-x-4 mt-3 sm:mt-0">
                        <a href="/privacy" className="hover:text-cyan-400">Privacy Policy</a>
                        <a href="/terms" className="hover:text-cyan-400">Terms of Service</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;