import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/hooks/use-products";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Products() {
  const { data: products, isLoading } = useProducts();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    "Whole Spices",
    "Ground Spices",
    "Agricultural Commodities",
  ];

  const filteredProducts = products?.filter((product) => {
    const matchesCategory = filter === "All" || product.category === filter;
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <div className="bg-secondary text-white pt-32 pb-16">
        <div className="container-padding text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our Premium Catalog
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Explore our wide range of authentic Indian spices and agricultural
            products, processed and packed to meet international standards.
          </p>
        </div>
      </div>

      <div className="container-padding section-spacing">
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className="rounded-full"
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-9 bg-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div
                key={n}
                className="h-[350px] bg-muted/50 animate-pulse rounded-xl"
              />
            ))}
          </div>
        ) : filteredProducts?.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-xl">No products found matching your criteria.</p>
            <Button
              variant="link"
              onClick={() => {
                setFilter("All");
                setSearch("");
              }}
              className="mt-2"
            >
              Clear filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
