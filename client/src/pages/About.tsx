import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-secondary text-white pt-32 pb-20">
        <div className="container-padding">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">About Zaka International</h1>
          <p className="text-xl text-white/80 max-w-2xl font-light">
            We are dedicated to delivering the finest flavors of India to every corner of the globe.
          </p>
        </div>
      </div>

      <div className="container-padding py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-3xl font-bold text-secondary mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Founded with a vision to bridge the gap between Indian farmers and international markets, Zaka International has established itself as a premier name in the spice export industry. What started as a small trading house has now grown into a global supply chain network, trusted by wholesalers and food industries worldwide.
              </p>
            </div>
            
            <div>
              <h2 className="font-display text-3xl font-bold text-secondary mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To promote Indian agriculture by providing fair value to farmers while ensuring our global clients receive products that meet the highest standards of purity, safety, and quality.
              </p>
            </div>

            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
              <h3 className="font-display text-2xl font-bold text-secondary mb-6">Core Values</h3>
              <ul className="space-y-4">
                {[
                  "Integrity in every transaction",
                  "Commitment to premium quality",
                  "Sustainable sourcing practices",
                  "Customer-centric service"
                ].map((val, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <span className="font-medium text-secondary">{val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            {/* Unsplash: Indian farmer or fields */}
            <img 
              src="https://images.unsplash.com/photo-1633281121789-69e58edec7f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNvZmZlZSUyMGZhcm18ZW58MHx8MHx8fDA%3D?q=80&w=2070&auto=format&fit=crop"
              alt="Indian Agriculture" 
              className="rounded-2xl shadow-xl w-full object-cover aspect-video"
            />
            {/* Unsplash: Spice sorting/processing */}
            <img 
              src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=2027&auto=format&fit=crop" 
              alt="Quality Processing" 
              className="rounded-2xl shadow-xl w-full object-cover aspect-video"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
