import { useState, FormEvent } from "react";
import { Search, Filter, Star, Clock, Globe, Award, ChevronRight, X, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { DOCTORS, HOSPITAL_INFO } from "../data";
import { Doctor } from "../types";

export default function Doctors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedDoc, setSelectedDoc] = useState<Doctor | null>(null);
  
  // Custom mock booking states
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const departments = ["All", "Cardiology", "Neurology", "Neurosurgery", "Gynecology & Obstetrics", "Orthopaedics", "Oncology"];

  const filteredDocs = DOCTORS.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      doc.qualification.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === "All" || doc.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  const handleBookingDemoSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedDay || !selectedTime) {
      alert("Please select a day and time slot to preview the consultation scheduling.");
      return;
    }
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedDoc(null);
      setSelectedDay("");
      setSelectedTime("");
    }, 4000);
  };

  return (
    <section id="doctors" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full w-fit">
            Medical Faculty
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Consult Our Senior Clinical Specialists
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mt-2">
            Connect with board-certified physicians and surgical chiefs who bring decades of combined clinical wisdom from leading international healthcare centers.
          </p>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 bg-slate-50 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xs" id="doctors-toolbar">
          
          {/* Department Selection Filter */}
          <div className="flex flex-wrap gap-2 w-full lg:w-auto" id="doc-dept-filters">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 ${
                  selectedDept === dept
                    ? "bg-secondary text-white shadow-md shadow-secondary/25"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search physicians, DM, MS..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-primary dark:focus:border-secondary text-slate-800 dark:text-white transition-all"
            />
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" id="doctors-grid">
          <AnimatePresence>
            {filteredDocs.map((doc) => (
              <motion.div
                key={doc.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="group rounded-2xl bg-slate-50/50 dark:bg-slate-800/20 border border-slate-200/60 dark:border-slate-800 hover:border-primary/30 dark:hover:border-secondary/30 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Doctor Avatar Photo */}
                <div className="h-72 overflow-hidden relative group cursor-pointer" onClick={() => setSelectedDoc(doc)}>
                  <img
                    src={doc.photo}
                    alt={doc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 object-top"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent"></div>
                  
                  {/* Floating Experience Tag */}
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1 text-[10px] font-bold text-white bg-slate-950/55 backdrop-blur-xs px-3 py-1 rounded-full border border-white/10">
                    <Award size={12} className="text-yellow-400" />
                    <span>{doc.experience.split(" ")[0]} Yrs Exp</span>
                  </span>

                  {/* Rating indicator */}
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1 text-[10px] font-bold text-slate-800 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-xs border border-white/20">
                    <Star size={12} className="text-yellow-500 fill-yellow-500" />
                    <span>{doc.rating}</span>
                  </span>

                  {/* Department highlight on banner */}
                  <div className="absolute bottom-4 left-4 text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300">
                      {doc.department}
                    </span>
                    <h3 className="text-md font-heading font-extrabold text-white">
                      {doc.name}
                    </h3>
                  </div>
                </div>

                {/* Info Fields */}
                <div className="p-5 text-left flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Qualifications
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                      {doc.qualification}
                    </p>
                  </div>

                  {/* Availability Indicator */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2.5 rounded-xl">
                    <Clock size={14} className="text-primary dark:text-secondary" />
                    <span>{doc.availability}</span>
                  </div>

                  {/* Languages Block */}
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Globe size={12} />
                    <span>Speaks: {doc.languages.join(", ")}</span>
                  </div>
                </div>

                {/* Profile View (UI-Only Action) */}
                <div className="p-4 bg-slate-50 dark:bg-slate-800/10 border-t border-slate-100 dark:border-slate-800/80">
                  <button
                    onClick={() => setSelectedDoc(doc)}
                    className="w-full py-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-primary text-slate-700 dark:text-white hover:text-primary dark:hover:text-secondary hover:bg-primary/5 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>View Faculty Profile</span>
                    <ChevronRight size={14} />
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>

          {filteredDocs.length === 0 && (
            <div className="col-span-full py-16 text-center">
              <p className="text-sm text-slate-400">No medical faculty matches your filters or search keywords.</p>
            </div>
          )}
        </div>

        {/* Doctor Bio & Informational Schedule Modal Overlay */}
        <AnimatePresence>
          {selectedDoc && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!bookingSuccess) setSelectedDoc(null);
              }}
              className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
              id="doctor-detail-modal"
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl relative border border-slate-200 dark:border-slate-800 text-left grid md:grid-cols-12"
              >
                {/* Left Side: Profile Photo */}
                <div className="md:col-span-5 h-64 md:h-full relative bg-slate-100">
                  <img
                    src={selectedDoc.photo}
                    alt={selectedDoc.name}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-slate-950/20"></div>
                  
                  {/* Rating inside modal */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1 text-slate-800 bg-white/95 px-3 py-1 rounded-full shadow-md text-xs font-bold border border-slate-100">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    <span>{selectedDoc.rating} / 5.0 (Patient Rating)</span>
                  </div>

                  {/* Close floating on mobile */}
                  <button
                    onClick={() => setSelectedDoc(null)}
                    disabled={bookingSuccess}
                    className="absolute top-4 left-4 md:hidden p-2 rounded-full bg-slate-950/45 text-white hover:bg-slate-950/60 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Right Side: Detailed copy and simulated scheduling form */}
                <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
                  
                  <button
                    onClick={() => setSelectedDoc(null)}
                    disabled={bookingSuccess}
                    className="absolute top-4 right-4 hidden md:flex p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X size={18} />
                  </button>

                  <div className="flex flex-col gap-6">
                    {/* Header Details */}
                    <div className="text-left border-b border-slate-100 dark:border-slate-800/80 pb-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-secondary dark:text-teal-400">
                        {selectedDoc.department} Center of Excellence
                      </span>
                      <h3 className="text-xl md:text-2xl font-heading font-extrabold text-slate-900 dark:text-white mt-1">
                        {selectedDoc.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-1">
                        {selectedDoc.qualification}
                      </p>
                    </div>

                    {/* Bio Narrative */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                        Professional Biography & Expertise
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {selectedDoc.bio}
                      </p>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800">
                        <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Clinical Tenure</span>
                        <span className="block text-xs sm:text-sm text-slate-800 dark:text-white font-heading font-bold mt-0.5">{selectedDoc.experience}</span>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800">
                        <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Languages Spoken</span>
                        <span className="block text-xs sm:text-sm text-slate-800 dark:text-white font-heading font-bold mt-0.5">{selectedDoc.languages.slice(0, 3).join(", ")}</span>
                      </div>
                    </div>

                    {/* INTERACTIVE SIMULATED CONSULTATION SCHEDULER (UI Demo) */}
                    {!bookingSuccess ? (
                      <form onSubmit={handleBookingDemoSubmit} className="border-t border-slate-100 dark:border-slate-800/80 pt-5 text-left">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                          Simulate Appointment Scheduling <span className="text-[10px] font-normal text-secondary lowercase">(visual demo)</span>
                        </h4>
                        
                        <div className="grid gap-4">
                          {/* Day Select */}
                          <div>
                            <span className="block text-xs text-slate-500 dark:text-slate-400 font-semibold mb-2">
                              1. Select Target Consultation Day
                            </span>
                            <div className="grid grid-cols-3 gap-2">
                              {["Monday", "Wednesday", "Friday"].map((day) => (
                                <button
                                  key={day}
                                  type="button"
                                  onClick={() => setSelectedDay(day)}
                                  className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                                    selectedDay === day
                                      ? "bg-primary text-white border-primary shadow-xs"
                                      : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-50"
                                  }`}
                                >
                                  {day}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Time Slot Select */}
                          <div>
                            <span className="block text-xs text-slate-500 dark:text-slate-400 font-semibold mb-2">
                              2. Select Consultation Hour
                            </span>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                              {["09:30 AM", "11:00 AM", "02:15 PM", "04:30 PM"].map((time) => (
                                <button
                                  key={time}
                                  type="button"
                                  onClick={() => setSelectedTime(time)}
                                  className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                                    selectedTime === time
                                      ? "bg-secondary text-white border-secondary shadow-xs"
                                      : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-50"
                                  }`}
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          className="w-full mt-5 bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover text-white text-xs font-bold py-3 rounded-xl shadow-lg transition-all"
                        >
                          Confirm Simulated Schedule Slot
                        </button>
                      </form>
                    ) : (
                      // Success State animation
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50 p-6 rounded-2xl text-center flex flex-col items-center gap-2"
                      >
                        <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20">
                          <CheckCircle2 size={24} />
                        </div>
                        <h4 className="text-sm font-heading font-extrabold text-slate-900 dark:text-white">
                          Demo Schedule slot Reserved Successfully!
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
                          You have reserved a simulated slot with <strong>{selectedDoc.name}</strong> on <strong>{selectedDay} at {selectedTime}</strong>. This is an informational UI representation only.
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Footer message */}
                  <p className="text-[10px] text-slate-400 text-center mt-6 select-none border-t border-slate-100 dark:border-slate-800/80 pt-3">
                    Gayathri Care Lobby Desk: {HOSPITAL_INFO.contact.hours}
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
