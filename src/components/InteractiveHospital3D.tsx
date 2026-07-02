import { useState, useEffect, useRef, MouseEvent, TouchEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  RotateCw, 
  Layers, 
  Activity, 
  Heart, 
  ShieldAlert, 
  Thermometer, 
  Clock, 
  Settings, 
  User, 
  Check, 
  Flame, 
  Eye, 
  Maximize2, 
  Minimize2,
  AlertTriangle,
  Volume2,
  VolumeX,
  Gauge,
  Sparkles,
  Info
} from "lucide-react";

// Types
interface RoomDetail {
  id: string;
  name: string;
  status: "Normal" | "High Load" | "Sterile" | "Scanning" | "Idle";
  metric: string;
}

interface HospitalFloor {
  level: number;
  name: string;
  specialty: string;
  color: string; // Tailwinds primary colors
  glowColor: string;
  textColor: string;
  bgGrad: string;
  occupancy: number;
  temperature: string;
  sterileIndex: string;
  criticalDevice: string;
  telemetryType: "ECG" | "EEG" | "SCAN" | "FLOW" | "TEMP";
  rooms: RoomDetail[];
  description: string;
}

const FLOORS_DATA: HospitalFloor[] = [
  {
    level: 4,
    name: "ICU & Trauma Wing",
    specialty: "Critical Care",
    color: "from-red-500 to-rose-600",
    glowColor: "shadow-red-500/50 border-red-500/40",
    textColor: "text-red-500 dark:text-red-400",
    bgGrad: "bg-red-500/10",
    occupancy: 88,
    temperature: "21.5°C",
    sterileIndex: "99.98%",
    criticalDevice: "High-Flow Oxygen Ventilators",
    telemetryType: "ECG",
    description: "Equipped with continuous central telemetry, isolation rooms, and immediate trauma resuscitation beds.",
    rooms: [
      { id: "r41", name: "ICU Bed A", status: "Normal", metric: "Vitals stable" },
      { id: "r42", name: "Trauma Room 1", status: "High Load", metric: "Resus Active" },
      { id: "r43", name: "Isolation Suite", status: "Sterile", metric: "Negative Pressure" }
    ]
  },
  {
    level: 3,
    name: "Modular Surgical Block",
    specialty: "Operation Theatres",
    color: "from-teal-500 to-cyan-600",
    glowColor: "shadow-teal-500/50 border-teal-500/40",
    textColor: "text-teal-500 dark:text-teal-400",
    bgGrad: "bg-teal-500/10",
    occupancy: 65,
    temperature: "18.2°C",
    sterileIndex: "100.00%",
    criticalDevice: "Laminar Flow Sterile Filters",
    telemetryType: "FLOW",
    description: "Robotic assisted surgery rooms with absolute positive pressure, sterile locks, and zero-bacteria environments.",
    rooms: [
      { id: "r31", name: "Robotic OT A", status: "Sterile", metric: "Active Surgery" },
      { id: "r32", name: "Cardiac OT B", status: "Sterile", metric: "Sterilization log OK" },
      { id: "r33", name: "Anesthesia Bay", status: "Idle", metric: "Standby" }
    ]
  },
  {
    level: 2,
    name: "High-Field Diagnostics",
    specialty: "Radiology & Labs",
    color: "from-violet-500 to-indigo-600",
    glowColor: "shadow-violet-500/50 border-violet-500/40",
    textColor: "text-violet-500 dark:text-violet-400",
    bgGrad: "bg-violet-500/10",
    occupancy: 42,
    temperature: "20.0°C",
    sterileIndex: "98.50%",
    criticalDevice: "Helium-Cooled Superconductors",
    telemetryType: "SCAN",
    description: "Houses our 3-Tesla ultra high-field MRI scanner, 128-slice CT machine, and automated pathology scanners.",
    rooms: [
      { id: "r21", name: "3T MRI Vault", status: "Scanning", metric: "Sequence Active" },
      { id: "r22", name: "CT Scan Bay", status: "Normal", metric: "Calibration OK" },
      { id: "r23", name: "Chemical Pathology", status: "Idle", metric: "Processing biomarkers" }
    ]
  },
  {
    level: 1,
    name: "VIP Rehabilitative Suites",
    specialty: "Patient Wards",
    color: "from-emerald-500 to-green-600",
    glowColor: "shadow-emerald-500/50 border-emerald-500/40",
    textColor: "text-emerald-500 dark:text-emerald-400",
    bgGrad: "bg-emerald-500/10",
    occupancy: 95,
    temperature: "22.8°C",
    sterileIndex: "99.20%",
    criticalDevice: "Automated Gait Assist Systems",
    telemetryType: "TEMP",
    description: "Premium single patient rooms with smart climate controls, nurse assistance screens, and healing lounge views.",
    rooms: [
      { id: "r11", name: "Suite 101 (Luxury)", status: "Normal", metric: "Patient recovering" },
      { id: "r12", name: "Suite 102 (Executive)", status: "Normal", metric: "Discharge pending" },
      { id: "r13", name: "Physiotherapy Room", status: "Normal", metric: "Active session" }
    ]
  },
  {
    level: 0,
    name: "Reception & Emergency Portal",
    specialty: "Admitting Lobby",
    color: "from-sky-500 to-blue-600",
    glowColor: "shadow-sky-500/50 border-sky-500/40",
    textColor: "text-sky-500 dark:text-sky-400",
    bgGrad: "bg-sky-500/10",
    occupancy: 70,
    temperature: "23.0°C",
    sterileIndex: "97.50%",
    criticalDevice: "Central Telemetry Router",
    telemetryType: "EEG",
    description: "Main admission lobby with digital patient intake kiosks, outpatient triage rooms, and emergency ambulance portal.",
    rooms: [
      { id: "r01", name: "Main Desk Reception", status: "Normal", metric: "Kiosks Active" },
      { id: "r02", name: "Triage Outpatients", status: "High Load", metric: "Wait time: 8 min" },
      { id: "r03", name: "Ambulance Receiving", status: "Normal", metric: "Gurney ready" }
    ]
  }
];

