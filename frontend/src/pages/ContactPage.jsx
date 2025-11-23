import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, User, MessageSquare, CheckCircle, XCircle } from 'lucide-react';

// --- Contact Information Data ---
const contactInfo = [
    {
        category: "General Support & Personal Contact",
        details: [
            { icon: Phone, label: "DevHub Support Line", value: "+234 810 123 4567", link: "tel:+2348101234567" },
            { icon: Mail, label: "Support Email", value: "support@devhubnigeria.com", link: "mailto:support@devhubnigeria.com" },
        ]
    },
    {
        category: "Official & Business Enquiries",
        details: [
            { icon: Mail, label: "Official DevHub Email", value: "admin@devhubnigeria.com", link: "mailto:admin@devhubnigeria.com" },
            { icon: Linkedin, label: "Official LinkedIn Page", value: "DevHub Nigeria", link: "#" }, // Placeholder for LinkedIn URL
        ]
    },
];

// Contact Form Component
const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // --- SIMULATE API CALL (No actual API call is made for security/environment constraints) ---
        setTimeout(() => {
            console.log("Form Data Submitted:", formData);
            // Simulate successful submission:
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' }); // Clear form
            
            // Clear status message after a few seconds
            setTimeout(() => setSubmitStatus(null), 5000); 

        }, 1500); 
    };

    const StatusMessage = () => {
        if (submitStatus === 'success') {
            return (
                <div className="bg-green-600/20 text-green-300 p-3 rounded-xl flex items-center mb-4 border border-green-600">
                    <CheckCircle size={20} className="mr-2" />
                    Thank you! Your message has been sent successfully. We'll get back to you shortly.
                </div>
            );
        }
        if (submitStatus === 'error') {
            return (
                <div className="bg-red-600/20 text-red-300 p-3 rounded-xl flex items-center mb-4 border border-red-600">
                    <XCircle size={20} className="mr-2" />
                    Oops! Something went wrong. Please try sending your message again.
                </div>
            );
        }
        return null;
    };


    return (
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
            <h3 className="text-3xl font-bold text-white mb-6">Send Us a Direct Message</h3>
            
            <StatusMessage />

            {/* Name Input */}
            <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <div className="relative">
                    <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-[#13F9F9] focus:border-[#13F9F9] transition"
                        placeholder="Your Name"
                    />
                </div>
            </div>

            {/* Email Input */}
            <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-[#13F9F9] focus:border-[#13F9F9] transition"
                        placeholder="you@example.com"
                    />
                </div>
            </div>

            {/* Message Textarea */}
            <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <div className="relative">
                    <MessageSquare size={18} className="absolute left-3 top-4 text-gray-500" />
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-[#13F9F9] focus:border-[#13F9F9] transition resize-none"
                        placeholder="Tell us how we can help..."
                    ></textarea>
                </div>
            </div>

            {/* Submit Button - Now Cyan */}
            <button
                type="submit"
                disabled={isSubmitting}
                // Changed background color to cyan (#13F9F9)
                className="w-full flex items-center justify-center bg-[#13F9F9] text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-[#33FFFF] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                ) : (
                    <Send size={20} className="mr-2" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
};

// Main App Component
const App = () => {
    return (
        <div className="min-h-screen bg-gray-900 font-sans">
            
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 text-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-[#011032] border-b border-gray-700/50">
                <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                    <h1 className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl">
                        Get In <span className="text-[#13F9F9]">Touch</span>
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-300">
                        Whether you have a technical question or a business proposal, we're ready to listen.
                    </p>
                </div>
            </section>

            {/* Main Content: Form, Details, Map */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-6 max-w-7xl">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        
                        {/* 1. Contact Details Column */}
                        <div className="lg:col-span-1 space-y-10">
                            
                            {/* Physical Location */}
                            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 shadow-lg">
                                <MapPin size={32} className="text-[#FF7F5C] mb-3" />
                                <h3 className="text-xl font-bold text-white mb-2">Physical Location</h3>
                                <p className="text-gray-300">
                                    DevHub Nigeria Headquarters<br/>
                                    123 Tech Innovation Road,<br/>
                                    Yaba, Lagos, Nigeria
                                </p>
                            </div>

                            {/* Contact Info Grouping */}
                            {contactInfo.map((group, groupIndex) => (
                                <div key={groupIndex} className="p-6 bg-gray-800 rounded-xl border border-gray-700 shadow-lg">
                                    <h4 className="text-lg font-semibold text-[#13F9F9] border-b border-gray-700 pb-2 mb-4">{group.category}</h4>
                                    <ul className="space-y-4">
                                        {group.details.map((detail, index) => {
                                            // Dynamic icon rendering
                                            const Icon = detail.icon;
                                            return (
                                                <li key={index} className="flex items-start text-gray-300">
                                                    <Icon size={20} className="text-[#FF7F5C] mr-3 mt-1 flex-shrink-0" />
                                                    <div>
                                                        <span className="font-medium text-sm block">{detail.label}</span>
                                                        <a 
                                                            href={detail.link} 
                                                            target={detail.icon === Linkedin ? "_blank" : "_self"}
                                                            rel="noopener noreferrer"
                                                            className="text-white hover:text-[#13F9F9] break-words transition-colors"
                                                        >
                                                            {detail.value}
                                                        </a>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* 2. Contact Form Column */}
                        <div className="lg:col-span-2">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Feature (Placeholder) */}
            <section className="py-20 bg-gray-800/50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h2 className="text-4xl font-bold text-white mb-6 text-center">Find Our Office</h2>
                    <div className="w-full h-96 rounded-xl shadow-2xl overflow-hidden border-4 border-[#13F9F9]/50">
                        {/* This div acts as a highly professional placeholder for a real map (e.g., Google Maps embed) */}
                        <div className="w-full h-full bg-gray-700 flex items-center justify-center text-center">
                            <div className="p-8">
                                <MapPin size={48} className="text-[#13F9F9] mx-auto mb-3" />
                                <p className="text-white text-2xl font-semibold">Interactive Map Placeholder</p>
                                <p className="text-gray-400 mt-2">
                                    (A full Google Map integration would appear here, showing our exact location in Yaba, Lagos.)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

// Export the main component as App for the environment
export default App;