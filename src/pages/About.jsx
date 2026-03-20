import React, { useEffect } from 'react';
import { CheckCircle2, ChevronRight, Award, Zap, Shield, TrendingUp, Users, Target, Globe, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      
      {/* 1. Hero Section - Matching Landing Style */}
      <section className="relative pt-32 md:pt-48 pb-20 overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-600 text-[13px] font-semibold mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse"></span>
            About Us — Our Story
          </div>
          <h1 className="text-4xl md:text-7xl font-semibold text-slate-900 leading-[1.05] tracking-tight mb-8">
             LabelzAI was founded with a <br className="hidden md:block" />
             simple but powerful belief: <br className="hidden md:block" />
             <span className="text-brand-500">Great AI begins with great data.</span>
          </h1>
          <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto mb-12">
            Recognizing a critical gap in the AI ecosystem, we built a quality-first data annotation partner that global organizations can trust to transform raw data into precision intelligence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-4 text-lg font-semibold hover:bg-slate-800 transition-all rounded-full shadow-lg shadow-slate-900/10 active:scale-95">
              Work with Us <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Split Section: The Founding Vision */}
      <section className="py-20 md:py-32 border-t border-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-[2rem] overflow-hidden border border-slate-100">
                <img 
                  src="/about-us.png" 
                  alt="LabelzAI Vision" 
                  className="w-full h-auto object-cover transition-transform duration-700" 
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight">
                Our <span className="text-brand-600">Vision</span> for AI Training Data
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                The founder recognized that while companies were investing heavily in algorithms, many struggled with inconsistent, low-quality training data that slowed development. 
              </p>
              <div className="space-y-4">
                {[
                  "Quality First. Scalability Always. Trust Above All.",
                  "Meaningful employment and skill development across India.",
                  "Reliable ground truth for Industry 4.0 and beyond.",
                  "Craftsman-style obsession with every annotated data point."
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="text-brand-600" size={14} />
                    </div>
                    <span className="text-slate-800 font-semibold text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Purpose Section - Full Width High Contrast */}
      <section className="bg-slate-950 py-24 md:py-32 text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
            <div className="w-full lg:w-1/2 space-y-8">
               <h2 className="text-4xl md:text-6xl text-white font-semibold tracking-tight leading-tight">
                Building with <br />
                <span className="text-brand-400 font-bold italic">Purpose.</span>
               </h2>
               <p className="text-slate-200 text-xl font-medium leading-relaxed italic">
                 "Data annotation is more than a service—it’s the foundation of responsible and scalable Artificial Intelligence."
               </p>
            </div>
            <div className="w-full lg:w-1/2 space-y-10 text-slate-100 text-lg font-medium leading-relaxed">
               <p>
                 Our mission is to build AI systems with purpose, ensuring every dataset we create is accurate, ethical, and aligned with real-world impact. We combine domain expertise, advanced quality frameworks, and a skilled workforce to help businesses train reliable AI models.
               </p>
               <p>
                 We focus on human-in-the-loop intelligence, where trained annotators and AI-assisted workflows work together to deliver high-precision labeling. Every project is designed with strict quality control, security, and compliance.
               </p>
               <div className="grid grid-cols-2 gap-8 pt-6">
                 <div>
                   <div className="text-xl font-bold text-white mb-1">Human+AI</div>
                   <div className="text-sm font-semibold text-brand-400 uppercase tracking-widest">Workflow</div>
                 </div>
                 <div>
                   <div className="text-xl font-bold text-white mb-1">99%+</div>
                   <div className="text-sm font-semibold text-brand-400 uppercase tracking-widest">Precision</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pillars - Simple Grid matching Home's Services style */}
      <section className="py-24 md:py-32 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight">What We Stand For</h2>
          <p className="text-slate-500 font-medium text-lg">We don’t see annotation as volume work. We see it as craftsmanship.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "QA Excellence", 
              desc: "Multi-layer quality assurance and measurable accuracy benchmarks for every batch.",
              icon: <Zap size={24} />
            },
            { 
              title: "Security & Trust", 
              desc: "Secure and confidential data handling aligned with global security standards.",
              icon: <Lock size={24} />
            },
            { 
              title: "AI-Aligned Workflows", 
              desc: "Custom workflows specifically mapped to real AI use cases and model requirements.",
              icon: <Zap size={24} />
            },
            { 
              title: "Precision Scaling", 
              desc: "Scalable teams that grow rapidly without compromising on labeling precision.",
              icon: <TrendingUp size={24} />
            },
            { 
              title: "Transparency", 
              desc: "Long-term partnerships built on reliability, transparency, and clinical-grade reporting.",
              icon: <Shield size={24} />
            },
            { 
              title: "Industry Depth", 
              desc: "From autonomous vehicles & NLP to 3D LiDAR and multimodal data annotation.",
              icon: <Globe size={24} />
            }
          ].map((item, i) => (
            <div key={i} className="group p-10 bg-white border-2 border-slate-200 rounded-[2rem] hover:border-brand-300 hover:bg-brand-50/10 transition-all duration-300">
               <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-8 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  {item.icon}
               </div>
               <h3 className="text-xl font-semibold text-slate-900 mb-4">{item.title}</h3>
               <p className="text-slate-500 text-base font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Mission & Vision - Home-like containers */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div className="p-12 md:p-16 bg-white border border-slate-100 rounded-3xl space-y-10">
              <h2 className="text-3xl font-semibold text-slate-900 flex items-center gap-4">
                 <div className="w-1.5 h-8 bg-brand-600 rounded-full"></div>
                 Our Mission
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed italic">
                "Our mission is to power the next generation of Artificial Intelligence by delivering precision-engineered training data that organizations can trust."
              </p>
              <div className="space-y-4 text-slate-600 font-semibold text-sm">
                 <p>As a leading data annotation startup in India, we transform complex, unstructured information into high-quality, model-ready datasets.</p>
                 <p>Every project is designed to drive accuracy, performance, and real-world AI impact for startups and enterprises alike.</p>
              </div>
            </div>

            <div className="p-12 md:p-16 bg-brand-600 rounded-3xl text-white space-y-10 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
               <h2 className="text-3xl font-semibold flex items-center gap-4">
                 <div className="w-1.5 h-8 bg-white rounded-full"></div>
                 The Vision Ahead
              </h2>
               <p className="text-brand-100 text-lg font-bold leading-relaxed italic">
                 To become a globally recognized AI training data partner from India, setting the benchmark for quality, scalability, and ethical data practices.
               </p>
               <ul className="space-y-6">
                 {[
                   "Accurate, unbiased, and responsible AI as the standard.",
                   "India as a global hub for AI data services and digital talent.",
                   "Human expertise and intelligent automation integrated seamlessly."
                 ].map((text, i) => (
                   <li key={i} className="flex items-start gap-4">
                      <div className="w-5 h-5 rounded-full bg-brand-400/30 flex items-center justify-center shrink-0 mt-1">
                        <Star size={12} className="fill-brand-200 text-brand-200" />
                      </div>
                      <span className="text-brand-50 font-semibold text-sm">{text}</span>
                   </li>
                 ))}
               </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 6. The Commitment CTA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
           <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 leading-[1.1] tracking-tight">
             At LabelzAI, this is more <br className="hidden md:block" />
             than a service. <br className="hidden md:block" />
             <span className="text-brand-600">It’s a commitment.</span>
           </h2>
           <p className="text-xl text-slate-500 font-medium italic max-w-2xl mx-auto leading-relaxed">
             "The future of AI will be defined not just by how powerful models become — but by how carefully the data behind them is built."
           </p>
           <div className="pt-8">
             <Link to="/contact" className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 text-lg font-semibold hover:bg-slate-800 transition-all rounded-full shadow-lg shadow-slate-900/10 active:scale-95">
               Join Our Journey <ChevronRight size={20} />
            </Link>
           </div>
        </div>
      </section>

    </div>
  );
};

// Internal icon helper
const Lock = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);

export default About;
