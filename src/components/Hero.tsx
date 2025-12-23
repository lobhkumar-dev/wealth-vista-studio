import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Globe } from "@/components/ui/globe";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      {/* Radial gradient for globe area */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-full bg-[radial-gradient(circle_at_50%_80%,hsl(var(--primary)/0.08),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-4 md:mb-6 animate-fade-in">
            <span className="inline-flex items-center gap-2 flex-wrap justify-center">
              Manage your
              <svg 
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" 
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
            <span className="inline-flex items-center gap-2 flex-wrap justify-center">
              with{" "}
              <span className="text-primary">SmartInvest Solutions</span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 animate-fade-in max-w-xl">
            One point Solutions for Insurance & Investment
          </p>

          {/* CTA Search Bar Style */}
          <div className="w-full max-w-md sm:max-w-lg animate-fade-in">
            <div className="flex items-center bg-card border border-border rounded-full p-1.5 sm:p-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <input
                type="text"
                placeholder="Start your Investment Journey"
                className="flex-1 bg-transparent px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
                readOnly
              />
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium bg-foreground text-background hover:bg-foreground/90 transition-all"
              >
                Get Started
                <ArrowRight className="ml-1.5 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Globe Container */}
        <div className="relative mt-8 md:mt-12 flex items-center justify-center">
          <div className="relative w-full max-w-lg aspect-square overflow-hidden rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm">
            {/* Globe */}
            <Globe className="top-10 md:top-16" />
            
            {/* Bottom gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_200%,hsl(var(--background)),transparent)]" />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-primary/40 animate-pulse" />
      <div className="absolute top-1/3 right-16 w-3 h-3 rounded-full bg-primary/30 animate-pulse delay-300" />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/20 animate-pulse delay-500" />
    </section>
  );
};

export default Hero;
