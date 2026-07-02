import { useState } from "react";
import { Eye, ZoomIn, X, ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface GalleryItem {
  id: string;
  title: string;
  category: "Architecture" | "Clinical" | "Amenities";
  url: string;
  description: string;
}

export default function Gallery() {
  const [selectedCat, setSelectedCat] = useState<"All" | "Architecture" | "Clinical" | "Amenities">("All");
  const [zoomItem, setZoomItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "gal1",
      title: "Main Hospital Building Block",
      category: "Architecture",
      url: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=800",
      description: "State-of-the-art climate insulated exterior profile."
    },
    {
      id: "gal2",
      title: "Vitals ICU Unit Rooms",
      category: "Clinical",
      url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
      description: "Continuous telemetry tracking beds and oxygen lines."
    },
    {
      id: "gal3",
      title: "Executive Reception Lobby",
      category: "Amenities",
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
      description: "Calm, welcoming reception space with guest lounge."
    },
    {
      id: "gal4",
      title: "Modular Operation Theatre",
      category: "Clinical",
      url: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=800",
      description: "Robotic integrated laminar airflow surgical block."
    },
    {
      id: "gal5",
      title: "Diagnostic Pathology Lab",
      category: "Clinical",
      url: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800",
      description: "Fully automated chemical diagnostics and biomarker screens."
    },
    {
      id: "gal6",
      title: "Luxury Single Patient Suite",
      category: "Amenities",
      url: "https://images.unsplash.com/photo-1586773860418-d3b3da9601ee?auto=format&fit=crop&q=80&w=800",
      description: "Ultra-private healing space with day bed and entertainment console."
    }
  ];

  const filteredItems = galleryItems.filter((item) => {
    return selectedCat === "All" || item.category === selectedCat;
  });

  return (
    <section id="gallery" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full w-fit">
            Hospital Tour
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Take a Visual Tour of Gayathri Care
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mt-2">
            Explore our architectural elegance, sterile surgical corridors, high-field diagnostics suites, and luxury patient rehabilitative spaces.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex justify-center gap-2 mb-12" id="gallery-filters">
          {["All", "Architecture", "Clinical", "Amenities"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat as any)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 ${
                selectedCat === cat
                  ? "bg-secondary text-white shadow-md shadow-secondary/25"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/40 dark:border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Masonry Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="gallery-masonry-grid">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setZoomItem(item)}
                className="group relative cursor-pointer aspect-4/3 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl border border-slate-200/40 dark:border-slate-850"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[9px] uppercase font-bold tracking-widest text-teal-300">
                        {item.category}
                      </span>
                      <h4 className="text-sm font-heading font-bold text-white mt-0.5">
                        {item.title}
                      </h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-sm shrink-0">
                      <ZoomIn size={16} />
                    </div>
                  </div>
                </div>

                {/* Constant small visual identifier for mobile/touch */}
                <span className="absolute bottom-3 left-4 text-[9px] font-bold text-white bg-slate-950/50 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/10 group-hover:opacity-0 transition-opacity sm:block">
                  {item.title}
                </span>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Zoom Lightbox Modal */}
        <AnimatePresence>
          {zoomItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setZoomItem(null)}
              className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-4"
              id="gallery-zoom-lightbox"
            >
              <motion.div
                initial={{ scale: 0.9, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 10 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800"
              >
                
                <button
                  onClick={() => setZoomItem(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/50 hover:bg-slate-950/70 text-white border border-white/15 z-10 transition-colors"
                >
                  <X size={18} />
                </button>

                {/* Zoom Photo */}
                <div className="aspect-16/9 w-full bg-slate-100">
                  <img
                    src={zoomItem.url}
                    alt={zoomItem.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Image details */}
                <div className="p-6 text-left flex flex-col gap-1 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-secondary dark:text-teal-400">
                    Hospital Profile • {zoomItem.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-heading font-extrabold text-slate-900 dark:text-white mt-1">
                    {zoomItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">
                    {zoomItem.description}
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
