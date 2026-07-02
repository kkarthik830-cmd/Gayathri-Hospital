import { Department, Doctor, Facility, HealthPackage, Testimonial, HealthTip, FAQ } from "./types";

export const HOSPITAL_INFO = {
  name: "Gayathri Care Hospital",
  tagline: "Compassion • Care • Cure",
  established: "1998",
  contact: {
    phone: "+1 (800) 555-0199",
    emergencyPhone: "+1 (800) 911-CARE",
    email: "info@gayathricare.com",
    address: "742 Evergreen Terrace, Medical District, Suite 100",
    hours: "24/7 Emergency & General Services (OPD: 8:00 AM - 8:00 PM)",
    whatsapp: "+1 (800) 555-0100"
  },
  social: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#"
  },
  stats: [
    { value: "250+", label: "Expert Doctors", suffix: "Specialists" },
    { value: "40+", label: "Departments", suffix: "Multi-Speciality" },
    { value: "24×7", label: "Emergency Care", suffix: "Trauma Response" },
    { value: "500+", label: "Premium Beds", suffix: "State-of-the-Art" },
    { value: "100k+", label: "Happy Patients", suffix: "Recovered" }
  ]
};

export const ABOUT_STORY = {
  title: "A Legacy of World-Class Healing and Medical Innovation",
  story: "Founded in 1998, Gayathri Care Hospital has stood as a beacon of advanced medical science and compassionate clinical care. Over the past two and a half decades, we have evolved from a regional wellness facility into an internationally recognized multi-speciality healthcare hub. Our core philosophy is built upon the pillars of clinical excellence, modern infrastructure, and patient-first ethics, matching the global standards of prestigious institutions.",
  mission: "To deliver accessible, world-class, integrated healthcare services through innovative technology, highly skilled practitioners, and empathetic care that respects the dignity of every life.",
  vision: "To be the most trusted and preferred healthcare companion in the region, pioneering patient-centric clinical outcomes and raising the benchmark for luxury medical rehabilitation.",
  values: [
    { title: "Patient-First Care", desc: "Every operational policy, design, and service begins and ends with our patients' comfort, safety, and physical well-being." },
    { title: "Absolute Excellence", desc: "We continually audit and elevate our medical protocols, ensuring we maintain zero tolerance for compromises." },
    { title: "Empathetic Connection", desc: "Medical treatments solve the physical, but compassionate words and gestures heal the mind. We treat with warmth." },
    { title: "Pioneering Innovation", desc: "From robotic surgery pipelines to automated AI-assisted imaging, we bring the global future of medicine to our region today." }
  ],
  pillars: [
    { title: "Advanced Infrastructure", desc: "Equipped with hyperbaric chambers, robotic surgery systems, and hybrid operating suites." },
    { title: "Experienced Doctors", desc: "Our board-certified staff bring decades of collective wisdom from leading clinical institutions worldwide." },
    { title: "Compassionate Staff", desc: "Our dedicated nurse-to-patient ratio ensures attentive, highly responsive personalized recovery support." }
  ]
};

