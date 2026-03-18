import React from "react";
import {
  Linkedin,
  Mail,
  MapPin,
  Instagram
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-10 md:pt-20 pb-10 font-sans border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-semibold tracking-tighter text-white"
            >
              <img
                src="/logo.png"
                alt="LabelzAI"
                className="h-12 w-auto opacity-100 brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-[15px] font-medium leading-relaxed max-w-xs">
              Empowering AI growth with high-precision data labeling and
              infrastructure. Turning complex data into high-quality,
              model-ready datasets.
            </p>
            <div className="flex items-center gap-4">
              {[
                {
                  icon: <Linkedin size={20} />,
                  href: "https://linkedin.com",
                },
                {
                  icon: <Instagram size={20} />,
                  href: "#",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all duration-300 shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-8">
              Platform
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/#about" },
                { name: "Services", href: "/#services" },
                { name: "Careers", href: "/career" },
                { name: "Contact", href: "/contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-all text-[15px] font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-600 scale-0 group-hover:scale-100 transition-transform"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-8">
              Our Solutions
            </h3>
            <ul className="space-y-4">
              {[
                "Image Annotation",
                "Video Annotation",
                "Audio Annotation",
                "NLP Datasets",
                "Medical AI Labeling"
              ].map((name, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-white transition-colors text-[15px] font-medium"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-8">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-brand-500 mt-1 shrink-0" />
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  Baghbahara Road, Kutchhari Chowk,<br />
                  Opp. Hanuman Mandir,<br />
                  Mahasamund, CG - 493445
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Mail size={20} className="text-brand-500 shrink-0" />
                <a
                  href="mailto:hello@labelzaitech.com"
                  className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                >
                  hello@labelzaitech.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-[13px] font-medium">
            &copy; {new Date().getFullYear()} LabelzAI Techservices LLP. All rights reserved.
          </p>

          <p className="text-slate-500 text-[13px] font-medium flex items-center gap-2">
            Built by{" "}
            <a
              href="https://digitalsuccesssolutions.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-brand-400 transition-colors border-b border-slate-800 hover:border-brand-400 pb-0.5"
            >
              Digital Success Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
