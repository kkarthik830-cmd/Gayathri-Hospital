import { useState, useEffect } from "react";
import { Menu, X, PhoneCall, Moon, Sun, ShieldAlert, Languages } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { HOSPITAL_INFO } from "../data";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export default function Header({ darkMode, setDarkMode, activeSection, setActiveSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "departments", label: "Departments" },
    { id: "doctors", label: "Doctors" },
    { id: "facilities", label: "Facilities" },
    { id: "packages", label: "Health Packages" },
    { id: "gallery", label: "Gallery" },
    { id: "testimonials", label: "Reviews" },
    { id: "tips", label: "Health Tips" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of sticky header
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

  const cycleLanguage = () => {
    const langs = ["EN", "ES", "AR", "HI"];
    const nextIdx = (langs.indexOf(currentLang) + 1) % langs.length;
    setCurrentLang(langs[nextIdx]);
  };

  return (
    <>
      {/* High-priority Emergency Ticker Banner */}
      <div className="bg-red-600 text-white py-1 px-4 text-xs font-semibold text-center flex items-center justify-center gap-2 select-none tracking-wider">
        <span className="inline-block w-2 h-2 rounded-full bg-white animate-ping"></span>
        <ShieldAlert size={14} className="animate-bounce" />
        <span>EMERGENCY TRAUMA HOTLINE (24/7): <strong>{HOSPITAL_INFO.contact.emergencyPhone}</strong></span>
        <span className="hidden md:inline">• Level-1 Critical Trauma Care Enabled</span>
      </div>

      <header
        id="app-header"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-slate-900/95 shadow-md backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <div 
            onClick={() => handleNavClick("home")} 
            className="flex items-center gap-2 cursor-pointer group"
            id="header-brand"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              <span className="text-xl">G</span>
            </div>
            <div>
              <span className="block text-lg font-heading font-bold text-slate-800 dark:text-white leading-none tracking-tight">
                GAYATHRI
              </span>
              <span className="block text-[10px] font-sans font-bold tracking-widest text-secondary uppercase">
                Care Hospital
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1" id="desktop-nav">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 tracking-wide hover:text-primary dark:hover:text-secondary ${
                  activeSection === item.id
                    ? "text-primary dark:text-secondary bg-primary/5 dark:bg-secondary/10 font-semibold"
                    : "text-slate-600 dark:text-slate-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Utility Controls & CTA */}
          <div className="flex items-center gap-3">
            
            {/* Language Selector (UI only) */}
            <button
              onClick={cycleLanguage}
              title="Change Language"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1 text-xs font-semibold"
              id="lang-selector"
            >
              <Languages size={16} />
              <span>{currentLang}</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              id="dark-mode-toggle"
            >
              {darkMode ? <Sun size={18} className="text-yellow-500" /> : <Moon size={18} />}
            </button>

            {/* Urgent Dial CTA (UI Demo) */}
            <a
              href={`tel:${HOSPITAL_INFO.contact.emergencyPhone}`}
              onClick={(e) => {
                e.preventDefault();
                alert(`DEMO ONLY: Simulated outbound emergency call routing to: ${HOSPITAL_INFO.contact.emergencyPhone}`);
              }}
              className="hidden sm:flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-lg shadow-red-600/20 hover:shadow-red-600/30 transition-all duration-200"
              id="emergency-call-btn"
            >
              <PhoneCall size={14} className="animate-pulse" />
              <span>EMERGENCY CALL</span>
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              id="mobile-menu-trigger"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm xl:hidden"
            id="mobile-overlay"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white dark:bg-slate-900 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
              id="mobile-drawer"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold">
                      G
                    </div>
                    <div>
                      <span className="block text-md font-heading font-bold text-slate-800 dark:text-white leading-none">
                        GAYATHRI
                      </span>
                      <span className="block text-[8px] font-sans font-bold tracking-widest text-secondary uppercase">
                        Care Hospital
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="py-6 flex flex-col gap-2">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        activeSection === item.id
                          ? "bg-primary/5 dark:bg-secondary/10 text-primary dark:text-secondary font-bold"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
                <a
                  href={`tel:${HOSPITAL_INFO.contact.emergencyPhone}`}
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`DEMO ONLY: Simulated outbound emergency call routing to: ${HOSPITAL_INFO.contact.emergencyPhone}`);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-3 rounded-xl shadow-lg"
                >
                  <PhoneCall size={14} className="animate-pulse" />
                  <span>EMERGENCY HOTLINE</span>
                </a>
                <p className="text-center text-[10px] text-slate-400">
                  {HOSPITAL_INFO.tagline}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
