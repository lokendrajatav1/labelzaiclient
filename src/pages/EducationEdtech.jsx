import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, GraduationCap, BookOpen, UserCheck, MessageSquare, Zap, Search, Accessibility, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const EducationEdtech = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const supportCategories = [
    {
      title: "Personalized Learning Paths",
      description: "Annotating student performance data and learning patterns to enable AI models that adapt content difficulty and style to individual user needs.",
      features: [
        "Knowledge Gap Identification",
        "Adaptive Content Tagging",
        "Learning Style Classification",
        "Student Progress Analytics"
      ],
      icon: <Brain size={24} />
    },
    {
      title: "Automated Grading & Feedback",
      description: "Supporting the development of intelligent grading systems by labeling essay responses, mathematical solutions, and coding exercises for instant feedback.",
      features: [
        "Essay Sentiment & Grammar",
        "Math Formula Recognition",
        "Code Snippet Evaluation",
        "Subjective Answer Scoring"
      ],
      icon: <UserCheck size={24} />
    },
    {
      title: "Intelligent Tutoring Systems",
      description: "Preparing conversational datasets for AI tutors and virtual assistants that can answer student queries, explain complex concepts, and provide guidance.",
      features: [
        "Socratic Dialogue Mapping",
        "Concept Explanation Data",
        "Query Intent Classification",
        "Step-by-step Solution Labeling"
      ],
      icon: <MessageSquare size={24} />
    },
    {
      title: "Language Learning & Speech",
      description: "Annotating audio data for pronunciation assessment, fluency tracking, and multilingual speech recognition in language learning applications.",
      features: [
        "Pronunciation Error Tagging",
        "Fluency Level Classification",
        "Multi-accent Speech Data",
        "Phonetic Transcription"
      ],
      icon: <Zap size={24} />
    },
    {
      title: "Accessibility & Inclusive Design",
      description: "Creating datasets that support accessibility features such as automated alt-text for educational images, sign language recognition, and text-to-speech.",
      features: [
        "Alt-text Generation Data",
        "Sign Language Video Labeling",
        "Inclusive Content Auditing",
        "Voice-to-Text for Classrooms"
      ],
      icon: <Accessibility size={24} />
    }
  ];

  const labelingTypes = [
    "Named Entity Recognition (NER)",
    "Text Classification (Subjects)",
    "Audio Transcription & Tagging",
    "Handwriting Recognition (OCR)",
    "Sentiment Analysis (Feedback)",
    "Video Action Tracking",
    "Hierarchical Knowledge Mapping"
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
            <span>Industries</span>
            <ChevronRight size={10} strokeWidth={3} />
            <span className="text-brand-600">Education & Edtech</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100/50 text-brand-600 text-[11px] font-semibold uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            Intelligent Learning Solutions
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl">
            Education & Edtech Data Annotation
          </h1>
          
          <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-10 max-w-4xl">
            Enable personalized learning, automate assessments, and build accessible educational tools. We provide high-accuracy datasets that power the future of digital education.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <button className="flex items-center gap-3 bg-slate-900 text-white px-10 py-3.5 rounded-full font-semibold text-base hover:bg-brand-600 transition-all hover:shadow-xl hover:shadow-brand-600/20 active:scale-95">
                <ArrowRight size={18} /> Request Edtech Sample
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
                <span className="text-brand-600 text-[11px] font-semibold uppercase tracking-[0.3em]">Knowledge-Driven Data</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-950 tracking-tight mb-6">
                Supporting the Global Learning Ecosystem
              </h2>
              
              <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-12">
                The shift to digital learning requires localized and highly accurate data. As a specialized partner in India, we help Edtech companies and educational institutions transform curriculum and student data into intelligent learning resources through high-precision NLP and speech annotation.
                <br /><br />
                From training automated grading tools to building accessible platforms for diverse learners, our annotation services ensure your educational AI models are reliable, ethical, and effective.
              </p>
              
              <div className="h-[1px] w-full bg-slate-100 mb-12"></div>
              
              <h3 className="text-2xl font-semibold text-slate-900 mb-8">Specialized Data Labeling Types:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {labelingTypes.map((type, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-brand-50 hover:border-brand-100 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-600"></div>
                    <span className="font-semibold text-slate-800 text-sm whitespace-nowrap">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section - Premium Grid */}
      <div className="mt-24 space-y-0">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
           <h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-4">How We Support the Industry</h2>
           <p className="text-slate-500 font-medium max-w-2xl mx-auto">Scalable datasets tailored for LMS providers, language learning apps, and virtual classroom tools.</p>
        </div>
        
        {supportCategories.map((service, index) => (
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
                  <h2 className="text-2xl md:text-3xl font-semibold text-slate-950 leading-tight tracking-tight">
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
                <div className="aspect-[16/9] bg-slate-950 rounded-[2.5rem] p-10 flex flex-col justify-center relative overflow-hidden shadow-sm border border-slate-800 group">
                    <div className="text-brand-600 font-mono text-[10px] tracking-widest uppercase mb-4">Educational_Context_Sample</div>
                    <div className="space-y-3 font-mono text-xs md:text-sm">
                        <div className="text-white"><span className="text-brand-400">"student_query"</span>: <span className="text-green-400">"Explain_Newton_Law"</span></div>
                        <div className="text-white"><span className="text-brand-400">"annotation"</span>: {"{"}</div>
                        <div className="pl-4 text-white"><span className="text-brand-400">"topic"</span>: <span className="text-accent-cyan">"Physics"</span></div>
                        <div className="pl-4 text-white"><span className="text-brand-400">"difficulty"</span>: <span className="text-accent-cyan">"Grade_10"</span></div>
                        <div className="text-white">{"}"}</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-slate-950 text-white overflow-hidden relative">
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-[100px] -mb-48 -mr-48"></div>
         <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-semibold mb-8 tracking-tight">Empower the next generation</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto font-medium">
               Join leading Edtech innovators who trust LabelzAI for high-accuracy educational datasets and personalized AI models.
            </p>
            <Link to="/contact">
               <button className="bg-brand-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-brand-500 transition-all hover:shadow-2xl hover:shadow-brand-600/20 active:scale-95">
                  Get Started with Educational AI
               </button>
            </Link>
         </div>
      </div>
    </div>
  );
};

export default EducationEdtech;
