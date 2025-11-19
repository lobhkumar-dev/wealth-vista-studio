import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import Leadership from "@/components/Leadership";
import Gallery from "@/components/Gallery";
import News from "@/components/News";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const Index = () => {
  useEffect(() => {
    // Advanced scroll animation observer with multiple animation types
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -80px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const animationType = target.dataset.animation || "fade-in-up";
          
          // Add main animation to section
          target.classList.add(`animate-${animationType}`);
          target.style.opacity = "1";
          
          // Stagger animation for child elements
          const children = target.querySelectorAll('[data-stagger]');
          children.forEach((child, index) => {
            const element = child as HTMLElement;
            setTimeout(() => {
              element.style.opacity = "1";
              element.style.transform = "translateY(0)";
            }, index * 150); // 150ms delay between each child
          });
        }
      });
    }, observerOptions);

    // Observe all sections with data-animate attribute
    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => {
      const element = section as HTMLElement;
      element.style.opacity = "0";
      observer.observe(element);
    });

    // Observe stagger children
    const staggerElements = document.querySelectorAll('[data-stagger]');
    staggerElements.forEach((element) => {
      const el = element as HTMLElement;
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <div data-animate data-animation="fade-in-up">
        <About />
      </div>
      <div data-animate data-animation="slide-in-left">
        <Approach />
      </div>
      <div data-animate data-animation="fade-in-up">
        <Services />
      </div>
      <div data-animate data-animation="zoom-in">
        <Leadership />
      </div>
      <div data-animate data-animation="reveal">
        <Gallery />
      </div>
      <div data-animate data-animation="slide-in-right">
        <News />
      </div>
      <div data-animate data-animation="fade-in-up">
        <Testimonials />
      </div>
      <div data-animate data-animation="slide-in-bottom">
        <FAQ />
      </div>
      <div data-animate data-animation="zoom-in">
        <Partners />
      </div>
      <div data-animate data-animation="fade-in-up">
        <Contact />
      </div>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;
