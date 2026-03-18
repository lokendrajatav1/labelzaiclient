import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Languages, MessageSquare, ShieldCheck, Zap, Globe, Lock } from 'lucide-react';
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
      features: [
        "Topic Identification",
        "Intent Mapping",
        "Priority Assignment"
      ]
    },
    {
      title: "Named Entity Recognition (NER)",
      description:
        "Our experts identify and extract specific entities from text, including people, locations, organizations, dates, product names, as well as specialized medical and financial terminology. Essential for information extraction and knowledge graph construction.",
      features: [
        "Dynamic Entity Extraction",
        "Domain-Specific Labels",
        "Entity Linkage Data"
      ]
    },
    {
      title: "Sentiment & Emotion Analysis",
      description:
        "Detecting the underlying tone and emotional state in human communication. We perform polarity detection (positive/negative/neutral) and provide fine-grained emotional tagging (e.g., frustration, excitement, satisfaction) to help AI systems respond with empathy.",
      features: [
        "Polarity Detection",
        "Fine-Grained Emotion Tagging",
        "Vocal Nuance Context"
      ]
    },
    {
      title: "Part-of-Speech (POS) & Syntax Annotation",
      description:
        "Providing the linguistic building blocks for advanced language models. We label words according to their grammatical function and structural relationship within sentences, enabling machines to parse complex grammar and syntax.",
      features: [
        "Grammatical Labeling",
        "Dependency Parsing",
        "Structural Text Analysis"
      ]
    },
    {
      title: "Conversation & Dialogue Annotation",
      description:
        "Transforming multi-turn interactions into structured datasets for chatbots and virtual assistants. We track context across turns, label speaker roles, and evaluate response quality to train more coherent conversational agents.",
      features: [
        "Multi-Turn Context Tracking",
        "Speaker Role Assignment",
        "Response Coherence Evaluation"
      ]
    },
    {
      title: "Content Moderation & Toxicity Detection",
      description:
        "Building safer online environments by labeling harmful, offensive, or policy-violating language. Our annotators provide high-confidence datasets to filter hate speech, harassment, and inappropriate content.",
      features: [
        "Policy-Based Filtering",
        "Harassment Detection",
        "Safety-First AI Training"
      ]
    },
    {
      title: "Keyphrase & Summary Tagging",
      description:
        "Highlighting critical information and generating human-verified summaries within text corpora. This data powers intelligent search systems, knowledge management platforms, and automated document summarization models.",
      features: [
        "Critical Information Extraction",
        "Human-Verified Condensation",
        "Semantic Search Mapping"
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
            <span className="text-brand-600">NLP Annotation</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100/50 text-brand-600 text-[11px] font-semibold uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            Language Intelligence
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl">
            Natural Language Processing (NLP) Annotation Services
          </h1>
          
          <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-8 max-w-3xl">
            Power your AI with high-quality NLP annotation services designed to transform unstructured text and speech into structured, training-ready datasets. Our expert-driven workflows help businesses build intelligent systems that understand human language, context, and intent with precision.
          </p>

          <p className="text-base text-slate-500 font-medium leading-relaxed mb-10 max-w-3xl">
            At the core of modern AI, Natural Language Processing (NLP) enables applications such as chatbots, virtual assistants, search engines, sentiment analysis, document automation, and large language models (LLMs). Our scalable annotation solutions ensure accuracy, consistency, and domain relevance across diverse industries.
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

      {/* Intro Section - Capabilities */}
      <div className="relative z-10 -mt-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-brand-600"></div>
                <span className="text-brand-600 text-[11px] font-semibold uppercase tracking-[0.3em]">Capabilities</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-950 tracking-tight mb-8">
                Our NLP Annotation Capabilities:
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {[
                  { label: "Text Classification", val: "Topic, intent, & domain labeling" },
                  { label: "NER Extraction", val: "People, location, orgs, & dates" },
                  { label: "Sentiment & Emotion", val: "Fine-grained emotional tagging" },
                  { label: "Intent Detection", val: "Dialogue & goal-oriented mapping" },
                  { label: "POS & Syntax", val: "Linguistic structural parsing" },
                  { label: "Entity Relationship", val: "Mapping semantic connections" },
                  { label: "Toxicity Detection", val: "Policy-violating language filters" },
                  { label: "Speech-to-Text", val: "Transcription with diarization" }
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

      {/* Why Choose Us Section */}
      <div className="py-20 bg-slate-50/50 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-16">Why Choose Our NLP Annotation Services?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Expert Linguists", desc: "Domain-trained annotators for multi-industry precision.", icon: <Languages className="text-brand-600" size={24} /> },
              { title: "Multilingual Datasets", desc: "Native-level accuracy across major global languages.", icon: <Globe className="text-brand-600" size={24} /> },
              { title: "AI-Assisted Quality", desc: "Multi-level validation protocols for 99%+ precision.", icon: <Zap className="text-brand-600" size={24} /> },
              { title: "LLM Ready Scale", desc: "Scalable workflows built for training foundational models.", icon: <MessageSquare className="text-brand-600" size={24} /> },
              { title: "Secure Handling", desc: "Strict confidentiality and data protection protocols.", icon: <Lock className="text-brand-600" size={24} /> },
              { title: "Compliance Driven", desc: "Secure environment adhering to global data standards.", icon: <ShieldCheck className="text-brand-600" size={24} /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center mb-6 mx-auto">
                    {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-16">
                <div className="h-[1px] flex-1 bg-slate-100"></div>
                <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 whitespace-nowrap">Industry Use Cases</h2>
                <div className="h-[1px] flex-1 bg-slate-100"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: "Customer Support Automation", desc: "Automating ticketing and classification for enterprise helpdesks." },
                    { title: "Conversational AI", desc: "Training sophisticated chatbots with multi-turn dialogue logic." },
                    { title: "Voice Assistants", desc: "Intent and entity tagging for seamless voice interactions." },
                    { title: "Document Intelligence", desc: "Extracting structured data from complex legal and financial text." },
                    { title: "Recommendation Systems", desc: "Interest and sentiment-based content suggestion datasets." },
                    { title: "Sentiment Monitoring", desc: "Real-time brand perception and social listening intelligence." }
                ].map((item, i) => (
                  <div key={i} className="group relative p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:border-brand-100 hover:shadow-2xl hover:shadow-brand-600/5 transition-all duration-500">
                      <div className="absolute top-6 right-8 text-slate-100 font-bold text-5xl group-hover:text-brand-50 transition-colors pointer-events-none">0{i + 1}</div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                            <Sparkles size={22} />
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
                <p className="text-slate-900 text-sm md:text-base leading-relaxed font-semibold max-w-xl">
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
              <div className="flex-1 w-full max-w-md">
                <div className="p-10 bg-slate-900 text-white rounded-3xl font-mono text-sm relative group overflow-hidden border border-slate-800">
                   <div className="mb-4 text-slate-400 font-bold flex items-center gap-2">
                      <Languages size={18} /> Dataset_Sample_0{index + 1}.json
                   </div>
                   <div className="space-y-2">
                      <div className="text-green-400">"text" <span className="text-white">:</span> "LabelzAI delivers human-powered data..."</div>
                      <div className="text-brand-400">"annotation" <span className="text-white">:</span> [</div>
                      <div className="pl-4 text-accent-cyan">{"{ \"type\": \"INTENT\", \"val\": \"Inquiry\" }"}</div>
                      <div className="text-brand-400">]</div>
                   </div>
                   <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/10 rounded-full blur-[40px] group-hover:bg-brand-600/20 transition-all duration-700"></div>
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
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-3">NLP Delivery Pipeline</h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">Structured language data for robust machine understanding.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Guidelines", desc: "Setting linguistic and domain parameters." },
              { step: "02", title: "Annotation", desc: "Multi-level tagging by language experts." },
              { step: "03", title: "Consensus", desc: "Resolving disagreements via adjudication." },
              { step: "04", title: "Validation", desc: "Final quality check against gold-standard data." }
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

export default NaturalLanguageProcessing;
