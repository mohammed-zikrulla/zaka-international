import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Leaf, ShieldCheck, Globe, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/hooks/use-products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

// Animation variants
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

export default function Home() {
  const { data: products, isLoading } = useProducts();
  const featuredProducts = products?.slice(0, 3) || [];
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Carousel */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="h-screen min-h-[600px] ml-0">
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

      {/* Stats / Trust Banner */}
      <div className="bg-primary relative z-20 -mt-10 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-xl py-8 px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
        {[
          { label: "Years Experience", value: "15+" },
          { label: "Countries Served", value: "25+" },
          { label: "Happy Clients", value: "500+" },
          { label: "Products", value: "100+" },
        ].map((stat, i) => (
          <div key={i} className="text-center border-r last:border-0 border-white/20">
            <div className="font-display text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm md:text-base opacity-80">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* About Section */}
      <section className="section-spacing bg-background">
        <div className="container-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl transform rotate-3" />
            {/* About image - Unsplash: Sacks of grain/spices */}
            <img 
              src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=2070&auto=format&fit=crop" 
              alt="Quality Sourcing" 
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block border border-border">
              <p className="font-display text-lg font-bold text-secondary mb-2">"Quality is not an act, it is a habit."</p>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <div key={i} className="w-2 h-2 rounded-full bg-primary" />)}
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">About Zaka International</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary">Bringing Authentic Indian Heritage to the World</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Zaka International, we take pride in our roots. Established in the heart of India's spice trade, we have grown into a leading exporter of premium agricultural commodities.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We work directly with farmers to ensure that every grain, every seed, and every spice retains its natural aroma, purity, and potency. Our rigorous quality control processes guarantee that you receive only the best.
            </p>
            <Link href="/about">
              <Button variant="link" className="px-0 text-primary font-bold text-lg hover:text-primary/80 mt-2">
                Learn more about our story <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-spacing bg-muted/30">
        <div className="container-padding">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Catalog</span>
              <h2 className="font-display text-4xl font-bold text-secondary mt-2">Featured Products</h2>
            </div>
            <Link href="/products" className="hidden md:block">
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors">
                View All Products
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-[400px] bg-gray-200 animate-pulse rounded-xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="mt-12 text-center md:hidden">
            <Link href="/products">
              <Button className="w-full" variant="outline">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-spacing bg-secondary text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container-padding relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Why Choose Zaka International?</h2>
            <p className="text-white/70 text-lg">We don't just export products; we build lasting partnerships based on trust, quality, and reliability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: "100% Natural", desc: "Sourced directly from certified farms with no artificial additives." },
              { icon: ShieldCheck, title: "Quality Assured", desc: "Rigorous testing and quality checks at every stage of processing." },
              { icon: Globe, title: "Global Standards", desc: "Compliant with international food safety and packaging standards." },
              { icon: Truck, title: "Timely Delivery", desc: "Robust logistics network ensuring on-time delivery worldwide." },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/10">
        <div className="container-padding text-center">
          <h2 className="font-display text-4xl font-bold text-secondary mb-6">Ready to start importing?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Get in touch with us for a custom quote or to request product samples. We are here to support your business growth.
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-lg px-10 py-6 rounded-full shadow-xl">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
