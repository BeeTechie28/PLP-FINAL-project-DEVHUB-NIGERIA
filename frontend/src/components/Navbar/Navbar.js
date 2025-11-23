import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, Info, BookOpen, Users, Mail, Menu, X, ArrowRight, Zap } from "lucide-react";

// Navigation items
const navItems = [
  { name: "Home", to: "/", icon: Home },
  { name: "About", to: "/about", icon: Info },
  { name: "Courses", to: "/courses", icon: BookOpen },
  { name: "Community", to: "/community", icon: Users },
  { name: "Contact", to: "/contact", icon: Mail },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Custom NavLink using React Router Link
  const NavLink = ({ to, children, className, onClick }) => (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );

  const customStyles = `
    .bg-navy { background-color: #011032; }
    .text-cyan { color: #13F9F9; }
    .border-cyan { border-color: #13F9F9; }
    .hover\\:text-cyan:hover { color: #13F9F9; }
    .focus\\:ring-cyan:focus { --tw-ring-color: #13F9F9; }
    .bg-coral { background-color: #FF7F5C; }
    .hover\\:bg-coral:hover { background-color: #FF7F5C; }
    html, body { font-family: 'Inter', sans-serif; background-color: #011032; }
  `;

  return (
    <>
      <style>{customStyles}</style>

      <header
        className={`
          sticky top-0 z-50 transition-all duration-300 shadow-xl border-b border-cyan/20
          ${isScrolled ? "bg-navy/95 backdrop-blur-lg shadow-2xl" : "bg-navy/90 backdrop-blur-md"}
        `}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-cyan/20 border-2 border-cyan rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-cyan" />
            </div>
            <NavLink to="/" className="text-2xl font-extrabold tracking-tight text-white cursor-pointer">
              <span className="text-cyan">DevHub</span> Nigeria
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex space-x-10 text-gray-300 font-medium">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.to}
                    className="relative group text-base font-semibold transition duration-300 flex items-center space-x-2"
                  >
                    <item.icon className="w-4 h-4 text-cyan group-hover:text-cyan transition-colors duration-200" />
                    <span className="group-hover:text-cyan">{item.name}</span>
                    <span className="absolute left-0 bottom-[-5px] h-[3px] w-0 bg-cyan transition-all duration-300 group-hover:w-full shadow-cyan-md"></span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Enroll Button */}
          <div className="hidden lg:block">
            <NavLink to="/enroll">
              <button className="flex items-center space-x-2 px-6 py-3 text-sm font-bold transition-all duration-400 rounded-full 
                                border-2 border-cyan text-cyan bg-navy hover:text-navy hover:bg-cyan 
                                shadow-sm hover:shadow-cyan-lg transform hover:scale-[1.05]">
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-cyan hover:text-white transition-colors duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm z-40 lg:hidden transform transition-transform duration-400 ease-in-out 
                    ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"} 
                    bg-navy/95 backdrop-blur-xl shadow-2xl border-l border-cyan/20`}
      >
        <div className="pt-24 px-6 flex flex-col space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-4 py-3 text-gray-300 hover:text-cyan transition duration-150 border-b border-gray-800"
            >
              <item.icon className="w-5 h-5 text-cyan" />
              <span>{item.name}</span>
            </NavLink>
          ))}

          {/* Mobile Enroll Button */}
          <div className="mt-10">
            <NavLink to="/enroll" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-base font-semibold text-white rounded-xl shadow-lg 
                                bg-coral hover:bg-coral/90 transition-colors duration-200">
                <span>Enroll Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Click outside overlay to close mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
