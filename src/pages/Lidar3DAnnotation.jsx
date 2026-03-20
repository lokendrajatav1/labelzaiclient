import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Box, Layers, Database, BoxSelect, Cpu, Target, Box as BoxIcon, Scan, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Lidar3DAnnotation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const annotationServices = [
    {
      title: "3D Bounding Boxes (Cuboids)",
      description:
        "We provide precise cuboid annotation for vehicles, pedestrians, cyclists, traffic signs, and other objects within point cloud data. Our annotators define exact position, 3D dimensions (length, width, height), and orientation (yaw, pitch, roll) to help AI models understand spatial volume and depth.",
      image: "/lidar3d/cuboids.png",
      features: [
        "Volumetric Dimension Labeling",
        "Orientation (Yaw/Pitch/Roll)",
        "Object Scaling & Centroids"
      ],
      icon: <BoxSelect />
    },
    {
      title: "3D Semantic Segmentation",
      description:
        "Point-level labeling of 3D environments. We classify each individual point in a LiDAR point cloud into categories such as roads, sidewalks, buildings, vegetation, and obstacles. This enables AI systems to achieve comprehensive 360-degree scene understanding in complex urban environments.",
      image: "/lidar3d/semantic-segmentation.png",
      features: [
        "Point-Cloud Specific Classification",
        "Urban Scene Mapping",
        "Fine-Grained Obstacle Detection"
      ],
      icon: <Layers />
    },
    {
      title: "3D Instance Segmentation",
      description:
        "Separating individual objects within the same class within a 3D space. This process distinguishes between different instances of vehicles or pedestrians, supporting advanced object detection and behavior analysis required for safe autonomous navigation.",
      image: "/lidar3d/instance-segmentation.png",
      features: [
        "Individual Object Masking",
        "Instance-Level ID Assignment",
        "Cluster Separation Analysis"
      ],
      icon: <BoxIcon />
    },
    {
      title: "Multi-Frame Object Tracking",
      description:
        "Tracking 3D objects across LiDAR sequences. We maintain consistent object IDs across temporal frames to capture motion patterns, trajectories, and interactions over time, which is critical for predicting future states in autonomous systems.",
      image: "/lidar3d/object-tracking.png",
      features: [
        "Temporal ID Continuity",
        "Trajectory Prediction Data",
        "Motion Flow Analysis"
      ],
      icon: <Database />
    },
    {
      title: "Sensor Fusion Annotation",
      description:
        "Synchronizing LiDAR point clouds with camera, radar, and GPS data. We provide high-accuracy perception model training datasets where 3D labels are precisely projected onto 2D image frames, ensuring cross-sensor consistency and depth verification.",
      image: "/lidar3d/sensor-fusion.png",
      features: [
        "LiDAR-to-Camera Projection",
        "Cross-Sensor ID Matching",
        "Multi-Modal Depth Verification"
      ],
      icon: <Cpu />
    }
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
            <span className="text-brand-600 font-bold uppercase">3D & LiDAR</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-600 text-[13px] font-semibold mb-8 border border-brand-100/50 uppercase tracking-widest">
            <Sparkles size={14} className="animate-pulse" />
            Spatial Intelligence
          </div>

          <h1 className="text-4xl md:text-7xl font-semibold text-slate-900 leading-[1.05] tracking-tight mb-8">
            Precision <span className="text-brand-600 italic">LiDAR</span> <br className="hidden md:block" />
            & 3D Annotation.
          </h1>
          
          <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto mb-12">
            Translating billions of points into physical intelligence. We provide high-fidelity 3D datasets required for autonomous systems to navigate the real world with total confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <button className="flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-full font-semibold text-base hover:bg-brand-600 transition-all hover:shadow-xl hover:shadow-brand-600/20 active:scale-95">
                <ArrowRight size={18} /> Scale Your Perception
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
                      <span className="text-brand-600 text-[11px] font-bold uppercase tracking-[0.3em]">Vertical Precision</span>
                   </div>
                   <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight uppercase">
                     Spatial <br /> <span className="text-brand-600 font-bold">In-Volumes.</span>
                   </h2>
                   <p className="text-slate-700 text-xl font-medium leading-relaxed italic">
                     "3D data represents the highest form of spatial understanding. We bridge the gap between million-point clouds and reliable machine perception."
                   </p>
                </div>
                
                <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                   {[
                     { label: "VOLUMETIC", val: "3D Cuboid Labeling" },
                     { label: "POINT-CLOUD", val: "Semantic Segmentation" },
                     { label: "FUSION", val: "LiDAR-Camera Sync" },
                     { label: "MOTION", val: "Temporal Tracking" }
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

      {/* 3. Deep-Dive Services - Alternating Style */}
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

      {/* 4. Workflow Section - Case Study Style (Dark) */}
      <section className="py-24 md:py-32 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] uppercase">
                   Spatial <br /><span className="text-brand-400 font-bold italic">Audit</span> <br /> Pipeline.
                </h2>
                <div className="h-2 w-24 bg-brand-500"></div>
                <p className="text-slate-300 text-xl font-medium leading-relaxed max-w-xl italic opacity-80">
                  "3D integrity is non-negotiable. We deploy specialized volumetric audits and cross-sensor verification to ensure every point is categorized according to strict safety-level standards."
                </p>
                
                <div className="grid grid-cols-2 gap-12 pt-8">
                    <div className="space-y-3">
                       <div className="text-5xl font-bold text-brand-400 font-mono tracking-tighter">100%</div>
                       <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Volumetric Integrity</div>
                    </div>
                    <div className="space-y-3">
                       <div className="text-5xl font-bold text-brand-400 font-mono tracking-tighter">ASIL</div>
                       <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Safety Compliance</div>
                    </div>
                </div>
             </div>
             
             <div className="grid grid-cols-1 gap-4">
                {[
                   { step: "01", title: "Cloud Optimization", label: "Point Density Calibration" },
                   { step: "02", title: "3D Labeling", label: "Volumetric Cuboid Mapping" },
                   { step: "03", title: "Projective QA", label: "Cross-Sensor Alignment" },
                   { step: "04", title: "Final Validation", label: "Model-Ready Packaging" }
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
             Ready to Scale <br /> <span className="text-brand-600 italic">Spatial</span> Intelligence.
           </h2>
           <div className="pt-8">
             <Link to="/contact" className="inline-flex items-center gap-4 bg-slate-900 text-white px-12 py-6 text-xl font-bold hover:bg-brand-600 transition-all rounded-full shadow-2xl shadow-slate-900/20 active:scale-95">
               Start A Project <ArrowRight size={24} />
             </Link>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Lidar3DAnnotation;
