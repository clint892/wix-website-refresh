import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { name: "Health Insurance", path: "/services/health" },
  { name: "Motor Insurance", path: "/services/motor" },
  { name: "Business Insurance", path: "/services/business" },
  { name: "Life Insurance", path: "/services/life" },
  { name: "Travel Insurance", path: "/services/travel" },
  { name: "Agriculture Insurance", path: "/services/agriculture" },
  { name: "Goods in Transit", path: "/services/goods-in-transit" },
];

const bonds = [
  { name: "Performance Bonds", path: "/bonds/performance" },
  { name: "Guarantee Bonds", path: "/bonds/guarantee" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [bondsOpen, setBondsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-accent" />
            <div>
              <span className="font-display text-lg md:text-xl font-bold tracking-tight">SYNC</span>
              <span className="hidden sm:inline text-xs block -mt-1 text-primary-foreground/80">Insurance Agency</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link to="/" className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive("/") ? "bg-primary-foreground/20" : "hover:bg-primary-foreground/10"}`}>Home</Link>
            <Link to="/about" className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive("/about") ? "bg-primary-foreground/20" : "hover:bg-primary-foreground/10"}`}>About</Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-primary-foreground/10 flex items-center gap-1">
                Services <ChevronDown className="h-3 w-3" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-card text-card-foreground rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border">
                {services.map((s) => (
                  <Link key={s.path} to={s.path} className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg">{s.name}</Link>
                ))}
              </div>
            </div>

            {/* Bonds Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-primary-foreground/10 flex items-center gap-1">
                Bonds <ChevronDown className="h-3 w-3" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-card text-card-foreground rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border">
                {bonds.map((b) => (
                  <Link key={b.path} to={b.path} className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg">{b.name}</Link>
                ))}
              </div>
            </div>

            <Link to="/claims" className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive("/claims") ? "bg-primary-foreground/20" : "hover:bg-primary-foreground/10"}`}>Claims</Link>
            <Link to="/contact" className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive("/contact") ? "bg-primary-foreground/20" : "hover:bg-primary-foreground/10"}`}>Contact</Link>
            <Link to="/news" className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive("/news") ? "bg-primary-foreground/20" : "hover:bg-primary-foreground/10"}`}>News</Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+254750612347" className="flex items-center gap-1.5 text-sm font-medium">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <Link to="/contact">
              <Button className="bg-accent text-accent-foreground hover:bg-sky-light font-semibold">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-primary-foreground/20">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 hover:bg-primary-foreground/10">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-4 py-3 hover:bg-primary-foreground/10">About</Link>

            <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between w-full px-4 py-3 hover:bg-primary-foreground/10">
              Services <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && services.map((s) => (
              <Link key={s.path} to={s.path} onClick={() => setIsOpen(false)} className="block px-8 py-2.5 text-sm hover:bg-primary-foreground/10">{s.name}</Link>
            ))}

            <button onClick={() => setBondsOpen(!bondsOpen)} className="flex items-center justify-between w-full px-4 py-3 hover:bg-primary-foreground/10">
              Bonds <ChevronDown className={`h-4 w-4 transition-transform ${bondsOpen ? "rotate-180" : ""}`} />
            </button>
            {bondsOpen && bonds.map((b) => (
              <Link key={b.path} to={b.path} onClick={() => setIsOpen(false)} className="block px-8 py-2.5 text-sm hover:bg-primary-foreground/10">{b.name}</Link>
            ))}

            <Link to="/claims" onClick={() => setIsOpen(false)} className="block px-4 py-3 hover:bg-primary-foreground/10">Claims</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 hover:bg-primary-foreground/10">Contact</Link>
            <Link to="/news" onClick={() => setIsOpen(false)} className="block px-4 py-3 hover:bg-primary-foreground/10">News</Link>

            <div className="px-4 pt-3 flex flex-col gap-2">
              <a href="tel:+254700000000" className="flex items-center justify-center gap-2 py-2.5 border border-primary-foreground/30 rounded-md">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-sky-light font-semibold">Get Quote</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
