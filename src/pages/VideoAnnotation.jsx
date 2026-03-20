import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Activity, Layers, Search, ShoppingBag, Stethoscope, Trophy, Play, Clock, BarChart3, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const VideoAnnotation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const annotationServices = [
    {
      title: "Object Tracking (Single & Multi-Object)",
      description:
        "Object Tracking links objects consistently across consecutive frames, enabling AI models to understand motion, behavior, and interactions over time — not just in isolated images. For single-object tracking, a specific target is followed frame-by-frame to capture its precise trajectory. For multi-object tracking, multiple entities are uniquely identified and maintained with persistent IDs, even during occlusions, overlaps, or scene changes.",
      image: "/videoannotation/tracking.png",
      features: [
        "Persistent Object IDs",
        "Occlusion Handling",
        "Trajectory Mapping"
      ],
      icon: <Activity />
    },
    {
      title: "Bounding Boxes, Polygons & Keypoints",
      description:
        "Power high-precision video intelligence with frame-level spatial annotation tailored for dynamic environments. Our video annotation services combine bounding boxes, polygons, and keypoints to capture every object, shape, and movement with exceptional accuracy across time.",
      image: "/videoannotation/bounding.png",
      features: [
        "Dynamic Spatial Accuracy",
        "Multi-Point Tracking",
        "Complex Shape Continuity"
      ],
      icon: <Layers />
    },
    {
      title: "Semantic & Instance Segmentation",
      description:
        "We provide advanced semantic and instance segmentation designed specifically for video annotation in dynamic, real-world environments. Our frame-by-frame pixel-level labeling enables AI systems to understand both scene context (semantic segmentation) and individual object identities across time (instance segmentation). Each object is not only segmented with precision but also tracked consistently throughout the video, preserving identity even during movement, overlap, or temporary occlusion.",
      image: "/videoannotation/segmentation.png",
      features: [
        "Pixel-Level Context",
        "Individual Object Identity",
        "Temporal Mask Consistency"
      ],
      icon: <Layers />
    },
    {
      title: "Action & Activity Recognition",
      description:
        "Action & Activity Recognition transforms raw video into meaningful behavioral intelligence by identifying and labeling motions, interactions, and real-world events across time. Our experts annotate both simple actions (e.g., walking, picking, turning) and complex activities (e.g., team coordination, equipment handling, suspicious behavior, customer journeys) using precise temporal boundaries and context-aware classification.",
      image: "/videoannotation/action.png",
      features: [
        "Behavioral Intelligence",
        "Complex Activity Labels",
        "Context-Aware Tagging"
      ],
      icon: <Play />
    },
    {
      title: "Event Detection & Temporal Tagging",
      description:
        "Event Detection and Temporal Tagging transform raw video into structured intelligence by identifying what happens and exactly when it happens. This process involves locating meaningful actions, interactions, or incidents within a video and marking their precise start and end timestamps. From simple activities like walking or entering a room to complex scenarios such as safety violations, customer behavior, or critical incidents, temporal tagging enables AI systems to understand events in sequence and context.",
      image: "/videoannotation/event.png",
      features: [
        "Precise Timestamps",
        "Sequential Event Mapping",
        "Interaction Identification"
      ],
      icon: <Clock />
    },
    {
      title: "Lane, Traffic, and Pedestrian (ADAS)",
      description:
        "Enable safer, smarter driving systems with high-precision video annotation built for Advanced Driver Assistance Systems (ADAS). Our Lane, Traffic, and Pedestrian Annotation service delivers frame-level labeling of lane boundaries, road markings, vehicles, traffic signals, signs, cyclists, and pedestrian behavior — capturing both spatial accuracy and real-world motion dynamics.",
      image: "/videoannotation/adas.png",
      features: [
        "Road Geometry Mapping",
        "Traffic Flow Analysis",
        "Pedestrian Behavior Data"
      ],
      icon: <Layers />
    },
    {
      title: "Behavioral and Motion Analysis",
      description:
        "Behavioral and Motion Analysis focuses on understanding how subjects act and move over time within a video. This annotation process captures human actions, object interactions, movement patterns, posture changes, and event sequences at a temporal level. Instead of labeling what is present in a frame, it identifies what is happening, how it evolves, and why it matters. By annotating actions such as walking, running, gesturing, entering/exiting zones, interactions between people or objects, and abnormal or risky behaviors, this technique enables AI systems to interpret real-world dynamics with context and intent.",
      image: "/videoannotation/behavior.png",
      features: [
        "Posture & Movement Patterns",
        "Dynamic Intent Analysis",
        "Risk Behavior Labeling"
      ],
      icon: <BarChart3 />
    }
  ];

  const useCases = [
    { title: "Autonomous Systems", desc: "Object tracking and lane detection for self-driving vehicles.", icon: <Activity className="text-brand-600" size={24} /> },
    { title: "Surveillance Analytics", desc: "Action recognition and event detection for smart security.", icon: <Search className="text-brand-600" size={24} /> },
    { title: "Retail Intelligence", desc: "Customer behavior analysis and store traffic monitoring.", icon: <ShoppingBag className="text-brand-600" size={24} /> },
    { title: "Healthcare Monitoring", desc: "Patient activity analysis and surgical procedure tracking.", icon: <Stethoscope className="text-brand-600" size={24} /> },
    { title: "Sports Analysis", desc: "Player movement tracking and performance metrics data.", icon: <Trophy className="text-brand-600" size={24} /> },
    { title: "Media & Entertainment", desc: "Content indexing and automatic highlight generation.", icon: <Layers className="text-brand-600" size={24} /> }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      
      {/* 1. Hero Section - Bold Case Study Style */}
      <section className="relative pt-32 md:pt-48 pb-20 overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-slate-600 text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
            <Link to="/" className="hover:text-brand-600 transition-colors">Home</Link>
            <ChevronRight size={10} strokeWidth={3} />
            <span>Services</span>
            <ChevronRight size={10} strokeWidth={3} />
            <span className="text-brand-600 font-bold uppercase">Video Annotation</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-600 text-[13px] font-semibold mb-8 border border-brand-100/50 uppercase tracking-widest">
            <Sparkles size={14} className="animate-pulse" />
            Temporal Intelligence
          </div>

          <h1 className="text-4xl md:text-7xl font-semibold text-slate-900 leading-[1.05] tracking-tight mb-8">
            Frame-Level <br className="hidden md:block" />
            <span className="text-brand-600 italic font-bold">Video</span> Intelligence.
          </h1>
          
          <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto mb-12">
            Capturing the complexity of time. We provide high-precision temporal ground truth required for motion understanding, behavior recognition, and event prediction.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <button className="flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-full font-semibold text-base hover:bg-brand-600 transition-all hover:shadow-xl hover:shadow-brand-600/20 active:scale-95">
                <ArrowRight size={18} /> Scale Your Project
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Context & Highlights - Case Study Style Box */}
      <section className="py-24 border-t border-slate-50 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="p-12 md:p-16 bg-slate-50 border-2 border-slate-100 rounded-3xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/5 rounded-full blur-[80px] -mt-24 -mr-24"></div>
             
             <div className="relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
                <div className="w-full lg:w-1/2 space-y-8">
                   <div className="flex items-center gap-3">
                      <div className="h-[2px] w-12 bg-brand-600"></div>
                      <span className="text-brand-600 text-[11px] font-bold uppercase tracking-[0.3em]">Temporal Fidelity</span>
                   </div>
                   <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight uppercase">
                     Dynamics <br /> <span className="text-brand-600 font-bold">Unfolded.</span>
                   </h2>
                   <p className="text-slate-700 text-xl font-medium leading-relaxed italic">
                     "Video data is the richest source of machine learning insight. We translate complex sequences into structured, temporal intelligence."
                   </p>
                </div>
                
                <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                   {[
                     { label: "TRACKING", val: "Consistent Object IDs" },
                     { label: "ACTIONS", val: "Behavioral Mapping" },
                     { label: "EVENTS", val: "Temporal Tagging" },
                     { label: "PRECISION", val: "Frame-by-Frame QA" }
                   ].map((item, i) => (
                     <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-2 group hover:border-brand-600 transition-colors">
                        <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest group-hover:text-brand-600 transition-colors">{item.label}</div>
                        <div className="text-slate-900 font-bold text-lg tracking-tight">{item.val}</div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Deep-Dive Services - Alternating but Styled */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-32">
          {annotationServices.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-32 items-center`}
            >
              {/* Text Part */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-brand-50 text-brand-600 rounded-2xl">
                       {service.icon}
                    </div>
                    <span className="text-brand-600 font-bold text-[11px] uppercase tracking-widest">SERVICE 0{index + 1}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-semibold text-slate-950 leading-tight tracking-tight uppercase">
                    {service.title}
                  </h2>
                </div>
                
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium opacity-90">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-4">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-white text-[10px] font-bold group-hover:bg-brand-600 transition-colors shadow-lg shadow-slate-900/10">
                        {fIndex + 1}
                      </div>
                      <span className="text-slate-800 font-bold text-sm tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Part - Premium Frame */}
              <div className="w-full lg:w-1/2">
                 <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-brand-600/10 to-accent-cyan/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative rounded-2xl overflow-hidden transition-transform duration-700 group-hover:-translate-y-2">
                       <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-110"
                       />
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases - Large Case Study Style Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-16 text-center">
          <div className="space-y-4">
             <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight uppercase">
               Industry <span className="text-brand-600">Contexts.</span>
             </h2>
             <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                Deploying temporal machine intelligence across global infrastructure and specialized sectors.
             </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {useCases.map((item, i) => (
               <div key={i} className="group relative p-12 bg-white border border-slate-100 rounded-3xl hover:border-brand-600 hover:shadow-2xl hover:shadow-brand-600/10 transition-all duration-500 text-left">
                  <div className="absolute top-8 right-10 text-slate-100 font-bold text-6xl group-hover:text-brand-50 transition-colors pointer-events-none">0{i + 1}</div>
                  <div className="relative z-10 space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 shadow-lg shadow-brand-600/5">
                        {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-950 tracking-tight leading-tight uppercase">{item.title}</h3>
                    <p className="text-slate-500 text-base font-medium leading-relaxed group-hover:text-slate-600 transition-colors line-clamp-2 italic opacity-80">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. Workflow Section - Case Study Style (Dark) */}
      <section className="py-24 md:py-32 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] uppercase">
                   Dynamic <br /><span className="text-brand-400 font-bold italic">Audit</span> <br /> Pipeline.
                </h2>
                <div className="h-2 w-24 bg-brand-500"></div>
                <p className="text-slate-300 text-xl font-medium leading-relaxed max-w-xl italic opacity-80">
                  "Sequence integrity is our priority. We deploy frame-by-frame verification ensures that motion patterns and behavior labels are 100% reliable."
                </p>
                
                <div className="grid grid-cols-2 gap-12 pt-8">
                    <div className="space-y-3">
                       <div className="text-5xl font-bold text-brand-400 font-mono tracking-tighter">100%</div>
                       <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Continuity Accuracy</div>
                    </div>
                    <div className="space-y-3">
                       <div className="text-5xl font-bold text-brand-400 font-mono tracking-tighter">360°</div>
                       <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Context Verification</div>
                    </div>
                </div>
             </div>
             
             <div className="grid grid-cols-1 gap-4">
                {[
                   { step: "01", title: "Frame Ingestion", label: "Frequency Calibration" },
                   { step: "02", title: "Sequential Labeling", label: "Object ID Preservation" },
                   { step: "03", title: "Interpolation Audit", label: "AI-Assisted Check" },
                   { step: "04", title: "Human Review", label: "Behavioral Validation" }
                ].map((item, i) => (
                   <div key={i} className="flex justify-between items-center p-8 bg-slate-900 border border-slate-800 rounded-3xl group hover:border-brand-600 transition-all">
                      <div className="space-y-1">
                         <div className="text-brand-400 font-mono text-xs font-bold uppercase tracking-widest opacity-60">Phase 0{i+1}</div>
                         <div className="text-white font-bold text-xl tracking-tight uppercase">{item.title}</div>
                      </div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-brand-400 transition-colors">
                         {item.label}
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
           <h2 className="text-4xl md:text-7xl font-semibold text-slate-900 leading-[1.1] tracking-tight uppercase">
             Scale Your <br /> <span className="text-brand-600 italic">Vision</span> Systems.
           </h2>
           <div className="pt-8">
             <Link to="/contact" className="inline-flex items-center gap-4 bg-slate-900 text-white px-12 py-6 text-xl font-bold hover:bg-brand-600 transition-all rounded-full shadow-2xl shadow-slate-900/20 active:scale-95">
               Contact Our Experts <ArrowRight size={24} />
             </Link>
           </div>
        </div>
      </section>

    </div>
  );
};

export default VideoAnnotation;
