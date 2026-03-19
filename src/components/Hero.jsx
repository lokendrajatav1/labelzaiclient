import React from "react";
import Typewriter from "typewriter-effect";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-white pt-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Side: Content Styled exactly like the image */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left mt-16 md:mt-24">
          <h1 className="text-4xl md:text-7xl font-semibold text-slate-900 leading-[1.05] tracking-tight mb-2 md:mb-8 transition-colors duration-500">
            Your fastest path to <br />
            production for <br />
            <span className="text-brand-500 inline-block drop-shadow-sm">
              <Typewriter
                options={{
                  strings: [
                    "Computer Vision",
                    "3D LiDAR Data",
                    "Audio Training",
                    "NLP Datasets",
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "typewriter-wrapper",
                  cursorClassName: "typewriter-cursor",
                }}
              />
            </span>
          </h1>

          <p className="text-slate-500 text-xl md:text-2xl font-medium leading-relaxed mb-5 md:mb-12 max-w-2xl">
            Intuitive infrastructure to scale any app or agent from <br className="hidden md:block" />
            your first user to your billionth.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link to="/contact" className="flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 text-lg font-semibold hover:bg-slate-800 transition-all rounded-full shadow-lg shadow-slate-900/10">
              Get in touch <ChevronRight size={20} />
            </Link>
            {/* <Link to="/contact" className="flex items-center justify-center bg-white text-slate-900 border border-slate-200 px-10 py-4 text-lg font-semibold hover:bg-slate-50 transition-all rounded-full">
              Get in touch
            </Link> */}
          </div>
        </div>

        {/* Right Side: Image Placeholder */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img 
            src="/hero2.png" 
            alt="LabelzAI Platform" 
            className="w-full h-auto max-w-xl lg:max-w-2xl"
          />
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .typewriter-cursor {
          background-color: #e5e7eb;
          padding-left: 12px;
          margin-left: 8px;
          display: inline;
          font-weight: 200;
        }
      `}} />
    </section>
  );
};

export default Hero;