export const DEPARTMENTS: Department[] = [
  {
    id: "cardiology",
    name: "Cardiology",
    icon: "Heart",
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=600",
    shortDesc: "Complete cardiac care, heart surgeries, and non-invasive cardiovascular diagnosis.",
    longDesc: "Our Cardiology & Cardiothoracic Surgery unit is a pioneer in interventional medicine. From high-precision angioplasties to complex valve replacements and pediatric cardiac corrections, our modular cath labs provide rapid emergency solutions.",
    keyServices: ["Coronary Angioplasty", "Electrophysiology Studies", "Heart Valve Repair", "TAVI & Transcatheter Procedures"]
  },
  {
    id: "neurology",
    name: "Neurology",
    icon: "Brain",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600",
    shortDesc: "Comprehensive diagnosis and treatment of complex brain, spine, and nerve disorders.",
    longDesc: "Gayathri's Neurology center utilizes specialized neuro-imaging, video-EEG tracking, and neuromodulation techniques to treat stroke, epilepsy, neuromuscular weaknesses, Alzheimer's disease, and neuro-degenerative conditions.",
    keyServices: ["Stroke Thrombolysis Unit", "Epilepsy Monitoring", "Neuro-Rehabilitation", "Sleep Disorders Management"]
  },
  {
    id: "neurosurgery",
    name: "Neurosurgery",
    icon: "Activity",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600",
    shortDesc: "Micro-neurosurgery, spine stabilization, and skull-base tumor excisions.",
    longDesc: "Equipped with high-precision surgical microscopes, neuro-navigation systems, and intraoperative MRI, our surgeons execute spinal reconstructions, brain tumor resections, and minimally invasive aneurysm repairs.",
    keyServices: ["Brain Tumor Resection", "Minimally Invasive Spine Surgery", "Aneurysm Clipping", "Stereotactic Radiosurgery"]
  },
  {
    id: "orthopaedics",
    name: "Orthopaedics",
    icon: "Bone",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600",
    shortDesc: "Joint replacements, sports arthroscopy, complex fracture therapies, and pediatric spine.",
    longDesc: "Our orthopedic center is renowned for robotic-assisted knee and hip replacements, computer-navigated reconstructions, advanced sports medicine procedures, and holistic physical therapy.",
    keyServices: ["Robotic Joint Replacement", "Arthroscopic Ligament Repair (ACL/MCL)", "Complex Trauma Management", "Deformity Correction"]
  },
  {
    id: "general-medicine",
    name: "General Medicine",
    icon: "Stethoscope",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600",
    shortDesc: "Comprehensive adult medical care, chronic disease management, and primary diagnostics.",
    longDesc: "The bedrock of Gayathri Care, General Medicine addresses multi-system diseases, infectious disorders, diabetic complications, and long-term geriatric management under specialized attention.",
    keyServices: ["Chronic Disease Management", "Geriatric Care Protocols", "Infectious Disease Isolation Units", "Comprehensive Wellness Screening"]
  },
  {
    id: "general-surgery",
    name: "General Surgery",
    icon: "Scissors",
    image: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=600",
    shortDesc: "Laparoscopic and robotic abdominal surgeries, gastrointestinal pathways.",
    longDesc: "Specializing in keyhole and robot-aided interventions, we execute gallbladder, hernia, thyroid, and oncological resections with minimal pain, minor scarring, and very fast recovery windows.",
    keyServices: ["Laparoscopic Hernia Repair", "Bariatric & Weight-loss Surgery", "Appendectomy & Cholecystectomy", "Thyroid Resections"]
  },
  {
    id: "emergency-medicine",
    name: "Emergency Medicine",
    icon: "Ambulance",
    image: "https://images.unsplash.com/photo-1581594549595-35e6ed07a3c7?auto=format&fit=crop&q=80&w=600",
    shortDesc: "24/7 Level-1 trauma response, stroke protocol, and rapid life support systems.",
    longDesc: "A high-speed critical unit staffed by dedicated emergency physicians and trauma specialists. We are equipped with integrated triage bays, transit CT units, and emergency surgical capabilities.",
    keyServices: ["Level-1 Trauma Management", "Cardiac Resuscitation Bay", "Stroke Fast-track Protocol", "Disaster Response Unit"]
  },
  {
    id: "icu-critical-care",
    name: "ICU & Critical Care",
    icon: "FlameKindling",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
    shortDesc: "State-of-the-art multi-disciplinary critical care and continuous telemetry tracking.",
    longDesc: "Our high-density intensive care units provide advanced hemodynamic monitoring, mechanical ventilation, bedside dialysis, and high-ratio dedicated nurse response for critically ill patients.",
    keyServices: ["Advanced Mechanical Ventilation", "Continuous Renal Replacement Therapy (CRRT)", "Extracorporeal Membrane Oxygenation (ECMO)", "Multi-Parameter Telemetry"]
  },
  {
    id: "pediatrics",
    name: "Pediatrics & Neonatology",
    icon: "Baby",
    image: "https://images.unsplash.com/photo-1502740479091-635887520276?auto=format&fit=crop&q=80&w=600",
    shortDesc: "Gentle child-centered medical care, neonatal intensive care (NICU), and vaccinations.",
    longDesc: "Designed with a warm, child-friendly interior, our pediatric team ensures comprehensive developmental support, childhood immunizations, and specialized critical care in Level-3 NICU and PICU wards.",
    keyServices: ["Level-3 NICU Support", "Pediatric Emergency Resuscitation", "Developmental Assessments", "Immunization Packages"]
  },
  {
    id: "gynecology",
    name: "Gynecology & Obstetrics",
    icon: "Flower2",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
    shortDesc: "Complete maternity care, painless labor facilities, and comprehensive gynecological surgeries.",
    longDesc: "From luxury delivery suites with personal birthing pools to surgical treatment of uterine disorders and menopausal health, our women's health wing offers empathetic and private care.",
    keyServices: ["Painless Delivery (Epidural)", "High-Risk Pregnancy Care", "Laparoscopic Hysterectomy", "Infertility Management (IVF Interface)"]
  },
  {
    id: "oncology",
    name: "Oncology",
    icon: "Dna",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
    shortDesc: "Chemotherapy, precision immunotherapy, and advanced radiation therapy plans.",
    longDesc: "Our integrated cancer center combines medical oncology, surgical oncology, and state-of-the-art radiation therapy with genetic counseling and supportive palliative care programs.",
    keyServices: ["Targeted Immunotherapy", "Stereotactic Radiotherapy (SBRT)", "Surgical Tumor Removals", "Comprehensive Chemotherapy Suites"]
  },
  {
    id: "pulmonology",
    name: "Pulmonology",
    icon: "Wind",
    image: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=600",
    shortDesc: "Diagnosis and care for asthma, COPD, sleep apnea, and lung diseases.",
    longDesc: "Gayathri Pulmonology features advanced lung-function testing labs, sleep study units, and interventional bronchoscopy facilities to treat complex thoracic respiratory diseases.",
    keyServices: ["Diagnostic Bronchoscopy", "Asthma & Allergy Management", "Comprehensive Polysomnography (Sleep Studies)", "Pulmonary Rehabilitation"]
  },
  {
    id: "nephrology",
    name: "Nephrology & Dialysis",
    icon: "Waves",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=600",
    shortDesc: "Modern dialysis center, chronic kidney disease management, and pre/post transplant care.",
    longDesc: "Providing state-of-the-art hemodialysis and peritoneal dialysis setups, our nephrologists offer customized programs for kidney stones, hypertension-induced renal issues, and transplantation planning.",
    keyServices: ["High-Flux Hemodialysis", "24/7 Bedside Emergency Dialysis", "Kidney Biopsies", "Post-Transplant Clinical Care"]
  },
  {
    id: "urology",
    name: "Urology",
    icon: "Activity",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    shortDesc: "Laser lithotripsy for kidney stones, prostate management, and reconstructive urology.",
    longDesc: "Leveraging keyhole laser procedures, our urology clinic treats urinary tract obstructions, kidney stones, prostate disorders (BPH), and bladder concerns with minimal recovery periods.",
    keyServices: ["Laser Kidney Stone Removal", "Holmium Laser Prostatectomy (HoLEP)", "Reconstructive Urology", "Uro-Oncology"]
  },
  {
    id: "ent",
    name: "ENT & Cochlear Implant",
    icon: "Hearing",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600",
    shortDesc: "Micro-surgery for ears, sinus infections, voice therapy, and cochlear implants.",
    longDesc: "Offering comprehensive treatment for ear, nose, throat, and skull base disorders. We feature advanced audiology setups and specialize in micro-ear surgery and cochlear implants.",
    keyServices: ["Cochlear Implant Program", "Functional Endoscopic Sinus Surgery (FESS)", "Micro Ear & Laryngeal Surgery", "Speech Therapy"]
  },
  {
    id: "dermatology",
    name: "Dermatology & Cosmetology",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600",
    shortDesc: "Medical skin treatments, acne therapies, psoriasis care, and clinical cosmetology.",
    longDesc: "From chronic eczema and autoimmune skin diseases to aesthetic rejuvenation therapies, laser resurfacing, and hair restoration, our center delivers safe, scientifically-backed dermatological care.",
    keyServices: ["Laser Skin Resurfacing", "PRP Hair & Skin Therapy", "Psoriasis & Eczema Management", "Aesthetic Cosmetology Services"]
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    icon: "Eye",
    image: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=600",
    shortDesc: "Advanced cataract surgeries, LASIK vision correction, and glaucoma screening.",
    longDesc: "Our eye clinic utilizes high-speed lasers and computerized micro-surgical systems to treat cataracts, diabetic retinopathy, glaucoma, squint conditions, and refractive errors.",
    keyServices: ["Micro-Incision Cataract Surgery (Phaco)", "Bladeless LASIK Vision Correction", "Diabetic Retinopathy Screening", "Glaucoma Management"]
  },
  {
    id: "dental-care",
    name: "Dental Care & Maxillofacial",
    icon: "Smile",
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&q=80&w=600",
    shortDesc: "Implants, root canals, cosmetic dentistry, and reconstructive jaw surgeries.",
    longDesc: "We provide high-tech dental implants, single-visit root canals, aesthetic smile designing, and advanced maxillofacial reconstructions for trauma cases and congenital defects.",
    keyServices: ["Digital Dental Implants", "Single-Visit Root Canals", "Maxillofacial Trauma Reconstructions", "Invisalign & Smile Contouring"]
  },
  {
    id: "plastic-surgery",
    name: "Plastic & Reconstructive Surgery",
    icon: "ShieldAlert",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=600",
    shortDesc: "Reconstructive micro-surgery, burn treatments, scar corrections, and cosmetic enhancements.",
    longDesc: "Offering high-precision micro-reconstructions following cancer resections or trauma, alongside clinical aesthetic contouring, scar management, and customized burn rehabilitation.",
    keyServices: ["Micro-vascular Reconstructions", "Scar Revision & Laser Care", "Cosmetic Rhinoplasty & Liposuction", "Reconstructive Burn Surgery"]
  },
  {
    id: "psychiatry",
    name: "Psychiatry & Behavioral Health",
    icon: "HeartHandshake",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    shortDesc: "Counseling, cognitive therapies, anxiety & depression care, and psychiatric help.",
    longDesc: "Emphasizing absolute confidentiality and compassionate support, our clinical psychologists and psychiatrists treat mental health disorders, substance dependencies, and childhood behavior issues.",
    keyServices: ["Cognitive Behavioral Therapy (CBT)", "Anxiety & Depression Programs", "Addiction De-addiction Therapies", "Pediatric Behavioral Counseling"]
  },
  {
    id: "physiotherapy",
    name: "Physiotherapy & Rehab",
    icon: "Flame",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    shortDesc: "Post-surgery physical rehab, sports injury recovery, and pain management programs.",
    longDesc: "Using computer-guided electrotherapy, customized exercise regimes, and manual manipulative therapies to restore full mobility and function following major ortho/neuro surgeries or athletic accidents.",
    keyServices: ["Post-Stroke Mobility Program", "Sports Injury Physical Therapy", "Advanced Musculoskeletal Rehab", "Spinal Traction & Hydrotherapy"]
  },
  {
    id: "radiology",
    name: "Radiology & Imaging",
    icon: "Layers",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600",
    shortDesc: "High-field MRI, multislice CT scans, ultrasound imaging, and digital X-rays.",
    longDesc: "Gayathri Care's diagnostic wing is armed with quiet, wide-bore MRI chambers, low-radiation multi-slice CT scanners, and 4D color ultrasound scanners for hyper-accurate, ultra-rapid imaging.",
    keyServices: ["3-Tesla Wide-Bore MRI", "128-Slice Low Radiation CT", "4D Fetal & Doppler Ultrasounds", "Digital Contrast Mammography"]
  },
  {
    id: "pathology",
    name: "Pathology & Lab Diagnostics",
    icon: "Filter",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=600",
    shortDesc: "Fully automated blood profile testing, histopathology, and tumor marker profiling.",
    longDesc: "Operating 24/7 with strict clinical quality certifications, our fully automated dry-chemistry pathology laboratories deliver medical testing results with precision barcoding to eliminate human error.",
    keyServices: ["Automated Clinical Biochemistry", "Histopathology & Biopsy Reports", "Tumor Markers & Hormonal Assays", "Molecular Genetics Tests"]
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: "doc1",
    name: "Dr. Arvind Gayathri",
    qualification: "MBBS, MD, DM (Cardiology), FACC (USA)",
    experience: "26 Years of Clinical Excellence",
    department: "Cardiology",
    languages: ["English", "Hindi", "Telugu", "Tamil"],
    availability: "Mon - Sat: 9:00 AM - 2:00 PM (OPD)",
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
    rating: 4.9,
    bio: "Chief Medical Director & Senior Interventional Cardiologist. Dr. Arvind pioneered complex coronary angioplasties in our region and has successfully completed over 15,000 interventional procedures."
  },
  {
    id: "doc2",
    name: "Dr. Shalini Deshmukh",
    qualification: "MBBS, MD, DNB (Neurology)",
    experience: "15 Years of Clinical Experience",
    department: "Neurology",
    languages: ["English", "Marathi", "Hindi"],
    availability: "Mon, Wed, Fri: 10:00 AM - 4:00 PM",
    photo: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=600",
    rating: 4.8,
    bio: "Distinguished specialist in cognitive neurology and acute stroke stroke therapies. Dr. Shalini is highly sought-after for epilepsy management and has multiple papers published in national neuro journals."
  },
  {
    id: "doc3",
    name: "Dr. Rajesh K. Varma",
    qualification: "MBBS, MS, MCh (Neurosurgery)",
    experience: "18 Years of Clinical Experience",
    department: "Neurosurgery",
    languages: ["English", "Hindi", "Malayalam"],
    availability: "Tue, Thu, Sat: 11:00 AM - 5:00 PM",
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600",
    rating: 4.9,
    bio: "Senior Neuro & Skull-Base Surgeon. Specialized in high-risk brain tumor micro-resections and advanced spinal stabilizer installations using real-time neuro-navigation systems."
  },
  {
    id: "doc4",
    name: "Dr. Meera Iyer",
    qualification: "MBBS, MD, MS (Obstetrics & Gynecology)",
    experience: "14 Years of Clinical Experience",
    department: "Gynecology & Obstetrics",
    languages: ["English", "Tamil", "Kannada", "Hindi"],
    availability: "Mon - Sat: 8:30 AM - 1:00 PM",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
    rating: 4.9,
    bio: "Head of Women's Health & Neonatal Care. Highly skilled in high-risk pregnancy management, painless water deliveries, and advanced keyhole uterine laparoscopic procedures."
  },
  {
    id: "doc5",
    name: "Dr. David Alvares",
    qualification: "MBBS, MS (Orthopaedics), MCh (Joint Replacement)",
    experience: "20 Years of Clinical Experience",
    department: "Orthopaedics",
    languages: ["English", "Spanish", "Konkani", "Hindi"],
    availability: "Mon - Fri: 2:00 PM - 6:00 PM",
    photo: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
    rating: 4.7,
    bio: "Renowned expert in computer-guided and robotic total knee & hip replacements, trauma reconstruction, and cartilage engineering. Has served as physical rehabilitation director for national athletes."
  },
  {
    id: "doc6",
    name: "Dr. Sarah Paul",
    qualification: "MBBS, MD, DM (Oncology)",
    experience: "12 Years of Clinical Experience",
    department: "Oncology",
    languages: ["English", "Hindi", "Gujarati"],
    availability: "Tue, Thu: 9:00 AM - 3:00 PM",
    photo: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=600",
    rating: 4.8,
    bio: "Specialist in targeted immunotherapy and genetic profiling of solid tumors. Dr. Sarah runs our clinical tumor-board, designing highly individualized chemo-radiation recovery protocols."
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "fac1",
    name: "Intensive Care Units (ICU)",
    category: "Clinical",
    description: "Fully digital central telemetry and advanced mechanical ventilation stations staffed 24/7 by board-certified critical care intensivist physicians.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "fac2",
    name: "Modular Operation Theatres",
    category: "Clinical",
    description: "Equipped with sterile laminar airflow, HEPA filtration systems, and full integration of robotic surgery terminals for complex surgical profiles.",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "fac3",
    name: "Advanced Diagnostic Labs",
    category: "Diagnostics",
    description: "Equipped with 3-Tesla Wide-Bore MRI, low-dose 128-Slice CT, and fully automated diagnostic pathology workflows providing swift reports.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "fac4",
    name: "Luxury Patient Suites",
    category: "Amenities",
    description: "Ultra-private recovering suites offering personal lounge areas, interactive flat-screen media consoles, custom nutritional menus, and guest day-beds.",
    image: "https://images.unsplash.com/photo-1586773860418-d3b3da9601ee?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "fac5",
    name: "24/7 Premium Pharmacy & Ambulance",
    category: "Clinical",
    description: "An in-house continuous pharmaceutical supply chain matching critical needs, backed by advanced life-support ambulances with cardiac responders.",
    image: "https://images.unsplash.com/photo-1581594549595-35e6ed07a3c7?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "fac6",
    name: "Wellness Waiting Lounges",
    category: "Amenities",
    description: "A calming luxury lobby featuring waterfall acoustics, premium coffee stations, high-speed mesh Wi-Fi, and personalized visitor care representatives.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
  }
];

