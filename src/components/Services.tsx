import { Wallet, TrendingUp, Shield, PieChart, Building, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Wallet,
      title: "Wealth Management",
      description: "Comprehensive portfolio management strategies designed to grow and protect your wealth across market cycles.",
      features: ["Portfolio Diversification", "Risk Management", "Performance Tracking"],
    },
    {
      icon: TrendingUp,
      title: "Investment Planning",
      description: "Strategic investment solutions tailored to your risk tolerance and financial objectives.",
      features: ["Equity Investments", "Mutual Funds", "Alternative Assets"],
    },
    {
      icon: Shield,
      title: "Insurance Solutions",
      description: "Protect what matters most with comprehensive insurance coverage and risk mitigation strategies.",
      features: ["Life Insurance", "Health Coverage", "Wealth Protection"],
    },
    {
      icon: PieChart,
      title: "Retirement Planning",
      description: "Build a secure retirement with strategic planning and disciplined wealth accumulation.",
      features: ["Pension Plans", "Retirement Funds", "Income Planning"],
    },
    {
      icon: Building,
      title: "Tax Planning",
      description: "Optimize your tax efficiency with smart strategies and legal tax-saving instruments.",
      features: ["Tax Optimization", "Legal Compliance", "Strategic Planning"],
    },
    {
      icon: Users,
      title: "Estate Planning",
      description: "Secure your legacy and ensure smooth wealth transfer to future generations.",
      features: ["Wealth Transfer", "Trust Services", "Legacy Planning"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Comprehensive financial solutions designed to meet every aspect of your wealth management needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-stagger
              className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 hover:scale-[1.02]"
            >
              {/* Icon */}
              <div 
                data-stagger
                className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
              >
                <service.icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
              </div>

              {/* Title */}
              <h3 
                data-stagger
                className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300"
              >
                {service.title}
              </h3>

              {/* Description */}
              <p 
                data-stagger
                className="text-foreground/70 mb-6 group-hover:text-foreground/90 transition-colors"
              >
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li 
                    key={idx} 
                    data-stagger
                    className="flex items-center text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:scale-150 transition-transform" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                data-stagger
                variant="outline"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p data-stagger className="text-foreground/70 mb-6 text-lg">Need a custom solution?</p>
          <Button 
            data-stagger
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
