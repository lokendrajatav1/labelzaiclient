import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Search, Tags, Layers, ShieldCheck, Zap, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataClassification = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const classificationServices = [
    {
      title: "Text Classification",
      description:
        "Organizing raw text into meaningful categories like intent, topic, sentiment, and document type. Essential for enterprise search, helpdesk automation, and brand monitoring.",
      features: [
        "Intent Mapping",
        "Sentiment Scoring",
        "Document Categorization"
      ],
      icon: <Search size={24} />
    },
    {
      title: "Image Classification",
      description:
        "Grouping images into specific sets based on object category, product type, or scene context. High-accuracy labels for visual search and inventory management.",
      features: [
        "Object Recognition",
        "Product Tagging",
        "Scene Classification"
      ],
      icon: <Tags size={24} />
    },
    {
      title: "Audio Classification",
      description:
        "Processing sound data to identify spoken language, speaker types, and distinct acoustic events. Powering intelligence for IVR and security monitoring.",
      features: [
        "Language Identification",
        "Speaker Grouping",
        "Acoustic Event Detection"
      ],
      icon: <Database size={24} />
    },
    {
      title: "Video Classification",
      description:
        "Assigning context and activity labels to video sequences. Identifying what is happening and the intent behind actions at both the frame and sequence level.",
      features: [
        "Activity Recognition",
        "Context Awareness",
        "Event Tagging"
      ],
      icon: <Layers size={24} />
    },
    {
      title: "Multi-Label & Hierarchical",
      description:
        "Handling complex datasets that belong to multiple categories or exist within nested taxonomies. Specialized for enterprise-grade data architecture.",
      features: [
        "Nested Taxonomy Support",
        "Multi-Tag Assignment",
        "Semantic Relationship Mapping"
      ],
      icon: <Layers size={24} />
    },
    {
      title: "Custom Taxonomy Design",
      description:
        "Collaboration on proprietary ontology and taxonomy building to ensure the labeled data perfectly fits your internal model architectures.",
      features: [
        "Ontology Development",
        "Label Standard Design",
        "Domain-Specific Categories"
      ],
      icon: <Zap size={24} />
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
            <span className="text-brand-600">Data Classification</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100/50 text-brand-600 text-[11px] font-semibold uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            Structured Data Excellence
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl">
            Data Classification Services for High-Quality AI and ML Models
          </h1>
          
          <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-8 max-w-4xl">
            Data Classification is a critical data annotation process that organizes raw and unstructured data into meaningful categories to improve the accuracy and performance of AI and machine learning systems. Our Data Classification services help businesses transform text, images, audio, and video into structured datasets that enable faster training, better predictions, and smarter automation.
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

      {/* Intro Section - Description & Expertise */}
      <div className="relative z-10 -mt-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-brand-600"></div>
                <span className="text-brand-600 text-[11px] font-semibold uppercase tracking-[0.3em]">Our Approach</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-950 tracking-tight mb-6">
                Precise Classification Solutions
              </h2>
              
              <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-12">
                We provide scalable and precise classification solutions tailored to your business needs. Using customized taxonomies, domain-trained annotators, and multi-level quality assurance, we ensure consistent, bias-controlled, and high-accuracy labeled data for a wide range of industries including healthcare, finance, e-commerce, automotive, media, and customer support. 
                <br /><br />
                Our team supports single-label, multi-label, and hierarchical classification workflows to handle complex datasets with deep semantic meaning.
              </p>
              
              <div className="h-[1px] w-full bg-slate-100 mb-12"></div>
              
              <h3 className="text-2xl font-semibold text-slate-900 mb-8">Classification Capabilities:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {[
                  { label: "Text", val: "Intent, topic, sentiment, & document categorization" },
                  { label: "Image", val: "Object category, product type, & scene labels" },
                  { label: "Audio", val: "Language, speaker type, & acoustic events" },
                  { label: "Video", val: "Activity, event tagging, & context mapping" },
                  { label: "Architectures", val: "Multi-label and hierarchical workflows" },
                  { label: "Consulting", val: "Custom taxonomy and ontology design" },
                  { label: "QA Protocol", val: "Multi-stage validation and quality control" },
                  { label: "Workflow", val: "Secure and scalable annotation pipelines" }
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

      {/* Benefits Section - Premium Grid */}
      <div className="py-24 bg-brand-50/30 mt-16">
        <div className="max-w-7xl mx-auto px-6">
           <div className="max-w-2xl mb-16">
              <h2 className="text-3xl md:text-5xl font-semibold text-slate-950 tracking-tight mb-4">Benefits of Our Services</h2>
              <p className="text-slate-500 font-medium text-lg text-left">Optimizing your machine learning lifecycle with structured data.</p>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Increase Accuracy", desc: "Improves machine learning model accuracy with consistent labels." },
                { title: "Accelerate Deployment", desc: "Enables faster AI training and seamless production deployment." },
                { title: "Data Cleanliness", desc: "Reduces noise and eliminiates data inconsistencies." },
                { title: "Large Scale Ready", desc: "Built to support large-scale and complex taxonomic datasets." },
                { title: "Industrial Standards", desc: "Ensures industry-specific labeling and compliance standards." },
                { title: "Scalable Operations", desc: "Cost-effective and scalable human-in-the-loop operations." }
              ].map((item, i) => (
                  <div key={i} className="group relative p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:border-brand-100 hover:shadow-2xl hover:shadow-brand-600/5 transition-all duration-500">
                      <div className="absolute top-6 right-8 text-slate-100 font-bold text-5xl group-hover:text-brand-50 transition-colors pointer-events-none">0{i + 1}</div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                            <ShieldCheck size={22} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-950 mb-4 tracking-tight leading-tight">{item.title}</h3>
                        <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed group-hover:text-slate-600 transition-colors">{item.desc}</p>
                      </div>
                  </div>
              ))}
           </div>
        </div>
      </div>

      {/* Services List - Premium Alternating Layout */}
      <div className="mt-16 space-y-0">
        {classificationServices.map((service, index) => (
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
                 <div className="relative group">
                    <div className="aspect-[16/9] bg-slate-950 rounded-[2.5rem] p-10 flex flex-col justify-center relative overflow-hidden shadow-sm border border-slate-800">
                        <div className="text-brand-600 font-mono text-[10px] tracking-widest uppercase mb-4">Structured_Output_JSON</div>
                        <div className="space-y-3 font-mono text-sm">
                            <div className="text-white"><span className="text-brand-400">"label"</span>: <span className="text-green-400">"{service.title.split(' ')[0]}"</span></div>
                            <div className="text-white"><span className="text-brand-400">"metadata"</span>: {"{"}</div>
                            <div className="pl-4 text-white"><span className="text-brand-400">"confidence"</span>: <span className="text-accent-cyan">0.998</span></div>
                            <div className="text-white">{"}"}</div>
                        </div>
                       <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataClassification;
