import { useState } from "react";
import { Search, Heart, Brain, Activity, Bone, Stethoscope, Scissors, Ambulance, FlameKindling, Baby, Flower2, Dna, Wind, Waves, Ear, Sparkles, Eye, Smile, ShieldAlert, HeartHandshake, Flame, Layers, Filter, Plus, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { DEPARTMENTS } from "../data";
import { Department } from "../types";

// Dynamic Lucide Icon Mapper
const IconMapper = ({ iconName, className }: { iconName: string; className?: string }) => {
  switch (iconName) {
    case "Heart": return <Heart className={className} />;
    case "Brain": return <Brain className={className} />;
    case "Activity": return <Activity className={className} />;
    case "Bone": return <Bone className={className} />;
    case "Stethoscope": return <Stethoscope className={className} />;
    case "Scissors": return <Scissors className={className} />;
    case "Ambulance": return <Ambulance className={className} />;
    case "FlameKindling": return <FlameKindling className={className} />;
    case "Baby": return <Baby className={className} />;
    case "Flower2": return <Flower2 className={className} />;
    case "Dna": return <Dna className={className} />;
    case "Wind": return <Wind className={className} />;
    case "Waves": return <Waves className={className} />;
    case "Hearing": return <Ear className={className} />;
    case "Sparkles": return <Sparkles className={className} />;
    case "Eye": return <Eye className={className} />;
    case "Smile": return <Smile className={className} />;
    case "ShieldAlert": return <ShieldAlert className={className} />;
    case "HeartHandshake": return <HeartHandshake className={className} />;
    case "Flame": return <Flame className={className} />;
    case "Layers": return <Layers className={className} />;
    case "Filter": return <Filter className={className} />;
    default: return <Stethoscope className={className} />;
  }
};

export default function Specialities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCat, setSelectedCat] = useState<"all" | "clinical" | "surgical" | "critical">("all");
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);

  // Dynamic categorisation based on department IDs
  const getCategory = (deptId: string): "clinical" | "surgical" | "critical" => {
    const surgical = ["neurosurgery", "orthopaedics", "general-surgery", "gynecology", "urology", "plastic-surgery", "dental-care"];
    const critical = ["emergency-medicine", "icu-critical-care", "radiology", "pathology"];
    return surgical.includes(deptId) ? "surgical" : critical.includes(deptId) ? "critical" : "clinical";
  };

  const filteredDepts = DEPARTMENTS.filter((dept) => {
    const matchesSearch = dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dept.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    
    const cat = getCategory(dept.id);
    const matchesCat = selectedCat === "all" || cat === selectedCat;

    return matchesSearch && matchesCat;
  });

  return (
    <section id="departments" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
            Medical Specialities
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Comprehensive Care Under One Canopy
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mt-2">
            Explore our state-of-the-art specialty disciplines. Every department is armed with experienced clinical leaders, modern operating theatres, and gentle recovering suites.
          </p>
        </div>

        {/* Filter & Search Bar Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/50 dark:border-slate-800 shadow-xs" id="dept-filter-bar">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto" id="dept-categories">
            {[
              { id: "all", label: "All Specialities" },
              { id: "clinical", label: "Clinical Medicine" },
              { id: "surgical", label: "Surgical Wings" },
              { id: "critical", label: "Diagnostics & Critical" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCat(tab.id as any)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 select-none ${
                  selectedCat === tab.id
                    ? "bg-primary text-white shadow-md shadow-primary/25"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200/70 dark:hover:bg-slate-700/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search departments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-primary dark:focus:border-secondary text-slate-800 dark:text-white transition-all duration-200"
            />
          </div>
        </div>

        {/* Departments Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="dept-cards-grid">
          <AnimatePresence>
            {filteredDepts.map((dept) => (
              <motion.div
                key={dept.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedDept(dept)}
                className="group cursor-pointer rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 hover:border-primary/40 dark:hover:border-secondary/40 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Thumbnail */}
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent"></div>
                  
                  {/* Floating Department Category Pill */}
                  <span className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-wider text-white bg-slate-950/50 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/10">
                    {getCategory(dept.id)}
                  </span>

                  {/* Absolute Floating Icon */}
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-white/90 dark:bg-slate-900/90 flex items-center justify-center text-primary dark:text-secondary shadow-md border border-white/20">
                    <IconMapper iconName={dept.icon} className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 text-left flex flex-col gap-2 flex-grow">
                  <h3 className="text-sm font-heading font-extrabold text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors leading-tight">
                    {dept.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {dept.shortDesc}
                  </p>
                </div>

                {/* Call-to-action bar */}
                <div className="px-5 py-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-bold text-primary dark:text-secondary select-none">
                  <span>Explore Procedures</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredDepts.length === 0 && (
            <div className="col-span-full py-16 text-center">
              <p className="text-sm text-slate-400">No departments match your search keywords or category filters.</p>
            </div>
          )}
        </div>

        {/* Expandable Specialty Information Modal Drawer */}
        <AnimatePresence>
          {selectedDept && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDept(null)}
              className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-xs flex items-center justify-center p-4"
              id="dept-detail-modal"
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative border border-slate-200 dark:border-slate-800 text-left"
              >
                
                {/* Hero Banner Header */}
                <div className="h-56 relative">
                  <img
                    src={selectedDept.image}
                    alt={selectedDept.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-950/20 to-transparent"></div>
                  
                  {/* Close Icon */}
                  <button
                    onClick={() => setSelectedDept(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/40 text-white hover:bg-slate-950/60 border border-white/10 transition-colors"
                  >
                    <X size={18} />
                  </button>

                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-primary dark:bg-secondary text-white flex items-center justify-center shadow-lg">
                      <IconMapper iconName={selectedDept.icon} className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-teal-300">
                        Specialty Center
                      </span>
                      <h3 className="text-xl font-heading font-extrabold text-white leading-none">
                        {selectedDept.name} Department
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 md:p-8 flex flex-col gap-6">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                      Clinical Overview
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {selectedDept.longDesc}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3.5">
                      Key Services & Critical Procedures
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {selectedDept.keyServices.map((service, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200"
                        >
                          <span className="w-2 h-2 rounded-full bg-secondary"></span>
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer close */}
                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-sans tracking-wide">
                    Gayathri Care • Compassion • Care • Cure
                  </span>
                  <button
                    onClick={() => setSelectedDept(null)}
                    className="bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors"
                  >
                    Close Directory
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
