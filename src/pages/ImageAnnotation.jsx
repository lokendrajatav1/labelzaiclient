import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Target, Layers, Box, Zap, Navigation2, MousePointer2, Scan, Frame, Type } from 'lucide-react';
import { Link } from 'react-router-dom';

const ImageAnnotation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const annotationServices = [
    {
      title: "Bounding Boxes (2D & Rotated)",
      description:
        "Bounding box annotation is used to detect and localize objects within images or video frames by drawing precise rectangular boundaries around them. Standard 2D bounding boxes align horizontally and vertically, making them ideal for common object detection tasks. For objects that appear tilted or at an angle, rotated bounding boxes provide tighter, orientation-aware labeling for higher accuracy.",
      image: "/imageannotation/bounding_boxes_2d_rotated.png",
      features: [
        "Precision Boundaries",
        "Orientation Awareness",
        "Object Localization"
      ],
      icon: <Frame />
    },
    {
      title: "Semantic Segmentation",
      description:
        "Semantic segmentation is a pixel-level data annotation technique that classifies every pixel in an image into predefined categories, enabling AI models to understand objects and their precise boundaries. It is widely used in applications such as autonomous driving, medical imaging, agriculture, and smart surveillance.",
      image: "/imageannotation/semantic_segmentation_vision.png",
      features: [
        "Pixel-Level Classification",
        "Boundary Understanding",
        "Scene Parsing"
      ],
      icon: <Scan />
    },
    {
      title: "Instance Segmentation",
      description:
        "Instance Segmentation is an advanced image annotation technique that not only identifies object categories but also distinguishes each individual object separately at the pixel level. Unlike traditional bounding boxes or semantic segmentation, this method creates precise masks for every object instance, enabling AI models to understand complex scenes with exceptional accuracy.",
      image: "/imageannotation/instance_segmentation_vision.png",
      features: [
        "Individual Object Masks",
        "Instance-Level Identification",
        "Complex Scene Understanding"
      ],
      icon: <Target />
    },
    {
      title: "Polygon Annotation",
      description:
        "Polygon annotation enables pixel-level accuracy for complex object shapes that standard boxes cannot capture. Our expert annotators carefully outline irregular objects—such as pedestrians, vehicles, machinery, medical structures, and retail items—using multi-point polygons to preserve true boundaries and fine details. This method significantly improves model performance in applications like autonomous driving, medical imaging, agriculture, and instance segmentation.",
      image: "/imageannotation/polygon_annotation_vision.png",
      features: [
        "Irregular Shape Outlining",
        "Multi-Point Precision",
        "Fine Detail Preservation"
      ],
      icon: <MousePointer2 />
    },
    {
      title: "Keypoint & Landmark Annotation",
      description:
        "Transform movement, structure, and spatial relationships into precise machine intelligence with our Keypoint & Landmark Annotation services. We accurately label critical points on humans, objects, and environments to enable advanced applications such as pose estimation, facial recognition, gesture tracking, medical analysis, AR/VR, and sports analytics. With pixel-level precision, multi-level quality checks, and scalable workflows.",
      image: "/imageannotation/keypoint_landmark_vision.png",
      features: [
        "Pose Estimation",
        "Facial Landmark Detection",
        "Spatial Relationship Mapping"
      ],
      icon: <Sparkles />
    },
    {
      title: "Image Classification & Tagging",
      description:
        "Transform visual data into structured intelligence with precise image classification and tagging. We categorize and label images using human-in-the-loop quality control to ensure high accuracy, consistency, and scalability. From object-based tagging to multi-label classification across large datasets.",
      image: "/imageannotation/image_classification_tagging.png",
      features: [
        "Multi-Label Classification",
        "Taxonomy Building",
        "Data Categorization"
      ],
      icon: <Box />
    },
    {
      title: "Object Tracking (Frame-Level)",
      description:
        "We provide precise frame-by-frame object tracking that follows targets seamlessly across image sequences and video frames. Our annotators maintain consistent object IDs, accurately capturing movement, occlusion, scale changes, and complex interactions over time. This temporal accuracy enables AI models to understand motion patterns, behavior, and object continuity—essential for applications such as autonomous driving, surveillance, sports analytics, and robotics.",
      image: "/imageannotation/object_tracking_vision.png",
      features: [
        "Temporal Accuracy",
        "Consistent Object IDs",
        "Motion Pattern Understanding"
      ],
      icon: <Layers />
    },
    {
      title: "OCR & Text-in-Image Labeling",
      description:
        "Transform visual text into structured intelligence with our high-precision OCR and text-in-image annotation services. We accurately detect, extract, and label printed, handwritten, and scene text from images, documents, videos, and real-world environments. From bounding boxes and polygons to text transcription and language tagging, our human-in-the-loop workflows ensure exceptional accuracy across multiple formats and languages.",
      image: "/imageannotation/ocr_text_labeling.png",
      features: [
        "Text Detection & Extraction",
        "Handwriting Recognition",
        "Multi-Language Support"
      ],
      icon: <Type />
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
            <span className="text-brand-600 font-bold">IMAGE ANNOTATION</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-600 text-[13px] font-semibold mb-8 border border-brand-100/50 uppercase tracking-widest">
            <Sparkles size={14} className="animate-pulse" />
            Computer Vision Focus
          </div>

          <h1 className="text-4xl md:text-7xl font-semibold text-slate-900 leading-[1.05] tracking-tight mb-8">
            Superior Image <br className="hidden md:block" />
            <span className="text-brand-600 italic">Annotation</span> Expertise.
          </h1>
          
          <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto mb-12">
            Transforming raw visual data into pixel-perfect intelligence. We provide the ground truth required for machines to see and interact with the world reliably.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <button className="flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-full font-semibold text-base hover:bg-brand-600 transition-all hover:shadow-xl hover:shadow-brand-600/20 active:scale-95">
                <ArrowRight size={18} /> Start Your Project
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
                      <span className="text-brand-600 text-[11px] font-bold uppercase tracking-[0.3em]">Operational Mastery</span>
                   </div>
                   <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight uppercase">
                     Precision <br /> <span className="text-brand-600 font-bold">Annotated</span> Data.
                   </h2>
                   <p className="text-slate-700 text-xl font-medium leading-relaxed italic">
                     "At LabelzAI, we outline the world one pixel at a time. Our mission is to provide the highest-fidelity visual datasets in the industry."
                   </p>
                </div>
                
                <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                   {[
                     { label: "OBJECTS", val: "Precise Localization" },
                     { label: "GEOMETRY", val: "Irregular Shape Polygons" },
                     { label: "PIXELS", val: "Semantic Segmentation" },
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

      {/* 3. Deep-Dive Services Grid - Alternating but Styled */}
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
                
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-4">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-white text-[10px] font-bold group-hover:bg-brand-600 transition-colors">
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
                          className="w-full aspect-[4/3] object-cover"
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
                  Quality <br /><span className="text-brand-400 font-bold">Verification</span> <br /> Pipeline.
                </h2>
                <div className="h-2 w-24 bg-brand-500"></div>
                <p className="text-slate-300 text-xl font-medium leading-relaxed max-w-xl italic">
                  "Excellence is not an act, but a habit. We verify every single frame through a multi-layer QA hub to ensure absolute zero-compromise precision."
                </p>
                
                <div className="grid grid-cols-2 gap-12 pt-8">
                    <div className="space-y-3">
                       <div className="text-5xl font-bold text-brand-400 font-mono tracking-tighter">99.9%</div>
                       <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Target Accuracy</div>
                    </div>
                    <div className="space-y-3">
                       <div className="text-5xl font-bold text-brand-400 font-mono tracking-tighter">ISO</div>
                       <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Certified Protocols</div>
                    </div>
                </div>
             </div>
             
             <div className="grid grid-cols-1 gap-4">
                {[
                   { step: "01", title: "Annotation", val: "Expert Domain Labeling" },
                   { step: "02", title: "Self-Review", label: "Verification Level 1" },
                   { step: "03", title: "QA-Verify", label: "Verification Level 2" },
                   { step: "04", title: "Final Audit", label: "Random Sample Validation" }
                ].map((item, i) => (
                   <div key={i} className="flex justify-between items-center p-8 bg-slate-900 border border-slate-800 rounded-3xl group hover:border-brand-600 transition-all">
                      <div className="space-y-1">
                         <div className="text-brand-400 font-mono text-xs font-bold uppercase tracking-widest opacity-60">Phase 0{i+1}</div>
                         <div className="text-white font-bold text-xl tracking-tight uppercase">{item.title}</div>
                      </div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-brand-400 transition-colors">
                         {item.val || item.label}
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
             Ready to Ship <br /> <span className="text-brand-600 italic">Flawless</span> Vision.
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

export default ImageAnnotation;
