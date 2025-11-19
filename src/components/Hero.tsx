import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let current = 0;
            const target = 27;
            const increment = 1;
            const duration = 2000; // 2 seconds
            const stepTime = duration / target;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCount(target);
                clearInterval(timer);
              } else {
                setCount(current);
              }
            }, stepTime);

            return () => clearInterval(timer);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cyan-400 dark:bg-gray-950">
      {/* Large Text Watermark at Bottom - Behind image - Centered */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 overflow-hidden pointer-events-none z-0">
        <div className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold text-teal-700/25 dark:text-teal-800/25 leading-none whitespace-nowrap">
          Smart Invest
        </div>
      </div>

      {/* Decorative Curved Line */}
      <svg className="absolute top-1/3 right-[55%] w-24 h-24 md:w-32 md:h-32 text-white/30" viewBox="0 0 100 100">
        <path d="M 20 80 Q 40 20, 80 50" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>

      {/* Center Content - Professional Image - Positioned at Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center z-10 pointer-events-none">
        <img
          src="https://res.cloudinary.com/dkgwi1xvx/image/upload/v1763571734/Gemini_Generated_Image_di4uj2di4uj2di4u-removebg-preview_c6cnx0.png"
          alt="Professional"
          className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[750px] h-auto object-contain object-bottom"
        />
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
          {/* Left Content - Text */}
          <div className="text-left animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 md:mb-8 lg:mb-10">
              Insurance
              <br />
              Consulting
              <br />
              succeeds
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 md:gap-4 items-center">
              <Button 
                size="lg" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cyan-500 dark:hover:text-gray-950 rounded-full px-4 py-3 md:px-6 md:py-5 text-sm md:text-base font-medium transition-all"
              >
                Get Started
                <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
              </Button>
              
              <button className="flex items-center gap-2 md:gap-3 text-white hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 dark:bg-teal-900 flex items-center justify-center">
                  <Play className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" fill="white" />
                </div>
                <span className="font-medium text-sm md:text-base">Watch Video</span>
              </button>
            </div>
          </div>

          {/* Right Content - Stats and Description */}
          <div className="relative animate-fade-in-up delay-300 space-y-6 lg:ml-auto">
            {/* Stats Card */}
            <div ref={statsRef} className="bg-white dark:bg-gray-900 rounded-2xl p-3 md:p-4 shadow-lg inline-block">
              <div className="flex items-start gap-2 md:gap-3">
                {/* Circular Image */}
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-200">
                  <img
                    src="https://res.cloudinary.com/dkgwi1xvx/image/upload/v1763571734/Gemini_Generated_Image_di4uj2di4uj2di4u-removebg-preview_c6cnx0.png"
                    alt="Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <div className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-0.5">
                    {count}+
                  </div>
                  <div className="text-[10px] md:text-xs text-gray-600 dark:text-gray-400 font-medium leading-tight">
                    Years of
                    <br />
                    Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Description Text */}
            <div className="max-w-sm">
              <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed">
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
