import React, { useEffect } from 'react';
import { 
  CheckCircle2, Car, Target, Shield, Database, Zap, 
  Layers, Box, AlertTriangle, MapPin, Eye, Compass, ChevronRight, Sparkles, Navigation2, Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AutonomousMobilityCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      
      {/* 1. Hero Section - Premium Aesthetic */}
      <section className="relative pt-32 md:pt-48 pb-20 overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-600 text-[13px] font-semibold mb-8 border border-brand-100/50">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse"></span>
            Case Study — Autonomous Mobility
          </div>
          <h1 className="text-4xl md:text-7xl font-semibold text-slate-900 leading-[1.05] tracking-tight mb-8">
             Object Detection & Lane <br className="hidden md:block" />
             <span className="text-brand-500">Self-Driving AI.</span>
          </h1>
          <p className="text-slate-500 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto mb-12">
            Transforming multi-sensor raw data into high-precision, safety-critical ground truth for perception and path planning.
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tighter">99.9%</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Accuracy Benchmark</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tighter">1.2M+</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Annotated Cuboids</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Visual Frame */}
      {/* <section className="pb-32 px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="rounded-[4rem] overflow-hidden border-2 border-slate-100 bg-slate-50 shadow-2xl shadow-slate-100/50">
            <img 
              src="/ai_ml/computer-vision.png" 
              alt="Autonomous Mobility Annotation" 
              className="w-full h-[400px] md:h-[500px] object-cover" 
            />
          </div>
        </div>
      </section> */}

      {/* 3. Detailed Overview & Problem-Solution */}
      <section className="py-24 border-t border-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-32">
          
          {/* Overview */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
             <div className="w-full lg:w-1/2 space-y-8">
                <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
                  Industry <span className="text-brand-600 italic">Context.</span>
                </h2>
                <div className="h-1.5 w-24 bg-brand-600"></div>
                <p className="text-slate-600 text-xl font-medium leading-relaxed italic">
                  "Self-driving systems must accurately detect objects and interpret road structures in real-time, amidst chaotic urban environments and varying weather conditions."
                </p>
                <div className="h-[1px] w-full bg-slate-100"></div>
                <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl">
                  A leading mobility technology provider in India was developing a Level 4 autonomous driving system tailored for the complexities of local traffic. They required high-precision camera and LiDAR annotation to ensure robust perception in high-density areas.
                </p>
             </div>
             <div className="w-full lg:w-1/2">
                <div className="p-10 bg-slate-50 border-2 border-slate-100 rounded-3xl h-full flex flex-col justify-center">
                   <h3 className="text-2xl font-semibold text-slate-900 flex items-center gap-3 mb-8">
                     <Target className="text-brand-600" /> Project Objective
                   </h3>
                   <div className="space-y-6">
                     {[
                       "LiDAR cuboid annotation for vehicle-distance estimation.",
                       "Polyline segmentation for complex lane markings.",
                       "Multi-sensor fusion (Camera + LiDAR) synchronization.",
                       "India-specific edge casing (rickshaws, cattle, narrow roads)."
                     ].map((item, i) => (
                       <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                         <div className="w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center shrink-0 mt-0.5">
                           <CheckCircle2 className="text-brand-600" size={12} />
                         </div>
                         <span className="text-slate-700 font-bold text-sm tracking-tight">{item}</span>
                       </div>
                     ))}
                   </div>
                </div>
             </div>
          </div>

          {/* Solutions Feature Set */}
          <div className="space-y-16">
            <div className="flex items-center gap-4">
               <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
                 Custom <span className="text-brand-600 italic">Annotation</span> Workflows.
               </h2>
               <div className="flex-1 h-[1px] bg-slate-100"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { 
                   title: "2D Camera Suite", 
                   desc: "Bounding boxes and object tracking for dynamic scenes.",
                   items: ["Vehicles & Pedestrians", "Signage Recognition", "Traffic Signals"],
                   icon: <Layers />
                 },
                 { 
                   title: "3D LiDAR Hub", 
                   desc: "Point cloud cuboids and spatial depth mapping.",
                   items: ["Distance Estimation", "3D Cuboids", "Surface Segmentation"],
                   icon: <Box />
                 },
                 { 
                   title: "Semantic Mapping", 
                   desc: "Pixel-perfect segmentation of road environments.",
                   items: ["Drivable Areas", "Sidewalk Boundaries", "Road Hazards"],
                   icon: <Zap />
                 },
                 { 
                   title: "Behavior Logic", 
                   desc: "Classification for scenario-based training.",
                   items: ["Sudden Braking", "Lane Changing", "Violation Markers"],
                   icon: <Navigation2 />
                 }
               ].map((item, i) => (
                 <div key={i} className="p-8 bg-white border-2 border-slate-50 rounded-2xl hover:border-brand-600 transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 text-brand-600 flex items-center justify-center mb-8 group-hover:bg-brand-600 group-hover:text-white transition-all">
                       {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">{item.desc}</p>
                    <div className="space-y-2">
                       {item.items.map((tag, j) => (
                         <div key={j} className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">{tag}</div>
                       ))}
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Results Section - High-Contrast Stats */}
      <section className="py-24 md:py-32 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-[100px] -mt-48 -mr-48"></div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
                  Scalable <span className="text-brand-400">Road-Ready</span> <br />AI Production.
                </h2>
                <p className="text-white text-lg font-medium leading-relaxed max-w-xl italic">
                  "Our multi-layer verification system ensured that 99.9% of safety-critical markers were labeled correctly, allowing the client to move to public test trials 4 months ahead of schedule."
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8">
                    <div className="space-y-2">
                       <div className="text-4xl font-bold text-brand-400 font-mono">1.2M+</div>
                       <div className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Dataset Volume</div>
                    </div>
                    <div className="space-y-2">
                       <div className="text-4xl font-bold text-brand-400 font-mono">0.1%</div>
                       <div className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Error Margin</div>
                    </div>
                </div>
             </div>
             <div className="grid grid-cols-1 gap-4">
                {[
                   { title: "ADAS Calibration", val: "High Frequency Fusion Support" },
                   { title: "Training Velocity", val: "40% Faster Cycle Turnaround" },
                   { title: "Cost Efficiency", val: "50% Savings on Data Prep" },
                   { title: "Deployment", val: "Market Ready SC-Scenario Data" }
                ].map((item, i) => (
                   <div key={i} className="flex justify-between items-center p-6 bg-slate-900 border border-slate-800 rounded-2xl group hover:border-brand-600 transition-all">
                      <span className="text-slate-300 font-bold uppercase text-[10px] tracking-[0.2em] group-hover:text-white transition-colors">{item.title}</span>
                      <span className="text-white font-bold text-sm tracking-tight group-hover:text-brand-400 transition-colors uppercase">{item.val}</span>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 5. Results & CTA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
           <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 leading-[1.1] tracking-tight">
             Build <span className="text-brand-600 italic">Trusted</span> <br /> Mobility Systems.
           </h2>
           <div className="pt-8">
             <Link to="/contact" className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 text-lg font-semibold hover:bg-slate-800 transition-all rounded-full shadow-lg shadow-slate-900/10 active:scale-95">
               Start Your Mobility Project <ChevronRight size={20} />
            </Link>
           </div>
        </div>
      </section>

    </div>
  );
};

export default AutonomousMobilityCaseStudy;
