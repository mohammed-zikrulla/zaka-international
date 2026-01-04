import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { type Product } from "@shared/schema";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 h-full flex flex-col">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-secondary shadow-sm">
          {product.category}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-display text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
          {product.description}
        </p>
        
        <Link href={`/products`}>
          <button className="w-full mt-auto flex items-center justify-center gap-2 py-2.5 rounded-lg border border-border text-sm font-semibold text-secondary group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all duration-300">
            View Details
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>
    </div>
  );
}
