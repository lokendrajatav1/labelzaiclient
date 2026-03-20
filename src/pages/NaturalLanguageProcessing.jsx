import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Languages, MessageSquare, ShieldCheck, Zap, Globe, Lock, MessageCircle, FileText, Search, ShieldAlert, Key, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const NaturalLanguageProcessing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const annotationServices = [
    {
      title: "Text Classification & Categorization",
      description:
        "We categorize and label unstructured text into predefined topics, intents, priority levels, and industry domains. This structured data powers recommendation engines, automated ticketing systems, and content organization tools.",
      image: "/nlpservice/text-classification.png",
      features: ["Topic Identification", "Intent Mapping", "Priority Assignment"],
      icon: <FileText />
    },
    {
      title: "Named Entity Recognition (NER)",
      description:
        "Our experts identify and extract specific entities from text, including people, locations, organizations, dates, product names, as well as specialized medical and financial terminology. Essential for information extraction and knowledge graph construction.",
      image: "/nlpservice/ner.png",
      features: ["Dynamic Entity Extraction", "Domain-Specific Labels", "Entity Linkage Data"],
      icon: <Target />
    },
    {
      title: "Sentiment & Emotion Analysis",
      description:
        "Detecting the underlying tone and emotional state in human communication. We perform polarity detection (positive/negative/neutral) and provide fine-grained emotional tagging (e.g., frustration, excitement, satisfaction) to help AI systems respond with empathy.",
      image: "/nlpservice/sentiment-analysis.png",
      features: ["Polarity Detection", "Fine-Grained Emotion Tagging", "Vocal Nuance Context"],
      icon: <Languages />
    },
    {
      title: "Part-of-Speech (POS) & Syntax",
      description:
        "Providing the linguistic building blocks for advanced language models. We label words according to their grammatical function and structural relationship within sentences, enabling machines to parse complex grammar and syntax.",
      image: "/nlpservice/pos-annotation.png",
      features: ["Grammatical Labeling", "Dependency Parsing", "Structural Text Analysis"],
      icon: <FileText />
    },
    {
      title: "Conversation & Dialogue Annotation",
      description:
        "Transforming multi-turn interactions into structured datasets for chatbots and virtual assistants. We track context across turns, label speaker roles, and evaluate response quality to train more coherent conversational agents.",
      image: "/nlpservice/conversation-annotation.png",
      features: ["Multi-Turn Context Tracking", "Speaker Role Assignment", "Response Coherence Evaluation"],
      icon: <MessageCircle />
    },
    {
      title: "Content Moderation & Toxicity",
      description:
        "Building safer online environments by labeling harmful, offensive, or policy-violating language. Our annotators provide high-confidence datasets to filter hate speech, harassment, and inappropriate content.",
      image: "/nlpservice/content-moderation.png",
      features: ["Policy-Based Filtering", "Harassment Detection", "Safety-First AI Training"],
      icon: <ShieldAlert />
    },
    {
      title: "Keyphrase & Summary Tagging",
      description:
        "Highlighting critical information and generating human-verified summaries within text corpora. This data powers intelligent search systems, knowledge management platforms, and automated document summarization models.",
      image: "/nlpservice/keyphrase-tagging.png",
      features: ["Critical Information Extraction", "Human-Verified Condensation", "Semantic Search Mapping"],
      icon: <Key />
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
            <span className="text-brand-600 font-bold uppercase">NLP Datasets</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-600 text-[13px] font-semibold mb-8 border border-brand-100/50 uppercase tracking-widest">
            <Sparkles size={14} className="animate-pulse" />
            Language Intelligence
          </div>

          <h1 className="text-4xl md:text-7xl font-semibold text-slate-900 leading-[1.05] tracking-tight mb-8">
            Superior NLP <br className="hidden md:block" />
            <span className="text-brand-600 italic">Annotation</span> Expertise.
          </h1>
          
          <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto mb-12">
            Transforming unstructured communication into training-ready datasets. We help machines understand language, context, and intent with human-level nuance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <button className="flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-full font-semibold text-base hover:bg-brand-600 transition-all hover:shadow-xl hover:shadow-brand-600/20 active:scale-95">
                <ArrowRight size={18} /> Scale Your Model
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
                      <span className="text-brand-600 text-[11px] font-bold uppercase tracking-[0.3em]">Linguistic Mastery</span>
                   </div>
                   <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight uppercase">
                     Domain <br /> <span className="text-brand-600 font-bold">In-Context.</span>
                   </h2>
                   <p className="text-slate-700 text-xl font-medium leading-relaxed italic">
                     "Understanding language is about more than words—it's about the nuance of human intent. We provide the linguistic bridge for next-gen LLMs."
                   </p>
                </div>
                
                <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                   {[
                     { label: "ENTITIES", val: "Names, Dates, Locations" },
                     { label: "SENTIMENT", val: "Nuanced Tone Recognition" },
                     { label: "STRUCTURE", val: "Linguistic Tree Parsing" },
                     { label: "SECURITY", val: "Toxicity & Policy Filter" }
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
                   Linguistic <br /><span className="text-brand-400 font-bold italic">Refinement</span> <br /> Pipeline.
                </h2>
                <div className="h-2 w-24 bg-brand-500"></div>
                <p className="text-slate-300 text-xl font-medium leading-relaxed max-w-xl italic opacity-80">
                  "Scaling language data requires domain-trained experts. We verify every label through a multi-stage consensus workflow for ultimate reliability."
                </p>
                
                <div className="grid grid-cols-2 gap-12 pt-8">
                    <div className="space-y-3">
                       <div className="text-5xl font-bold text-brand-400 font-mono tracking-tighter">99%+</div>
                       <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Precision Rate</div>
                    </div>
                    <div className="space-y-3">
                       <div className="text-5xl font-bold text-brand-400 font-mono tracking-tighter">50+</div>
                       <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Global Dialects</div>
                    </div>
                </div>
             </div>
             
             <div className="grid grid-cols-1 gap-4">
                {[
                   { step: "01", title: "Guideline Alignment", val: "Linguistic Logic Setup" },
                   { step: "02", title: "Expert Annotation", label: "Domain-Trained Review" },
                   { step: "03", title: "Consensus Check", label: "Multi-Review Adjudication" },
                   { step: "04", title: "Metadata Audit", label: "Structure Verification" }
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
             Ready to Build <br /> <span className="text-brand-600 italic">Advanced</span> Intelligence.
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

export default NaturalLanguageProcessing;