export default function InteractiveHospital3D() {
  const [selectedFloor, setSelectedFloor] = useState<number>(4);
  const [exploded, setExploded] = useState<boolean>(true);
  const [isEmergencyAlert, setIsEmergencyAlert] = useState<boolean>(false);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  
  // Custom rotation angles
  const [rotateX, setRotateX] = useState<number>(60); // Angle of tilt
  const [rotateZ, setRotateZ] = useState<number>(-45); // Orbit angle

  // Dragging interaction state
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const startRotation = useRef({ rx: 60, rz: -45 });

  // Selected room focus
  const currentFloorData = FLOORS_DATA.find(f => f.level === selectedFloor) || FLOORS_DATA[0];
  const [selectedRoomId, setSelectedRoomId] = useState<string>(currentFloorData.rooms[0].id);

  // Telemetry frame loop state
  const [telemetryTime, setTelemetryTime] = useState<number>(0);

  // Trigger telemetry tick
  useEffect(() => {
    let frameId: number;
    const tick = () => {
      setTelemetryTime(t => t + 1);
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Slowly orbit the model when autoRotate is on and user is not dragging
  useEffect(() => {
    if (!autoRotate || isDragging) return;
    const interval = setInterval(() => {
      setRotateZ(prev => (prev + 0.15) % 360);
    }, 16);
    return () => clearInterval(interval);
  }, [autoRotate, isDragging]);

  // Update selected room if we switch floors
  useEffect(() => {
    setSelectedRoomId(currentFloorData.rooms[0].id);
  }, [selectedFloor]);

  // Handle Drag Start
  const handleDragStart = (x: number, y: number) => {
    setIsDragging(true);
    dragStart.current = { x, y };
    startRotation.current = { rx: rotateX, rz: rotateZ };
  };

  // Handle Drag Move
  const handleDragMove = (x: number, y: number) => {
    if (!isDragging) return;
    const dx = x - dragStart.current.x;
    const dy = y - dragStart.current.y;
    
    // Horizontal dragging orbits (rotate Z)
    // Vertical dragging tilts (rotate X)
    setRotateZ(startRotation.current.rz - dx * 0.5);
    setRotateX(Math.max(35, Math.min(80, startRotation.current.rx + dy * 0.5)));
  };

  const handleMouseDown = (e: MouseEvent) => {
    handleDragStart(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: MouseEvent) => {
    handleDragMove(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: TouchEvent) => {
    if (e.touches[0]) {
      handleDragStart(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches[0]) {
      handleDragMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  // Generate gorgeous live SVG path for waveforms
  const renderWaveform = () => {
    const points = [];
    const width = 300;
    const height = 64;
    const type = currentFloorData.telemetryType;

    if (isEmergencyAlert) {
      // High frequency rapid distress alarm wave
      for (let x = 0; x < width; x += 2) {
        const timeFactor = telemetryTime * 0.15;
        let y = height / 2 + Math.sin(x * 0.1 + timeFactor) * 12;
        // Distort with sharp medical pulses
        if ((x + Math.floor(telemetryTime * 4)) % 80 < 8) {
          y -= 25 * Math.sin(((x + Math.floor(telemetryTime * 4)) % 80) * 0.4);
        }
        points.push(`${x},${y}`);
      }
    } else if (type === "ECG") {
      // Traditional Electrocardiogram
      for (let x = 0; x < width; x += 2) {
        const index = (x - telemetryTime * 2.5) % 120;
        let y = height / 2;
        if (index > 20 && index < 25) {
          y -= 4; // P wave
        } else if (index >= 25 && index < 28) {
          y += 2; // Q dip
        } else if (index >= 28 && index < 33) {
          y -= 22; // R peak
        } else if (index >= 33 && index < 36) {
          y += 6; // S dip
        } else if (index >= 36 && index < 45) {
          y = height / 2;
        } else if (index >= 45 && index < 55) {
          y -= 6; // T wave
        }
        points.push(`${x},${y}`);
      }
    } else if (type === "SCAN") {
      // Radar MRI circular swipe pulse representing magnetism
      for (let x = 0; x < width; x += 2) {
        const pulse = Math.sin(x * 0.05 - telemetryTime * 0.08) * Math.cos(x * 0.02 - telemetryTime * 0.04);
        const y = height / 2 + pulse * 18;
        points.push(`${x},${y}`);
      }
    } else if (type === "FLOW") {
      // Laminar continuous constant tiny wavelets
      for (let x = 0; x < width; x += 2) {
        const y = height / 2 + Math.sin(x * 0.08 + telemetryTime * 0.1) * 3 + Math.cos(x * 0.2 + telemetryTime * 0.05) * 1.5;
        points.push(`${x},${y}`);
      }
    } else if (type === "TEMP") {
      // Flat steady state with minor thermal noise
      for (let x = 0; x < width; x += 2) {
        const y = height / 2 + Math.sin(x * 0.4 + telemetryTime * 0.05) * 1;
        points.push(`${x},${y}`);
      }
    } else {
      // EEG Brain waves (chaotic sum of sines)
      for (let x = 0; x < width; x += 2) {
        const y = height / 2 + 
          Math.sin(x * 0.08 + telemetryTime * 0.05) * 6 + 
          Math.sin(x * 0.18 - telemetryTime * 0.12) * 3 + 
          Math.sin(x * 0.4 + telemetryTime * 0.2) * 1;
        points.push(`${x},${y}`);
      }
    }

    return `M ${points.join(" L ")}`;
  };

  const activeRoom = currentFloorData.rooms.find(r => r.id === selectedRoomId) || currentFloorData.rooms[0];

  return (
    <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto" id="interactive-3d-hospital-root">
      
      {/* Dynamic Status / Interactive Alert Banner */}
      <AnimatePresence>
        {isEmergencyAlert && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-red-500/10 border border-red-500/30 p-3 rounded-2xl flex items-center justify-between gap-4 text-left select-none"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <div>
                <span className="block text-xs font-bold text-red-500 dark:text-red-400 font-heading">
                  CODE BLUE • CRITICAL EMERGENCY OVERRIDE
                </span>
                <span className="block text-[10px] text-slate-500 dark:text-slate-400">
                  Lobby desk simulated. Routing immediate surgical personnel to Level 4 Trauma Unit!
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsEmergencyAlert(false)}
              className="text-[10px] font-bold text-red-500 dark:text-red-400 hover:underline px-3 py-1 bg-red-500/10 rounded-lg hover:bg-red-500/20"
            >
              Resolve Simulation
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Side: 3D Visualization Arena */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-slate-100/55 dark:bg-slate-900/60 rounded-3xl border border-slate-200/50 dark:border-slate-800 p-5 relative overflow-hidden h-[420px] md:h-[500px]">
          
          {/* Subtle grid backing */}
          <div className="absolute inset-0 opacity-15 border border-slate-300 dark:border-slate-800 bg-grid-slate-400 dark:bg-grid-slate-700 pointer-events-none"></div>

          {/* HUD Overlay - Top Left */}
          <div className="absolute top-4 left-4 z-10 flex flex-col gap-1 text-left select-none pointer-events-none">
            <span className="text-[9px] uppercase tracking-widest font-extrabold text-primary dark:text-secondary flex items-center gap-1">
              <Sparkles size={11} className="animate-pulse" />
              <span>Gayathri interactive 3D Campus</span>
            </span>
            <h4 className="text-sm font-heading font-extrabold text-slate-900 dark:text-white">
              Clinical Core Model
            </h4>
            <span className="text-[10px] text-slate-400 font-medium">
              Drag to Orbit • Pinch to Rotate
            </span>
          </div>

          {/* HUD Overlay - Top Right View Presets */}
          <div className="absolute top-4 right-4 z-20 flex gap-1.5 select-none">
            {[
              { label: "ISO", rx: 60, rz: -45 },
              { label: "FRONT", rx: 90, rz: 0 },
              { label: "TOP", rx: 45, rz: 0 }
            ].map(preset => (
              <button
                key={preset.label}
                onClick={() => {
                  setRotateX(preset.rx);
                  setRotateZ(preset.rz);
                  setAutoRotate(false);
                }}
                className="text-[10px] font-bold px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 rounded-lg text-slate-600 dark:text-slate-300 transition-colors shadow-xs"
              >
                {preset.label}
              </button>
            ))}
          </div>

          {/* Main 3D Canvas Sandbox Wrapper */}
          <div 
            className="flex-grow w-full flex items-center justify-center cursor-grab active:cursor-grabbing relative overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            
            {/* Perspective Viewport Block */}
            <div 
              className="w-80 h-80 flex items-center justify-center transition-all duration-300"
              style={{ perspective: "1000px" }}
            >
              {/* Dynamic Rotatable 3D Group */}
              <div
                className="relative w-48 h-48 transition-transform duration-75"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`
                }}
              >
                
                {/* Structural Central Core Backbone (Elevator shafts/Oxygen lines) */}
                <div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-slate-300/40 dark:bg-slate-800/40 border-x border-slate-400/20 dark:border-slate-700/20"
                  style={{
                    transform: "rotateY(0deg) translateZ(-50px)",
                    height: exploded ? "350px" : "180px",
                    transformStyle: "preserve-3d"
                  }}
                />

                {/* 3D Floors Loop */}
                {FLOORS_DATA.map((floor) => {
                  const isSelected = selectedFloor === floor.level;
                  const floorGap = exploded ? 70 : 32;
                  
                  // Compute vertical translate parameter (Z height in isometric space)
                  const heightOffset = (floor.level - 2) * floorGap;

                  return (
                    <div
                      key={floor.level}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedFloor(floor.level);
                      }}
                      className="absolute inset-0 transition-transform duration-500 ease-out cursor-pointer"
                      style={{
                        transform: `translateZ(${heightOffset}px)`,
                        transformStyle: "preserve-3d"
                      }}
                    >
                      {/* Interactive Hoverable Slab Plane */}
                      <div 
                        className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 flex items-center justify-center relative overflow-visible ${
                          isSelected
                            ? `bg-slate-100/90 dark:bg-slate-900/95 border-primary shadow-lg ${floor.glowColor} scale-[1.03]`
                            : isEmergencyAlert 
                              ? "bg-red-500/5 border-red-500/20 hover:bg-red-500/10 hover:border-red-500/40"
                              : "bg-white/40 dark:bg-slate-900/45 border-slate-300/40 dark:border-slate-800/60 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 hover:border-slate-400/50"
                        }`}
                        style={{
                          transformStyle: "preserve-3d",
                        }}
                      >
                        
                        {/* Floor blueprint Grid lines */}
                        <div className="absolute inset-2 border border-slate-300/20 dark:border-slate-700/20 rounded-xl bg-grid-slate-400/5 pointer-events-none" />

                        {/* Animated Signal Lights on Floor Slab */}
                        <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
                          
                          {/* LED pulse indicator */}
                          <span className={`absolute top-3 left-3 h-2 w-2 rounded-full border border-white/20 ${
                            isEmergencyAlert 
                              ? "bg-red-500 animate-ping" 
                              : isSelected
                                ? `bg-teal-400 animate-pulse`
                                : `bg-slate-400 opacity-60`
                          }`} />

                          {/* Floating Level Label Badge */}
                          <span className={`absolute -right-2 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded-md text-[8px] font-bold border ${
                            isSelected
                              ? "bg-primary text-white border-primary"
                              : "bg-slate-100 dark:bg-slate-800 text-slate-500 border-slate-300/30"
                          }`}
                          style={{
                            transform: "rotateX(-90deg) rotateY(45deg) translateZ(10px)",
                          }}>
                            L{floor.level}
                          </span>
                        </div>

                        {/* Interactive Visual Buildings block Mock-ups (mini 3D structures) */}
                        <div className="absolute inset-4 flex items-center justify-around gap-2" style={{ transformStyle: "preserve-3d" }}>
                          
                          {/* Mini structure cube 1 */}
                          <div 
                            className={`w-12 h-12 rounded-lg border transition-all duration-300 ${
                              isSelected 
                                ? "bg-gradient-to-br from-primary/25 to-secondary/25 border-primary/40"
                                : "bg-slate-400/10 border-slate-400/20"
                            }`}
                            style={{
                              transform: "translateZ(10px)",
                              transformStyle: "preserve-3d"
                            }}
                          >
                            <div className={`absolute -inset-px rounded-lg border-2 opacity-50 ${isEmergencyAlert ? "border-red-500 animate-pulse" : "border-transparent"}`} />
                          </div>

                          {/* Mini structure cube 2 */}
                          <div 
                            className={`w-14 h-10 rounded-md border transition-all duration-300 ${
                              isSelected 
                                ? "bg-gradient-to-br from-secondary/25 to-accent/25 border-secondary/40"
                                : "bg-slate-400/10 border-slate-400/20"
                            }`}
                            style={{
                              transform: "translateZ(15px)",
                              transformStyle: "preserve-3d"
                            }}
                          />

                          {/* Mini cylinder representing surgical block or diagnostics dome */}
                          <div 
                            className={`w-8 h-8 rounded-full border transition-all duration-300 ${
                              isSelected 
                                ? "bg-gradient-to-tr from-accent/20 to-primary/20 border-accent/40"
                                : "bg-slate-400/10 border-slate-400/20"
                            }`}
                            style={{
                              transform: "translateZ(18px)",
                              transformStyle: "preserve-3d"
                            }}
                          />

                        </div>

                        {/* Floor Metadata details inside floor slab */}
                        <div 
                          className="absolute pointer-events-none flex flex-col items-center"
                          style={{
                            transform: "translateZ(30px) rotateX(-90deg)",
                            opacity: isSelected ? 1 : 0,
                            transition: "opacity 0.3s"
                          }}
                        >
                          <div className="bg-slate-900/90 dark:bg-slate-950/90 text-white border border-white/20 rounded-lg px-2.5 py-1 text-center shadow-lg w-32 leading-none shrink-0">
                            <span className="block text-[8px] font-extrabold uppercase text-secondary tracking-wider">Level {floor.level}</span>
                            <span className="block text-[10px] font-heading font-extrabold truncate mt-0.5">{floor.specialty}</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                })}

              </div>
            </div>

          </div>

          {/* Sandbox controls HUD Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-2 border-t border-slate-200/50 dark:border-slate-800 pt-3 select-none relative z-10">
            <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-xl shadow-xs">
              <RotateCw size={12} className={`text-slate-400 ${autoRotate ? "animate-spin-slow" : ""}`} />
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className="text-[10px] font-bold text-slate-600 dark:text-slate-300 hover:text-primary"
              >
                {autoRotate ? "Pause Orbit" : "Auto Orbit"}
              </button>
            </div>

            <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-xl shadow-xs">
              <Layers size={12} className="text-slate-400" />
              <button
                onClick={() => setExploded(!exploded)}
                className="text-[10px] font-bold text-slate-600 dark:text-slate-300 hover:text-primary"
              >
                {exploded ? "Compact View" : "Exploded View"}
              </button>
            </div>

            <button
              onClick={() => {
                setIsEmergencyAlert(!isEmergencyAlert);
              }}
              className={`text-[10px] font-bold px-3 py-1.5 rounded-xl flex items-center gap-1 border transition-all ${
                isEmergencyAlert
                  ? "bg-red-500 text-white border-red-600 animate-pulse"
                  : "bg-red-500/10 text-red-500 border-red-500/20 hover:bg-red-500/20"
              }`}
            >
              <ShieldAlert size={12} />
              <span>{isEmergencyAlert ? "Siren Alert On" : "Simulate Code Blue"}</span>
            </button>
          </div>

        </div>

        {/* Right Side: Interactive Telemetry & Operations Panel */}
        <div className="lg:col-span-5 flex flex-col gap-5 text-left bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/60 dark:border-slate-800 p-6 shadow-md justify-between">
          
          {/* Header Panel */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-secondary dark:text-teal-400">
                  Floor Operations Desk
                </span>
                <h3 className="text-base sm:text-lg font-heading font-extrabold text-slate-900 dark:text-white mt-0.5">
                  L{currentFloorData.level} • {currentFloorData.name}
                </h3>
              </div>
              <span className="text-[10px] font-extrabold px-2.5 py-1 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                Lvl {currentFloorData.level} Specialty
              </span>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
              {currentFloorData.description}
            </p>
          </div>

          {/* Core Telemetry Signal Waveform Panel (GORGEOUS GRAPH!) */}
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1.5">
                <Activity size={14} className="text-primary animate-pulse" />
                <span>Live Signal Tracker ({currentFloorData.telemetryType})</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400">SWEEP SPEED: 25mm/s</span>
            </div>

            <div className="h-20 w-full bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-center relative overflow-hidden px-4">
              
              {/* Retro graph paper background grid */}
              <div className="absolute inset-0 opacity-[0.06] bg-grid-teal-300" />

              {/* Live Wave SVG path */}
              <svg className="w-full h-full overflow-visible" viewBox="0 0 300 64" preserveAspectRatio="none">
                <path
                  d={renderWaveform()}
                  fill="none"
                  stroke={isEmergencyAlert ? "#ef4444" : currentFloorData.telemetryType === "ECG" ? "#22c55e" : "#06b6d4"}
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-colors duration-300"
                />
              </svg>

              {/* Status flashing overlays */}
              {isEmergencyAlert && (
                <div className="absolute top-2 right-3 flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-red-500/20 border border-red-500/40 text-[8px] font-bold text-red-400 animate-pulse">
                  <AlertTriangle size={10} />
                  <span>ALARM ACTIVE</span>
                </div>
              )}
            </div>
          </div>

          {/* Interactive Ward/Room selector slots */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Select Room / Monitor Unit
            </span>

            <div className="grid grid-cols-3 gap-2">
              {currentFloorData.rooms.map((room) => {
                const isRoomSelected = selectedRoomId === room.id;
                return (
                  <button
                    key={room.id}
                    onClick={() => setSelectedRoomId(room.id)}
                    className={`p-3 rounded-xl border text-left flex flex-col gap-1.5 transition-all relative overflow-hidden ${
                      isRoomSelected
                        ? "bg-slate-950 dark:bg-slate-900 border-primary text-white shadow-md shadow-primary/10"
                        : "bg-slate-50 dark:bg-slate-800/30 border-slate-200/60 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <span className="text-[10px] font-bold font-heading truncate leading-none">
                      {room.name}
                    </span>
                    <span className={`text-[8px] font-bold uppercase leading-none ${
                      room.status === "High Load" 
                        ? "text-red-500 dark:text-red-400"
                        : room.status === "Sterile"
                          ? "text-teal-500 dark:text-teal-400"
                          : room.status === "Scanning"
                            ? "text-violet-500 dark:text-violet-400"
                            : "text-slate-400"
                    }`}>
                      {room.status}
                    </span>

                    {/* Small dot indicators */}
                    <span className={`absolute top-2 right-2 h-1.5 w-1.5 rounded-full ${
                      room.status === "High Load" ? "bg-red-500 animate-ping" : "bg-emerald-500"
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Room focus detail box */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/20 border border-slate-200/50 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between">
              <div>
                <span className="block font-bold text-slate-800 dark:text-white leading-none">
                  {activeRoom.name}
                </span>
                <span className="block text-[10px] text-slate-400 mt-1 leading-none">
                  Active diagnostic telemetry tracking
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold bg-primary/10 text-primary dark:text-secondary px-2 py-0.5 rounded-md border border-primary/10">
                {activeRoom.metric}
              </span>
            </div>
          </div>

          {/* Real-time Diagnostics Metrics Panel */}
          <div className="grid grid-cols-2 gap-3 border-t border-slate-100 dark:border-slate-800 pt-4 text-xs font-semibold">
            
            <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/20 rounded-2xl border border-slate-200/40 dark:border-slate-800">
              <div className="p-2 bg-primary/10 text-primary rounded-xl shrink-0">
                <Thermometer size={16} />
              </div>
              <div>
                <span className="block text-[9px] uppercase text-slate-400">Thermoregulation</span>
                <span className="block text-xs font-extrabold text-slate-800 dark:text-white mt-0.5">
                  {currentFloorData.temperature}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/20 rounded-2xl border border-slate-200/40 dark:border-slate-800">
              <div className="p-2 bg-secondary/10 text-secondary rounded-xl shrink-0">
                <Gauge size={16} />
              </div>
              <div>
                <span className="block text-[9px] uppercase text-slate-400">Sterile Air Index</span>
                <span className="block text-xs font-extrabold text-slate-800 dark:text-white mt-0.5">
                  {currentFloorData.sterileIndex}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/20 rounded-2xl border border-slate-200/40 dark:border-slate-800">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-950/40 text-indigo-500 rounded-xl shrink-0">
                <User size={16} />
              </div>
              <div>
                <span className="block text-[9px] uppercase text-slate-400">Staff Load Index</span>
                <span className="block text-xs font-extrabold text-slate-800 dark:text-white mt-0.5">
                  {currentFloorData.occupancy}% Occupancy
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/20 rounded-2xl border border-slate-200/40 dark:border-slate-800">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-500 rounded-xl shrink-0">
                <Check size={16} />
              </div>
              <div>
                <span className="block text-[9px] uppercase text-slate-400">Core Systems</span>
                <span className="block text-xs font-extrabold text-slate-800 dark:text-white mt-0.5">
                  Telemetry Active
                </span>
              </div>
            </div>

          </div>

          {/* Quick Informational Notice Footer */}
          <div className="text-[10px] text-slate-400 flex items-start gap-1.5 bg-slate-50 dark:bg-slate-800/10 p-2.5 rounded-xl border border-slate-200/30 dark:border-slate-800/40">
            <Info size={12} className="shrink-0 text-slate-400 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Interactive Notice:</strong> Mouse over or touch-drag on the left viewport tower to inspect floor geometry and trigger department highlights.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
