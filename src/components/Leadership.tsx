import { Linkedin, Mail, CheckCircle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import founderImage from "@/assets/founder-profile-nobg.png";

const Leadership = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const founderCEO = {
    name: "Rajesh Kumar",
    position: "Founder & CEO",
    description: "With over 25 years of distinguished experience in wealth management and financial planning, Rajesh Kumar has established himself as a visionary leader in the financial services industry. As the Founder and CEO, he brings a wealth of knowledge from his previous role as Vice President at leading investment firms.",
    philosophy: "Rajesh believes in building long-term relationships based on trust, transparency, and personalized financial strategies. His client-centric approach has helped hundreds of individuals and families achieve their financial goals and secure their future.",
    achievements: [
      "Successfully managed portfolios worth over $500M",
      "Certified Financial Planner (CFP) with specialized expertise in wealth management",
      "Former Vice President at premier investment firms",
      "Recognized thought leader with regular contributions to financial publications"
    ],
    image: founderImage
  };

  const teamMembers = [
    {
      name: "Priya Sharma",
      position: "Chief Investment Officer",
      bio: "Expert in portfolio management with a track record of consistent returns. Certified Financial Planner.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    },
    {
      name: "Amit Patel",
      position: "Head of Operations",
      bio: "20+ years in financial operations and compliance. Ensures seamless service delivery and regulatory adherence.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      name: "Sneha Reddy",
      position: "Director of Client Relations",
      bio: "Passionate about building lasting client relationships. Expert in personalized wealth management solutions.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section id="leadership" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Guided by experienced professionals committed to your financial success.
          </p>
        </div>

        {/* Featured CEO Section */}
        <div 
          ref={sectionRef}
          className="mb-20 rounded-3xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12 bg-gradient-to-br from-card via-card/95 to-primary/5 rounded-3xl border border-border lg:rounded-r-none">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Position Badge */}
              <div 
                className={`inline-block transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '100ms' }}
              >
                <span className="px-6 py-2 bg-[#a8d530] text-black text-sm font-bold rounded-full uppercase tracking-wider">
                  {founderCEO.position}
                </span>
              </div>

              {/* Name */}
              <h3 
                className={`text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                {founderCEO.name}
              </h3>

              {/* Description */}
              <p 
                className={`text-foreground/80 text-lg leading-relaxed transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                {founderCEO.description}
              </p>

              {/* Philosophy */}
              <div 
                className={`bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <h4 className="text-xl font-bold mb-3 text-primary">Philosophy</h4>
                <p className="text-foreground/80">
                  {founderCEO.philosophy}
                </p>
              </div>

              {/* Key Achievements */}
              <div 
                className={`bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <h4 className="text-xl font-bold mb-4 text-primary">Key Achievements</h4>
                <div className="space-y-3">
                  {founderCEO.achievements.map((achievement, idx) => (
                    <div 
                      key={idx} 
                      className={`flex items-start gap-3 transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${600 + idx * 100}ms` }}
                    >
                      <CheckCircle className="w-5 h-5 text-[#a8d530] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Image */}
            <div 
              className={`relative lg:self-end transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="relative w-full h-full group lg:h-[700px]">
                {/* Multiple Animated Circles with single dots */}
                <div className="absolute inset-0 flex items-center justify-center -z-10">
                  {/* Outermost circle - slowest */}
                  <div className="absolute w-[90%] h-[90%] animate-spin" style={{ animationDuration: '30s' }}>
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="48" fill="none" stroke="#3b82f6" strokeWidth="0.3" opacity="0.3"/>
                      <circle cx="50" cy="2" r="2" fill="#3b82f6" opacity="0.4"/>
                    </svg>
                  </div>
                  
                  {/* Second circle */}
                  <div className="absolute w-[75%] h-[75%] animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="48" fill="none" stroke="#3b82f6" strokeWidth="0.3" opacity="0.35"/>
                      <circle cx="50" cy="2" r="2.5" fill="#3b82f6" opacity="0.45"/>
                    </svg>
                  </div>
                  
                  {/* Third circle */}
                  <div className="absolute w-[60%] h-[60%] animate-spin" style={{ animationDuration: '15s' }}>
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="48" fill="none" stroke="#3b82f6" strokeWidth="0.3" opacity="0.4"/>
                      <circle cx="50" cy="2" r="2.5" fill="#3b82f6" opacity="0.5"/>
                    </svg>
                  </div>
                  
                  {/* Fourth circle */}
                  <div className="absolute w-[45%] h-[45%] animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="48" fill="none" stroke="#3b82f6" strokeWidth="0.3" opacity="0.45"/>
                      <circle cx="50" cy="2" r="3" fill="#3b82f6" opacity="0.55"/>
                    </svg>
                  </div>
                  
                  {/* Innermost circle - fastest */}
                  <div className="absolute w-[30%] h-[30%] animate-spin" style={{ animationDuration: '10s' }}>
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="48" fill="none" stroke="#3b82f6" strokeWidth="0.3" opacity="0.5"/>
                      <circle cx="50" cy="2" r="3" fill="#3b82f6" opacity="0.6"/>
                    </svg>
                  </div>
                </div>
                
                <img
                  src={founderCEO.image}
                  alt={founderCEO.name}
                  className="w-full h-full object-contain object-bottom grayscale group-hover:grayscale-0 transition-all duration-700 relative z-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl border border-border hover:border-primary/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-3">{member.position}</p>
                <p className="text-foreground/60 text-sm mb-4">{member.bio}</p>

                {/* Social Links */}
                <div className="flex gap-3">
                  <button className="w-9 h-9 bg-secondary/50 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-9 h-9 bg-secondary/50 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
