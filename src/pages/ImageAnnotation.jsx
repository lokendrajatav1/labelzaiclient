import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ImageAnnotation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Updated annotation services with detailed descriptions
  const annotationServices = [
    {
      title: "Bounding Boxes (2D & Rotated)",
      description:
        "Bounding box annotation is used to detect and localize objects within images or video frames by drawing precise rectangular boundaries around them. Standard 2D bounding boxes align horizontally and vertically, making them ideal for common object detection tasks. For objects that appear tilted or at an angle, rotated bounding boxes provide tighter, orientation-aware labeling for higher accuracy.",
      image: "/imageannotation/bounding-box1.png",
      features: [
        "Precision Boundaries",
        "Orientation Awareness",
        "Object Localization"
      ]
    },
    {
      title: "Semantic Segmentation",
      description:
        "Semantic segmentation is a pixel-level data annotation technique that classifies every pixel in an image into predefined categories, enabling AI models to understand objects and their precise boundaries. It is widely used in applications such as autonomous driving, medical imaging, agriculture, and smart surveillance.",
      image: "/imageannotation/semantic-segmentation.png",
      features: [
        "Pixel-Level Classification",
        "Boundary Understanding",
        "Scene Parsing"
      ]
    },
    {
      title: "Instance Segmentation",
      description:
        "Instance Segmentation is an advanced image annotation technique that not only identifies object categories but also distinguishes each individual object separately at the pixel level. Unlike traditional bounding boxes or semantic segmentation, this method creates precise masks for every object instance, enabling AI models to understand complex scenes with exceptional accuracy.",
      image: "/imageannotation/instance-segmentation.png",
      features: [
        "Individual Object Masks",
        "Instance-Level Identification",
        "Complex Scene Understanding"
      ]
    },
    {
      title: "Polygon Annotation",
      description:
        "Polygon annotation enables pixel-level accuracy for complex object shapes that standard boxes cannot capture. Our expert annotators carefully outline irregular objects—such as pedestrians, vehicles, machinery, medical structures, and retail items—using multi-point polygons to preserve true boundaries and fine details. This method significantly improves model performance in applications like autonomous driving, medical imaging, agriculture, and instance segmentation.",
      image: "/imageannotation/polygon-annotation.png",
      features: [
        "Irregular Shape Outlining",
        "Multi-Point Precision",
        "Fine Detail Preservation"
      ]
    },
    {
      title: "Keypoint & Landmark Annotation",
      description:
        "Transform movement, structure, and spatial relationships into precise machine intelligence with our Keypoint & Landmark Annotation services. We accurately label critical points on humans, objects, and environments to enable advanced applications such as pose estimation, facial recognition, gesture tracking, medical analysis, AR/VR, and sports analytics. With pixel-level precision, multi-level quality checks, and scalable workflows.",
      image: "/imageannotation/keypoint-and-landmark-annotation1.png",
      features: [
        "Pose Estimation",
        "Facial Landmark Detection",
        "Spatial Relationship Mapping"
      ]
    },
    {
      title: "Image Classification & Tagging",
      description:
        "Transform visual data into structured intelligence with precise image classification and tagging. We categorize and label images using human-in-the-loop quality control to ensure high accuracy, consistency, and scalability. From object-based tagging to multi-label classification across large datasets.",
      image: "/imageannotation/image-classification-and -tagging.png",
      features: [
        "Multi-Label Classification",
        "Taxonomy Building",
        "Data Categorization"
      ]
    },
    {
      title: "Object Tracking (Frame-Level Annotation for Image Sequences)",
      description:
        "We provide precise frame-by-frame object tracking that follows targets seamlessly across image sequences and video frames. Our annotators maintain consistent object IDs, accurately capturing movement, occlusion, scale changes, and complex interactions over time. This temporal accuracy enables AI models to understand motion patterns, behavior, and object continuity—essential for applications such as autonomous driving, surveillance, sports analytics, and robotics. With multi-layer quality checks and scalable workflows.",
      image: "/imageannotation/object-tracking.png",
      features: [
        "Temporal Accuracy",
        "Consistent Object IDs",
        "Motion Pattern Understanding"
      ]
    },
    {
      title: "OCR & Text-in-Image Labeling",
      description:
        "Transform visual text into structured intelligence with our high-precision OCR and text-in-image annotation services. We accurately detect, extract, and label printed, handwritten, and scene text from images, documents, videos, and real-world environments. From bounding boxes and polygons to text transcription and language tagging, our human-in-the-loop workflows ensure exceptional accuracy across multiple formats and languages. Ideal for document digitization, ID verification, retail automation, autonomous systems, and AI-powered search, our scalable solutions convert visual content into reliable, machine-ready data.",
      image: "/imageannotation/ocr.png",
      features: [
        "Text Detection & Extraction",
        "Handwriting Recognition",
        "Multi-Language Support"
      ]
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen pb-8 font-sans selection:bg-brand-100 selection:text-brand-900">
      {/* Hero - Simple & Premium Center Layout */}
      <div className="relative bg-white overflow-hidden pt-24 pb-16">
        {/* Soft Mesh Gradient background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-50/60 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
          {/* Breadcrumb - Minimal */}
          <div className="flex items-center gap-2 text-slate-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
            <Link to="/" className="hover:text-brand-600 transition-colors">Home</Link>
            <ChevronRight size={10} strokeWidth={3} />
            <span>Services</span>
            <ChevronRight size={10} strokeWidth={3} />
            <span className="text-brand-600">Image Annotation</span>
          </div>

          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100/50 text-brand-600 text-[11px] font-semibold uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            Computer Vision Data
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-4">
            Image Annotation Services
          </h1>
          
          <span className="block text-brand-600 text-lg md:text-2xl font-semibold mb-6 italic opacity-80">
            Precision That Teaches Machines to See
          </span>

          <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-10 max-w-2xl">
            At LabelzAI, we transform raw images into structured intelligence that powers computer vision systems. Our annotation services help AI models recognize, interpret, and make decisions from visual data with human-level accuracy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <button className="flex items-center gap-3 bg-slate-900 text-white px-10 py-3.5 rounded-full font-semibold text-base hover:bg-brand-600 transition-all hover:shadow-xl hover:shadow-brand-600/20 active:scale-95">
                <ArrowRight size={18} /> Start a Project
              </button>
            </Link>
            <Link to="/services">
              <button className="flex items-center gap-3 bg-white border border-slate-200 text-slate-900 px-10 py-3.5 rounded-full font-semibold text-base hover:bg-slate-50 transition-all active:scale-95">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Simple & Clean Intro Section */}
      <div className="relative z-10 -mt-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-brand-600"></div>
                <span className="text-brand-600 text-[11px] font-bold uppercase tracking-[0.3em]">Expertise</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-950 tracking-tight mb-8">
                What We Annotate:
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {[
                  { label: "Bounding Boxes", val: "Precise object localization (2D & rotated)" },
                  { label: "Semantic Segmentation", val: "Pixel-level category mapping" },
                  { label: "Instance Segmentation", val: "Individual object masks" },
                  { label: "Polygon Annotation", val: "Irregular shape outlining" },
                  { label: "Keypoint & Landmark", val: "Critical point labeling" },
                  { label: "Image Classification", val: "Multi-label categorization" },
                  { label: "Object Tracking", val: "Frame-level tracking for sequences" },
                  { label: "OCR Labeling", val: "Text detection & extraction" }
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

      {/* Services List - Premium Alternating Layout */}
      <div className="mt-16 space-y-0">
        {annotationServices.map((service, index) => (
          <div
            key={index}
            className={`py-12 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50 border-y border-slate-100'}`}
          >
            <div className={`max-w-7xl mx-auto px-3 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}>
              {/* Text Content */}
              <div className="flex-1 space-y-2">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-brand-200"></span>
                    <span className="text-brand-600 font-bold tracking-[0.2em] text-[10px] uppercase">Service 0{index + 1}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-slate-950 leading-tight tracking-tight">
                    {service.title}
                  </h2>
                </div>
                <p className="text-slate-900 text-sm md:text-base leading-relaxed font-semibold max-w-xl">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 pt-2">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3 group/feat">
                      <div className="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 border border-brand-100">
                        <CheckCircle2 size={12} strokeWidth={3} />
                      </div>
                      <span className="text-slate-700 font-semibold text-xs tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <Link to="/contact">
                    <button className="group flex items-center gap-2 px-1 py-1 pr-4 rounded-full border border-slate-200 hover:border-brand-600 hover:bg-brand-50 transition-all text-slate-950 font-semibold text-xs">
                      <div className="w-7 h-7 rounded-full bg-slate-900 flex items-center justify-center text-white group-hover:bg-brand-600 transition-colors">
                        <ArrowRight size={14} />
                      </div>
                      Request Samples
                    </button>
                  </Link>
                </div>
              </div>
              {/* Image Preview - Refined with border glow */}
              <div className="flex-1 w-full max-w-md">
                <div className="relative group">
                  <div className="rounded-2xl overflow-hidden border border-white relative bg-white ring-1 ring-slate-200/30">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle scanline overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,4px_100%] pointer-events-none opacity-10 group-hover:opacity-0 transition-opacity"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modern Workflow Section */}
      <div className="py-16 bg-slate-950 overflow-hidden relative">
        {/* Abstract Background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-3 relative z-10 text-center">
          <div className="mb-10">
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-3">Our Delivery Workflow</h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">Ensuring absolute data integrity through a rigorous multi-stage pipeline.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            {[
              { step: "01", title: "Project Ingestion", desc: "We align on guidelines and security protocols." },
              { step: "02", title: "Annotation Phase", desc: "Expert labeling by domain specialists." },
              { step: "03", title: "Quality Audit", desc: "Multi-layer verification for 99%+ precision." },
              { step: "04", title: "Secure Delivery", desc: "Ready-to-train datasets in your format." }
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
      {/* Modern CTA */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-3">
          <div className="bg-gradient-to-br from-brand-600 to-brand-900 rounded-[2rem] p-6 md:p-12 text-center relative overflow-hidden shadow-xl shadow-brand-900/20 group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[80px] -mr-40 -mt-40 group-hover:bg-white/20 transition-all duration-700"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-5xl font-semibold mb-6 text-white tracking-tighter leading-[1.1]"> Ready to power your AI models with precision data?</h2>
              <p className="text-white/70 text-lg md:text-xl mb-8 leading-relaxed font-medium">
                Don't settle for mediocre data. Partner with LabelzAI to build the foundation for your next groundbreaking AI breakthrough.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="w-full bg-white text-brand-900 hover:bg-brand-50 px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-xl hover:-translate-y-1 active:scale-95">
                    Start My Project
                  </button>
                </Link>
                <Link to="/career" className="w-full sm:w-auto">
                  <button className="w-full bg-brand-950/20 hover:bg-brand-950/40 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all border border-white/20 active:scale-95 backdrop-blur-md">
                    Explore Careers
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAnnotation;
