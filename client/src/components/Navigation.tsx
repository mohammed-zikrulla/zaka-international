import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Globe, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled || isOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm border-border/40 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-padding flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2 z-50">
          <div className="bg-primary p-1.5 rounded-lg text-white transform group-hover:rotate-12 transition-transform duration-300">
            <Globe className="h-6 w-6" />
          </div>
          <span className={cn(
            "font-display text-2xl font-bold tracking-tight transition-colors",
            scrolled || isOpen ? "text-secondary" : "text-white"
          )}>
            Zaka International
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative group py-1",
                location === link.href
                  ? "text-primary font-semibold"
                  : scrolled ? "text-secondary" : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                location === link.href && "scale-x-100"
              )} />
            </Link>
          ))}
          <Link href="/contact">
            <Button
              variant={scrolled ? "default" : "secondary"}
              className={cn(
                "ml-4 font-semibold shadow-md transition-transform hover:-translate-y-0.5",
                !scrolled && "bg-white text-secondary hover:bg-white/90"
              )}
            >
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden z-50 p-2 rounded-md transition-colors",
            scrolled || isOpen ? "text-secondary" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background z-40 md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out",
            isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-2xl font-display font-medium text-secondary hover:text-primary transition-colors",
                location === link.href && "text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-8 flex flex-col gap-4 w-full max-w-xs px-6">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full text-lg py-6 shadow-lg">
                Get a Quote
              </Button>
            </Link>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mt-4">
              <Phone className="h-4 w-4" />
              <span>+91 987 654 3210</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
