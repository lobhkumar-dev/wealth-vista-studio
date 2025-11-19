import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cyan-400 dark:bg-gray-950">
      {/* Large Text Watermark at Bottom - Behind image - Centered */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 overflow-hidden pointer-events-none z-0">
        <div className="text-[10rem] md:text-[14rem] lg:text-[18rem] font-bold text-teal-700/25 dark:text-teal-800/25 leading-none whitespace-nowrap">
          moneytree
        </div>
      </div>

      {/* Decorative Curved Line */}
      <svg className="absolute top-1/3 right-[55%] w-24 h-24 md:w-32 md:h-32 text-white/30" viewBox="0 0 100 100">
        <path d="M 20 80 Q 40 20, 80 50" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>

      <div className="container mx-auto px-4 py-20 relative z-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-4 items-center max-w-7xl mx-auto">
          {/* Left Content - Text */}
          <div className="text-left animate-fade-in-up lg:pr-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-8 lg:mb-12">
              Insurance
              <br />
              Consulting
              <br />
              succeeds
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <Button 
                size="lg" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cyan-500 dark:hover:text-gray-950 rounded-full px-6 py-5 text-base font-medium transition-all"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              
              <button className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-gray-800 dark:bg-teal-900 flex items-center justify-center">
                  <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                </div>
                <span className="font-medium text-base">Watch Video</span>
              </button>
            </div>
          </div>

          {/* Center Content - Professional Image - In Front */}
          <div className="relative flex justify-center animate-fade-in-up delay-200 lg:mx-4 z-10">
            <img
              src="https://res.cloudinary.com/dkgwi1xvx/image/upload/v1763571734/Gemini_Generated_Image_di4uj2di4uj2di4u-removebg-preview_c6cnx0.png"
              alt="Professional"
              className="w-full max-w-[550px] lg:max-w-[750px] xl:max-w-[900px] h-auto object-contain relative"
            />
          </div>

          {/* Right Content - Stats and Description */}
          <div className="relative animate-fade-in-up delay-300 lg:pl-8 space-y-6">
            {/* Stats Card */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-lg inline-block">
              <div className="flex items-start gap-3">
                {/* Circular Image */}
                <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-200">
                  <img
                    src="https://res.cloudinary.com/dkgwi1xvx/image/upload/v1763571734/Gemini_Generated_Image_di4uj2di4uj2di4u-removebg-preview_c6cnx0.png"
                    alt="Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-0.5">27+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-medium leading-tight">
                    Years of
                    <br />
                    Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Description Text */}
            <div className="max-w-sm">
              <p className="text-white text-sm md:text-base leading-relaxed">
                As independent insurance consultants, we do not sell insurance products. Instead, we work solely in your best interest to evaluate your current coverage and identify
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
