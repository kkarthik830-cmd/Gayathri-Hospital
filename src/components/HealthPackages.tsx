import { useState, FormEvent } from "react";
import { Check, Star, Shield, HelpCircle, PhoneCall, ChevronRight, X, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { HEALTH_PACKAGES } from "../data";
import { HealthPackage } from "../types";

export default function HealthPackages() {
  const [selectedPkg, setSelectedPkg] = useState<HealthPackage | null>(null);
  
  // Simulated form states
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

  const handleEnquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientPhone) {
      alert("Please provide at least a name and mobile contact to submit the test query.");
      return;
    }
    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      setSelectedPkg(null);
      setPatientName("");
      setPatientPhone("");
      setPatientAge("");
    }, 4500);
  };

  return (
    <section id="packages" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full w-fit">
            Preventative Diagnostics
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Preventative Executive Health Checkups
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mt-2">
            Early screening remains the ultimate safeguard against multi-system ailments. Choose custom wellness bundles managed by our core biochemistry labs.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8" id="packages-pricing-grid">
          {HEALTH_PACKAGES.map((pkg) => {
            const isPopular = pkg.id === "pkg1";
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-6 text-left flex flex-col justify-between border transition-all duration-300 ${
                  isPopular
                    ? "bg-slate-900 text-white border-primary shadow-xl xl:scale-[1.03] z-10"
                    : "bg-slate-50/50 dark:bg-slate-800/20 text-slate-900 dark:text-white border-slate-200/60 dark:border-slate-800 hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white text-[10px] font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                    Most Requested Checkup
                  </span>
                )}

                <div>
                  {/* Header Title */}
                  <div className="mb-6">
                    <span className={`text-[10px] uppercase tracking-wider font-extrabold ${isPopular ? "text-secondary" : "text-primary dark:text-secondary"}`}>
                      Diagnostic Bundle
                    </span>
                    <h3 className="text-base sm:text-lg font-heading font-extrabold leading-snug mt-1">
                      {pkg.name}
                    </h3>
                    <p className={`text-xs mt-2 leading-relaxed ${isPopular ? "text-slate-300" : "text-slate-500 dark:text-slate-400"}`}>
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price Banner */}
                  <div className="mb-6 flex items-baseline gap-1 border-b border-slate-200/50 dark:border-slate-700/50 pb-5">
                    <span className="text-3xl font-heading font-extrabold">
                      {pkg.price}
                    </span>
                    <span className={`text-xs ${isPopular ? "text-slate-400" : "text-slate-400"}`}>
                      / One-time Screening
                    </span>
                  </div>

                  {/* Recommended For indicator */}
                  <div className="mb-6 text-[11px] leading-relaxed">
                    <span className={`font-bold block uppercase tracking-wider text-[9px] mb-1 ${isPopular ? "text-secondary" : "text-slate-400"}`}>
                      Recommended Target Audience:
                    </span>
                    <p className={isPopular ? "text-slate-200" : "text-slate-600 dark:text-slate-300"}>
                      {pkg.recommendedFor}
                    </p>
                  </div>

                  {/* Bullet tests list */}
                  <div className="mb-6">
                    <span className={`font-bold block uppercase tracking-wider text-[9px] mb-2 ${isPopular ? "text-secondary" : "text-slate-400"}`}>
                      Includes {pkg.testsIncluded.length} Critical Lab Tests:
                    </span>
                    <ul className="flex flex-col gap-2">
                      {pkg.testsIncluded.slice(0, 4).map((test, index) => (
                        <li key={index} className="flex gap-2 text-xs items-start">
                          <Check size={14} className={`shrink-0 mt-0.5 ${isPopular ? "text-secondary" : "text-primary dark:text-secondary"}`} />
                          <span className={isPopular ? "text-slate-300" : "text-slate-600 dark:text-slate-400"}>
                            {test}
                          </span>
                        </li>
                      ))}
                      {pkg.testsIncluded.length > 4 && (
                        <li className={`text-[10px] font-bold ${isPopular ? "text-teal-400" : "text-primary dark:text-secondary"} pl-5 cursor-pointer hover:underline`} onClick={() => setSelectedPkg(pkg)}>
                          + {pkg.testsIncluded.length - 4} more diagnostics included
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Submit action */}
                <button
                  onClick={() => setSelectedPkg(pkg)}
                  className={`w-full py-3 rounded-xl text-xs font-bold transition-all duration-300 ${
                    isPopular
                      ? "bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 shadow-lg shadow-primary/20"
                      : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white hover:border-primary dark:hover:border-secondary hover:bg-primary/5"
                  }`}
                >
                  Request Package Enquiry
                </button>
              </div>
            );
          })}
        </div>

        {/* Quality Standard badge at bottom */}
        <div className="mt-16 text-center flex flex-col items-center gap-2">
          <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-4 py-1.5 rounded-full text-[10px] font-semibold">
            <Shield size={12} className="text-primary" />
            <span>All diagnostics processed in fully ISO-9001 certified sterile pathology cleanrooms.</span>
          </div>
        </div>

        {/* Diagnostic Inclusions & Enquiry Modal Drawer */}
        <AnimatePresence>
          {selectedPkg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!formSuccess) setSelectedPkg(null);
              }}
              className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
              id="package-detail-modal"
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl relative border border-slate-200 dark:border-slate-800 text-left grid md:grid-cols-12"
              >
                {/* Left block - complete inclusion list */}
                <div className="md:col-span-6 p-6 md:p-8 bg-slate-50 dark:bg-slate-950/40 border-r border-slate-100 dark:border-slate-850">
                  <div className="flex flex-col gap-6 h-full justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-primary dark:text-secondary">
                        Comprehensive Diagnostics
                      </span>
                      <h3 className="text-lg md:text-xl font-heading font-extrabold text-slate-900 dark:text-white mt-1">
                        {selectedPkg.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                        Below is the complete, meticulous catalog of biochemical screens and imaging procedures included in this preventative bundle.
                      </p>

                      <div className="mt-6 flex flex-col gap-2 max-h-[40vh] overflow-y-auto pr-2">
                        {selectedPkg.testsIncluded.map((test, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2.5 p-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800/80"
                          >
                            <span className="w-5 h-5 rounded-md bg-secondary/10 text-secondary flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                              {index + 1}
                            </span>
                            <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                              {test}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing Display */}
                    <div className="border-t border-slate-200/60 dark:border-slate-800/60 pt-4 mt-6">
                      <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Consolidated Diagnostic Value</span>
                      <span className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white">{selectedPkg.price}</span>
                      <span className="text-xs text-slate-400 ml-1">all taxes & services included</span>
                    </div>
                  </div>
                </div>

                {/* Right block - simulated appointment request form */}
                <div className="md:col-span-6 p-6 md:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
                  <button
                    onClick={() => setSelectedPkg(null)}
                    disabled={formSuccess}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X size={18} />
                  </button>

                  <div className="flex flex-col gap-6">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Checkup Consultation Request
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Fill out patient information to review the preventative checkup registration workflow.
                      </p>
                    </div>

                    {!formSuccess ? (
                      <form onSubmit={handleEnquirySubmit} className="flex flex-col gap-4 text-left">
                        {/* Name Input */}
                        <div>
                          <label className="block text-xs text-slate-500 dark:text-slate-400 font-semibold mb-1.5">
                            Patient Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                            placeholder="John Doe"
                            className="w-full text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-primary dark:focus:border-secondary text-slate-800 dark:text-white"
                          />
                        </div>

                        {/* Phone Input */}
                        <div>
                          <label className="block text-xs text-slate-500 dark:text-slate-400 font-semibold mb-1.5">
                            Mobile Contact Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={patientPhone}
                            onChange={(e) => setPatientPhone(e.target.value)}
                            placeholder="+1 (555) 0199"
                            className="w-full text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-primary dark:focus:border-secondary text-slate-800 dark:text-white"
                          />
                        </div>

                        {/* Age Input */}
                        <div>
                          <label className="block text-xs text-slate-500 dark:text-slate-400 font-semibold mb-1.5">
                            Patient Age (Optional)
                          </label>
                          <input
                            type="number"
                            value={patientAge}
                            onChange={(e) => setPatientAge(e.target.value)}
                            placeholder="45"
                            className="w-full text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-primary dark:focus:border-secondary text-slate-800 dark:text-white"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full mt-4 bg-primary hover:bg-primary-hover text-white text-xs font-bold py-3.5 rounded-xl shadow-lg transition-all"
                        >
                          Submit Informational Registration
                        </button>
                      </form>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50 p-6 rounded-2xl text-center flex flex-col items-center gap-2"
                      >
                        <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20">
                          <CheckCircle2 size={24} />
                        </div>
                        <h4 className="text-sm font-heading font-extrabold text-slate-900 dark:text-white">
                          Enquiry Registered!
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs">
                          Thank you <strong>{patientName}</strong>. We have registered a simulated query for the <strong>{selectedPkg.name}</strong>. A staff liaison would hypothetical contact you at <strong>{patientPhone}</strong>.
                        </p>
                      </motion.div>
                    )}
                  </div>

                  <p className="text-[10px] text-slate-400 text-center mt-6 select-none border-t border-slate-100 dark:border-slate-800/80 pt-3">
                    Gayathri Care Preventative Division Hours: 8:00 AM - 5:00 PM
                  </p>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
