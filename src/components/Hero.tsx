import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Globe } from "@/components/ui/globe";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden bg-background">
      {/* Content Container - Positioned at top with proper spacing */}
      <div className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 lg:pt-36 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-3 sm:mb-4 md:mb-5 transition-all duration-700 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center">
              Manage your
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 16l4-4 4 4 5-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <br />
            <span>finance easily</span>
            <br />
            <span>with</span>
          </h1>

          {/* Brand Name */}
          <h2 
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-tight mb-2 sm:mb-3 md:mb-4 transition-all duration-700 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            SmartInvest Solutions
          </h2>

          {/* Subheading */}
          <p 
            className={`text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-5 md:mb-6 max-w-md lg:max-w-xl px-2 transition-all duration-700 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            One point Solutions for Insurance & Investment
          </p>

          {/* CTA Search Bar Style */}
          <div 
            className={`w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-2 sm:px-0 transition-all duration-700 ease-out ${
              isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            <div className="flex items-center bg-card border border-border rounded-full p-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <input
                type="text"
                placeholder="Start your Investment Journey"
                className="flex-1 bg-transparent px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 text-[11px] sm:text-xs md:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none min-w-0"
                readOnly
              />
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs md:text-sm font-medium bg-foreground text-background hover:bg-foreground/90 transition-all whitespace-nowrap flex-shrink-0"
              >
                Get Started
                <ArrowRight className="ml-1 w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Large Globe at Bottom - Half visible, positioned to fill remaining space */}
      <div 
        className={`relative flex-1 min-h-[120px] sm:min-h-[180px] md:min-h-[300px] lg:min-h-[400px] mt-2 sm:mt-4 md:mt-8 transition-all duration-1000 ease-out ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{ transitionDelay: "600ms" }}
      >
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[50%] sm:translate-y-[48%] md:translate-y-[50%] w-[400px] sm:w-[550px] md:w-[800px] lg:w-[1000px] xl:w-[1200px] aspect-square">
          <Globe className="!relative !inset-auto !max-w-none w-full h-full" />
        </div>
      </div>

      {/* Subtle decorative dots - hidden on very small screens */}
      <div className="hidden sm:block absolute top-1/4 left-4 sm:left-8 md:left-16 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/30 animate-pulse" />
      <div className="hidden sm:block absolute top-1/3 right-4 sm:right-8 md:right-20 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary/20 animate-pulse delay-300" />
    </section>
  );
};

export default Hero;
