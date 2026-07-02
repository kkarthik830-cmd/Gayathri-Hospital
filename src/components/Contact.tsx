import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { HOSPITAL_INFO } from "../data";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill in all required fields to submit your visual feedback query.");
      return;
    }
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 4500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact Gayathri Care Hospital
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mt-2">
            Have questions regarding specialties, checkups, or visiting regulations? Reach out directly to our 24/7 communications lobby desk.
          </p>
        </div>

        {/* Contact Split layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start" id="contact-split-grid">
          
          {/* Left Block: Communication Cards & Coordinates */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">
              Hospital Communication Desk
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal leading-relaxed -mt-2">
              For emergency trauma response, please do not use the contact form. Call our hotline dial direct at {HOSPITAL_INFO.contact.emergencyPhone} immediately.
            </p>

            <div className="flex flex-col gap-4">
              
              {/* Card 1: Address */}
              <div className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-xs">
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">
                    Hospital Campus Address
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-white">
                    {HOSPITAL_INFO.contact.address}
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Free Valet & Attendant Parking available</span>
                </div>
              </div>

              {/* Card 2: Phone Hotline */}
              <div className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-xs">
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">
                    Lobby Direct hot-dials
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-white">
                    General: {HOSPITAL_INFO.contact.phone}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-red-500 mt-0.5">
                    Emergency: {HOSPITAL_INFO.contact.emergencyPhone}
                  </p>
                </div>
              </div>

              {/* Card 3: Email Coordinates */}
              <div className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-xs">
                <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">
                    Support Email Coordination
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-white">
                    {HOSPITAL_INFO.contact.email}
                  </p>
                  <span className="text-[10px] text-slate-400 block mt-1">Queries responded to within 12-24 hours.</span>
                </div>
              </div>

              {/* Card 4: Hours */}
              <div className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-xs">
                <div className="p-3 rounded-xl bg-emerald-100 text-emerald-600 shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">
                    Operational Schedule
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-white">
                    {HOSPITAL_INFO.contact.hours}
                  </p>
                </div>
              </div>

            </div>

            {/* Social Channels */}
            <div className="mt-4 flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Connect On Social Channels</span>
              <div className="flex gap-3">
                {[
                  { icon: <Facebook size={16} />, href: "#" },
                  { icon: <Twitter size={16} />, href: "#" },
                  { icon: <Linkedin size={16} />, href: "#" },
                  { icon: <Instagram size={16} />, href: "#" }
                ].map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    onClick={(e) => e.preventDefault()}
                    className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-primary hover:border-primary flex items-center justify-center transition-all shadow-xs"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Block: Simulated feedback Form & Vector Map */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Feedback Form Card */}
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800 shadow-md text-left">
              <h3 className="text-lg font-heading font-extrabold text-slate-900 dark:text-white mb-2">
                Simulated Lobby Inquiry
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Demonstrate communications routing by filling out an informational query below.
              </p>

              {!success ? (
                <form onSubmit={handleInquirySubmit} className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-xs text-slate-500 dark:text-slate-400 font-semibold mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary dark:focus:border-secondary rounded-xl px-4 py-3 focus:outline-none text-slate-800 dark:text-white"
                    />
                  </div>

                  {/* Email */}
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-xs text-slate-500 dark:text-slate-400 font-semibold mb-1.5">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary dark:focus:border-secondary rounded-xl px-4 py-3 focus:outline-none text-slate-800 dark:text-white"
                    />
                  </div>

                  {/* Subject */}
                  <div className="col-span-2">
                    <label className="block text-xs text-slate-500 dark:text-slate-400 font-semibold mb-1.5">Subject of Query</label>
                    <input
                      type="text"
                      placeholder="Consultation billing, department queries..."
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary dark:focus:border-secondary rounded-xl px-4 py-3 focus:outline-none text-slate-800 dark:text-white"
                    />
                  </div>

                  {/* Message */}
                  <div className="col-span-2">
                    <label className="block text-xs text-slate-500 dark:text-slate-400 font-semibold mb-1.5">Message / Inquiry *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Type your clinical profile question..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary dark:focus:border-secondary rounded-xl px-4 py-3 focus:outline-none text-slate-800 dark:text-white"
                    />
                  </div>

                  {/* Submit button */}
                  <div className="col-span-2">
                    <button
                      type="submit"
                      className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-secondary dark:hover:bg-secondary-hover text-white text-xs font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <Send size={14} />
                      <span>Send Informational Message</span>
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 p-8 rounded-2xl text-center flex flex-col items-center gap-2"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-sm font-heading font-extrabold text-slate-900 dark:text-white">
                    Feedback Received!
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
                    Thank you <strong>{name}</strong>. Your test query has successfully run through our mockup interface. We appreciate your exploration!
                  </p>
                </motion.div>
              )}
            </div>

            {/* Simulated Custom Embedded Map - looks gorgeous, clean, loads instantly */}
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800 h-64 bg-slate-100 dark:bg-slate-900/60 select-none flex items-center justify-center">
              
              {/* Elegant Blueprint Vector Map Pattern */}
              <div className="absolute inset-0 bg-radial from-slate-200/50 to-slate-100 dark:from-slate-800/40 dark:to-slate-950 flex flex-col justify-between p-6 overflow-hidden">
                {/* Simulated Roads/Grid lines overlay */}
                <div className="absolute inset-0 opacity-15 border border-slate-400/20 bg-grid-slate-300 dark:bg-grid-slate-700"></div>
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-300 dark:bg-slate-800 opacity-30 transform -rotate-12"></div>
                <div className="absolute left-1/3 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-800 opacity-30 transform rotate-12"></div>
                
                {/* Floating Map Labels */}
                <span className="absolute top-8 left-12 text-[10px] font-bold text-slate-400">Evergreen Avenue</span>
                <span className="absolute bottom-12 right-20 text-[10px] font-bold text-slate-400">Medical District Boulevard</span>
              </div>

              {/* Animated Map Pin */}
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="relative flex items-center justify-center">
                  {/* Rippling concentric radar circles */}
                  <span className="absolute block w-16 h-16 rounded-full bg-primary/20 animate-ping"></span>
                  <span className="absolute block w-10 h-10 rounded-full bg-primary/30 animate-pulse-slow"></span>
                  
                  {/* Pin core */}
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-extrabold shadow-md border-2 border-white">
                    H
                  </div>
                </div>

                <div className="bg-slate-900/90 dark:bg-slate-900/95 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/10 shadow-lg text-center">
                  <span className="block text-[11px] font-heading font-extrabold text-white">Gayathri Care Campus</span>
                  <span className="block text-[9px] text-teal-300 font-bold tracking-wide mt-0.5 uppercase">Lobby Center Entrance</span>
                </div>
              </div>

              {/* Map controls mockup */}
              <div className="absolute bottom-4 left-4 flex gap-1 z-15">
                <button className="w-6 h-6 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-white flex items-center justify-center text-xs font-bold border border-slate-200 dark:border-slate-700 shadow-sm">+</button>
                <button className="w-6 h-6 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-white flex items-center justify-center text-xs font-bold border border-slate-200 dark:border-slate-700 shadow-sm">-</button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
