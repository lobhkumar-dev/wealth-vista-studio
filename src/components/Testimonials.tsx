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
        <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-teal-600 rounded-3xl md:rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl">
          <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-4 md:space-y-6">
                      <div className="inline-block bg-lime-400 text-black px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                        TESTIMONIAL
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                        <div className="flex-1">
                          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-1 md:mb-2">
                            What Our Customers Say
                          </h2>
                          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-light">
                            About Us
                          </p>
                        </div>
                        
                        <div className="hidden lg:flex gap-2">
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

                      {/* Mobile Profile Image */}
                      <div className="flex lg:hidden items-center gap-3">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-lime-400">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-white/70">{testimonial.role}</p>
                        </div>
                      </div>

                      <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-light">
                        {testimonial.text}
                      </p>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2 md:pt-4">
                        <div className="hidden lg:block">
                          <h4 className="text-lg xl:text-xl font-semibold text-white">
                            {testimonial.name} <span className="text-white/70 font-normal">/ {testimonial.role}</span>
                          </h4>
                        </div>

                        <div className="bg-slate-700/80 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-2xl flex items-center gap-2 md:gap-3 sm:ml-auto">
                          <Star className="w-6 md:w-8 h-6 md:h-8 fill-green-500 text-green-500" />
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 md:w-5 h-4 md:h-5 ${
                                  i < Math.floor(testimonial.rating)
                                    ? "fill-green-500 text-green-500"
                                    : "fill-green-500/30 text-green-500/30"
                                }`}
                              />
                            ))}
                          </div>
                          <div className="text-white ml-1 md:ml-2">
                            <div className="font-bold text-base md:text-lg">{testimonial.rating} score,</div>
                            <div className="text-xs md:text-sm text-white/70">{testimonial.reviews} reviews</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Content - Large Image (Desktop Only) */}
                    <div className="hidden lg:flex relative items-center justify-center">
                      <div className="absolute top-0 right-0 w-16 xl:w-20 h-16 xl:h-20 bg-lime-400 rounded-full flex items-center justify-center z-10">
                        <Quote className="w-8 xl:w-10 h-8 xl:h-10 text-black" />
                      </div>

                      <div className="relative">
                        <div className="w-full max-w-md aspect-square rounded-3xl overflow-hidden bg-blue-400/30 backdrop-blur-sm">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="absolute -bottom-6 xl:-bottom-8 -right-6 xl:-right-8 bg-lime-400 text-black px-6 xl:px-8 py-3 xl:py-4 rounded-full shadow-2xl transform rotate-[-5deg]">
                          <p className="text-xl xl:text-2xl font-bold whitespace-nowrap">"{testimonial.quote}"</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex lg:hidden justify-center gap-3 mt-6 md:mt-8">
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
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === current ? "w-8 bg-lime-400" : "w-2 bg-white/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