export const HEALTH_PACKAGES: HealthPackage[] = [
  {
    id: "pkg1",
    name: "Executive Comprehensive Health Package",
    price: "$299",
    tagline: "Total peace of mind with our gold-standard corporate physical assessment.",
    recommendedFor: "Men & Women aged 30-50 looking for exhaustive cardiac, renal, liver, and metabolic audits.",
    testsIncluded: [
      "Complete Blood Count (CBC) with ESR",
      "Comprehensive Lipid Panel (Cholesterol Profile)",
      "Kidney Function (Urea, Creatinine, Electrolytes)",
      "Liver Function Panel (SGOT, SGPT, Bilirubin)",
      "Cardiac Stress Test (TMT) / 2D Echocardiogram",
      "Glycated Hemoglobin (HbA1c) & Fasting Glucose",
      "Ultrasound Scan of Abdomen & Pelvis",
      "Detailed Eye, Dental & Specialist Consults"
    ],
    features: ["Private Lounge Access", "Detailed Report Booklet", "One-on-One Dietary Consultation", "Priority Specialist Priority"]
  },
  {
    id: "pkg2",
    name: "Advanced Cardio-Care Checkup",
    price: "$249",
    tagline: "Dedicated vascular audit to stay ahead of potential cardiovascular events.",
    recommendedFor: "Individuals with a family history of coronary diseases, high stress levels, or elevated BP.",
    testsIncluded: [
      "High-Sensitivity C-Reactive Protein (hs-CRP)",
      "Electrocardiogram (ECG) with 12-lead telemetry",
      "Echocardiogram (2D Echo) with Doppler flow",
      "Treadmill Exercise Tolerance Test (TMT)",
      "Serum Homocysteine & Serum Electrolyte levels",
      "Fasting Lipid Profile (Apo-A, Apo-B fractions)",
      "Detailed Cardiologist Audit & Lifestyle Guide"
    ],
    features: ["Instant Telemetry Reports", "Heart Healthy Diet Blueprint", "Free 1-Month Follow-Up Session", "Vascular Elasticity Index"]
  },
  {
    id: "pkg3",
    name: "Women's Wellness & Grace Package",
    price: "$199",
    tagline: "Empathetic, meticulous physical assessments for every milestone of a woman's life.",
    recommendedFor: "Aged 18 and above looking to evaluate hormonal, bone density, and reproductive safety.",
    testsIncluded: [
      "Thyroid Stimulating Hormone (TSH) Profile",
      "Pap Smear Screening (Cervical Health Audit)",
      "High-Resolution Bilateral Breast Mammography",
      "Calcium, Vitamin D3 & Iron Profile",
      "Complete Urine & Renal Analysis",
      "Pelvic Ultrasound (Uterus & Ovarian tracking)",
      "Consultation with Senior Consultant Gynecologist"
    ],
    features: ["All-Female Medical Staff", "Private Recovery Room Space", "Hormonal Balance Masterclass booklet", "Bone Health consultation"]
  },
  {
    id: "pkg4",
    name: "Senior Citizens Active Living Checkup",
    price: "$149",
    tagline: "Gentle, non-invasive assessment designed to preserve high mobility and joyful aging.",
    recommendedFor: "Seniors aged 60+ focusing on joint flexibility, hearing acuity, cognitive health, and vitals.",
    testsIncluded: [
      "Bone Mineral Density (DEXA Scan of Spine/Hip)",
      "Audiometry Testing (Hearing Acuity Profile)",
      "Prostate Specific Antigen (PSA for Men) / Urine Tracking",
      "Serum Vitamin B12 & Vitamin D3 Diagnostics",
      "Rheumatoid Factor (RA Factor Screening)",
      "Pulmonary Function Test (PFT for Lung Capacity)",
      "Geriatric physician physical assessment and safety consult"
    ],
    features: ["Wheelchair & Escort Support", "Subsidized Pharmacy Coupon", "Personalized Fall Prevention Guide", "Extended Consult Duration"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Robert Henderson",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    reviewText: "The cardiology department at Gayathri Care saved my life when I had a sudden blockage. The emergency ambulance team arrived in 8 minutes flat, and Dr. Arvind was waiting in the cath lab. Pristine care and absolute professionalism.",
    departmentTreated: "Emergency Cardiology",
    date: "April 12, 2026"
  },
  {
    id: "t2",
    name: "Sophia Martinez",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    reviewText: "I was admitted to the private suite after my micro-neurosurgery. It felt like a 5-star hotel rather than a hospital. The staff was incredibly warm, responsive, and checked on my pain levels every hour. Highly recommended!",
    departmentTreated: "Neurosurgery Recovery",
    date: "May 29, 2026"
  },
  {
    id: "t3",
    name: "Marcus Sterling",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    reviewText: "My mother had both knees replaced here using their robotic orthopedic system. The recovery was incredibly fast; she was walking with minor support within two days. Thank you Dr. David and the physical rehab team!",
    departmentTreated: "Orthopaedics & Physiotherapy",
    date: "June 15, 2026"
  }
];

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: "tip1",
    title: "10 Simple Habits to Support Cardiovascular Longevity",
    category: "Heart Care",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=600",
    summary: "Your heart beat is the rhythm of your life. Learn small daily changes that drastically reduce arterial plaque accumulation and blood pressure spikes.",
    content: "Maintaining a healthy heart doesn't require a radical lifestyle overhaul. Our chief cardiologist Dr. Arvind Gayathri suggests focusing on these proven metrics: First, aim for 30 minutes of moderate aerobic activity (like brisk walking) at least 5 days a week. Second, prioritize dietary fiber from leafy greens, berries, and raw oats which physically binds and excretes bad cholesterol. Third, implement healthy sleep hygiene (7-8 hours) as chronic insomnia elevates cortisol, raising arterial stiffening indexes. Lastly, practice deep breathing exercises twice a day to instantly drop systolic stress on your left ventricle.",
    readTime: "4 min read",
    date: "June 20, 2026"
  },
  {
    id: "tip2",
    title: "Demystifying the Glycemic Index: Controlling Diabetes Comfortably",
    category: "Diabetes Care",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=600",
    summary: "Managing insulin levels starts with understanding how carbohydrates metabolize. Learn to structure delicious meals without glucose surges.",
    content: "Controlling diabetic fluctuations isn't about complete starvation—it's about smart pairing. The glycemic index measures how rapidly a carbohydrate converts to sugar in your blood. When you consume high-GI foods like polished rice or white bread, pair them with healthy lipids (avocado, olive oil) or lean proteins. This physical gel matrix slows down gastric emptying, resulting in a gentle, prolonged energy release instead of a sharp insulin crash. Additionally, a brief 10-minute walk post-meal utilizes glucose directly in skeletal muscles without requiring excess pancreatic insulin.",
    readTime: "5 min read",
    date: "June 25, 2026"
  },
  {
    id: "tip3",
    title: "The Ultimate Nutritional Guide for Dynamic Joint Flexibility",
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=600",
    summary: "Keep your bones and synovial fluids primed for lifetime mobility with anti-inflammatory foods rich in Omega-3 and Magnesium.",
    content: "Joint pain and bone density degeneration are highly linked to chronic systemic inflammation. To keep your joints lubricated, incorporate anti-inflammatory lipids into your daily diet. Omega-3 fatty acids found in walnuts, flaxseeds, and salmon act as natural cellular dampers for joint swelling. Magnesium is equally critical—it controls calcium uptake into the bone matrix rather than letting it calcify soft joint tissues. Avoid heavily processed sugars, as advanced glycation end-products (AGEs) directly damage the delicate cartilage lining your knees and hips.",
    readTime: "3 min read",
    date: "July 01, 2026"
  }
];

