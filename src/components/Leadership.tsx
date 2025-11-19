import { Linkedin, Mail } from "lucide-react";

const Leadership = () => {
  const founder = {
    name: "Rajesh Kumar",
    position: "Founder & CEO",
    bio: "Ascend the mountain not to plant your flag, but to embrace the challenge, savour the journey, and marvel at the view. Climb to experience the world, not for the world to notice you. This is why they stand out with exceptional",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop",
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
    {
      name: "Arjun Mehta",
      position: "Senior Financial Advisor",
      bio: "Dedicated to crafting personalized investment strategies. Expertise in tax planning and portfolio diversification.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section id="leadership" className="py-24 bg-gradient-to-br from-[#0a1f3d] via-[#0d2847] to-[#0a1f3d] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-[#a8d530] to-[#85b625] bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>
          <p className="text-lg text-white/70">
            Guided by experienced professionals committed to your financial success.
          </p>
        </div>

        {/* Featured Founder Card */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-[#0d3d4a] to-[#0a2833] rounded-3xl p-8 md:p-12 shadow-2xl border border-[#a8d530]/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Image with decorative elements */}
              <div className="relative">
                {/* Large yellow circle background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#a8d530] rounded-full -z-10" />
                
                {/* Main founder image */}
                <div className="relative z-10">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full max-w-md mx-auto relative z-20 rounded-3xl"
                  />
                </div>

                {/* Floating Revenue Card - Top Left */}
                <div className="absolute top-8 -left-4 bg-white rounded-2xl p-4 shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300 w-40">
                  <div className="text-xs text-gray-500 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#0d3d4a] rounded-full" />
                    <span>Revenue</span>
                    <div className="w-2 h-2 bg-[#a8d530] rounded-full" />
                    <span>Expenses</span>
                  </div>
                  <div className="text-2xl font-bold mb-2">$193,000</div>
                  <div className="flex gap-1 items-end h-16">
                    <div className="w-4 bg-[#a8d530] h-12 rounded"></div>
                    <div className="w-4 bg-[#0d3d4a] h-16 rounded"></div>
                    <div className="w-4 bg-[#a8d530] h-10 rounded"></div>
                    <div className="w-4 bg-[#0d3d4a] h-14 rounded"></div>
                    <div className="w-4 bg-[#a8d530] h-8 rounded"></div>
                    <div className="w-4 bg-[#0d3d4a] h-12 rounded"></div>
                  </div>
                </div>

                {/* Floating Invoice Card - Bottom Right */}
                <div className="absolute bottom-8 -right-4 bg-white rounded-2xl p-4 shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-300 w-40">
                  <div className="text-xs text-gray-500 mb-2">Total Invoice</div>
                  <div className="text-3xl font-bold mb-2">520</div>
                  <div className="text-xs text-green-500 mb-2">+12%</div>
                  <div className="flex gap-1 items-end h-12">
                    <div className="w-6 bg-[#a8d530] h-8 rounded"></div>
                    <div className="w-6 bg-[#a8d530] h-10 rounded"></div>
                    <div className="w-6 bg-[#a8d530] h-12 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="text-left">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#a8d530] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#0a1f3d]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white">{founder.position}</h3>
                </div>
                
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  {founder.bio}
                </p>

                <div className="border-t border-white/20 pt-6">
                  <h4 className="text-2xl font-bold text-white mb-2">{founder.name}</h4>
                  <p className="text-[#a8d530] text-lg mb-4">{founder.position}</p>
                  
                  {/* Social Links */}
                  <div className="flex gap-3">
                    <button className="w-10 h-10 bg-white/10 hover:bg-[#a8d530] hover:text-[#0a1f3d] text-white rounded-lg flex items-center justify-center transition-all duration-300">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-white/10 hover:bg-[#a8d530] hover:text-[#0a1f3d] text-white rounded-lg flex items-center justify-center transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#0d3d4a]/50 to-[#0a2833]/50 rounded-2xl border border-[#a8d530]/20 hover:border-[#a8d530] overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#a8d530]/20 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3d] via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                <p className="text-[#a8d530] text-sm mb-3">{member.position}</p>
                <p className="text-white/60 text-sm mb-4">{member.bio}</p>

                {/* Social Links */}
                <div className="flex gap-3">
                  <button className="w-9 h-9 bg-white/10 hover:bg-[#a8d530] hover:text-[#0a1f3d] text-white rounded-lg flex items-center justify-center transition-all duration-300">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-9 h-9 bg-white/10 hover:bg-[#a8d530] hover:text-[#0a1f3d] text-white rounded-lg flex items-center justify-center transition-all duration-300">
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
