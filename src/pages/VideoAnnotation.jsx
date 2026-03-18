import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Activity, Layers, Search, ShoppingBag, Stethoscope, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const VideoAnnotation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const annotationServices = [
    {
      title: "Object Tracking (Single & Multi-Object) Across Frames",
      image: "/videoannotation/tracking.png",
      description:
        "Object Tracking links objects consistently across consecutive frames, enabling AI models to understand motion, behavior, and interactions over time — not just in isolated images. For single-object tracking, a specific target is followed frame-by-frame to capture its precise trajectory. For multi-object tracking, multiple entities are uniquely identified and maintained with persistent IDs, even during occlusions, overlaps, or scene changes.",
      features: [
        "Persistent Object IDs",
        "Occlusion Handling",
        "Trajectory Mapping"
      ]
    },
    {
      title: "Bounding Boxes, Polygons & Keypoints for Video Annotation",
      image: "/videoannotation/bounding.png",
      description:
        "Power high-precision video intelligence with frame-level spatial annotation tailored for dynamic environments. Our video annotation services combine bounding boxes, polygons, and keypoints to capture every object, shape, and movement with exceptional accuracy across time.",
      features: [
        "Dynamic Spatial Accuracy",
        "Multi-Point Tracking",
        "Complex Shape Continuity"
      ]
    },
    {
      title: "Semantic & Instance Segmentation for Dynamic Video Scenes",
      image: "/videoannotation/segmentation.png",
      description:
        "We provide advanced semantic and instance segmentation designed specifically for video annotation in dynamic, real-world environments. Our frame-by-frame pixel-level labeling enables AI systems to understand both scene context (semantic segmentation) and individual object identities across time (instance segmentation). Each object is not only segmented with precision but also tracked consistently throughout the video, preserving identity even during movement, overlap, or temporary occlusion.",
      features: [
        "Pixel-Level Context",
        "Individual Object Identity",
        "Temporal Mask Consistency"
      ]
    },
    {
      title: "Action & Activity Recognition (Video Annotation)",
      image: "/videoannotation/action.png",
      description:
        "Action & Activity Recognition transforms raw video into meaningful behavioral intelligence by identifying and labeling motions, interactions, and real-world events across time. Our experts annotate both simple actions (e.g., walking, picking, turning) and complex activities (e.g., team coordination, equipment handling, suspicious behavior, customer journeys) using precise temporal boundaries and context-aware classification.",
      features: [
        "Behavioral Intelligence",
        "Complex Activity Labels",
        "Context-Aware Tagging"
      ]
    },
    {
      title: "Event Detection & Temporal Tagging",
      image: "/videoannotation/event.png",
      description:
        "Event Detection and Temporal Tagging transform raw video into structured intelligence by identifying what happens and exactly when it happens. This process involves locating meaningful actions, interactions, or incidents within a video and marking their precise start and end timestamps. From simple activities like walking or entering a room to complex scenarios such as safety violations, customer behavior, or critical incidents, temporal tagging enables AI systems to understand events in sequence and context.",
      features: [
        "Precise Timestamps",
        "Sequential Event Mapping",
        "Interaction Identification"
      ]
    },
    {
      title: "Lane, Traffic, and Pedestrian Annotation (ADAS-Ready)",
      image: "/videoannotation/adas.png",
      description:
        "Enable safer, smarter driving systems with high-precision video annotation built for Advanced Driver Assistance Systems (ADAS). Our Lane, Traffic, and Pedestrian Annotation service delivers frame-level labeling of lane boundaries, road markings, vehicles, traffic signals, signs, cyclists, and pedestrian behavior — capturing both spatial accuracy and real-world motion dynamics.",
      features: [
        "Road Geometry Mapping",
        "Traffic Flow Analysis",
        "Pedestrian Behavior Data"
      ]
    },
    {
      title: "Behavioral and Motion Analysis (Video Annotation)",
      image: "/videoannotation/behavior.png",
      description:
        "Behavioral and Motion Analysis focuses on understanding how subjects act and move over time within a video. This annotation process captures human actions, object interactions, movement patterns, posture changes, and event sequences at a temporal level. Instead of labeling what is present in a frame, it identifies what is happening, how it evolves, and why it matters. By annotating actions such as walking, running, gesturing, entering/exiting zones, interactions between people or objects, and abnormal or risky behaviors, this technique enables AI systems to interpret real-world dynamics with context and intent.",
      features: [
        "Posture & Movement Patterns",
        "Dynamic Intent Analysis",
        "Risk Behavior Labeling"
      ]
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen pb-8 font-sans selection:bg-brand-100 selection:text-brand-900">
      {/* Hero - Simple & Premium Center Layout */}
      <div className="relative bg-white overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-50/60 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-slate-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
            <Link to="/" className="hover:text-brand-600 transition-colors">Home</Link>
            <ChevronRight size={10} strokeWidth={3} />
            <span>Services</span>
            <ChevronRight size={10} strokeWidth={3} />
            <span className="text-brand-600">Video Annotation</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100/50 text-brand-600 text-[11px] font-semibold uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            Tracking & Action Recognition
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl">
            Video Annotation Services — Frame-Level Intelligence for Real-World AI
          </h1>
          
          <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-8 max-w-3xl">
            In today’s AI landscape, video data is one of the richest — and most complex — sources of machine learning insight. At LabelzAI, our Video Annotation services transform raw footage into structured, high-precision training data that enables AI systems to understand motion, behavior, and real-world context with accuracy.
          </p>
          
          <p className="text-base text-slate-500 font-medium leading-relaxed mb-10 max-w-3xl">
            We provide frame-by-frame and sequence-level annotation tailored for computer vision, autonomous systems, surveillance analytics, retail intelligence, healthcare monitoring, and sports analysis. Our expert annotators combine domain knowledge with advanced tools to deliver consistent, scalable, and high-quality outputs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <button className="flex items-center gap-3 bg-slate-900 text-white px-10 py-3.5 rounded-full font-semibold text-base hover:bg-brand-600 transition-all hover:shadow-xl hover:shadow-brand-600/20 active:scale-95">
                <ArrowRight size={18} /> Start a Project
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="relative z-10 -mt-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-brand-600"></div>
                <span className="text-brand-600 text-[11px] font-semibold uppercase tracking-[0.3em]">Video Expertise</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-950 tracking-tight mb-8">
                What We Annotate:
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {[
                  { label: "Object Tracking", val: "Single & Multi-Object across frames" },
                  { label: "Spacial Labeling", val: "Bounding Boxes, Polygons, and Keypoints" },
                  { label: "Complex Segmentation", val: "Semantic & Instance for dynamic scenes" },
                  { label: "Action Recognition", val: "Action & Activity Recognition" },
                  { label: "Temporal Analysis", val: "Event Detection and Temporal Tagging" },
                  { label: "ADAS Annotation", val: "Lane, Traffic, and Pedestrian (ADAS-ready)" },
                  { label: "Motion Analysis", val: "Behavioral and Motion Analysis" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 ring-4 ring-brand-50 group-hover:scale-125 transition-transform"></div>
                    <div>
                      <span className="font-semibold text-slate-900 text-base md:text-lg">{item.label}:</span>
                      <span className="text-slate-600 text-base md:text-lg ml-2 font-medium">{item.val}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Use Cases - Premium Grid */}
      <div className="py-20 bg-slate-50/50 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-4">Industry Use Cases</h2>
            <p className="text-slate-500 font-medium">Powering the next generation of visual intelligence.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Autonomous Systems", desc: "Object tracking and lane detection for self-driving vehicles.", icon: <Activity className="text-brand-600" size={24} /> },
              { title: "Surveillance Analytics", desc: "Action recognition and event detection for smart security.", icon: <Search className="text-brand-600" size={24} /> },
              { title: "Retail Intelligence", desc: "Customer behavior analysis and store traffic monitoring.", icon: <ShoppingBag className="text-brand-600" size={24} /> },
              { title: "Healthcare Monitoring", desc: "Patient activity analysis and surgical procedure tracking.", icon: <Stethoscope className="text-brand-600" size={24} /> },
              { title: "Sports Analysis", desc: "Player movement tracking and performance metrics data.", icon: <Trophy className="text-brand-600" size={24} /> },
              { title: "Media & Entertainment", desc: "Content indexing and automatic highlight generation.", icon: <Layers className="text-brand-600" size={24} /> }
            ].map((item, i) => (
              <div key={i} className="group relative p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:border-brand-100 hover:shadow-2xl hover:shadow-brand-600/5 transition-all duration-500">
                  <div className="absolute top-6 right-8 text-slate-100 font-bold text-5xl group-hover:text-brand-50 transition-colors pointer-events-none">0{i + 1}</div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                        {item.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-950 mb-4 tracking-tight leading-tight">{item.title}</h3>
                    <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed group-hover:text-slate-600 transition-colors">{item.desc}</p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="mt-16 space-y-0">
        {annotationServices.map((service, index) => (
          <div
            key={index}
            className={`py-12 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50 border-y border-slate-100'}`}
          >
            <div className={`max-w-7xl mx-auto px-3 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}>
              <div className="flex-1 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-brand-200"></span>
                    <span className="text-brand-600 font-bold tracking-[0.2em] text-[10px] uppercase">Service 0{index + 1}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-slate-950 leading-tight tracking-tight">
                    {service.title}
                  </h2>
                </div>
                <p className="text-slate-900 text-sm md:text-base leading-relaxed font-semibold max-w-2xl">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 pt-2">
                  {service.features?.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3 group/feat">
                      <div className="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 border border-brand-100">
                        <CheckCircle2 size={12} strokeWidth={3} />
                      </div>
                      <span className="text-slate-700 font-semibold text-xs tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full max-w-lg">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-500/10 border border-slate-100 group">
                   <img 
                     src={service.image} 
                     alt={service.title} 
                     className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Workflow Section */}
      <div className="py-16 bg-slate-950 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-3 relative z-10 text-center">
          <div className="mb-10">
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-3">Video Delivery Pipeline</h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">Scalable video annotation with perfect temporal integrity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Frame Extraction", desc: "Optimizing frame rates for annotation." },
              { step: "02", title: "Keyframe Labeling", desc: "Setting the geometric baseline." },
              { step: "03", title: "Interpolation", desc: "AI-assisted temporal propagation." },
              { step: "04", title: "Human QA", desc: "Final verification of ID continuity." }
            ].map((s, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] text-left group hover:bg-white/10 transition-colors">
                <div className="text-brand-400 font-bold mb-8 text-sm tracking-widest">{s.step}</div>
                <h3 className="text-white text-xl font-semibold mb-4 leading-tight">{s.title}</h3>
                <p className="text-slate-200 text-sm leading-relaxed font-medium">{s.desc}</p>
                <div className="mt-4 h-1 w-0 bg-brand-600 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoAnnotation;
