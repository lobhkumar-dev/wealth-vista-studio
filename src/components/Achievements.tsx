import { useState } from "react";
import { Award, Star, Sparkles } from "lucide-react";

const Achievements = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const achievements = [
    {
      image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766691464/IMG_20241108_140628_daonnm.jpg",
      title: "Excellence Award 2024",
      category: "Recognition",
    },
    {
      image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766691462/IMG_20240919_133546_rhxqqh.jpg",
      title: "Top Performer",
      category: "Achievement",
    },
    {
      image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766691462/IMG_20240822_123208_c48yv9.jpg",
      title: "Client Milestone",
      category: "Success",
    },
    {
      image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766691452/IMG_20240822_121624_ky7xei.jpg",
      title: "Industry Leader",
      category: "Recognition",
    },
    {
      image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766691448/IMG-20231219-WA0011_h3v8bx.jpg",
      title: "Best Service Award",
      category: "Excellence",
    },
    {
      image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766691445/FB_IMG_1766681381468_qve1au.jpg",
      title: "Community Impact",
      category: "Social",
    },
  ];

  return (
    <section id="achievements" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-background via-secondary/5 to-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Milestones</span>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmer">
                Achievements
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" className="opacity-60"/>
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Celebrating our journey of excellence and the milestones that define our commitment to financial success.
          </p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 max-w-6xl mx-auto">
          {/* Large featured card */}
          <div 
            className="col-span-12 md:col-span-8 row-span-2 group relative rounded-3xl overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent z-10 opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
            <img 
              src={achievements[0].image}
              alt={achievements[0].title}
              className="w-full h-full object-cover aspect-[4/3] md:aspect-auto md:h-[500px] group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
              <div className={`transform transition-all duration-500 ${hoveredIndex === 0 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <span className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-sm text-primary text-xs font-semibold rounded-full mb-3 border border-primary/30">
                  {achievements[0].category}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {achievements[0].title}
              </h3>
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
            </div>
            {/* Glowing border on hover */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-500 z-30 pointer-events-none" />
            <div className="absolute inset-0 rounded-3xl group-hover:shadow-[0_0_40px_rgba(var(--primary),0.3)] transition-shadow duration-500 z-0" />
          </div>

          {/* Side cards */}
          {achievements.slice(1, 3).map((item, index) => (
            <div 
              key={index + 1}
              className="col-span-6 md:col-span-4 group relative rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index + 1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent z-10 opacity-70 group-hover:opacity-95 transition-opacity duration-500" />
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-48 md:h-60 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <span className={`inline-block px-2 py-0.5 bg-accent/20 backdrop-blur-sm text-accent text-[10px] font-semibold rounded-full mb-2 border border-accent/30 transform transition-all duration-500 ${hoveredIndex === index + 1 ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                  {item.category}
                </span>
                <h3 className="text-sm md:text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>
              </div>
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/40 transition-colors duration-500 z-30 pointer-events-none" />
            </div>
          ))}

          {/* Bottom row cards */}
          {achievements.slice(3, 6).map((item, index) => (
            <div 
              key={index + 3}
              className="col-span-4 group relative rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index + 3)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent z-10 opacity-70 group-hover:opacity-95 transition-opacity duration-500" />
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-32 md:h-44 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-20">
                <span className={`inline-block px-2 py-0.5 bg-primary/20 backdrop-blur-sm text-primary text-[10px] font-semibold rounded-full mb-1 border border-primary/30 transform transition-all duration-500 ${hoveredIndex === index + 3 ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                  {item.category}
                </span>
                <h3 className="text-xs md:text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-1">
                  {item.title}
                </h3>
              </div>
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-accent/40 transition-colors duration-500 z-30 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: "40+", label: "Years Experience" },
            { value: "₹50Cr+", label: "Assets Managed" },
            { value: "10,000+", label: "Happy Clients" },
            { value: "50+", label: "Awards Won" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="relative group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 text-center"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent relative z-10">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1 relative z-10">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
