import { useState } from "react";
import { Compass, Eye, HeartHandshake, ShieldCheck, Sparkles, Trophy, Users, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { ABOUT_STORY, HOSPITAL_INFO } from "../data";

export default function About() {
  const [activeTab, setActiveTab] = useState<"vision" | "values">("vision");

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full w-fit">
            Our Hospital Profile
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Healing With Clinical Excellence Since {HOSPITAL_INFO.established}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mt-2">
            A comprehensive overview of who we are, what we believe in, and why we have remained a premier health companion for generations.
          </p>
        </div>

        {/* Narrative & Tab Column Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Deep Story & Interactive Mission/Vision/Values */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-left">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
                {ABOUT_STORY.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                {ABOUT_STORY.story}
              </p>
            </div>

            {/* Quick Interactive Tabs */}
            <div className="border-b border-slate-200 dark:border-slate-800" id="about-tab-header">
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveTab("vision")}
                  className={`pb-3 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 relative ${
                    activeTab === "vision"
                      ? "text-primary dark:text-secondary border-b-2 border-primary dark:border-secondary"
                      : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Compass size={16} />
                    Mission & Vision
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab("values")}
                  className={`pb-3 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 relative ${
                    activeTab === "values"
                      ? "text-primary dark:text-secondary border-b-2 border-primary dark:border-secondary"
                      : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <HeartHandshake size={16} />
                    Core Values
                  </span>
                </button>
              </div>
            </div>

            {/* Tab Content Display */}
            <div className="min-h-[220px]" id="about-tab-content">
              {activeTab === "vision" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-6"
                >
                  {/* Mission */}
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <span className="flex items-center gap-2 text-xs font-bold text-primary dark:text-teal-400 uppercase tracking-widest mb-2">
                      <Trophy size={14} />
                      Our Clinical Mission
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                      &ldquo;{ABOUT_STORY.mission}&rdquo;
                    </p>
                  </div>

                  {/* Vision */}
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <span className="flex items-center gap-2 text-xs font-bold text-secondary dark:text-teal-400 uppercase tracking-widest mb-2">
                      <Eye size={14} />
                      Our Strategic Vision
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                      &ldquo;{ABOUT_STORY.vision}&rdquo;
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid sm:grid-cols-2 gap-4"
                >
                  {ABOUT_STORY.values.map((v, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex flex-col gap-2"
                    >
                      <span className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white font-heading">
                        <CheckCircle2 size={14} className="text-secondary" />
                        {v.title}
                      </span>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Block: Structured Clinical Timeline / Features */}
          <div className="lg:col-span-5 flex flex-col gap-6" id="about-pillars">
            
            {/* Embedded Luxury Poster Feature */}
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-video relative group cursor-pointer mb-2">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600"
                alt="Hospital Modern Facility Room"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-left">
                <span className="inline-block bg-success text-white text-[9px] font-bold px-2 py-0.5 rounded-full w-fit uppercase tracking-widest mb-2">
                  Live View
                </span>
                <h4 className="text-md sm:text-lg font-heading font-bold text-white">
                  Advanced High-Dependency Care
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Private suites equipped with continuous critical telemetry.
                </p>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="flex flex-col gap-4">
              {ABOUT_STORY.pillars.map((pillar, idx) => {
                const icons = [<Sparkles className="text-primary" />, <Users className="text-secondary" />, <ShieldCheck className="text-success" />];
                return (
                  <div
                    key={idx}
                    className="flex gap-4 p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 text-left items-start hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-xs border border-slate-100 dark:border-slate-700/50">
                      {icons[idx]}
                    </div>
                    <div>
                      <h4 className="text-sm font-heading font-bold text-slate-900 dark:text-white">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
