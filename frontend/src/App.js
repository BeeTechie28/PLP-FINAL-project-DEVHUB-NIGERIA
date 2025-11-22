import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EnrollmentPage from "./components/Auth/EnrollmentPage";



// Components
import {
  Navbar,
  Hero,
  Footer,
  ContactSection,
  AboutPreview,
  ProgramsOverview,
  CommunityHighlight,
} from "./components";

// Pages
import About from "./pages/AboutPage";
import Courses from "./pages/CoursesPage";
import Community from "./pages/Communitypage";
import Contact from "./pages/ContactPage";


function App() {
  return (
    <Router>
      {/* Navbar stays at top for all pages */}
      <Navbar />

      <Routes>
        {/* HOME ROUTE */}
        <Route
          path="/"
          element={
            <main>
              <Hero 
                headline="Build the Future. Ship Your Code."
                tagline="Join Nigeria's fastest-growing tech community for hands-on learning, expert mentorship, and real-world project experience."
              />

              <AboutPreview />
              <ProgramsOverview />
              <CommunityHighlight />
              <ContactSection />

            </main>
          }
        />

        {/* OTHER ROUTES */}
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enroll" element={<EnrollmentPage />} />

        


      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
