import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-accent" />
              <div>
                <span className="font-display text-xl font-bold">SYNC</span>
                <span className="text-xs block -mt-1 text-primary-foreground/80">Insurance Agency</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Your trusted insurance partner providing comprehensive coverage solutions for individuals and businesses across Kenya.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"><Instagram className="h-4 w-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Claims", path: "/claims" },
                { name: "Contact Us", path: "/contact" },
                { name: "News", path: "/news" },
                { name: "Privacy Policy", path: "/privacy" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                { name: "Health Insurance", path: "/services/health" },
                { name: "Motor Insurance", path: "/services/motor" },
                { name: "Business Insurance", path: "/services/business" },
                { name: "Life Insurance", path: "/services/life" },
                { name: "Travel Insurance", path: "/services/travel" },
                { name: "Performance Bonds", path: "/bonds/performance" },
                { name: "Guarantee Bonds", path: "/bonds/guarantee" },
              ].map((s) => (
                <li key={s.path}>
                  <Link to={s.path} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <div>
                  <p>+254 750 612 347</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                info@syncinsurance.co.ke
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                Nairobi, Kenya
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Sync Insurance Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
