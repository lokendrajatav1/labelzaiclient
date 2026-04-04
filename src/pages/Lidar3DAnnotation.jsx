import React, { useEffect } from 'react';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Sparkles, Database, Layers, Target, Box, FileText, ClipboardCheck, BarChart3, ShieldCheck, Zap, BoxSelect, Cpu, Scan, Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Lidar3DAnnotation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      
      {/* 1. Hero Section */}
      <section className="relative mt-[60px] md:mt-[64px] pt-12 md:pt-20 pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src="/Service/3D-Lidar-Autonomus.png" 
            alt="3D & LiDAR Annotation Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 text-[12px] font-medium mb-8 tracking-wider">
             Services We Provide — Data Annotation
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.2] tracking-tight mb-6 max-w-4xl">
             3D & LiDAR <br className="hidden md:block" />
             <span className="text-white">Annotation Services</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl font-normal leading-relaxed max-w-2xl">
             Transforming raw point cloud data into structured, machine-readable intelligence.
          </p>
          <div className="mt-10">
            <Link to="/contact">
                <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-base hover:bg-brand-600 hover:text-white transition-all active:scale-95 shadow-xl shadow-black/20">
                    Scale Your Project <ArrowRight size={18} />
                </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Text Block */}
      <section className="pt-16 md:pt-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-6 text-gray-700 text-base md:text-lg font-normal leading-snug">
             <div className="space-y-2 text-left mb-6">
                 <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                    3D & LiDAR Annotation
                 </h2>
                 <div className="h-1 w-12 bg-brand-600"></div>
             </div>
             <p className>
                3D & LiDAR Annotation is a specialized data labeling process that transforms raw point cloud data into structured, machine-readable intelligence for advanced AI systems. Using high-precision tools and trained annotators, millions of spatial data points captured by LiDAR sensors are classified, segmented, and tracked to help machines understand real-world environments in three dimensions.
             </p>
        </div>
      </section>

      {/* What We Do Grid */}
      <section className="py-24 bg-slate-50 border-white">
         <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="space-y-2 text-left mb-12">
                <h2 className="text-xl md:text-2xl font-medium text-gray-900 uppercase tracking-widest">
                   What We Do
                </h2>
                <div className="h-1 w-12 bg-brand-600"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
               
               {/* Column 1 */}
               <div className="space-y-12">
                  <div className="space-y-4">
                     <h3 className="text-lg md:text-xl font-semibold text-gray-900">1. 3D Bounding Boxes (Cuboids)</h3>
                     <p className="text-gray-700 leading-relaxed">
                        Precise cuboid annotation for vehicles, pedestrians, cyclists, traffic signs, and other objects with accurate position, size, and orientation.
                     </p>
                  </div>
                  <div className="space-y-4">
                     <h3 className="text-lg md:text-xl font-semibold text-gray-900">2. Semantic Segmentation</h3>
                     <p className="text-gray-700 leading-relaxed">
                        Point-level labeling of environments such as roads, sidewalks, buildings, vegetation, and obstacles for scene understanding.
                     </p>
                  </div>
                  <div className="space-y-4">
                     <h3 className="text-lg md:text-xl font-semibold text-gray-900">3. Instance Segmentation</h3>
                     <p className="text-gray-700 leading-relaxed">
                        Separating individual objects within the same class to support object detection and behavior analysis.
                     </p>
                  </div>
               </div>

               {/* Column 2 */}
               <div className="space-y-12">
                  <div className="space-y-4">
                     <h3 className="text-lg md:text-xl font-semibold text-gray-900">4. Multi-Frame Object Tracking</h3>
                     <p className="text-gray-700 leading-relaxed">
                        Tracking objects across LiDAR sequences to capture motion patterns, trajectories, and interactions over time.
                     </p>
                  </div>
                  <div className="space-y-4">
                     <h3 className="text-lg md:text-xl font-semibold text-gray-900">5. Sensor Fusion Annotation</h3>
                     <p className="text-gray-700 leading-relaxed">
                        Synchronizing LiDAR with camera, radar, and GPS data for high-accuracy perception models.
                     </p>
                  </div>
                  
                  {/* Subtle Accent Box for Consistency */}
                  <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm">
                     <p className="text-slate-500 italic text-sm">
                        "3D integrity is non-negotiable. We deploy specialized volumetric audits to ensure every point meets safety standards."
                     </p>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
               Ready to Scale Your Spatial Intelligence?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
               Partner with us for high-precision, reliable, and scalable LiDAR annotation tailored to your domain.
            </p>
            <div className="pt-6">
                <Link to="/contact">
                   <button className="inline-flex items-center gap-3 bg-brand-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-brand-500 transition-all">
                      Contact Our Team <ArrowRight size={20} />
                   </button>
                </Link>
            </div>
        </div>
      </section>

    </div>
  );
};

export default Lidar3DAnnotation;
