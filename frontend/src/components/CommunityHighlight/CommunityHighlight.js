import React from 'react';
import { ArrowRight, Users, Code, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Image Placeholder URLs ---
const IMAGE_SOURCES = {
  teamImage1: "https://placehold.co/380x280/10b981/ffffff?text=Mentorship",
  teamImage2: "https://placehold.co/380x280/3b82f6/ffffff?text=Collaboration",
  teamImage3: "https://placehold.co/380x280/ef4444/ffffff?text=Challenges",
};

// --- Feature List ---
const features = [
  { icon: Users, text: "Exclusive Mentorship Sessions" },
  { icon: Code, text: "Collaborative Group Projects" },
  { icon: Zap, text: "High-Paced Live Code Challenges" },
];

const CommunitySection = () => {
  return (
    <section className="py-24 lg:py-36 text-white relative font-inter bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-16 lg:gap-20">
          
          {/* TEXT + CTA */}
          <div className="lg:col-span-5 relative z-10">
            <span className="inline-block text-teal-400 font-semibold uppercase text-sm tracking-widest mb-3 px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full">
              Community & Network
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5 text-white">
              The Pipeline to <span className="text-teal-400">Your Next Tech Opportunity</span>.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              DevHub Nigeria is where aspiring developers transform into industry experts. Get access to top mentors, real-world projects, and a supportive high-growth network.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-200">
                  <feature.icon size={20} className="text-teal-500 flex-shrink-0" />
                  <span className="text-lg font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link to="/community">
              <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-teal-500 to-teal-600 text-black shadow-lg shadow-teal-500/50 hover:from-teal-400 hover:to-teal-500 transition transform hover:scale-105">
                Join Our Global Community <ArrowRight size={20} />
              </button>
            </Link>
          </div>

          {/* IMAGE STACK */}
          <div className="lg:col-span-7 relative h-[30rem] md:h-[35rem] lg:h-[30rem] xl:h-[32rem] flex justify-center lg:justify-end">
            
            <div className="absolute inset-0 rounded-3xl border-2 border-gray-800 bg-gray-900 shadow-2xl shadow-teal-500/20"></div>

            <div className="absolute top-10 w-[95%] sm:w-[80%] lg:w-full h-full">
              <img src={IMAGE_SOURCES.teamImage1} alt="Mentorship" className="absolute top-0 left-0 sm:left-12 w-2/3 h-64 object-cover rounded-xl border-4 border-gray-950 shadow-2xl transform -rotate-4 z-30 transition duration-500 hover:scale-102" />
              <img src={IMAGE_SOURCES.teamImage2} alt="Collaboration" className="absolute top-16 left-[25%] sm:left-[45%] w-2/3 h-64 object-cover rounded-xl border-4 border-gray-950 shadow-2xl transform rotate-2 z-20 transition duration-500 hover:scale-102" />
              <img src={IMAGE_SOURCES.teamImage3} alt="Challenges" className="absolute top-32 left-0 sm:left-12 w-2/3 h-64 object-cover rounded-xl border-4 border-gray-950 shadow-2xl transform -rotate-1 z-10 opacity-70 transition duration-500 hover:scale-102" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
