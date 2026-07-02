import { useEffect, useState } from "react";
import { ArrowRight, Activity, Award, Heart, Image as ImageIcon, Map as MapIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import InteractiveHospital3D from "./InteractiveHospital3D";

interface HeroProps {
  onScrollToSection: (secId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  // Animated Stats Counter State
  const [docCount, setDocCount] = useState(0);
  const [deptCount, setDeptCount] = useState(0);
  const [bedCount, setBedCount] = useState(0);
  const [patientCount, setPatientCount] = useState(0);
  const [viewMode, setViewMode] = useState<"3d" | "photos">("3d");

  useEffect(() => {
    // Smooth counts
    const interval = setInterval(() => {
      setDocCount((prev) => (prev < 250 ? Math.min(prev + 5, 250) : 250));
      setDeptCount((prev) => (prev < 40 ? Math.min(prev + 1, 40) : 40));
      setBedCount((prev) => (prev < 500 ? Math.min(prev + 10, 500) : 500));
      setPatientCount((prev) => (prev < 100000 ? Math.min(prev + 2000, 100000) : 100000));
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center bg-radial from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 pt-10 pb-20 overflow-hidden transition-colors duration-300"
    >
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Campus Presentation Tab Bar */}
        <div className="flex justify-center lg:justify-start mb-8 select-none" id="hero-presentation-toggle">
          <div className="flex p-1 bg-slate-200/60 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-300/30 dark:border-slate-750/30 shadow-xs">
            <button
              onClick={() => setViewMode("3d")}
              className={`flex items-center gap-2 px-4.5 py-2 text-xs font-bold rounded-xl transition-all duration-300 cursor-pointer ${
                viewMode === "3d"
                  ? "bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow-md shadow-slate-950/5 scale-100"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <MapIcon size={14} className="text-primary" />
              <span>Interactive 3D Blueprint</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
            </button>
            <button
              onClick={() => setViewMode("photos")}
              className={`flex items-center gap-2 px-4.5 py-2 text-xs font-bold rounded-xl transition-all duration-300 cursor-pointer ${
                viewMode === "photos"
                  ? "bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow-md shadow-slate-950/5 scale-100"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <ImageIcon size={14} className="text-secondary" />
              <span>Real Campus Photos</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Premium Content & Text */}
          <div className={`${viewMode === "3d" ? "lg:col-span-4" : "lg:col-span-7"} flex flex-col gap-6 text-left transition-all duration-500`}>
            
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold w-fit tracking-wide uppercase select-none border border-primary/20"
              id="trust-badge"
            >
              <Award size={14} className="animate-spin-slow" />
              <span>World-Class Healthcare Certified Hospital</span>
            </motion.div>

            {/* Giant Elegant Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              id="hero-heading-block"
            >
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-[1.15] tracking-tight">
                Advanced Healthcare <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                  with Compassion
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-xl font-normal leading-relaxed"
              id="hero-subheading"
            >
              Providing exceptional healthcare through highly experienced doctors, cutting-edge technology, empathetic care, and patient-first values. At Gayathri Care, recovery is a journey we walk together.
            </motion.p>

            {/* Interactive Demo CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mt-2"
              id="hero-ctas"
            >
              <button
                onClick={() => onScrollToSection("about")}
                className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-xs font-semibold px-5 py-3.5 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/35 transition-all duration-300 scale-100 hover:scale-[1.02] cursor-pointer"
              >
                <span>Explore Hospital</span>
                <ArrowRight size={14} />
              </button>
              
              <button
                onClick={() => onScrollToSection("departments")}
                className="flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-xs font-semibold px-5 py-3.5 rounded-xl shadow-sm transition-all duration-300 cursor-pointer"
              >
                <span>Our Specialities</span>
              </button>
            </motion.div>

            {/* Micro Hospital Integrity Warning */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[9px] text-slate-400 dark:text-slate-500 max-w-md mt-1"
            >
              *Disclaimer: This is a beautiful, responsive informational profile website. Visual components simulate operations for demonstration purposes only.
            </motion.p>
          </div>

          {/* Right Column: Dynamic presentation block */}
          <div className={`${viewMode === "3d" ? "lg:col-span-8" : "lg:col-span-5"} relative transition-all duration-500`} id="hero-presentation-graphics">
            
            <AnimatePresence mode="wait">
              {viewMode === "3d" ? (
                
                /* Dynamic 3D Interactive Blueprint Layout */
                <motion.div
                  key="3d-campus"
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: 10 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  <InteractiveHospital3D />
                </motion.div>

              ) : (

                /* Premium Bento Grid of Healthcare Assets */
                <motion.div
                  key="photos-campus"
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: 10 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full max-w-lg mx-auto aspect-square grid grid-cols-12 grid-rows-12 gap-4"
                >
                  {/* Main Hospital Building Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="col-span-8 row-span-8 rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=600"
                      alt="Gayathri Care Premium Hospital Building"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                    <span className="absolute bottom-4 left-4 text-xs font-bold text-white bg-slate-900/40 backdrop-blur-xs px-3 py-1 rounded-full">
                      Primary Block
                    </span>
                  </motion.div>

                  {/* Patient Care / Doctors Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="col-span-4 row-span-5 rounded-2xl overflow-hidden shadow-xl relative group cursor-pointer"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=400"
                      alt="Professional Care at Gayathri Care"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>

                  {/* Advanced Diagnostics / MRI Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="col-span-4 row-span-7 rounded-2xl overflow-hidden shadow-xl relative group cursor-pointer"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt="Advanced Diagnostics MRI"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>

                  {/* Lobby / Reception Space Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="col-span-8 row-span-4 rounded-3xl overflow-hidden shadow-xl relative group cursor-pointer"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt="Hospital Reception and Lobby Lounge"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>

                  {/* Floating Vital Signs Card */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 glass-card px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-white/20 select-none hidden md:flex animate-pulse-slow bg-white/70 dark:bg-slate-900/80 backdrop-blur-md"
                  >
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                      <Heart size={20} className="animate-pulse" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold leading-none">Vitals Monitoring</span>
                      <span className="block text-sm font-heading font-extrabold text-slate-800 dark:text-white">Active Telemetry</span>
                    </div>
                  </motion.div>

                  {/* Floating Tech Standard Card */}
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    className="absolute -bottom-6 -left-6 glass-card px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-white/20 select-none hidden md:flex bg-white/70 dark:bg-slate-900/80 backdrop-blur-md"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <Activity size={20} className="animate-pulse-slow" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold leading-none">Diagnostic Scan</span>
                      <span className="block text-sm font-heading font-extrabold text-slate-800 dark:text-white">AI Guided MRI</span>
                    </div>
                  </motion.div>
                </motion.div>

              )}
            </AnimatePresence>

          </div>
        </div>

        {/* Dynamic Statistics Grid */}
        <div className="mt-20 border-t border-slate-200/60 dark:border-slate-800/60 pt-12" id="hero-stats">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left flex flex-col justify-center"
            >
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white leading-tight">
                Our Statistics
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                A legacy built on excellence.
              </p>
            </motion.div>

            {/* Stat 1: Doctors */}
            <div className="text-center">
              <span className="block text-3xl sm:text-4xl font-heading font-extrabold text-primary dark:text-blue-400">
                {docCount}+
              </span>
              <span className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mt-1">
                Board-Certified Doctors
              </span>
              <span className="block text-[10px] text-slate-400">Specialists & Fellows</span>
            </div>

            {/* Stat 2: Departments */}
            <div className="text-center">
              <span className="block text-3xl sm:text-4xl font-heading font-extrabold text-secondary dark:text-teal-400">
                {deptCount}+
              </span>
              <span className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mt-1">
                Medical Specialities
              </span>
              <span className="block text-[10px] text-slate-400">Advanced Centers</span>
            </div>

            {/* Stat 4: Beds */}
            <div className="text-center col-span-1">
              <span className="block text-3xl sm:text-4xl font-heading font-extrabold text-accent dark:text-sky-400">
                {bedCount}+
              </span>
              <span className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mt-1">
                Premium Patient Beds
              </span>
              <span className="block text-[10px] text-slate-400">Luxury recovery wards</span>
            </div>

            {/* Stat 5: Patients */}
            <div className="text-center col-span-2 lg:col-span-1">
              <span className="block text-3xl sm:text-4xl font-heading font-extrabold text-success">
                {(patientCount / 1000).toFixed(0)}k+
              </span>
              <span className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mt-1">
                Happy Restored Lives
              </span>
              <span className="block text-[10px] text-slate-400">Trust and Care Delivered</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
