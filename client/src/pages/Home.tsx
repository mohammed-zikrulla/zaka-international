import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Leaf, ShieldCheck, Globe, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/hooks/use-products";
import { HeroCarousel } from "@/components/HeroCarousel";
import React from "react";

export default function Home() {
  const { data: products, isLoading } = useProducts();
  const featuredProducts = products?.slice(0, 3) || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <HeroCarousel />

      {/* Stats / Trust Banner */}
      <div className="bg-primary relative z-20 -mt-10 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-xl py-8 px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
        {[
          { label: "Years Experience", value: "15+" },
          { label: "Countries Served", value: "25+" },
          { label: "Happy Clients", value: "500+" },
          { label: "Products", value: "100+" },
        ].map((stat, i) => (
          <div
            key={i}
            className="text-center border-r last:border-0 border-white/20"
          >
            <div className="font-display text-3xl md:text-4xl font-bold mb-1">
              {stat.value}
            </div>
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
              <p className="font-display text-lg font-bold text-secondary mb-2">
                "Quality is not an act, it is a habit."
              </p>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">
              About Zaka International
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary">
              Bringing Authentic Indian Heritage to the World
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Zaka International, we take pride in our roots. Established in
              the heart of India's spice trade, we have grown into a leading
              exporter of premium agricultural commodities.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We work directly with farmers to ensure that every grain, every
              seed, and every spice retains its natural aroma, purity, and
              potency. Our rigorous quality control processes guarantee that you
              receive only the best.
            </p>
            <Link href="/about">
              <Button
                variant="link"
                className="px-0 text-primary font-bold text-lg hover:text-primary/80 mt-2"
              >
                Learn more about our story{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
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
              <span className="text-primary font-bold tracking-wider uppercase text-sm">
                Our Catalog
              </span>
              <h2 className="font-display text-4xl font-bold text-secondary mt-2">
                Featured Products
              </h2>
            </div>
            <Link href="/products" className="hidden md:block">
              <Button
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors"
              >
                View All Products
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="h-[400px] bg-gray-200 animate-pulse rounded-xl"
                />
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
              <Button className="w-full" variant="outline">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-spacing bg-secondary text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="container-padding relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Why Choose Zaka International?
            </h2>
            <p className="text-white/70 text-lg">
              We don't just export products; we build lasting partnerships based
              on trust, quality, and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Leaf,
                title: "100% Natural",
                desc: "Sourced directly from certified farms with no artificial additives.",
              },
              {
                icon: ShieldCheck,
                title: "Quality Assured",
                desc: "Rigorous testing and quality checks at every stage of processing.",
              },
              {
                icon: Globe,
                title: "Global Standards",
                desc: "Compliant with international food safety and packaging standards.",
              },
              {
                icon: Truck,
                title: "Timely Delivery",
                desc: "Robust logistics network ensuring on-time delivery worldwide.",
              },
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
                <h3 className="font-display text-xl font-bold mb-3">
                  {feature.title}
                </h3>
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
          <h2 className="font-display text-4xl font-bold text-secondary mb-6">
            Ready to start importing?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Get in touch with us for a custom quote or to request product
            samples. We are here to support your business growth.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="text-lg px-10 py-6 rounded-full shadow-xl"
            >
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
