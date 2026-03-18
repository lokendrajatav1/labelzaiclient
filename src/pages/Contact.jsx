import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Linkedin, Send, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

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
    <div className="pt-24 pb-20 bg-slate-50/50 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-[1000px] mx-auto px-6 py-16 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-600 font-semibold text-sm mb-6 uppercase tracking-wider">
            <Mail size={16} />
            <span>Contact Us – LabelzAI Techservices LLP</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight !leading-[1.2]">
            Let's Build High-Quality <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-cyan">AI Training Data</span> Together
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
            Have a question about our data annotation services or planning to start an AI / Machine Learning project? The team at LabelzAI Techservices LLP is here to help.
          </p>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Contact Information */}
        <div className="space-y-10">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">We'd love to hear from you</h2>
            <p className="text-slate-600 leading-relaxed text-[16px] mb-8 font-medium">
              We specialize in delivering accurate, scalable, and secure data annotation solutions for companies building AI models. Whether you need image annotation, video labeling, text annotation, NLP tagging, or custom AI training datasets, our experts are ready to support your project.
            </p>
            <p className="text-slate-600 leading-relaxed text-[16px] font-medium">
              Reach out to us for project inquiries, pricing details, partnerships, or technical consultation. Our team will respond quickly to understand your requirements and provide the best data labeling solution for your business.
            </p>
          </div>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-[2rem] shadow-xl shadow-slate-200/40 border border-slate-100 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 shadow-sm border border-brand-100">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-[0.2em] mb-1">Email Us</h3>
                <a href="mailto:hello@labelzaitech.com" className="text-xl font-semibold text-slate-900 hover:text-brand-600 transition-colors">
                  hello@labelzaitech.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-8 bg-white rounded-[2rem] shadow-xl shadow-slate-200/40 border border-slate-100 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 shadow-sm border border-indigo-100">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-[0.2em] mb-2">Office Address</h3>
                <p className="text-slate-700 leading-relaxed font-semibold">
                  Baghbahara Road, Kutchhari Chowk,<br/>
                  Opp. Hanuman Mandir,<br/>
                  Mahasamund, Chhattisgarh – 493445
                </p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-[2rem] shadow-xl shadow-slate-200/40 border border-slate-100 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-900 flex items-center justify-center shrink-0 shadow-sm border border-slate-200">
                <Linkedin size={24} />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-[0.2em] mb-2">Follow Us</h3>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-brand-600 transition-all"
                >
                  LabelzAI Techservices LLP <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl shadow-slate-200/60 border border-slate-100 h-fit sticky top-28">
          <h3 className="text-3xl font-semibold text-slate-900 mb-2">Send an Enquiry</h3>
          <p className="text-slate-500 text-sm mb-10 font-medium">Fill out the form below and we'll get back to you within 24 hours.</p>

          {/* Success Message */}
          {success && (
            <div className="mb-8 p-5 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-3 animate-in">
              <CheckCircle2 size={22} className="text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <p className="text-emerald-800 font-semibold">Message sent successfully!</p>
                <p className="text-emerald-600 text-sm mt-1">Thank you for your enquiry. Our team will get back to you within 24 hours.</p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && !success && (
            <div className="mb-8 p-5 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3">
              <AlertCircle size={22} className="text-red-600 mt-0.5 shrink-0" />
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-900 uppercase tracking-widest ml-1" htmlFor="firstName">First Name</label>
                <input 
                  type="text" 
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border ${fieldErrors.firstName ? 'border-red-400 ring-2 ring-red-100' : 'border-slate-100'} focus:outline-none focus:ring-4 focus:ring-brand-600/5 focus:border-brand-600 focus:bg-white transition-all font-medium`}
                  placeholder="John"
                  disabled={loading}
                />
                {fieldErrors.firstName && <p className="text-red-500 text-xs font-medium ml-1">{fieldErrors.firstName}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-900 uppercase tracking-widest ml-1" htmlFor="lastName">Last Name</label>
                <input 
                  type="text" 
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border ${fieldErrors.lastName ? 'border-red-400 ring-2 ring-red-100' : 'border-slate-100'} focus:outline-none focus:ring-4 focus:ring-brand-600/5 focus:border-brand-600 focus:bg-white transition-all font-medium`}
                  placeholder="Doe"
                  disabled={loading}
                />
                {fieldErrors.lastName && <p className="text-red-500 text-xs font-medium ml-1">{fieldErrors.lastName}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-900 uppercase tracking-widest ml-1" htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border ${fieldErrors.email ? 'border-red-400 ring-2 ring-red-100' : 'border-slate-100'} focus:outline-none focus:ring-4 focus:ring-brand-600/5 focus:border-brand-600 focus:bg-white transition-all font-medium`}
                placeholder="john@company.com"
                disabled={loading}
              />
              {fieldErrors.email && <p className="text-red-500 text-xs font-medium ml-1">{fieldErrors.email}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-900 uppercase tracking-widest ml-1" htmlFor="service">Interested Service</label>
              <select 
                id="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border ${fieldErrors.service ? 'border-red-400 ring-2 ring-red-100' : 'border-slate-100'} focus:outline-none focus:ring-4 focus:ring-brand-600/5 focus:border-brand-600 focus:bg-white transition-all text-slate-700 font-medium cursor-pointer`}
                disabled={loading}
              >
                <option value="">Select a service...</option>
                <option value="image">Image Annotation</option>
                <option value="video">Video Annotation</option>
                <option value="text">Text and NLP Annotation</option>
                <option value="audio">Audio Annotation</option>
                <option value="medical">Medical AI Labeling</option>
                <option value="other">Other / Custom Requirement</option>
              </select>
              {fieldErrors.service && <p className="text-red-500 text-xs font-medium ml-1">{fieldErrors.service}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-900 uppercase tracking-widest ml-1" htmlFor="message">Project Details</label>
              <textarea 
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border ${fieldErrors.message ? 'border-red-400 ring-2 ring-red-100' : 'border-slate-100'} focus:outline-none focus:ring-4 focus:ring-brand-600/5 focus:border-brand-600 focus:bg-white transition-all resize-none font-medium`}
                placeholder="Tell us about your project requirements..."
                disabled={loading}
              ></textarea>
              {fieldErrors.message && <p className="text-red-500 text-xs font-medium ml-1">{fieldErrors.message}</p>}
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-5 rounded-2xl shadow-xl shadow-slate-900/10 hover:shadow-2xl transition-all active:scale-[0.98] flex justify-center items-center gap-3 mt-4 text-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
            >
              {loading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
