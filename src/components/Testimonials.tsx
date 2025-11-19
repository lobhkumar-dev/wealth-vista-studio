import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Business Owner",
    text: "MoneyTree Wealth has transformed how I approach financial planning. Their expertise in portfolio management and personalized investment strategies have consistently delivered results beyond my expectations. The team's dedication to understanding my financial goals is truly commendable.",
    rating: 4.8,
    reviews: 52,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    quote: "Outstanding Service"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "IT Professional",
    text: "Working with MoneyTree has been a game-changer for my retirement planning. Their comprehensive approach to wealth management and transparent communication have given me complete confidence in my financial future. Highly recommend their services to anyone serious about growing their wealth.",
    rating: 4.9,
    reviews: 68,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    quote: "Excellent Guidance"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Entrepreneur",
    text: "The financial advisory services provided by MoneyTree Wealth are unparalleled. They helped me navigate complex investment decisions and tax planning strategies that have significantly optimized my wealth. Their professionalism and market insights are truly world-class.",
    rating: 4.7,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    quote: "Trusted Advisor"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Doctor",
    text: "MoneyTree's holistic approach to financial planning has helped me achieve my investment goals while maintaining a balanced portfolio. Their team is responsive, knowledgeable, and always available to address my concerns. I feel secure knowing my finances are in expert hands.",
    rating: 4.9,
    reviews: 71,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    quote: "Highly Professional"
  }
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto-rotate every 5 seconds
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-teal-600 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl">
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                      <div className="inline-block bg-lime-400 text-black px-6 py-2 rounded-full text-sm font-semibold">
                        TESTIMONIAL
                      </div>

                      <div className="flex items-center gap-4">
                        <div>
                          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                            What Our Customers Say
                          </h2>
                          <p className="text-2xl md:text-3xl text-white/90 font-light">
                            About Us
                          </p>
                        </div>
                        
                        <div className="hidden md:flex gap-2 ml-auto">
                          <button
                            onClick={scrollPrev}
                            className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all"
                            aria-label="Previous testimonial"
                          >
                            <ChevronLeft className="w-6 h-6 text-white" />
                          </button>
                          <button
                            onClick={scrollNext}
                            className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all"
                            aria-label="Next testimonial"
                          >
                            <ChevronRight className="w-6 h-6 text-white" />
                          </button>
                        </div>
                      </div>

                      <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                        {testimonial.text}
                      </p>

                      <div className="flex items-center gap-4 pt-4">
                        <div>
                          <h4 className="text-xl font-semibold text-white">
                            {testimonial.name} <span className="text-white/70 font-normal">/ {testimonial.role}</span>
                          </h4>
                        </div>

                        <div className="bg-slate-700/80 backdrop-blur-sm px-6 py-3 rounded-2xl flex items-center gap-3 ml-auto">
                          <Star className="w-8 h-8 fill-green-500 text-green-500" />
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-5 h-5 ${
                                  i < Math.floor(testimonial.rating)
                                    ? "fill-green-500 text-green-500"
                                    : "fill-green-500/30 text-green-500/30"
                                }`}
                              />
                            ))}
                          </div>
                          <div className="text-white ml-2">
                            <div className="font-bold text-lg">{testimonial.rating} score,</div>
                            <div className="text-sm text-white/70">{testimonial.reviews} reviews</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="relative flex items-center justify-center">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center z-10">
                        <Quote className="w-10 h-10 text-black" />
                      </div>

                      <div className="relative">
                        <div className="w-full max-w-md aspect-square rounded-3xl overflow-hidden bg-blue-400/30 backdrop-blur-sm">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="absolute -bottom-8 -right-8 bg-lime-400 text-black px-8 py-4 rounded-full shadow-2xl transform rotate-[-5deg]">
                          <p className="text-2xl font-bold whitespace-nowrap">"{testimonial.quote}"</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex md:hidden justify-center gap-3 mt-8">
                    <button
                      onClick={scrollPrev}
                      className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                      onClick={scrollNext}
                      className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
