import { useQuery } from "@tanstack/react-query";

const STATIC_PRODUCTS = [
  {
    id: 1,
    name: "Premium Saffron",
    description: "High-grade export quality saffron strands.",
    category: "Whole Spices",
    imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Black Pepper",
    description: "Bold and aromatic black peppercorns from Malabar.",
    category: "Whole Spices",
    imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Turmeric Powder",
    description: "Pure turmeric powder with high curcumin content.",
    category: "Ground Spices",
    imageUrl: "https://images.unsplash.com/photo-1615485500704-8e99099928b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Basmati Rice",
    description: "Long-grain aromatic premium Basmati rice.",
    category: "Agricultural Commodities",
    imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Cardamom Green",
    description: "Hand-picked green cardamom pods.",
    category: "Whole Spices",
    imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Red Chilli Powder",
    description: "Vibrant red chilli powder for export.",
    category: "Ground Spices",
    imageUrl: "https://images.unsplash.com/photo-1615485500704-8e99099928b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

// Mock products hook
export function useProducts() {
  return useQuery({
    queryKey: ["/api/products"],
    queryFn: async () => {
      // Simulate API latency
      await new Promise(resolve => setTimeout(resolve, 500));
      return STATIC_PRODUCTS;
    },
  });
}

// Mock single product hook
export function useProduct(id: number) {
  return useQuery({
    queryKey: ["/api/products", id],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 300));
      return STATIC_PRODUCTS.find(p => p.id === id) || null;
    },
    enabled: !!id,
  });
}
