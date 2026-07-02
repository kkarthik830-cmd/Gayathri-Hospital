import { ArrowUp, Award, ShieldAlert, Heart, Calendar } from "lucide-react";
import { HOSPITAL_INFO, DEPARTMENTS } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800" id="footer-block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-4 text-left">
            <div 
              onClick={() => handleScrollToId("home")} 
              className="flex items-center gap-2 cursor-pointer w-fit group"
            >
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white font-bold group-hover:scale-105 transition-transform">
                <span>G</span>
              </div>
              <div>
                <span className="block text-md font-heading font-bold text-white leading-none">
                  GAYATHRI
                </span>
                <span className="block text-[8px] font-sans font-bold tracking-widest text-secondary uppercase">
                  Care Hospital
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-xs font-normal">
              An internationally recognized multi-speciality clinical facility providing world-class medical science, compassionate nursing, and advanced diagnostics under patient-first values.
            </p>

            {/* Quality Standard */}
            <div className="flex items-center gap-2 text-[10px] text-teal-300 font-semibold uppercase tracking-wider bg-slate-800/50 p-3 rounded-xl border border-slate-700/30 w-fit select-none">
              <Award size={14} className="text-yellow-400" />
              <span>WHO Hygiene Standards Certified</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Our Hospital
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              {[
                { id: "home", label: "Home Base" },
                { id: "about", label: "About Story" },
                { id: "doctors", label: "Senior Specialists" },
                { id: "facilities", label: "Hospital Spaces" },
                { id: "gallery", label: "Visual Tour" }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollToId(link.id)}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Specialty links */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Speciality wings
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              {DEPARTMENTS.slice(0, 5).map((dept) => (
                <li key={dept.id}>
                  <button
                    onClick={() => handleScrollToId("departments")}
                    className="hover:text-white transition-colors duration-200 text-left"
                  >
                    {dept.name} Center
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Urgent Triage */}
          <div className="lg:col-span-3 text-left flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Critical Triage
            </h4>
            
            <div className="p-4 bg-red-950/35 border border-red-900/50 rounded-2xl flex flex-col gap-2">
              <span className="flex items-center gap-1.5 text-xs font-bold text-red-400 uppercase tracking-wider">
                <ShieldAlert size={14} className="animate-pulse" />
                <span>24/7 Trauma response</span>
              </span>
              <p className="text-[11px] text-slate-400 leading-normal">
                If you require urgent life saving services, dial our hotline directly immediately.
              </p>
              <a
                href={`tel:${HOSPITAL_INFO.contact.emergencyPhone}`}
                onClick={(e) => {
                  e.preventDefault();
                  alert(`DEMO ONLY: Outbound emergency call: ${HOSPITAL_INFO.contact.emergencyPhone}`);
                }}
                className="block text-center bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2 rounded-xl transition-colors mt-1"
              >
                {HOSPITAL_INFO.contact.emergencyPhone}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom block: copyrights & disclaimers */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>&copy; {currentYear} Gayathri Care Hospital. All Rights Reserved.</p>
            <p className="text-[9px] text-slate-600 mt-1">
              *Disclaimer: This is a beautiful view-only website profile demonstrating high-end clinical interfaces. All scheduling, patient inquiries, and maps are visual simulations.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-slate-300">Terms of Care</a>
            <span>•</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-slate-300">Sterilization Logs</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
