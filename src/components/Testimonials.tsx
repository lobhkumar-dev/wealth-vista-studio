import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Business Owner",
    text: "Ascend the mountain not to plant your flag, but to embrace the challenge, savour the journey, and marvel at the view. Climb to experience the world, not for the world to notice you. This is why they stand out with exceptional",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "IT Professional",
    text: "Working with MoneyTree has been a game-changer for my retirement planning. Their comprehensive approach to wealth management and transparent communication have given me complete confidence in my financial future.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Entrepreneur",
    text: "The financial advisory services provided by MoneyTree Wealth are unparalleled. They helped me navigate complex investment decisions and tax planning strategies that have significantly optimized my wealth.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&fit=crop",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Doctor",
    text: "MoneyTree's holistic approach to financial planning has helped me achieve my investment goals while maintaining a balanced portfolio. Their team is responsive, knowledgeable, and always available to address my concerns.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop",
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const scrollPrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const scrollNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[current];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-[#0a1f3d] via-[#0d2847] to-[#0a1f3d] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Featured Testimonial Card */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#0d3d4a] to-[#0a2833] rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border border-[#a8d530]/20 relative">
            {/* Navigation Arrows - Top Right */}
            <div className="absolute top-6 right-6 flex gap-3 z-20">
              <button
                onClick={scrollPrev}
                className="w-12 h-12 rounded-full border-2 border-white/20 hover:border-[#a8d530] hover:bg-[#a8d530]/10 text-white flex items-center justify-center transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollNext}
                className="w-12 h-12 rounded-full border-2 border-white/20 hover:border-[#a8d530] hover:bg-[#a8d530]/10 text-white flex items-center justify-center transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Image with decorative elements */}
              <div className="relative">
                {/* Large yellow/lime circle background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#a8d530] rounded-full -z-10" />
                
                {/* Main person image */}
                <div className="relative z-10">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full max-w-md mx-auto relative z-20 transition-all duration-500"
                  />
                </div>

                {/* Floating Revenue Card - Top Left */}
                <div className="absolute top-8 -left-4 bg-white rounded-2xl p-4 shadow-2xl transform -rotate-6 w-48 z-30">
                  <div className="text-xs text-gray-500 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#0d3d4a] rounded-full" />
                    <span>Revenue</span>
                    <div className="w-2 h-2 bg-[#a8d530] rounded-full" />
                    <span>Expenses</span>
                  </div>
                  <div className="text-2xl font-bold mb-2 text-gray-900">$193,000</div>
                  <div className="text-xs text-gray-400 mb-2">+$2,000 this month</div>
                  <div className="flex gap-1 items-end h-20">
                    <div className="w-5 bg-[#a8d530] h-14 rounded"></div>
                    <div className="w-5 bg-[#0d3d4a] h-20 rounded"></div>
                    <div className="w-5 bg-[#a8d530] h-12 rounded"></div>
                    <div className="w-5 bg-[#0d3d4a] h-16 rounded"></div>
                    <div className="w-5 bg-[#a8d530] h-10 rounded"></div>
                    <div className="w-5 bg-[#0d3d4a] h-14 rounded"></div>
                  </div>
                </div>

                {/* Floating Invoice Card - Bottom Right */}
                <div className="absolute bottom-8 -right-4 bg-white rounded-2xl p-5 shadow-2xl transform rotate-6 w-44 z-30">
                  <div className="text-xs text-gray-500 mb-2">Total Invoice</div>
                  <div className="text-4xl font-bold mb-1 text-gray-900">520</div>
                  <div className="text-sm text-green-500 mb-3 font-semibold">+12%</div>
                  <div className="flex gap-1.5 items-end h-14">
                    <div className="w-8 bg-[#a8d530] h-10 rounded"></div>
                    <div className="w-8 bg-[#a8d530] h-12 rounded"></div>
                    <div className="w-8 bg-[#a8d530] h-14 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="text-left space-y-6">
                {/* Trustpilot Header */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#a8d530] rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#0a1f3d] fill-current" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Trustpilot</h3>
                </div>
                
                {/* Testimonial Text */}
                <p className="text-white/90 text-xl leading-relaxed">
                  {currentTestimonial.text}
                </p>

                {/* Divider line */}
                <div className="h-px bg-white/20 my-6" />

                {/* Person Info and Rating */}
                <div className="flex items-end justify-between">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-white/70 text-lg">
                      {currentTestimonial.role}
                    </p>
                  </div>

                  {/* 5 Star Rating */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-6 h-6 fill-[#ff6b35] text-[#ff6b35]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
