import { Linkedin, Mail, CheckCircle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Leadership = () => {
  const founderCEO = {
    name: "Rajesh Kumar",
    position: "Founder & CEO",
    bio: "25+ years of experience in wealth management and financial planning. Former VP at leading investment firms. Dedicated to helping clients build thriving financial futures and unlock limitless possibilities through strategic wealth management.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop",
    headquarters: {
      address: "2972 Westheimer Rd. Santa Ana",
      city: "Illinois 85486"
    },
    emails: [
      "youremail@example.com",
      "support@gmail.com"
    ],
    advantages: [
      "Guiding Your Business Success",
      "Evaluate Issues Hindering Your Growth",
      "Strategic Insights for Business Growth",
      "Available 24/7 to Assist You Anytime",
      "Expert Consultants Expertise",
      "Free Consultation to Collaboration"
    ]
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
        <div className="mb-20 bg-gradient-to-br from-card via-card/95 to-primary/5 rounded-3xl border border-border overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-block">
                <span className="px-6 py-2 bg-[#a8d530] text-black text-sm font-bold rounded-full uppercase tracking-wider">
                  Why Choose Us
                </span>
              </div>

              {/* Heading */}
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                Build A Thriving Community And{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Unlock Limitless Possibilities.
                </span>
              </h3>

              {/* Info Cards Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Headquarter Card */}
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6">
                  <h4 className="text-xl font-bold mb-3">Headquarter -</h4>
                  <p className="text-foreground/80">
                    {founderCEO.headquarters.address}
                  </p>
                  <p className="text-foreground/80">{founderCEO.headquarters.city}</p>
                </div>

                {/* Email Card */}
                <div className="bg-[#a8d530] rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-black mb-3">Email Us -</h4>
                  {founderCEO.emails.map((email, idx) => (
                    <p key={idx} className="text-black/80">
                      {email}
                    </p>
                  ))}
                </div>
              </div>

              {/* Advantages List */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">
                  The Advantages of Connecting with Us:
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {founderCEO.advantages.map((advantage, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#a8d530] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get Started Button */}
              <Button 
                size="lg"
                className="bg-[#a8d530] hover:bg-[#a8d530]/90 text-black font-bold rounded-full px-8"
              >
                Get Started <ArrowUpRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative lg:min-h-[600px]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                <img
                  src={founderCEO.image}
                  alt={founderCEO.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Decorative Elements */}
                <div className="absolute bottom-8 right-8 bg-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Revenue</div>
                  <div className="text-2xl font-bold text-primary">$193,000</div>
                  <div className="flex gap-1 mt-3">
                    {[40, 60, 45, 70, 55, 80, 65].map((height, idx) => (
                      <div
                        key={idx}
                        className={`w-4 rounded-full ${idx % 2 === 0 ? 'bg-primary' : 'bg-[#a8d530]'}`}
                        style={{ height: `${height}px` }}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="absolute bottom-8 left-8 w-32 h-32 bg-[#a8d530] rounded-full flex items-center justify-center shadow-xl border-4 border-card">
                  <div className="text-center">
                    <ArrowUpRight className="w-8 h-8 text-black mx-auto mb-1" />
                    <div className="text-black text-[10px] font-bold uppercase tracking-wider leading-tight" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                      BRANDING AND DEVELOPMENT COOL
                    </div>
                  </div>
                </div>
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
