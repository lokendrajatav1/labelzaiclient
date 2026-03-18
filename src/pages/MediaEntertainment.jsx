import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Play, Monitor, Music, Film, Zap, Search, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const MediaEntertainment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const supportCategories = [
    {
      title: "Automated Content Moderation",
      description: "Protecting platforms from unsafe or inappropriate content through frame-by-frame video screening, text moderation, and image auditing datasets.",
      features: [
        "Inappropriate Content Filtering",
        "Community Guideline Auditing",
        "Multilingual Text Moderation",
        "Real-time Feed Monitoring"
      ],
      icon: <ShieldCheck size={24} />
    },
    {
      title: "Metadata Tagging & Search",
      description: "Enriching libraries with detailed scene descriptions, actor recognition, and genre classification to improve discovery and personalization algorithms.",
      features: [
        "Scene-level Description",
        "Actor & Object Recognition",
        "Genre & Mood Tagging",
        "Automated Closed Captioning"
      ],
      icon: <Search size={24} />
    },
    {
      title: "Interactive & Shoppable Media",
      description: "Enabling interactive shopping and targeted ads by annotating products and key moments within video content for a seamless viewer experience.",
      features: [
        "In-video Product Tagging",
        "Ad-placement Optimization",
        "Viewer Engagement Mapping",
        "Shoppable Media Annotation"
      ],
      icon: <Monitor size={24} />
    },
    {
      title: "Sports Performance Analytics",
      description: "High-precision tracking of players, ball movement, and game events for broadcast analysis, coaching insights, and automated highlight generation.",
      features: [
        "Player Motion Tracking",
        "Ball Trajectory Analysis",
        "Event Detection (Goals/Fouls)",
        "Automated Highlights Prep"
      ],
      icon: <Zap size={24} />
    },
    {
      title: "Emotion & Engagement Data",
      description: "Tracking viewer reactions and emotional responses to content through facial expression analysis and engagement metrics for creative optimization.",
      features: [
        "Facial Expression Labeling",
        "Sentiment Intensity Data",
        "Viewer Retention Analysis",
        "Creative Content A/B Testing"
      ],
      icon: <Heart size={24} />
    }
  ];

  const labelingTypes = [
    "Temporal Video Annotation",
    "Scene & Shot Classification",
    "Named Entity Recognition",
    "Object Tracking (Multi-object)",
    "Audio-to-Text Transcription",
    "Emotion & Sentiment Tagging",
    "Point & Keypoint Tracking"
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
            <span className="text-brand-600">Media & Entertainment</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100/50 text-brand-600 text-[11px] font-semibold uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            Dynamic Content Intelligence
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl">
            Media & Entertainment Data Annotation
          </h1>
          
          <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-10 max-w-4xl">
            Scale content moderation, improve personalized search, and unlock deep insights from your media assets. We provide high-fidelity datasets that power the next wave of entertainment AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <button className="flex items-center gap-3 bg-slate-900 text-white px-10 py-3.5 rounded-full font-semibold text-base hover:bg-brand-600 transition-all hover:shadow-xl hover:shadow-brand-600/20 active:scale-95">
                <ArrowRight size={18} /> Request Media Sample
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
                <span className="text-brand-600 text-[11px] font-semibold uppercase tracking-[0.3em]">Engaging Intelligence</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-950 tracking-tight mb-6">
                Fueling the Modern Media Landscape
              </h2>
              
              <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-12">
                As digital content grows exponentially, AI is the key to managing, discovering, and personalizing the viewer experience. We support streaming giants, social platforms, and sports broadcasters with ground truth data that understands visual context and emotional nuance.
                <br /><br />
                Whether you're building automated highlight reels or protecting your community from harmful content, our specialized media annotation services ensure your models are accurate and efficient.
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
           <p className="text-slate-500 font-medium max-w-2xl mx-auto">Scalable datasets tailored for OTT platforms, social networks, sports broadcasters, and digital marketing agencies.</p>
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
                    <div className="text-brand-600 font-mono text-[10px] tracking-widest uppercase mb-4">Media_Context_Sample</div>
                    <div className="space-y-3 font-mono text-xs md:text-sm">
                        <div className="text-white"><span className="text-brand-400">"asset_id"</span>: <span className="text-green-400">"Video_Scene_089"</span></div>
                        <div className="text-white"><span className="text-brand-400">"tagging"</span>: {"{"}</div>
                        <div className="pl-4 text-white"><span className="text-brand-400">"mood"</span>: <span className="text-accent-cyan">"Cinematic"</span></div>
                        <div className="pl-4 text-white"><span className="text-brand-400">"safety"</span>: <span className="text-accent-cyan">"G_Rated"</span></div>
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
            <h2 className="text-3xl md:text-5xl font-semibold mb-8 tracking-tight">Empower your media AI</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto font-medium">
               Join industry-leading media companies who trust LabelzAI for high-accuracy content moderation and metadata enrichment.
            </p>
            <Link to="/contact">
               <button className="bg-brand-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-brand-500 transition-all hover:shadow-2xl hover:shadow-brand-600/20 active:scale-95">
                  Get Started with Media Intelligence
               </button>
            </Link>
         </div>
      </div>
    </div>
  );
};

export default MediaEntertainment;