export const FAQS: FAQ[] = [
  {
    id: "faq1",
    question: "How do I consult a specialist doctor at Gayathri Care Hospital?",
    answer: "You can consult our specialists by visiting the OPD desk during operating hours (8:00 AM - 8:00 PM) or viewing our doctors' directory. As an informational portal, please call our visual hotline at +1 (800) 555-0199 for general queries. For immediate physical registration, visit our hospital lobby directly.",
    category: "General"
  },
  {
    id: "faq2",
    question: "Do you offer emergency ambulance and trauma services 24/7?",
    answer: "Yes. Our Level-1 Trauma Response and advanced life support (ALS) ambulances operate 24 hours a day, 365 days a year. Our emergency direct line is +1 (800) 911-CARE (Emergency Call Demo in the header). We maintain dedicated rapid cardiac and stroke response protocols instantly.",
    category: "Emergency"
  },
  {
    id: "faq3",
    question: "What are your standard visiting hours for patient rooms & suites?",
    answer: "To ensure adequate recovery rest for our patients and maintaining zero infection vectors, visiting hours are strictly kept from 11:00 AM - 1:00 PM and 5:00 PM - 7:00 PM. Only one designated attendant with a valid security pass is permitted to stay overnight in patient rooms.",
    category: "Visitors"
  },
  {
    id: "faq4",
    question: "How do I prepare for a scheduled premium health package checkup?",
    answer: "For all comprehensive health packages, a 10-12 hour overnight fasting is mandatory (water is permitted). Please avoid consuming alcohol or heavy lipids 24 hours prior to blood samples. If you have scheduled stress tests (TMT), wear comfortable walking apparel and sneakers.",
    category: "Diagnostics"
  },
  {
    id: "faq5",
    question: "What insurance networks are empaneled with Gayathri Care Hospital?",
    answer: "We are partnered with all leading national and international healthcare insurance providers and major corporate wellness coordinators. Our dedicated TPA assistance desk in the lobby handles cashless pre-authorizations, helping you settle medical claims smoothly.",
    category: "Insurance"
  }
];
