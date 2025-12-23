import { ArrowRight, TrendingUp, Shield, PiggyBank, ChartLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Animate counter
  useEffect(() => {
    if (!isLoaded) return;
    const target = 12.4;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, duration / steps);
    
    return () => clearInterval(interval);
  }, [isLoaded]);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-gradient-to-br from-amber-50/80 via-orange-50/50 to-sky-50/80 dark:from-background dark:via-background dark:to-background">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-200/40 to-amber-200/40 dark:from-primary/10 dark:to-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-sky-200/40 to-blue-200/40 dark:from-blue-500/10 dark:to-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-rose-200/30 to-pink-200/30 dark:from-pink-500/10 dark:to-pink-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 py-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 mb-6 transition-all duration-700 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-foreground/80">Trusted by 10,000+ Investors</span>
          </div>

          {/* Main Heading */}
          <h1 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6 transition-all duration-700 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="inline-flex items-center gap-2 flex-wrap justify-center">
              Manage your
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-primary to-orange-500 text-white shadow-lg shadow-primary/30">
                <ChartLine className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </span>
            </span>
            <br />
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text">
              finance easily with
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-orange-500 to-amber-500 bg-clip-text text-transparent">
              SmartInvest Solutions
            </span>
          </h1>

          {/* Subheading */}
          <p 
            className={`text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-xl transition-all duration-700 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            One point Solutions for Insurance & Investment
          </p>

          {/* CTA Search Bar */}
          <div 
            className={`w-full max-w-md lg:max-w-lg mb-12 transition-all duration-700 ease-out ${
              isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="flex items-center bg-card/80 backdrop-blur-sm border border-border/50 rounded-full p-1.5 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300">
              <input
                type="text"
                placeholder="Start your Investment Journey"
                className="flex-1 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none min-w-0"
                readOnly
              />
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full px-6 py-3 text-sm font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all shadow-lg"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Floating Cards Grid */}
          <div 
            className={`grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl transition-all duration-700 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            {/* Portfolio Growth Card */}
            <div className="group relative p-5 rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Portfolio</span>
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-foreground">+{count.toFixed(1)}%</span>
                  <span className="text-xs text-green-600 font-medium">this month</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-1000"
                    style={{ width: isLoaded ? "72%" : "0%" }}
                  />
                </div>
              </div>
            </div>

            {/* Insurance Coverage Card */}
            <div className="group relative p-5 rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Coverage</span>
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-foreground">₹1 Cr</span>
                  <span className="text-xs text-blue-600 font-medium">protected</span>
                </div>
                <div className="mt-2 flex gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <div 
                      key={i} 
                      className="h-1.5 flex-1 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 transition-all duration-500"
                      style={{ 
                        opacity: isLoaded ? 1 : 0,
                        transitionDelay: `${i * 100}ms`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* SIP Card */}
            <div className="group relative p-5 rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Monthly SIP</span>
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <PiggyBank className="w-4 h-4 text-amber-600" />
                  </div>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-foreground">₹25K</span>
                  <span className="text-xs text-amber-600 font-medium">active</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[1,2,3].map((i) => (
                      <div 
                        key={i}
                        className="w-4 h-4 rounded-full border-2 border-card bg-gradient-to-br from-amber-400 to-orange-500"
                        style={{
                          opacity: isLoaded ? 1 : 0,
                          transitionDelay: `${i * 150}ms`,
                          transition: "opacity 0.5s ease"
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">3 funds</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border border-primary/20 rounded-2xl rotate-12 hidden lg:block" />
      <div className="absolute top-1/4 right-10 w-16 h-16 border border-primary/20 rounded-full hidden lg:block" />
      <div className="absolute bottom-1/3 right-20 w-3 h-3 bg-primary/40 rounded-full animate-pulse hidden lg:block" />
    </section>
  );
};

export default Hero;
