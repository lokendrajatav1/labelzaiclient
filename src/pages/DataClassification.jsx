import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Search, Tags, Layers, ShieldCheck, Zap, Database, Target, Box, FileText, Activity, MessageSquare, ClipboardCheck, BarChart3, Clock, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataClassification = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const classificationServices = [
    {
      title: "Text Classification",
      description:
        "Organizing raw text into meaningful categories like intent, topic, sentiment, and document type. Essential for enterprise search, helpdesk automation, and brand monitoring. We handle massive text corpora with domain-specific accuracy.",
      image: "/dataclassification/text-classification.png",
      features: [
        "Intent Mapping",
        "Sentiment Scoring",
        "Document Categorization"
      ],
      icon: <FileText />
    },
    {
      title: "Image Classification",
      description:
        "Grouping images into specific sets based on object category, product type, or scene context. High-accuracy labels for visual search, automated inventory management, and demographic analytics.",
      image: "/dataclassification/image-classification.png",
      features: [
        "Object Recognition",
        "Product Tagging",
        "Scene Classification"
      ],
      icon: <Tags />
    },
    {
      title: "Audio Classification",
      description:
        "Processing sound data to identify spoken language, speaker types, and distinct acoustic events. Powering intelligence for IVR systems, security monitoring, and sound-based industrial maintenance.",
      image: "/dataclassification/audio-classification.png",
      features: [
        "Language Identification",
        "Speaker Grouping",
        "Acoustic Event Detection"
      ],
      icon: <Database />
    },
    {
      title: "Video Classification",
      description:
        "Assigning context and activity labels to video sequences. Identifying what is happening and the intent behind actions at both the frame and sequence level for surveillance and media analytics.",
      image: "/dataclassification/video-classification.png",
      features: [
        "Activity Recognition",
        "Context Awareness",
        "Event Tagging"
      ],
      icon: <Activity />
    },
    {
      title: "Multi-Label & Hierarchical",
      description:
        "Handling complex datasets that belong to multiple categories or exist within nested taxonomies. Specialized for enterprise-grade data architecture where items don't fit into single-label boxes.",
      image: "/dataclassification/multi-label.png",
      features: [
        "Nested Taxonomy Support",
        "Multi-Tag Assignment",
        "Semantic Relationship Mapping"
      ],
      icon: <Layers />
    },
    {
      title: "Custom Taxonomy Design",
      description:
        "Collaboration on proprietary ontology and taxonomy building to ensure the labeled data perfectly fits your internal model architectures. We help define the logic behind your categories.",
      image: "/dataclassification/taxonomy-design.png",
      features: [
        "Ontology Development",
        "Label Standard Design",
        "Domain-Specific Categories"
      ],
      icon: <ClipboardCheck />
    }
  ];

  const benefits = [
    { title: "Increase Accuracy", desc: "Improves machine learning model accuracy with consistent labels.", icon: <Target className="text-brand-600" size={24} /> },
    { title: "Accelerate Deployment", desc: "Enables faster AI training and seamless production deployment.", icon: <Zap className="text-brand-600" size={24} /> },
    { title: "Data Cleanliness", desc: "Reducess noise and eliminiates data inconsistencies.", icon: <ShieldCheck className="text-brand-600" size={24} /> },
    { title: "Large Scale Ready", desc: "Built to support large-scale and complex taxonomic datasets.", icon: <Database className="text-brand-600" size={24} /> },
    { title: "Industrial Standards", desc: "Ensures industry-specific labeling and compliance standards.", icon: <ClipboardCheck className="text-brand-600" size={24} /> },
    { title: "Scalable Operations", desc: "Cost-effective and scalable human-in-the-loop operations.", icon: <BarChart3 className="text-brand-600" size={24} /> }
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
            <span className="text-brand-600 font-bold uppercase">Data Classification</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-600 text-[13px] font-semibold mb-8 border border-brand-100/50 uppercase tracking-widest">
            <Sparkles size={14} className="animate-pulse" />
            Structured Intelligence
          </div>

          <h1 className="text-4xl md:text-7xl font-semibold text-slate-900 leading-[1.05] tracking-tight mb-8">
            Advanced <span className="text-brand-600 italic">Data</span> <br className="hidden md:block" />
            Classification Systems.
          </h1>
          
          <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto mb-12">
            Translating chaos into order. We transform unstructured noise into precisely categorized datasets that power faster training and smarter predictions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <button className="flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-full font-semibold text-base hover:bg-brand-600 transition-all hover:shadow-xl hover:shadow-brand-600/20 active:scale-95">
                <ArrowRight size={18} /> Structure Your Data
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
                      <span className="text-brand-600 text-[11px] font-bold uppercase tracking-[0.3em]">Operational Logic</span>
                   </div>
                   <h2 className="text-3xl md:text-5xl font-semibold text-slate-950 tracking-tight leading-tight uppercase">
                     Structural <br /> <span className="text-brand-600 font-bold">In-Categories.</span>
                   </h2>
                   <p className="text-slate-700 text-xl font-medium leading-relaxed italic">
                     "Data classification is the bedrock of machine learning. Without precise categories, models fail to generalize. We provide the taxonomic foundation."
                   </p>
                </div>
                
                <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                   {[
                     { label: "TEXT", val: "Intent & Sentiment Sync" },
                     { label: "VISUAL", val: "Object & Scene Grouping" },
                     { label: "AUDIO", val: "Dialect & Event Tags" },
                     { label: "ONTOLOGY", val: "Custom Taxonomy Design" }
                   ].map((item, i) => (
                     <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-2 group hover:border-brand-600 transition-colors text-left">
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
          {classificationServices.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-32 items-center`}
            >
              {/* Text Part */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-left">
                    <div className="p-3 bg-brand-50 text-brand-600 rounded-2xl">
                       {service.icon}
                    </div>
                    <span className="text-brand-600 font-bold text-[11px] uppercase tracking-widest">SERVICE 0{index + 1}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-semibold text-slate-950 leading-tight tracking-tight uppercase text-left">
                    {service.title}
                  </h2>
                </div>
                
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium opacity-90 text-left">
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

      {/* Benefits - Case Study Style Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-16 text-center">
          <div className="space-y-4">
             <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight uppercase">
               Strategic <span className="text-brand-600 font-bold">Advantages.</span>
             </h2>
             <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed italic opacity-80">
                Optimizing your machine learning lifecycle with structural data excellence.
             </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
             {benefits.map((item, i) => (
               <div key={i} className="group relative p-12 bg-white border border-slate-100 rounded-3xl hover:border-brand-600 hover:shadow-2xl hover:shadow-brand-600/10 transition-all duration-500">
                  <div className="absolute top-8 right-10 text-slate-100 font-bold text-6xl group-hover:text-brand-50 transition-colors pointer-events-none">0{i + 1}</div>
                  <div className="relative z-10 space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 shadow-lg shadow-brand-600/5">
                        {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-950 tracking-tight leading-tight uppercase underline decoration-brand-200 decoration-2 underline-offset-8 group-hover:decoration-brand-600 transition-all">{item.title}</h3>
                    <p className="text-slate-500 text-base font-medium leading-relaxed group-hover:text-slate-600 transition-colors opacity-90">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Dark Workflow Section */}
      <section className="py-24 md:py-32 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] uppercase">
                   Categorical <br /><span className="text-brand-400 font-bold italic">Verification</span> <br /> Pipeline.
                </h2>
                <div className="h-2 w-24 bg-brand-500"></div>
                <p className="text-slate-300 text-xl font-medium leading-relaxed max-w-xl italic opacity-80">
                   "Classification accuracy is the direct predictor of model performance. We deploy multi-stage domain audits to ensure 99%+ categorical precision."
                </p>
                
                <div className="grid grid-cols-2 gap-12 pt-8">
                    <div className="space-y-3">
                       <div className="text-5xl font-bold text-brand-400 font-mono tracking-tighter">99%+</div>
                       <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Categorical Precision</div>
                    </div>
                    <div className="space-y-3">
                       <div className="text-5xl font-bold text-brand-400 font-mono tracking-tighter">Scalable</div>
                       <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Ontology Design</div>
                    </div>
                </div>
             </div>
             
             <div className="grid grid-cols-1 gap-4">
                {[
                   { step: "01", title: "Ontology Setup", label: "Taxonomy Logic Calibration" },
                   { step: "02", title: "Human Review", label: "Expert Categorization" },
                   { step: "03", title: "Consensus QA", label: "Multi-Review Adjudication" },
                   { step: "04", title: "Metadata Export", label: "JSON/XML Structure Ready" }
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
             Ready to Structure <br /> <span className="text-brand-600 italic font-bold">Unstructured</span> Chaos.
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

export default DataClassification;
