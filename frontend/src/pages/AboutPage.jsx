import React, { useState, useEffect } from 'react';
import { Target, Eye, Users, ChevronDown, Zap } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// --- MOCK DATA ---

const teamMembers = [
  {
    name: 'Aisha Lawal',
    role: 'CEO & Head of Strategy',
    bio: 'Visionary leader focused on leveraging technology to solve local challenges and scale Nigerian innovation globally.',
    imageUrl: 'https://placehold.co/100x100/13F9F9/011032?text=AL',
  },
  {
    name: 'Tunde Adebayo',
    role: 'Chief Technical Officer (CTO)',
    bio: 'Expert architect in distributed systems and cloud infrastructure. Drives curriculum development and technical standards.',
    imageUrl: 'https://placehold.co/100x100/FF7F5C/011032?text=TA',
  },
  {
    name: 'Ngozi Okoro',
    role: 'Community & Programs Lead',
    bio: 'Fosters the vibrant DevHub culture and manages mentorship programs, ensuring every member finds their path to success.',
    imageUrl: 'https://placehold.co/100x100/FFFFFF/011032?text=NO',
  },
];

const faqItems = [
  {
    question: "What is DevHub Nigeria's core focus?",
    answer: "Our core focus is empowering Nigerian developers by providing world-class training, mentorship, and resources to build scalable, globally competitive tech products.",
  },
  {
    question: "Do you offer remote training?",
    answer: "Yes, our programs are primarily hybrid, offering flexible remote learning modules complemented by optional physical meetups and hackathons at our Lagos campus.",
  },
  {
    question: "How can I join the team or contribute?",
    answer: "We are always looking for passionate mentors, instructors, and volunteers. Please visit our 'Contact' page and send us an inquiry detailing your expertise and availability!",
  },
  {
    question: "What technology stacks do you specialize in?",
    answer: "We specialize in modern, in-demand stacks including MERN, Python/Django, TypeScript, Go, and cloud platforms like AWS and Azure.",
  },
];

// --- Sub-Components ---

const FaqItem = ({ item, isOpen, onClick }) => (
  <div 
    className="border-b border-gray-700/50 hover:bg-gray-800/20 transition duration-300 rounded-lg overflow-hidden" 
    data-aos="fade-up" 
    data-aos-delay="100"
  >
    <button 
      className="flex justify-between items-center w-full p-4 text-left font-semibold text-white/90"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <span>{item.question}</span>
      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'transform rotate-180 text-cyan-400' : ''}`} />
    </button>
    <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
      <div className="overflow-hidden">
        <p className="p-4 pt-0 text-gray-300 leading-relaxed">{item.answer}</p>
      </div>
    </div>
  </div>
);

// --- Main Component ---

const AboutPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-900 font-sans">

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 text-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-[#011032]">
        <div 
          className="absolute inset-0 opacity-10 bg-[url('https://placehold.co/1200x800/011032/171c28?text=GRID_PATTERN')]"
          style={{ backgroundSize: '200px 200px' }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <p className="text-[#FF7F5C] font-semibold uppercase tracking-widest text-sm mb-3" data-aos="fade-down">
            Our Story & Commitment
          </p>
          <h1 className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl" data-aos="fade-up" data-aos-delay="100">
            Empowering the Future of <span className="text-[#13F9F9]">African Tech</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300" data-aos="fade-up" data-aos-delay="200">
            DevHub Nigeria is the leading platform dedicated to cultivating world-class development talent across the continent.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-white mb-12" data-aos="zoom-in">
            Our Driving Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 border-t-4 border-[#13F9F9] rounded-xl shadow-2xl bg-gray-900/70 backdrop-blur-sm" data-aos="fade-right" data-aos-delay="300">
              <Target className="w-10 h-10 text-[#13F9F9] mb-4" />
              <h3 className="text-3xl font-bold text-[#13F9F9] mb-3 flex items-center gap-2">Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To build a strong ecosystem where every aspiring Nigerian developer has access to the cutting-edge knowledge, tools, and community support required to compete and excel on a global scale. We bridge the gap between passion and professional excellence.
              </p>
            </div>
            <div className="p-8 border-t-4 border-[#FF7F5C] rounded-xl shadow-2xl bg-gray-900/70 backdrop-blur-sm" data-aos="fade-left" data-aos-delay="300">
              <Eye className="w-10 h-10 text-[#FF7F5C] mb-4" />
              <h3 className="text-3xl font-bold text-[#FF7F5C] mb-3 flex items-center gap-2">Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be recognized as the epicenter of African technical innovation, where groundbreaking ideas are nurtured, and where our graduates consistently lead global tech teams and launch unicorn startups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <Users className="w-12 h-12 text-[#FF7F5C] mx-auto mb-4" data-aos="zoom-in" />
            <h2 className="text-4xl font-bold text-white mb-4" data-aos="fade-up">
              Meet the Leadership Team
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              The individuals guiding our community with dedication, expertise, and a shared vision for a technically proficient Africa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name} 
                className="text-center p-8 bg-[#0d1b4d] rounded-xl shadow-2xl hover:shadow-cyan-500/20 transition-shadow duration-300" 
                data-aos="flip-up" data-aos-delay={100 + index * 200}
              >
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-[#13F9F9]" 
                  onError={(e) => e.target.src = 'https://placehold.co/100x100/171c28/FFFFFF?text=DM'} 
                />
                <h4 className="text-2xl font-bold text-white mb-1">{member.name}</h4>
                <p className="text-[#FF7F5C] font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-md leading-snug">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <Zap className="w-12 h-12 text-[#13F9F9] mx-auto mb-4" data-aos="zoom-in" />
            <h2 className="text-4xl font-bold text-white mb-4" data-aos="fade-up">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-lg" data-aos="fade-up" data-aos-delay="100">
              Quick answers to the most common queries we receive about DevHub Nigeria.
            </p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <FaqItem 
                key={index} 
                item={item} 
                isOpen={openIndex === index} 
                onClick={() => toggleFaq(index)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final Callout */}
      <div className="text-center py-10 bg-gray-900">
        <p className="text-2xl font-semibold text-gray-300" data-aos="fade-up" data-aos-delay="100">
          Ready to make an impact? <a href="#" className="text-[#FF7F5C] hover:text-white transition-colors duration-300 underline">Join our community today.</a>
        </p>
      </div>

    </div>
  );
};

export default AboutPage;
