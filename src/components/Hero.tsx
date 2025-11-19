import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-financial.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-500">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Text Background */}
        <div className="absolute bottom-0 left-0 right-0 text-[20rem] font-bold text-white/5 leading-none whitespace-nowrap">
          moneytree
        </div>
        
        {/* Curved Decorative Lines */}
        <svg className="absolute top-1/2 right-1/4 w-32 h-32 text-white/20" viewBox="0 0 100 100">
          <path d="M 10 50 Q 30 20, 50 50 T 90 50" stroke="currentColor" strokeWidth="3" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Financial
              <br />
              Management
              <br />
              <span className="text-white/90">succeeds</span>
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cyan-500 rounded-full px-8 py-6 text-lg font-medium transition-all"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <button className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity">
                <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white ml-1" fill="white" />
                </div>
                <span className="font-medium text-lg">Watch Video</span>
              </button>
            </div>
          </div>

          {/* Right Content - Image and Stats */}
          <div className="relative animate-fade-in-up delay-200">
            {/* Professional Image */}
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Financial Professional"
                className="w-full max-w-md mx-auto rounded-3xl object-cover aspect-[3/4]"
              />
            </div>

            {/* Stats Card */}
            <div className="absolute top-10 right-0 lg:right-10 bg-white rounded-3xl p-6 shadow-2xl animate-fade-in delay-500 w-64">
              <div className="flex items-start gap-4">
                {/* Circular Image */}
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-cyan-500 flex-shrink-0">
                  <img
                    src={heroImage}
                    alt="Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <div className="text-5xl font-bold text-gray-800 mb-1">20+</div>
                  <div className="text-sm text-gray-600 font-medium">
                    Years of
                    <br />
                    Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Description Card */}
            <div className="mt-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <p className="text-gray-700 leading-relaxed">
                As trusted financial advisors, we don't just manage wealth—we build lasting relationships. 
                We work exclusively in your best interest to evaluate your financial goals and create 
                personalized strategies for long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
