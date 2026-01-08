import { Link } from "wouter";
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2 group w-fit">
            <div className="bg-primary p-1.5 rounded-lg text-white">
              <Globe className="h-6 w-6" />
            </div>
            <span className="font-display text-2xl font-bold tracking-tight">
              Zaka International
            </span>
          </Link>
          <p className="text-secondary-foreground/80 leading-relaxed max-w-xs">
            Connecting the world with the finest Indian spices and agricultural
            commodities. Quality, integrity, and reliability in every shipment.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-6 text-white">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-6 text-white">
            Our Products
          </h4>
          <ul className="space-y-3">
            {[
              "Whole Spices",
              "Ground Spices",
              "Oil Seeds",
              "Pulses & Grains",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="/products"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-6 text-white">
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-secondary-foreground/80">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>
                554, Kote Camp, Tarikere,
                <br />
                Chikkamagaluru, Karnataka, India
              </span>
            </li>
            <li className="flex items-center gap-3 text-secondary-foreground/80">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span>+91 97420-91664</span>
            </li>
            <li className="flex items-center gap-3 text-secondary-foreground/80">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <span>contact@zakainternational.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-padding pt-8 border-t border-white/10 text-center text-sm text-secondary-foreground/50">
        <p>&copy; {currentYear} Zaka International. All rights reserved.</p>
      </div>
    </footer>
  );
}
