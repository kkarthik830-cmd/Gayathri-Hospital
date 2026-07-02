import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Specialities from "./components/Specialities";
import Doctors from "./components/Doctors";
import Facilities from "./components/Facilities";
import HealthPackages from "./components/HealthPackages";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import HealthTips from "./components/HealthTips";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Sync dark class on the HTML element for global Tailwind selectors
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  // Section highlight monitoring on scroll
  useEffect(() => {
    const handleScrollActiveSection = () => {
      const sections = ["home", "about", "departments", "doctors", "facilities", "packages", "gallery", "testimonials", "tips", "contact"];
      const scrollPosition = window.scrollY + 120; // offset of sticky navbar

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollActiveSection);
    return () => window.removeEventListener("scroll", handleScrollActiveSection);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans transition-colors duration-300 text-slate-800 dark:text-slate-100 flex flex-col justify-between">
      
      {/* Premium Sticky Navigation & Emergency Banners */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Structural Stream */}
      <main className="flex-grow">
        
        {/* Section 1: Hero Banner */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* Section 2: Hospital Narrative & Story */}
        <About />

        {/* Section 3: Specialty Directories */}
        <Specialities />

        {/* Section 4: Doctor Directory */}
        <Doctors />

        {/* Section 5: Infrastructure & Why Choose Us */}
        <Facilities />

        {/* Section 6: Pricing Health Packages */}
        <HealthPackages />

        {/* Section 7: Multi-category photo gallery */}
        <Gallery />

        {/* Section 8: Patient Stories & Reviews */}
        <Testimonials />

        {/* Section 9: Health Blog */}
        <HealthTips />

        {/* Section 10: Smooth FAQs */}
        <Faq />

        {/* Section 11: Contact Coordinates & Inquiry form */}
        <Contact />

      </main>

      {/* Premium Corporate Footer mapping */}
      <Footer />

      {/* Floating Call, Chat and Scroll elements */}
      <FloatingActions />

    </div>
  );
}
