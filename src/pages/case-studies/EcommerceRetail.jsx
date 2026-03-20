import React, { useEffect } from 'react';
import { 
  CheckCircle2, ShoppingBag, ShoppingCart, Tag, Target, TrendingUp, Users, Database, 
  Zap, Search, Image, FileText, BarChart, Layers, Shield, 
  Activity, View, Package, Truck, Laptop, ChevronRight, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EcommerceRetailCaseStudy = () => {
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
            Case Study — E-commerce & Retail
          </div>
          <h1 className="text-4xl md:text-7xl font-semibold text-slate-900 leading-[1.05] tracking-tight mb-8">
             Catalog Intelligence & <br className="hidden md:block" />
             <span className="text-brand-500">Visual Search Optimization.</span>
          </h1>
          <p className="text-slate-500 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto mb-12">
            Transforming massive unstructured catalogs into searchable, high-conversion intelligence through attribute extraction and visual classification.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3 text-slate-500 font-semibold text-sm">
              <Package size={18} className="text-brand-500" />
              1M+ Product Listings
            </div>
            <div className="flex items-center gap-3 text-slate-500 font-semibold text-sm">
              <TrendingUp size={18} className="text-brand-500" />
              +25% Search Relevancy
            </div>
          </div>
        </div>
      </section>

      {/* 2. Visual Frame */}
      {/* <section className="pb-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="rounded-3xl overflow-hidden border-2 border-slate-100">
            <img 
              src="/ai_ml/nlp-service-image-2.png" 
              alt="E-commerce AI Annotation" 
              className="w-full h-[400px] md:h-[500px] object-cover" 
            />
          </div>
        </div>
      </section> */}

      {/* 3. Detailed Overview & Problem - Restoring/Adding Detail */}
      <section className="py-24 border-t border-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-24">
          
          {/* Overview */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight">
              Project <span className="text-brand-600">Context.</span>
            </h2>
            <div className="h-1.5 w-24 bg-brand-600"></div>
            <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed max-w-5xl">
              A rapidly scaling global marketplace was struggling with inconsistent product data across millions of listings. Inaccurate categorization and missing attributes were leading to poor search discoverability, high return rates, and a fragmented shopper experience. They needed a partner to standardize their entire catalog through high-precision manual and AI-assisted annotation.
            </p>
          </div>

          {/* Detailed Problem Section */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight">
                The <span className="text-brand-600">Problem.</span>
              </h2>
              <div className="grid grid-cols-1 gap-6 pt-4">
                {[
                  { title: "Inconsistent Taxonomy", desc: "Sellers used varied naming conventions, making it impossible to apply a unified site-wide hierarchy." },
                  { title: "Missing Attributes", desc: "Critical filters like material, fit, and pattern were missing from over 40% of the active listings." },
                  { title: "Visual Search Failure", desc: "Lack of granular visual tags meant 'shop similar' features were returning irrelevant recommendations." },
                  { title: "Content Gaps", desc: "Reviews and descriptions lacked sentiment and entity extraction to power intelligent product summaries." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-1.5 h-auto bg-brand-100 group-hover:bg-brand-600 transition-colors shrink-0"></div>
                    <div className="py-2">
                       <h4 className="text-slate-900 font-bold mb-2 uppercase tracking-widest text-xs italic">{item.title}</h4>
                       <p className="text-slate-500 font-bold text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2">
               <div className="p-10 bg-slate-50 border-2 border-slate-100 rounded-2xl space-y-8 h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-slate-900 flex items-center gap-3">
                    <Sparkles className="text-brand-600" /> Strategic Impact
                  </h3>
                  <div className="space-y-6">
                    {[
                      "15% Reduction in Return Rates",
                      "25% Improvement in Search Conversion",
                      "Faster Onboarding for New Sellers",
                      "Near-perfect Planogram Compliance"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <CheckCircle2 className="text-brand-600" size={20} />
                        <span className="text-slate-800 font-bold text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
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
              Retail <span className="text-brand-400">Solutions.</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium italic">
              Multi-layer annotation services from catalog normalization to AR/VR data prep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Image Classification", 
                desc: "Categorizing products into deep hierarchies.",
                items: ["Fashion & Apparel", "Electronics & Gadgets", "Home & Living"],
                icon: <Image />
              },
              { 
                title: "Attribute Extraction", 
                desc: "Pixel-level tagging of product features.",
                items: ["Material & Texture", "Color & Pattern", "Fit & Style"],
                icon: <Tag />
              },
              { 
                title: "Visual Search Training", 
                desc: "Bounding boxes for shop-the-look AI.",
                items: ["Similar Item ID", "Outfit Matching", "Style Trends"],
                icon: <Search />
              },
              { 
                title: "Catalog Analysis", 
                desc: "Auditing seller-uploaded metadata for accuracy.",
                items: ["Description Validation", "Image Quality Check", "Price Normalization"],
                icon: <BarChart />
              },
              { 
                title: "Customer Sentiment", 
                desc: "NLP for reviews and feedback loops.",
                items: ["Review Labeling", "Entity Extraction", "Tone Analysis"],
                icon: <FileText />
              },
              { 
                title: "QA & Verification", 
                desc: "Multi-layered human-in-the-loop audit.",
                items: ["99% Precision", "Scalable Workforce", "Real-time Audits"],
                icon: <Shield />
              }
            ].map((item, i) => (
              <div key={i} className="group p-10 bg-slate-900 border border-slate-800 rounded-2xl hover:border-brand-600 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-slate-800 text-brand-400 flex items-center justify-center mb-8 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white uppercase tracking-tight italic">{item.title}</h3>
                <p className="text-slate-300 text-sm font-medium leading-relaxed mb-6">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.items.map((it, j) => (
                    <span key={j} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white transition-colors group-hover:text-brand-400">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Results Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
           <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 leading-[1.1] tracking-tight italic">
             Ready to <span className="text-brand-600">Grow?</span>
           </h2>
           <p className="text-xl text-slate-500 font-medium italic max-w-2xl mx-auto leading-relaxed">
             "Precision data is the foundation of high-converting e-commerce. Let us help you structure yours."
           </p>
           <div className="pt-8">
             <Link to="/contact" className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 text-lg font-semibold hover:bg-slate-800 transition-all rounded-full shadow-lg shadow-slate-900/10 active:scale-95">
               Start Your Project <ChevronRight size={20} />
            </Link>
           </div>
        </div>
      </section>

    </div>
  );
};

export default EcommerceRetailCaseStudy;
