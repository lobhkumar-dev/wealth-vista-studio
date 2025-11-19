const Partners = () => {
  const partners = [
    { name: "SEBI", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop" },
    { name: "NSE", logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=100&fit=crop" },
    { name: "BSE", logo: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=200&h=100&fit=crop" },
    { name: "AMFI", logo: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=200&h=100&fit=crop" },
    { name: "IRDA", logo: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&h=100&fit=crop" },
    { name: "RBI", logo: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=200&h=100&fit=crop" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Empanelled{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              With
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Trusted and authorized by India's leading financial regulatory bodies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 flex items-center justify-center"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground/60">
            Regulated and compliant with all major financial authorities in India
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
