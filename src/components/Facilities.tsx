import { useState } from "react";
import { CheckCircle2, ShieldCheck, Activity, Award } from "lucide-react";
import { motion } from "motion/react";
import { FACILITIES } from "../data";

export default function Facilities() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Clinical" | "Amenities" | "Diagnostics">("All");

  const categories = ["All", "Clinical", "Amenities", "Diagnostics"];

  const filteredFacilities = FACILITIES.filter((fac) => {
    return selectedCategory === "All" || fac.category === selectedCategory;
  });

  return (
    <section id="facilities" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
            Hospital Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Pioneering Medical Infrastructure & Logistics
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mt-2">
            Every cubic meter of Gayathri Care is designed to match international sanitary, acoustic, and thermal guidelines, ensuring optimal rehabilitation.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex justify-center gap-2 mb-12" id="facility-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as any)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-primary text-white shadow-md shadow-primary/25"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/40 dark:border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" id="facilities-cards-grid">
          {filteredFacilities.map((fac, idx) => (
            <motion.div
              key={fac.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/60 dark:border-slate-800 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left"
            >
              {/* Photo Area */}
              <div className="h-56 relative overflow-hidden">
                <img
                  src={fac.image}
                  alt={fac.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent"></div>
                
                {/* Float Category Tag */}
                <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider text-white bg-slate-950/50 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/10">
                  {fac.category} Space
                </span>
                
                {/* Certificate standard indicator */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-emerald-500/95 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                  <ShieldCheck size={11} />
                  <span>JCI Accredited</span>
                </div>
              </div>

              {/* Content text */}
              <div className="p-6 flex flex-col gap-3 flex-grow justify-between">
                <div>
                  <h3 className="text-base font-heading font-extrabold text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors leading-snug">
                    {fac.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {fac.description}
                  </p>
                </div>

                {/* Infrastructure checklist indicators */}
                <div className="border-t border-slate-100 dark:border-slate-800/80 pt-4 mt-4 grid grid-cols-2 gap-2 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 size={12} className="text-success" />
                    <span>24/7 Active</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 size={12} className="text-success" />
                    <span>Sterilized</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us beautiful Icon Grid - as requested */}
        <div className="mt-24 bg-gradient-to-tr from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 p-8 sm:p-12 rounded-3xl border border-slate-200/50 dark:border-slate-800 shadow-sm text-left">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Promo text left */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full w-fit">
                Why Choose Gayathri Care
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">
                Setting New Benchmarks For Patient Recovery
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                Beyond medications, we focus heavily on the environment, hygiene, nutritional diet plans, and positive energy channels that assist healing.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-primary dark:text-secondary bg-primary/5 dark:bg-secondary/10 p-4 rounded-2xl w-fit">
                <Activity size={18} />
                <span>Zero Tolerance Policy For protocol compromises.</span>
              </div>
            </div>

            {/* Icon grid right */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 xl:grid-cols-3 gap-6" id="why-choose-grid">
              {[
                { title: "Experienced Specialists", desc: "Our board-certified staff bring decades of collective wisdom from leading clinical institutions." },
                { title: "Modern Equipment", desc: "Equipped with hyperbaric chambers, robotic surgery systems, and quiet 3-Tesla wide MRI." },
                { title: "24×7 Rapid Emergency", desc: "A high-speed critical care unit staffed by dedicated emergency triage physicians." },
                { title: "Affordable Transparency", desc: "Detailed pricing matrices, comprehensive wellness health bundles with no hidden billing." },
                { title: "Absolute Patient Safety", desc: "Strictly enforced WHO infection-control, HEPA modular airflow systems and hygiene." },
                { title: "Compassionate Nurses", desc: "High nurse-to-patient ratios ensuring supportive, prompt, and tender post-operative rehabilitation." }
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 shadow-xs flex flex-col gap-2 hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/5 dark:bg-secondary/10 flex items-center justify-center text-primary dark:text-secondary font-bold text-xs select-none">
                    0{index + 1}
                  </div>
                  <h4 className="text-xs sm:text-sm font-heading font-bold text-slate-900 dark:text-white leading-none mt-2">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mt-1 font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
