import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.products.list.path, async (req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  app.get(api.products.get.path, async (req, res) => {
    const id = Number(req.params.id);
    const allProducts = await storage.getProducts();
    const product = allProducts.find(p => p.id === id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  });

  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message
        });
      }
      throw err;
    }
  });

  await seedDatabase();

  return httpServer;
}

export async function seedDatabase() {
  const existingProducts = await storage.getProducts();
  if (existingProducts.length === 0) {
    const seedProducts = [
      {
        name: "Premium Saffron",
        description: "High-grade export quality saffron strands.",
        category: "Whole Spices",
        imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Black Pepper",
        description: "Bold and aromatic black peppercorns from Malabar.",
        category: "Whole Spices",
        imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Turmeric Powder",
        description: "Pure turmeric powder with high curcumin content.",
        category: "Ground Spices",
        imageUrl: "https://images.unsplash.com/photo-1615485500704-8e99099928b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Basmati Rice",
        description: "Long-grain aromatic premium Basmati rice.",
        category: "Agricultural Commodities",
        imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Cardamom Green",
        description: "Hand-picked green cardamom pods.",
        category: "Whole Spices",
        imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Red Chilli Powder",
        description: "Vibrant red chilli powder for export.",
        category: "Ground Spices",
        imageUrl: "https://images.unsplash.com/photo-1615485500704-8e99099928b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ];
    
    for (const p of seedProducts) {
      await storage.createProduct(p);
    }
  }
}
