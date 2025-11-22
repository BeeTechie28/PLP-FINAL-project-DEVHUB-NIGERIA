import React from "react";
import { Code, Heart, Users, CheckCircle, Award, Compass, Zap, ArrowRight, Clock, DollarSign } from "lucide-react";
// import { Link } from "react-router-dom"; // REMOVED: Dependency on React Router causing the context error

// --- CUSTOM COLORS (Defined for Tailwind consistency) ---
const PRIMARY_BG = '#011032';
const ACCENT_CYAN = '#13F9F9';
const ACCENT_ORANGE = '#FF7F5C';

// --- MOCK DATA ---
const courses = [
  {
    title: "Intensive Frontend Bootcamp",
    tag: "The Career Accelerator",
    duration: "3 Months",
    price: "Paid Program",
    focus: "Master modern web interfaces, React, and professional team collaboration using Git to secure a top-tier role.",
    icon: Code,
    color: ACCENT_CYAN,
    shadow: `0 0 30px rgba(19, 249, 249, 0.4)`, // Custom glow effect
    modules: [
      "Advanced JavaScript ES6+",
      "React.js: Components & State Management",
      "Git & GitHub Workflow (Professional Standards)",
      "Building Large-Scale Responsive UIs",
      "Introduction to Testing & Deployment",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React", "Git/GitHub", "Tailwind CSS"],
    // Keeping link property for potential use if Router is added later
    link: "/enroll-bootcamp" 
  },
  {
    title: "Frontend Basics",
    tag: "Your Free Introduction to Web Dev",
    duration: "1 Month",
    price: "FREE",
    focus: "Essential foundation in web structure, styling, and basic interactivity. Ideal for beginners.",
    icon: Heart,
    color: ACCENT_ORANGE,
    shadow: `0 0 30px rgba(255, 127, 92, 0.4)`, // Custom glow effect
    modules: [
      "Introduction to HTML Structure",
      "CSS Styling and Responsive Design",
      "JavaScript Core Concepts",
      "Building a Simple Portfolio Page",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    // Keeping link property for potential use if Router is added later
    link: "/enroll-basics" 
  },
];

const valueProps = [
  {
    icon: Users,
    title: "Dedicated Mentorship",
    description: "Receive 1:1 guidance from industry veterans. Your mentor provides personalized code reviews and career advice.",
  },
  {
    icon: CheckCircle,
    title: "Accountability System",
    description: "Weekly check-ins and structured progress reviews ensure you stay motivated and consistently meet milestones.",
  },
  {
    icon: Award,
    title: "Portfolio Ready Projects",
    description: "Build 3+ high-impact, professional-grade projects suitable for immediate inclusion in your developer portfolio.",
  },
  {
    icon: Compass,
    title: "Career Placement Prep",
    description: "Access interview coaching, resume workshops, and direct connections to hiring partners in Nigeria's tech ecosystem.",
  },
];

// --- Course Card Component ---
const CourseCard = ({ course }) => {
  const Icon = course.icon;
  const isFree = course.price === "FREE";

  const tagColor = isFree ? "bg-green-600 border-green-400/50" : `bg-gray-800 border-gray-600/50`;
  const techBg = isFree ? "bg-orange-900/40 text-orange-200" : "bg-cyan-900/40 text-cyan-200";

  return (
    <div
      className="p-8 rounded-2xl border-t-4 transition-all duration-500 hover:scale-[1.02] relative z-10"
      style={{
        backgroundColor: '#031442', // Slightly lighter blue for card BG
        borderColor: course.color,
        boxShadow: course.shadow, // Applying the glow
      }}
    >
      <div className="flex items-start justify-between mb-6">
        <Icon size={48} style={{ color: course.color }} />
        <span
          className={`px-4 py-1.5 text-sm font-bold uppercase rounded-full tracking-wider border ${tagColor}`}
        >
          {course.price}
        </span>
      </div>

      <h3 className="text-4xl font-extrabold mb-1 text-white">{course.title}</h3>
      <p className="text-gray-400 mb-6 italic text-sm">{course.tag}</p>

      <p className="text-gray-300 text-lg mb-6 leading-relaxed">{course.focus}</p>

      <div className="flex justify-between items-center mb-6 border-y border-white/10 py-3">
        <div className="flex items-center gap-2 text-gray-300">
          <Clock size={18} className="text-gray-500" />
          <span className="font-semibold">{course.duration}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <DollarSign size={18} className="text-gray-500" />
          <span className="font-semibold">{course.price}</span>
        </div>
      </div>

      {/* Key Technologies */}
      <div className="mb-8">
        <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
          <Zap size={20} style={{ color: course.color }} /> Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {course.tech.map((t) => (
            <span
              key={t}
              className={`px-3 py-1 text-sm font-medium rounded-full ${techBg} border border-opacity-30`}
              style={{ borderColor: course.color }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Modules */}
      <div className="mb-6">
        <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
          <Award size={20} style={{ color: course.color }} /> Core Modules
        </h4>
        <ul className="space-y-2">
          {course.modules.map((module, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300">
              <CheckCircle size={18} style={{ color: course.color }} className="mt-1 flex-shrink-0" />
              <span className="text-base">{module}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      {/* Changed Link to standard anchor tag (<a>) to fix router context error */}
      <a href={course.link} className="block mt-8">
        <button
          className={`w-full py-4 rounded-xl font-extrabold text-lg transition duration-300 transform hover:scale-[1.01] flex items-center justify-center gap-2 shadow-lg`}
          style={{ backgroundColor: ACCENT_ORANGE, color: PRIMARY_BG, boxShadow: `0 10px 20px rgba(255, 127, 92, 0.4)` }}
        >
          {isFree ? "Start Learning for Free" : "View Bootcamp Details"}
          <ArrowRight size={20} className="ml-2" />
        </button>
      </a>
    </div>
  );
};

// --- Courses Page Component ---
const CoursesPage = () => {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: PRIMARY_BG }}>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 text-center overflow-hidden">
        {/* Subtle background glow effect */}
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-20" style={{ backgroundColor: ACCENT_CYAN, transform: 'translate(-50%, -50%)' }}></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20" style={{ backgroundColor: ACCENT_ORANGE, transform: 'translate(50%, 50%)' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <p className="font-semibold uppercase tracking-[0.3em] text-sm mb-3" style={{ color: ACCENT_ORANGE }}>
            Your Path to Mastery
          </p>
          <h1 className="text-6xl font-extrabold text-white sm:text-7xl lg:text-8xl mb-6">
            World-Class <span style={{ color: ACCENT_CYAN }}>Training Programs</span>
          </h1>
          <p className="mt-6 max-w-4xl mx-auto text-xl text-gray-300">
            Choose your journey: master the fundamentals with our free course or accelerate your career with our intensive, job-focused bootcamp.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl font-bold text-center text-white mb-16 relative">
            Explore Our Curricula
            <span className="block w-20 h-1 mx-auto mt-3 rounded-full" style={{ backgroundColor: ACCENT_ORANGE }}></span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship / Value Section */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <Compass className="w-16 h-16 mx-auto mb-4 p-3 rounded-full border-2" style={{ color: ACCENT_CYAN, borderColor: ACCENT_CYAN }} />
            <h2 className="text-4xl font-bold text-white mb-4">The DevHub Advantage</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We go beyond video tutorials. Our integrated system of support, mentorship, and career preparation ensures your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {valueProps.map((prop, index) => {
              const Icon = prop.icon;
              const accent = index % 2 === 0 ? ACCENT_CYAN : ACCENT_ORANGE;
              const gradientBg = index % 2 === 0 
                ? 'linear-gradient(145deg, rgba(19, 249, 249, 0.1) 0%, rgba(3, 20, 66, 0.9) 100%)' 
                : 'linear-gradient(145deg, rgba(255, 127, 92, 0.1) 0%, rgba(3, 20, 66, 0.9) 100%)';

              return (
                <div 
                  key={index} 
                  className="p-6 rounded-xl border flex items-start gap-4 transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl"
                  style={{ 
                    borderColor: accent,
                    borderWidth: '1px',
                    backgroundImage: gradientBg,
                    boxShadow: `0 4px 15px rgba(0, 0, 0, 0.2)`
                  }}
                >
                  <Icon size={32} style={{ color: accent }} className="mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{prop.title}</h3>
                    <p className="text-gray-400 text-base">{prop.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-6 max-w-5xl text-center bg-gray-900/50 p-10 rounded-2xl border border-white/10 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Build Your Tech Career?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            The next cohort for the Intensive Bootcamp starts soon. Don't miss your opportunity to join Nigeria's most promising developer community.
          </p>
          {/* Changed Link to standard anchor tag (<a>) to fix router context error */}
          <a href="/enroll">
            <button 
                className="inline-flex items-center justify-center px-10 py-4 text-xl font-bold text-white rounded-full shadow-2xl transition duration-300 transform hover:scale-[1.05] hover:shadow-cyan-500/50"
                style={{ backgroundColor: ACCENT_CYAN, color: PRIMARY_BG, boxShadow: `0 10px 30px rgba(19, 249, 249, 0.4)` }}
            >
              Secure Your Spot Now
              <ArrowRight size={24} className="ml-3" />
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;