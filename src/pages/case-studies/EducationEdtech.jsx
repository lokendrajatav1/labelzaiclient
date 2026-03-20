import React, { useEffect } from 'react';
import { 
  CheckCircle2, Book, GraduationCap, PenTool, Target, TrendingUp, Users, Database, 
  Zap, Search, Image, Tag, FileText, BarChart, Layers, Shield, 
  Brain, Video, Award, MousePointer2, BookOpen, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EducationEdtechCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      
      {/* 1. Hero Section - Premium Aesthetic */}
      <section className="relative pt-32 md:pt-48 pb-20 overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-600 text-[13px] font-semibold mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse"></span>
            Case Study — Education & EdTech
          </div>
          <h1 className="text-4xl md:text-7xl font-semibold text-slate-900 leading-[1.05] tracking-tight mb-8">
             AI-Powered Learning <br className="hidden md:block" />
             <span className="text-brand-500">Personalization.</span>
          </h1>
          <p className="text-slate-500 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto mb-12">
            Enhancing Indian EdTech through high-quality annotation for automated assessments and adaptive learning paths.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3 text-slate-500 font-semibold text-sm">
              <Database size={18} className="text-brand-500" />
              500,000+ Data Points
            </div>
            <div className="flex items-center gap-3 text-slate-500 font-semibold text-sm">
              <Brain size={18} className="text-brand-500" />
              +28% Engagement Rate
            </div>
            <div className="flex items-center gap-3 text-slate-500 font-semibold text-sm">
              <TrendingUp size={18} className="text-brand-500" />
              +35% Assessment Accuracy
            </div>
          </div>
        </div>
      </section>

      {/* 2. Visual Frame */}
      {/* <section className="pb-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="rounded-3xl overflow-hidden border-2 border-slate-100">
            <img 
              src="/ai_ml/audio-speech.png" 
              alt="EdTech AI Annotation" 
              className="w-full h-[400px] md:h-[500px] object-cover" 
            />
          </div>
        </div>
      </section> */}

      {/* 3. Detailed Overview & Problem - Restoring All Original Text */}
      <section className="py-24 border-t border-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-24">
          
          {/* Overview */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight">
              Project <span className="text-brand-600">Overview.</span>
            </h2>
            <div className="h-1.5 w-24 bg-brand-600"></div>
            <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed max-w-5xl">
              A fast-growing Indian EdTech platform aimed to enhance its AI-driven learning platform to deliver personalized content, automated assessments, and intelligent student performance insights. However, inconsistent and unstructured educational data was limiting model accuracy and learning recommendations.
            </p>
          </div>

          {/* Detailed Problem Section */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight">
                Critical <span className="text-brand-600">Challenges.</span>
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                The EdTech client faced multiple challenges in scaling their AI capabilities across diverse subjects and user formats.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                {[
                  { title: "Unstructured Learning Data", desc: "Large volumes of student responses, handwritten assignments, and video lectures were not labeled or standardized." },
                  { title: "Low Accuracy in Assessments", desc: "Automated grading models struggled with subjective answers, handwriting variations, and multilingual content." },
                  { title: "Poor Content Recommendation", desc: "Engines failed to match students with the right learning path due to insufficient labeled behavioral data." },
                  { title: "Scalability Issues", desc: "Rapid growth required large-scale annotation across grade levels and multiple formats (text, image, audio, video)." }
                ].map((item, i) => (
                  <div key={i} className="space-y-3 group">
                    <h4 className="text-slate-900 font-bold flex items-center gap-2 group-hover:text-brand-600 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                      {item.title}
                    </h4>
                    <p className="text-slate-500 font-medium leading-relaxed text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2">
               <div className="p-10 bg-brand-50/30 border-2 border-brand-100 rounded-2xl space-y-8 h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-slate-900 flex items-center gap-3 italic">
                    <Zap className="text-brand-600" /> Strategic Solution
                  </h3>
                  <p className="text-slate-700 text-xl font-semibold leading-relaxed">
                    LabelzAI designed a domain-specific Education annotation pipeline to support scalable and accurate AI model training.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Solutions - Full Feature List */}
      <section className="py-24 md:py-32 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight uppercase leading-tight">
              The <span className="text-brand-400">EdTech</span> Solution.
            </h2>
            <p className="text-slate-400 text-lg font-medium italic">
              Semantic & Academic structuring for next-generation personalized education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "1. Multi-Format Data Annotation", 
                desc: "OCR and Video intelligence.",
                items: [
                  "Text annotation for objective & descriptive answers",
                  "Handwritten answer labeling for OCR evaluation",
                  "Video annotation for lecture topic tagging",
                  "Audio annotation for pronunciation analysis"
                ],
                icon: <Layers />
              },
              { 
                title: "2. Semantic & Academic Structuring", 
                desc: "Curriculum mapping.",
                items: [
                  "Concept tagging (CBSE, ICSE, State Boards)",
                  "Difficulty-level classification",
                  "Learning objective mapping for adaptive models"
                ],
                icon: <BookOpen />
              },
              { 
                title: "3. Behavior & Interaction Labeling", 
                desc: "Deep engagement tracking.",
                items: [
                  "Engagement tracking from session data",
                  "Learning pattern (Fast, Revision-focused, etc.)",
                  "Drop-off and confusion point identification"
                ],
                icon: <MousePointer2 />
              },
              { 
                title: "4. Quality Assurance Framework", 
                desc: "SME-led precision.",
                items: [
                  "Subject-matter expert (SME) validation",
                  "Multi-layer review with 98%+ accuracy",
                  "Scalable workforce for rapid turnaround"
                ],
                icon: <Award />
              }
            ].map((item, i) => (
              <div key={i} className="group p-10 bg-slate-900 border border-slate-800 rounded-2xl hover:border-brand-600 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-slate-800 text-brand-400 flex items-center justify-center mb-8 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-300 text-sm font-medium leading-relaxed mb-6">{item.desc}</p>
                <ul className="space-y-3">
                  {item.items.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 group/li">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0 transition-transform group-hover/li:scale-150"></div>
                      <span className="text-slate-200 text-sm font-medium leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Results Section - Restoring Metrics */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center space-y-20">
           <div className="max-w-4xl mx-auto space-y-6">
             <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 leading-[1.1] tracking-tight">
               Results & <br className="hidden md:block" />
               Impact <span className="text-brand-600">Metric.</span>
             </h2>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
             {[
               { val: "35%", label: "Grading Accuracy Improvement" },
               { val: "28%", label: "Increase in Engagement" },
               { val: "40%", label: "Faster Adaptive Gen" },
               { val: "500k+", label: "Annotated Data Points" },
               { val: "98%+", label: "QA Accuracy" }
             ].map((item, i) => (
               <div key={i} className="space-y-4 group">
                 <div className="text-5xl md:text-6xl font-semibold text-slate-900 tracking-tighter group-hover:text-brand-600 transition-colors">{item.val}</div>
                 <div className="text-slate-500 font-bold uppercase text-[9px] tracking-widest leading-relaxed px-4">{item.label}</div>
               </div>
             ))}
           </div>

           <div className="pt-20">
             <Link to="/contact" className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 text-lg font-semibold hover:bg-slate-800 transition-all rounded-full shadow-lg shadow-slate-900/10 active:scale-95">
               Start Your Project <ChevronRight size={20} />
            </Link>
           </div>
        </div>
      </section>

    </div>
  );
};

export default EducationEdtechCaseStudy;
