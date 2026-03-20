import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Linkedin, Send, ArrowRight, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    // Clear field error when user starts typing
    if (fieldErrors[id]) {
      setFieldErrors((prev) => ({ ...prev, [id]: '' }));
    }
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setFieldErrors({});
    setSuccess(false);

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          const errors = {};
          data.errors.forEach((err) => {
            errors[err.field] = err.message;
          });
          setFieldErrors(errors);
          setError('Please correct the highlighted fields.');
        } else {
          setError(data.message || 'Something went wrong. Please try again.');
        }
        return;
      }

      setSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '', service: '', message: '' });
    } catch (err) {
      setError('Unable to connect to server. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      
      {/* 1. Hero Section - Case Study Style */}
      <section className="relative pt-32 md:pt-48 pb-20 overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-slate-600 text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
            <span className="text-brand-600 font-bold uppercase tracking-widest">Connect with Us</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-600 text-[13px] font-semibold mb-8 border border-brand-100/50 uppercase tracking-widest  shadow-brand-100">
            <Sparkles size={14} className="animate-pulse" />
            Global Data Partner
          </div>

          <h1 className="text-4xl md:text-7xl font-semibold text-slate-900 leading-[1.05] tracking-tight mb-8">
            Scale Your <span className="text-brand-600 italic">Vision</span> <br className="hidden md:block" />
            With Human Intelligence.
          </h1>
          
          <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto mb-12">
            Ready to build the future of AI? Whether you're a startup or a global enterprise, we provide the scale and precision required for your machine learning journey.
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-24 border-t border-slate-50 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Left Side: Contact Info & Narrative */}
          <div className="space-y-16">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-12 bg-brand-600"></div>
                <span className="text-brand-600 text-[11px] font-bold uppercase tracking-[0.3em]">Direct Communication</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold text-slate-950 tracking-tight leading-tight uppercase text-left">
                A Partner, <br /> <span className="text-brand-600 font-bold italic">Not Just A Vendor.</span>
              </h2>
              <p className="text-slate-700 text-xl font-medium leading-relaxed italic text-left">
                "We believe in transparency and absolute fidelity. Our team is ready to discuss your unique data challenges and design a custom pipeline at scale."
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                { 
                  icon: <Mail />, 
                  title: "Inquiries", 
                  val: "hello@labelzaitech.com", 
                  type: "email",
                  bg: "bg-brand-50"
                },
                { 
                  icon: <MapPin />, 
                  title: "Headquarters", 
                  val: "Baghbahara Road, Mahasamund, Chhattisgarh – 493445", 
                  type: "text",
                  bg: "bg-slate-50"
                },
                { 
                  icon: <Linkedin />, 
                  title: "LinkedIn", 
                  val: "LabelzAI Techservices LLP", 
                  type: "link",
                  bg: "bg-indigo-50"
                }
              ].map((item, i) => (
                <div key={i} className="group p-8 bg-white border border-slate-100 rounded-2xl hover:border-brand-600 transition-all duration-500    text-left">
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-2xl ${item.bg} text-brand-600 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-all duration-500`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-1">{item.title}</h4>
                      {item.type === 'email' ? (
                        <a href={`mailto:${item.val}`} className="text-xl font-medium text-slate-900 group-hover:text-brand-600 transition-colors">{item.val}</a>
                      ) : item.type === 'link' ? (
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl font-medium text-slate-900 group-hover:text-brand-600 transition-colors flex items-center gap-2">
                          {item.val} <ArrowRight size={16} />
                        </a>
                      ) : (
                        <p className="text-xl font-medium text-slate-900">{item.val}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Performance Tags */}
            <div className="flex flex-wrap gap-4 pt-8">
               {[ "24/7 SUPPORT", "SECURE PIPELINE", "GLOBAL DELIVERY", "SME VALIDATED" ].map((tag, i) => (
                 <div key={i} className="px-6 py-3 rounded-full border border-slate-100 bg-slate-50 text-slate-700 text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
                   <CheckCircle2 size={12} className="text-brand-600" /> {tag}
                 </div>
               ))}
            </div>
          </div>

          {/* Right Side: The Form Box */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-600/10 to-accent-cyan/10 rounded-[4rem] blur-3xl opacity-50"></div>
            <div className="relative bg-white border border-slate-100 rounded-3xl p-10 md:p-14  ">
              <div className="space-y-4 mb-12 text-left">
                <h3 className="text-3xl font-semibold text-slate-950 uppercase tracking-tight">Initiate <span className="text-brand-600 italic">Project.</span></h3>
                <p className="text-slate-700 font-medium italic">Complete the form below and an AI training specialist will reach out within 24 hours.</p>
              </div>

              {/* Success Message */}
              {success && (
                <div className="mb-10 p-6 bg-emerald-50 border border-emerald-100 rounded-[2rem] flex items-start gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-emerald-900 font-bold text-lg leading-none mb-2">Message Transmitted.</p>
                    <p className="text-emerald-600 font-medium text-sm italic">Thank you for your enquiry. Our team is reviewing your requirements now.</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && !success && (
                <div className="mb-10 p-6 bg-red-50 border border-red-100 rounded-[2rem] flex items-start gap-4">
                   <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0">
                    <AlertCircle size={24} />
                  </div>
                  <p className="text-red-900 font-bold pt-2">{error}</p>
                </div>
              )}

              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-slate-600 uppercase tracking-widest ml-2" htmlFor="firstName">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-6 py-5 rounded-2xl bg-white border ${fieldErrors.firstName ? 'border-red-400 ring-2 ring-red-100' : 'border-slate-100'} focus:outline-none focus:ring-4 focus:ring-brand-600/5 focus:border-brand-600 transition-all font-medium text-slate-900 placeholder:text-slate-500 `}
                      placeholder="Enter First Name"
                      disabled={loading}
                    />
                    {fieldErrors.firstName && <p className="text-red-500 text-[10px] font-bold ml-2 uppercase tracking-tight">{fieldErrors.firstName}</p>}
                  </div>
                  <div className="space-y-3 text-left">
                    <label className="text-[11px] font-bold text-slate-600 uppercase tracking-widest ml-2" htmlFor="lastName">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-6 py-5 rounded-2xl bg-white border ${fieldErrors.lastName ? 'border-red-400 ring-2 ring-red-100' : 'border-slate-100'} focus:outline-none focus:ring-4 focus:ring-brand-600/5 focus:border-brand-600 transition-all font-medium text-slate-900 placeholder:text-slate-500 `}
                      placeholder="Enter Last Name"
                      disabled={loading}
                    />
                    {fieldErrors.lastName && <p className="text-red-500 text-[10px] font-bold ml-2 uppercase tracking-tight">{fieldErrors.lastName}</p>}
                  </div>
                </div>

                <div className="space-y-3 text-left">
                  <label className="text-[11px] font-bold text-slate-600 uppercase tracking-widest ml-2" htmlFor="email">Work Email</label>
                  <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-6 py-5 rounded-2xl bg-white border ${fieldErrors.email ? 'border-red-400 ring-2 ring-red-100' : 'border-slate-100'} focus:outline-none focus:ring-4 focus:ring-brand-600/5 focus:border-brand-600 transition-all font-medium text-slate-900 placeholder:text-slate-500 `}
                    placeholder="email@company.com"
                    disabled={loading}
                  />
                  {fieldErrors.email && <p className="text-red-500 text-[10px] font-bold ml-2 uppercase tracking-tight">{fieldErrors.email}</p>}
                </div>

                <div className="space-y-3 text-left">
                  <label className="text-[11px] font-bold text-slate-600 uppercase tracking-widest ml-2" htmlFor="service">Specialization Needed</label>
                  <select 
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-6 py-5 rounded-2xl bg-white border ${fieldErrors.service ? 'border-red-400 ring-2 ring-red-100' : 'border-slate-100'} focus:outline-none focus:ring-4 focus:ring-brand-600/5 focus:border-brand-600 transition-all font-medium text-slate-900 cursor-pointer `}
                    disabled={loading}
                  >
                    <option value="">Select a specialization...</option>
                    <option value="image">Image Annotation (2D/3D)</option>
                    <option value="video">Video Tracking & Action</option>
                    <option value="text">NLP & Text Classification</option>
                    <option value="audio">Audio & Speech Diarization</option>
                    <option value="medical">Medical AI & Healthcare</option>
                    <option value="other">Custom Solution</option>
                  </select>
                  {fieldErrors.service && <p className="text-red-500 text-[10px] font-bold ml-2 uppercase tracking-tight">{fieldErrors.service}</p>}
                </div>

                <div className="space-y-3 text-left">
                  <label className="text-[11px] font-bold text-slate-600 uppercase tracking-widest ml-2" htmlFor="message">Project Context</label>
                  <textarea 
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-6 py-5 rounded-2xl bg-white border ${fieldErrors.message ? 'border-red-400 ring-2 ring-red-100' : 'border-slate-100'} focus:outline-none focus:ring-4 focus:ring-brand-600/5 focus:border-brand-600 transition-all font-medium text-slate-900 placeholder:text-slate-500  resize-none`}
                    placeholder="Briefly describe your dataset scale and requirements..."
                    disabled={loading}
                  ></textarea>
                  {fieldErrors.message && <p className="text-red-500 text-[10px] font-bold ml-2 uppercase tracking-tight">{fieldErrors.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-slate-950 hover:bg-brand-600 text-white font-bold py-6 rounded-2xl   hover: transition-all active:scale-[0.98] flex justify-center items-center gap-3 mt-4 text-xl disabled:opacity-60 uppercase tracking-widest"
                >
                  {loading ? (
                    <>
                      <Loader2 size={24} className="animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send size={24} />
                      Transmit Data
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Global Reach Section (Dark Accent) */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:40px_40px]"></div>
          </div>
          
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center space-y-12">
              <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] uppercase">
                Accelerating AI <br /> <span className="text-brand-400 font-bold italic underline decoration-2 underline-offset-8">Worldwide.</span>
              </h2>
              <p className="text-slate-300 text-xl font-medium leading-relaxed max-w-3xl mx-auto italic">
                Join the innovators scaling their perception models with LabelzAI.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-8">
                  {[
                    { val: "24/7", label: "Operations" },
                    { val: "99%", label: "Accuracy" },
                    { val: "Global", label: "Delivery" },
                    { val: "Secure", label: "Pipeline" }
                  ].map((stat, i) => (
                    <div key={i} className="space-y-2">
                      <div className="text-4xl font-bold text-white tracking-tighter">{stat.val}</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-brand-400">{stat.label}</div>
                    </div>
                  ))}
              </div>
          </div>
      </section>

    </div>
  );
};

export default Contact;
