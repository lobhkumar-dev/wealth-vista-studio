import { Linkedin, Mail } from "lucide-react";

const Leadership = () => {
  const leaders = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      bio: "25+ years of experience in wealth management and financial planning. Former VP at leading investment firms.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl border border-border hover:border-primary/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                <p className="text-primary text-sm mb-3">{leader.position}</p>
                <p className="text-foreground/60 text-sm mb-4">{leader.bio}</p>

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
