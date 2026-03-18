import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Box, Layers, Database, BoxSelect, Cpu } from 'lucide-react';
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
      features: [
        "Volumetric Dimension Labeling",
        "Orientation (Yaw/Pitch/Roll)",
        "Object Scaling & Centroids"
      ],
      icon: <BoxSelect size={24} />
    },
    {
      title: "3D Semantic Segmentation",
      description:
        "Point-level labeling of 3D environments. We classify each individual point in a LiDAR point cloud into categories such as roads, sidewalks, buildings, vegetation, and obstacles. This enables AI systems to achieve comprehensive 360-degree scene understanding in complex urban environments.",
      features: [
        "Point-Cloud Specific Classification",
        "Urban Scene Mapping",
        "Fine-Grained Obstacle Detection"
      ],
      icon: <Layers size={24} />
    },
    {
      title: "3D Instance Segmentation",
      description:
        "Separating individual objects within the same class within a 3D space. This process distinguishes between different instances of vehicles or pedestrians, supporting advanced object detection and behavior analysis required for safe autonomous navigation.",
      features: [
        "Individual Object Masking",
        "Instance-Level ID Assignment",
        "Cluster Separation Analysis"
      ],
      icon: <Box size={24} />
    },
    {
      title: "Multi-Frame Object Tracking",
      description:
        "Tracking 3D objects across LiDAR sequences. We maintain consistent object IDs across temporal frames to capture motion patterns, trajectories, and interactions over time, which is critical for predicting future states in autonomous systems.",
      features: [
        "Temporal ID Continuity",
        "Trajectory Prediction Data",
        "Motion Flow Analysis"
      ],
      icon: <Database size={24} />
    },
    {
      title: "Sensor Fusion Annotation",
      description:
        "Synchronizing LiDAR point clouds with camera, radar, and GPS data. We provide high-accuracy perception model training datasets where 3D labels are precisely projected onto 2D image frames, ensuring cross-sensor consistency and depth verification.",
      features: [
        "LiDAR-to-Camera Projection",
        "Cross-Sensor ID Matching",
        "Multi-Modal Depth Verification"
      ],
      icon: <Cpu size={24} />
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
            <span className="text-brand-600">3D & LiDAR</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100/50 text-brand-600 text-[11px] font-semibold uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            Spatial Intelligence
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl">
            3D & LiDAR Annotation
          </h1>
          
          <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-10 max-w-4xl">
            3D & LiDAR Annotation is a specialized data labeling process that transforms raw point cloud data into structured, machine-readable intelligence for advanced AI systems. Using high-precision tools and trained annotators, millions of spatial data points captured by LiDAR sensors are classified, segmented, and tracked to help machines understand real-world environments in three dimensions.
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

      {/* Intro Section - What We Do */}
      <div className="relative z-10 -mt-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-brand-600"></div>
                <span className="text-brand-600 text-[11px] font-semibold uppercase tracking-[0.3em]">Services</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-950 tracking-tight mb-8">
                What We Do:
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {[
                  { label: "3D Bounding Boxes (Cuboids)", val: "Vehicles, pedestrians, cyclists with position & orientation" },
                  { label: "Semantic Segmentation", val: "Point-level labeling of roads, buildings, & obstacles" },
                  { label: "Instance Segmentation", val: "Separating individual objects for behavior analysis" },
                  { label: "Multi-Frame Tracking", val: "Capturing motion patterns & trajectories over time" },
                  { label: "Sensor Fusion", val: "Synchronizing LiDAR with camera, radar, & GPS" }
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

      {/* Services List - Modern Grid */}
      <div className="mt-24 space-y-0">
        <div className="max-w-7xl mx-auto px-6 mb-16">
           <h2 className="text-4xl font-semibold text-slate-900 text-center tracking-tight mb-4">Comprehensive LiDAR Expertise</h2>
           <p className="text-slate-500 text-center font-medium max-w-2xl mx-auto">Converting complex spatial data into high-quality training datasets through industry-leading techniques.</p>
        </div>
        
        {annotationServices.map((service, index) => (
          <div
            key={index}
            className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50 border-y border-slate-100'}`}
          >
            <div className={`max-w-7xl mx-auto px-6 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}>
              <div className="flex-1 space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 border border-brand-100 mb-2">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl md:text-4xl font-semibold text-slate-950 leading-tight tracking-tight">
                    {service.title}
                  </h2>
                </div>
                <p className="text-slate-900 text-base md:text-lg leading-relaxed font-semibold max-w-2xl">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-4">
                  {service.features?.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3 group/feat">
                      <div className="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 border border-brand-100">
                        <CheckCircle2 size={12} strokeWidth={3} />
                      </div>
                      <span className="text-slate-700 font-semibold text-sm tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full max-w-lg">
                <div className="aspect-square bg-slate-950 rounded-[3rem] p-12 relative overflow-hidden group shadow-2xl">
                   {/* Abstract Point Cloud Graphic */}
                   <div className="absolute inset-0 opacity-20 pointer-events-none">
                      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#4f46e5_2px,transparent_2px)] [background-size:24px_24px]"></div>
                   </div>
                   <div className="relative z-10 h-full flex items-center justify-center">
                       <div className="w-full h-full border-2 border-brand-600/30 rounded-2xl flex flex-col items-center justify-center p-8 bg-brand-600/5 backdrop-blur-sm group-hover:bg-brand-600/10 transition-colors">
                          <Database size={48} className="text-brand-500 mb-4 opacity-50" />
                          <div className="text-brand-400 font-mono text-[10px] tracking-widest uppercase mb-1">Point_Cloud_Matrix</div>
                          <div className="font-mono text-[8px] text-brand-300 opacity-40 break-all text-center">
                             0.231, 0.442, -0.912, 1.0<br/>
                             0.112, 0.551, -0.882, 0.9<br/>
                             -0.012, 0.662, -0.771, 0.8
                          </div>
                       </div>
                   </div>
                   <div className="absolute top-0 right-0 w-48 h-48 bg-brand-600/20 rounded-full blur-[80px] -mr-24 -mt-24 group-hover:bg-brand-600/30 transition-all duration-700"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Lidar3DAnnotation;
