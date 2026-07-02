import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS } from "../data";

export default function Faq() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full w-fit">
            Support Center
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-2">
            Find immediate answers regarding diagnostics preparation, insurance caching, visiting windows, and trauma response workflows.
          </p>
        </div>

        {/* Collapsible Accordion Stream */}
        <div className="flex flex-col gap-4 text-left" id="faq-accordion-container">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-slate-50 dark:bg-slate-800/40 border-primary/30 dark:border-secondary/30 shadow-xs"
                    : "bg-white dark:bg-slate-900 border-slate-200/60 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none select-none"
                  id={`faq-trigger-${faq.id}`}
                >
                  <div className="flex gap-3.5 items-start">
                    <HelpCircle className={`shrink-0 mt-0.5 ${isOpen ? "text-primary dark:text-secondary" : "text-slate-400"}`} size={20} />
                    <span className="text-xs sm:text-sm font-heading font-extrabold text-slate-800 dark:text-white leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className="shrink-0 p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {/* Collapsible Answer Block */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-slate-100 dark:border-slate-800/50">
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                          {faq.answer}
                        </p>
                        
                        <span className="inline-block mt-4 text-[9px] uppercase tracking-wider font-extrabold text-secondary dark:text-teal-400">
                          Classified: {faq.category} Policy
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Missing help banner */}
        <div className="mt-12 bg-slate-50 dark:bg-slate-800/20 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800 text-center flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
            Still have queries regarding other procedures, billing methods, or panel approvals?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const contactSec = document.getElementById("contact");
              if (contactSec) {
                contactSec.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-xs font-bold text-primary dark:text-secondary hover:underline shrink-0"
          >
            Connect with Patient Desk &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
