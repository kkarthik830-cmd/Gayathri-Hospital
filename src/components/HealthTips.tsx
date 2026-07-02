import { useState } from "react";
import { BookOpen, Calendar, Clock, Search, ArrowRight, X, Heart, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { HEALTH_TIPS } from "../data";
import { HealthTip } from "../types";

export default function HealthTips() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<"All" | "Heart Care" | "Diabetes Care" | "Nutrition">("All");
  const [readingTip, setReadingTip] = useState<HealthTip | null>(null);

  const categories = ["All", "Heart Care", "Diabetes Care", "Nutrition"];

  const filteredTips = HEALTH_TIPS.filter((tip) => {
    const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      tip.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = activeCategory === "All" || tip.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <section id="tips" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
            Medical Blog
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Curated Health Tips & Medical Insights
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mt-2">
            Read medical insights, diagnostic updates, and wellness habits designed by our chief consulting physicians.
          </p>
        </div>

        {/* Toolbar filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/50 dark:border-slate-800 shadow-xs" id="tips-toolbar">
          <div className="flex flex-wrap gap-2 w-full md:w-auto" id="tips-cat-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md shadow-primary/25"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search medical columns..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-primary dark:focus:border-secondary text-slate-800 dark:text-white transition-colors"
            />
          </div>
        </div>

        {/* Blogs grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" id="tips-cards-grid">
          <AnimatePresence>
            {filteredTips.map((tip) => (
              <motion.div
                key={tip.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="group cursor-pointer rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 hover:border-primary/40 dark:hover:border-secondary/40 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between text-left"
                onClick={() => setReadingTip(tip)}
              >
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  
                  {/* Category overlay */}
                  <span className="absolute top-4 left-4 text-[9px] font-bold uppercase tracking-widest text-white bg-slate-950/60 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/10">
                    {tip.category}
                  </span>
                </div>

                {/* Content body */}
                <div className="p-6 flex flex-col gap-3 flex-grow">
                  <div className="flex items-center gap-3 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{tip.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{tip.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-heading font-extrabold text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors leading-snug line-clamp-2">
                    {tip.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {tip.summary}
                  </p>
                </div>

                {/* Footer read */}
                <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-primary dark:text-secondary select-none bg-slate-50/50 dark:bg-slate-800/10">
                  <span>Read Full Article</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>

              </motion.div>
            ))}
          </AnimatePresence>

          {filteredTips.length === 0 && (
            <div className="col-span-full py-16 text-center">
              <p className="text-sm text-slate-400">No medical columns found matching your terms.</p>
            </div>
          )}
        </div>

        {/* Blog Article Reader Modal */}
        <AnimatePresence>
          {readingTip && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setReadingTip(null)}
              className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
              id="tip-article-modal"
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl relative border border-slate-200 dark:border-slate-800 text-left"
              >
                {/* Close Button */}
                <button
                  onClick={() => setReadingTip(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/50 hover:bg-slate-950/70 text-white border border-white/10 z-10 transition-colors"
                >
                  <X size={18} />
                </button>

                {/* Article Banner */}
                <div className="h-64 relative">
                  <img
                    src={readingTip.image}
                    alt={readingTip.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 text-left">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-teal-300">
                      Gayathri Care Blog • {readingTip.category}
                    </span>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-heading font-extrabold text-white mt-1 leading-snug">
                      {readingTip.title}
                    </h3>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6 md:p-8 flex flex-col gap-6 max-h-[50vh] overflow-y-auto">
                  {/* Meta stats */}
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-semibold border-b border-slate-100 dark:border-slate-800/80 pb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>Published: {readingTip.date}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      <span>{readingTip.readTime}</span>
                    </span>
                  </div>

                  {/* Body Text */}
                  <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal flex flex-col gap-4">
                    <p className="font-semibold text-slate-800 dark:text-white">
                      {readingTip.summary}
                    </p>
                    <p className="whitespace-pre-line">
                      {readingTip.content}
                    </p>
                  </div>

                  {/* Scientific Health Notice */}
                  <div className="bg-blue-50 dark:bg-slate-850 p-4 rounded-xl border border-blue-100 dark:border-slate-800 flex items-start gap-3 mt-4">
                    <AlertCircle className="text-primary shrink-0 mt-0.5" size={16} />
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                      <strong>Medical Disclaimer:</strong> This column is authored for preventative wellness education purposes only. It should not override customized diagnostic evaluations from board-certified clinicians. Consult your physician for specific health regimens.
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-sans tracking-wide">
                    Gayathri Care • Compassion • Care • Cure
                  </span>
                  <button
                    onClick={() => setReadingTip(null)}
                    className="bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors"
                  >
                    Close Column
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
