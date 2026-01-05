import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop",
    title: "The Essence of India,",
    highlight: "Delivered Globally.",
    description: "Your trusted partner for premium quality spices, agricultural commodities, and authentic Indian flavors tailored for international markets."
  },
  {
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=2070&auto=format&fit=crop",
    title: "Sustainable Sourcing,",
    highlight: "Superior Quality.",
    description: "Directly from the fields to your doorstep. We ensure the highest standards of purity and quality in every shipment."
  },
  {
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=2070&auto=format&fit=crop",
    title: "Global Supply Chain,",
    highlight: "Local Expertise.",
    description: "Bridging the gap between Indian farmers and the international market with robust logistics and transparent processes."
  }
];

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-[80vh] min-h-[600px] ml-0">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-full w-full pl-0">
              <div className="absolute inset-0 z-0">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-secondary/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
              </div>

              <div className="container-padding relative z-10 h-full flex items-center justify-center text-center text-white pt-20">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="max-w-4xl"
                >
                  <motion.div variants={fadeIn} className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium tracking-wide uppercase">Premium Indian Exports</span>
                  </motion.div>
                  
                  <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-shadow">
                    {slide.title} <br/>
                    <span className="text-primary-foreground">{slide.highlight}</span>
                  </motion.h1>
                  
                  <motion.p variants={fadeIn} className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                    {slide.description}
                  </motion.p>
                  
                  <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/products">
                      <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25">
                        Explore Catalog
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-white text-white hover:bg-white hover:text-secondary bg-transparent backdrop-blur-sm">
                        Contact Us
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-white/10 border-white/20 text-white hover:bg-white hover:text-secondary" />
          <CarouselNext className="static translate-y-0 h-12 w-12 bg-white/10 border-white/20 text-white hover:bg-white hover:text-secondary" />
        </div>
      </Carousel>
    </section>
  );
}
