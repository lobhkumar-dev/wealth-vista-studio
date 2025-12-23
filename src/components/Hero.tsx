import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Globe } from "@/components/ui/globe";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">
      {/* Content Container - Positioned at top with proper spacing */}
      <div className="container mx-auto px-4 pt-28 sm:pt-32 md:pt-36 lg:pt-40 relative z-10 flex-1 flex flex-col">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-4 md:mb-6 animate-fade-in">
            <span className="inline-flex items-center gap-2 flex-wrap justify-center">
              Manage your
              <svg 
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary" 
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight mb-4 md:mb-6 animate-fade-in">
            SmartInvest Solutions
          </h2>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 animate-fade-in max-w-xl">
            One point Solutions for Insurance & Investment
          </p>

          {/* CTA Search Bar Style */}
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg animate-fade-in">
            <div className="flex items-center bg-card border border-border rounded-full p-1 sm:p-1.5 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <input
                type="text"
                placeholder="Start your Investment Journey"
                className="flex-1 bg-transparent px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none min-w-0"
                readOnly
              />
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full px-3 sm:px-5 md:px-6 py-2 sm:py-2.5 text-xs sm:text-sm md:text-base font-medium bg-foreground text-background hover:bg-foreground/90 transition-all whitespace-nowrap"
              >
                Get Started
                <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Large Globe at Bottom - Half visible */}
      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] mt-auto">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[40%] sm:translate-y-[45%] md:translate-y-[50%] w-[600px] sm:w-[700px] md:w-[900px] lg:w-[1100px] xl:w-[1300px] aspect-square">
          <Globe className="!relative !inset-auto !max-w-none w-full h-full" />
        </div>
        
        {/* Top gradient fade for smooth transition */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent z-10" />
      </div>

      {/* Subtle decorative dots */}
      <div className="absolute top-1/4 left-8 sm:left-16 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/30 animate-pulse" />
      <div className="absolute top-1/3 right-8 sm:right-20 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary/20 animate-pulse delay-300" />
    </section>
  );
};

export default Hero;
