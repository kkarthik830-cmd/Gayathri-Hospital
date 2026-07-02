import { useState, useEffect, FormEvent } from "react";
import { PhoneCall, MessageCircle, ArrowUp, X, Sparkles, Send, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { HOSPITAL_INFO } from "../data";

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatSuccess, setChatSuccess] = useState(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleChatDemoSend = (e: FormEvent) => {
    e.preventDefault();
    if (!chatMessage) return;
    setChatSuccess(true);
    setTimeout(() => {
      setChatSuccess(false);
      setChatMessage("");
      setShowChat(false);
    }, 4000);
  };

  return (
    <>
      {/* Floating Buttons Stack */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end" id="floating-actions-stack">
        
        {/* Scroll-to-top button */}
        <AnimatePresence>
          {showScroll && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              onClick={scrollToTop}
              title="Scroll back to top"
              className="p-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-950/20 hover:scale-105 transition-all border border-slate-700/50"
            >
              <ArrowUp size={16} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating Emergency Direct Call Trigger */}
        <a
          href={`tel:${HOSPITAL_INFO.contact.emergencyPhone}`}
          onClick={(e) => {
            e.preventDefault();
            alert(`DEMO ONLY: Outbound emergency call routing: ${HOSPITAL_INFO.contact.emergencyPhone}`);
          }}
          title="Direct dial trauma room"
          className="p-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30 hover:scale-105 transition-all flex items-center justify-center animate-bounce"
        >
          <PhoneCall size={16} />
        </a>

        {/* Floating WhatsApp Chat Assistant trigger */}
        <button
          onClick={() => setShowChat(!showChat)}
          title="Chat on WhatsApp"
          className="p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all flex items-center justify-center"
        >
          <MessageCircle size={18} />
        </button>

      </div>

      {/* Floating Mock Chat Panel drawer */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 z-40 w-80 bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-850 text-left"
            id="floating-mock-chat"
          >
            {/* Header */}
            <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-bold relative">
                  G
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-emerald-600"></span>
                </div>
                <div>
                  <span className="block text-xs font-bold font-heading">Gayathri Help Liaison</span>
                  <span className="block text-[9px] text-teal-100 font-medium">Typically replies instantly</span>
                </div>
              </div>
              <button
                onClick={() => setShowChat(false)}
                className="text-white/70 hover:text-white p-1 rounded-md hover:bg-white/10"
              >
                <X size={16} />
              </button>
            </div>

            {/* Content Message */}
            <div className="p-4 bg-slate-50 dark:bg-slate-950/40 min-h-[160px] flex flex-col justify-between">
              {!chatSuccess ? (
                <>
                  <div className="flex flex-col gap-2">
                    <div className="bg-white dark:bg-slate-900 p-3 rounded-2xl rounded-tl-none shadow-xs border border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 max-w-[85%] self-start leading-relaxed">
                      Hello! Welcome to Gayathri Care Hospital. How may I assist your medical profile discovery today?
                    </div>
                  </div>

                  <form onSubmit={handleChatDemoSend} className="flex gap-2 border-t border-slate-200/50 dark:border-slate-800 pt-3 mt-3">
                    <input
                      type="text"
                      required
                      placeholder="Type your question..."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      className="flex-grow bg-white dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-600 text-slate-800 dark:text-white"
                    />
                    <button
                      type="submit"
                      className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shrink-0 transition-colors"
                    >
                      <Send size={14} />
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-2 py-6 text-center h-full"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                    <ShieldCheck size={20} />
                  </div>
                  <h4 className="text-xs font-heading font-extrabold text-slate-900 dark:text-white">
                    Simulated Message Routed!
                  </h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 max-w-[90%] leading-relaxed">
                    Your message &ldquo;{chatMessage}&rdquo; was processed by the frontend showcase layout successfully.
                  </p>
                </motion.div>
              )}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
