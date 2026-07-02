import { Star, ShieldCheck, Quote } from "lucide-react";
import { motion } from "motion/react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full w-fit">
            Patient Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Loved & Trusted by Patients & Families
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mt-2">
            Read stories of recovery, comfort, and clinical triumph directly from our patients and their immediate families.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8" id="testimonials-grid-block">
          {TESTIMONIALS.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/20 border border-slate-200/60 dark:border-slate-800/80 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden"
            >
              {/* Giant watermark quote */}
              <Quote className="absolute right-6 top-6 text-slate-200 dark:text-slate-800/40 w-16 h-16 pointer-events-none select-none" />

              <div className="relative z-10">
                {/* Five-Star Rating Icons */}
                <div className="flex gap-1 mb-5" id={`testimonial-stars-${test.id}`}>
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Patient Review Text */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal italic mb-6">
                  &ldquo;{test.reviewText}&rdquo;
                </p>
              </div>

              {/* Author and department details */}
              <div className="border-t border-slate-200/50 dark:border-slate-800/80 pt-5 flex items-center gap-3 relative z-10">
                <img
                  src={test.photo}
                  alt={test.name}
                  className="w-11 h-11 rounded-full object-cover shadow-xs border border-white"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="block text-xs sm:text-sm font-heading font-extrabold text-slate-800 dark:text-white leading-none">
                    {test.name}
                  </span>
                  
                  {/* Department treated detail */}
                  <span className="inline-flex items-center gap-1 text-[10px] text-primary dark:text-secondary font-bold mt-1.5 leading-none">
                    <ShieldCheck size={12} className="text-secondary" />
                    <span>{test.departmentTreated}</span>
                  </span>
                  
                  {/* Date */}
                  <span className="block text-[9px] text-slate-400 mt-1">
                    Verified Patient • {test.date}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Global Patient Satisfaction Highlight Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary p-8 rounded-3xl text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-teal-200">
              Clinical Quality Metrics
            </span>
            <h3 className="text-lg sm:text-xl font-heading font-extrabold mt-1">
              99.2% Medical Safety & Recovery Index
            </h3>
            <p className="text-xs text-teal-100 mt-1 max-w-xl">
              Audited by international hospital wellness networks, matching the strict clinical standards of standard global clinics.
            </p>
          </div>
          <button className="bg-white text-slate-900 text-xs font-bold px-5 py-3 rounded-xl shadow-md shrink-0 hover:bg-slate-50 transition-colors w-fit">
            Read Patient Safety Protocols
          </button>
        </div>

      </div>
    </section>
  );
}
