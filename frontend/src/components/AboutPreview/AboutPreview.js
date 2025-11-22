import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Correct image import
import aboutImage from "../../assets/images/about.jpg";


const AboutPreview = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 px-6 items-center">

        {/* Text Section */}
        <div className="space-y-8">
          <p className="text-coral font-semibold uppercase tracking-wider text-sm">
            🎯 Who We Are
          </p>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
            Empowering the Next Generation of Developers in Nigeria
          </h2>

          <p className="text-navy/80 text-lg leading-relaxed">
            We are a purpose-driven tech community helping beginners and aspiring developers
            learn modern web development through structured lessons, dedicated mentorship, and
            collaborative projects — preparing them for real-world opportunities in the African tech landscape.
          </p>

          {/* Values */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 shadow-md hover:shadow-coral transition-shadow">
              <span className="text-2xl">⭐</span>
              <p className="font-semibold text-navy">Excellence & Quality Learning</p>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 shadow-md hover:shadow-cyan transition-shadow">
              <span className="text-2xl">🤝</span>
              <p className="font-semibold text-navy">Collaboration & Community</p>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 shadow-md hover:shadow-coral transition-shadow">
              <span className="text-2xl">💡</span>
              <p className="font-semibold text-navy">Innovation & Creativity</p>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 shadow-md hover:shadow-cyan transition-shadow">
              <span className="text-2xl">🛡️</span>
              <p className="font-semibold text-navy">Integrity & Purpose</p>
            </div>
          </div>

          {/* CTA Button */}
          <Link to="/about">
            <button className="mt-8 px-8 py-3 bg-coral text-white rounded-full font-bold text-lg flex items-center gap-2 hover:bg-coral/90 transition-all">
              Learn More About Us <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="order-first lg:order-last">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full rounded-xl shadow-xl border-4 border-cyan/30 object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutPreview;
