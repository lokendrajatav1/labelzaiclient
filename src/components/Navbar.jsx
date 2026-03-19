import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, 
  Camera, Brain, Layers, Database, Mic, Search, Merge, 
  BrainCircuit, Car, Stethoscope, ShoppingBag, 
  Factory, Film, GraduationCap, Sprout
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll lock for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const services = [
    { title: "Image Annotation", icon: <Camera size={18} />, desc: "Precise 2D/3D image labeling", link: "/services/image-annotation" },
    { title: "Video Annotation", icon: <Layers size={18} />, desc: "Frame-by-frame object tracking", link: "/services/video-annotation" },
    { title: "Audio Annotation", icon: <Mic size={18} />, desc: "Expert speech & acoustic modeling", link: "/services/audio-annotation" },
    { title: "NLP Services", icon: <Brain size={18} />, desc: "Advanced text & sentiment analysis", link: "/services/nlp-datasets" },
    { title: "LiDAR & 3D", icon: <Database size={18} />, desc: "Point cloud & sensor data labeling", link: "/services/lidar-3d" },
    { title: "Multimodal Annotation", icon: <Merge size={18} />, desc: "Integrated multi-type data sync", link: "/services/multimodal-annotation" },
    { title: "Data Classification", icon: <Search size={18} />, desc: "Structured taxonomy categorization", link: "/services/data-classification" },
  ];

  const industries = [
    { title: "Artificial Intelligence", icon: <BrainCircuit size={18} />, desc: "Custom training data for advanced AI models", link: "/industries/artificial-intelligence" },
    { title: "Autonomous Vehicles", icon: <Car size={18} />, desc: "LiDAR and camera annotation for self-driving", link: "/industries/autonomous-vehicles" },
    { title: "Medical & Healthcare", icon: <Stethoscope size={18} />, desc: "Precision labeling for medical diagnostic AI", link: "/industries/healthcare-lifesciences" },
    { title: "E-Commerce & Retail", icon: <ShoppingBag size={18} />, desc: "Product classification and search optimization", link: "/industries/ecommerce-retail" },
    { title: "Media & Entertainment", icon: <Film size={18} />, desc: "Content moderation and recommendation datasets", link: "/industries/media-entertainment" },
    { title: "Education & Edtech", icon: <GraduationCap size={18} />, desc: "Personalized learning and assessment data", link: "/industries/education-edtech" },
    { title: "Manufacturing", icon: <Factory size={18} />, desc: "Quality control and predictive maintenance data", link: "/industries/manufacturing" },
    { title: "Agriculture", icon: <Sprout size={18} />, desc: "Crop health and yield prediction mapping", link: "/industries/agriculture" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        (isScrolled || isMobileMenuOpen) 
          ? 'bg-white border-b border-slate-100 py-4 md:py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group relative z-50"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img 
            src="/logo.png" 
            alt="LabelzAI Logo" 
            className="h-8 md:h-10 w-auto transition-all" 
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          <Link to="/" className="text-[15px] font-medium text-slate-900 hover:text-brand-600 transition-colors">Home</Link>
          <a href="/#about" className="text-[15px] font-medium text-slate-900 hover:text-brand-600 transition-colors">About Us</a>
          
          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-[15px] font-medium text-slate-900 hover:text-brand-600 transition-colors py-2">
              Services <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute top-full -left-20 w-[600px] bg-white border border-slate-100 rounded-2xl p-6 grid grid-cols-2 gap-4 transition-all duration-300 origin-top ${activeDropdown === 'services' ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
              {services.map((item, idx) => (
                <Link key={idx} to={item.link || "/#services"} className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-50/50 transition-colors group/item">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center group-hover/item:bg-brand-600 group-hover/item:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Industries Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setActiveDropdown('industries')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-[15px] font-medium text-slate-900 hover:text-brand-600 transition-colors py-2">
              What we Serve <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute top-full -left-20 w-[600px] bg-white border border-slate-100 rounded-2xl p-6 grid grid-cols-2 gap-4 transition-all duration-300 origin-top ${activeDropdown === 'industries' ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
              {industries.map((item, idx) => (
                <Link key={idx} to={item.link} className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-50/50 transition-colors group/item">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center group-hover/item:bg-brand-600 group-hover/item:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link to="/career" className="text-[15px] font-medium text-slate-900 hover:text-brand-600 transition-colors">Careers</Link>
          <Link to="/contact" className="text-[15px] font-medium text-slate-900 hover:text-brand-600 transition-colors">Contact</Link>
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-5">
          <Link to="/contact" className="text-[15px] font-semibold bg-brand-600 text-white px-8 py-2.5 rounded-full hover:bg-brand-700 transition-all active:scale-95">
            Get Started
          </Link>
        </div>
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden relative z-50 p-2 -mr-2 text-slate-900 bg-slate-50 rounded-xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-24 px-6 h-screen flex flex-col overflow-y-auto pb-10">
          <div className="flex flex-col gap-8 flex-1">
            <div className="flex flex-col gap-6">
              <Link to="/" className="text-xl font-medium text-slate-900 border-b border-slate-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <a href="/#about" className="text-xl font-medium text-slate-900 border-b border-slate-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
              <Link to="/career" className="text-xl font-medium text-slate-900 border-b border-slate-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
              <Link to="/contact" className="text-xl font-medium text-slate-900 border-b border-slate-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-[1px] flex-1 bg-slate-100"></div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Our Services</h3>
                <div className="h-[1px] flex-1 bg-slate-100"></div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {services.map((item, idx) => (
                  <Link key={idx} to={item.link || "/#services"} className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 text-base font-semibold text-slate-700 active:bg-brand-50 active:text-brand-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-9 h-9 rounded-lg bg-white border border-slate-100 text-brand-600 flex items-center justify-center">
                      {item.icon}
                    </div>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-6">
               <div className="flex items-center gap-3">
                <div className="h-[1px] flex-1 bg-slate-100"></div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">What we Serve</h3>
                <div className="h-[1px] flex-1 bg-slate-100"></div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {industries.map((item, idx) => (
                  <Link key={idx} to={item.link} className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 text-base font-semibold text-slate-700 active:bg-brand-50 active:text-brand-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-9 h-9 rounded-lg bg-white border border-slate-100 text-brand-600 flex items-center justify-center">
                      {item.icon}
                    </div>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full py-4 text-center rounded-2xl bg-brand-600 text-white font-bold text-lg">Get Special Quote</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
