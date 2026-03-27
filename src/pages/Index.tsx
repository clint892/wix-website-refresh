import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Heart, Car, Briefcase, Users, Plane, Tractor, FileCheck, Package, ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, Clock, Award } from "lucide-react";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";

const services = [
  { icon: Heart, title: "Health Insurance", desc: "Comprehensive medical coverage for you and your family. Access quality healthcare without financial worry.", path: "/services/health" },
  { icon: Car, title: "Motor Insurance", desc: "Protect your vehicle against accidents, theft, and third-party liability with our flexible motor plans.", path: "/services/motor" },
  { icon: Briefcase, title: "Business Insurance", desc: "Safeguard your business with coverage for property, liability, and professional indemnity.", path: "/services/business" },
  { icon: Users, title: "Life Insurance", desc: "Secure your family's future with life coverage that provides peace of mind and financial protection.", path: "/services/life" },
  { icon: Plane, title: "Travel Insurance", desc: "Travel with confidence knowing you're covered for medical emergencies, trip cancellations, and more.", path: "/services/travel" },
  { icon: Tractor, title: "Agriculture Insurance", desc: "Protect your farming investments against weather, pests, and other agricultural risks.", path: "/services/agriculture" },
  { icon: FileCheck, title: "Performance Bonds", desc: "Guarantee project completion and build trust with clients through our performance bond solutions.", path: "/bonds/performance" },
  { icon: Shield, title: "Guarantee Bonds", desc: "Financial guarantees that ensure contractual obligations are met, protecting all parties involved.", path: "/bonds/guarantee" },
  { icon: Package, title: "Goods in Transit", desc: "Cover your goods against loss or damage during transportation across Kenya and beyond.", path: "/services/goods-in-transit" },
];

const partners = ["Kenya Orient", "GA Insurance", "PACIS", "Madison", "AIG", "APA", "First Assurance", "Directline", "Jubilee"];

const faqs = [
  { q: "What types of insurance do you offer?", a: "We offer a comprehensive range of insurance products including Health, Motor, Business, Life, Travel, Agriculture insurance, as well as Performance and Guarantee Bonds, and Goods in Transit coverage." },
  { q: "How do I file a claim?", a: "You can file a claim by contacting our office directly, calling our claims hotline, or visiting our Claims page for detailed instructions on the process." },
  { q: "How long does it take to process a claim?", a: "Most claims are processed within 7-14 business days, depending on the type and complexity of the claim. We strive to make the process as quick as possible." },
  { q: "Can I get a quote online?", a: "Yes! Simply fill out our contact form or call us directly, and our team will provide you with a personalized quote within 24 hours." },
  { q: "What payment methods do you accept?", a: "We accept M-Pesa, bank transfers, credit/debit cards, and cheques. We also offer flexible payment plans for annual premiums." },
  { q: "Do you offer group insurance?", a: "Yes, we provide group insurance solutions for businesses of all sizes, including group health, life, and pension schemes." },
  { q: "How do I choose the right insurance plan?", a: "Our experienced agents will assess your needs and recommend the best coverage options. Contact us for a free consultation." },
  { q: "Are your services available outside Nairobi?", a: "Yes, we serve clients across Kenya. Our network of partners ensures coverage and support nationwide." },
];

const testimonials = [
  { name: "James Mwangi", role: "Business Owner", text: "Sync Insurance made getting business coverage effortless. Their team understood our needs and found the perfect plan.", stars: 5 },
  { name: "Sarah Wanjiku", role: "Family Client", text: "The health insurance plan they recommended has been a lifesaver for my family. Excellent service and fast claims.", stars: 5 },
  { name: "David Ochieng", role: "Contractor", text: "Their performance bonds service is reliable and quick. I can bid on projects with confidence knowing Sync has my back.", stars: 5 },
];

const Index = () => {
  return (
    <Layout>
      <SEO title="Home" description="Sync Insurance Agency provides trusted insurance solutions for individuals and businesses across Kenya. Get free quotes for health, motor, business, life, and travel insurance." canonical="/" />
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy-dark to-primary opacity-90" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.15\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Trusted Insurance Solutions for You & Your Business
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
              Sync Insurance Agency provides comprehensive, affordable insurance coverage tailored to protect what matters most to you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-sky-light font-semibold text-base px-8">
                  Get Your Free Quote
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-16 md:py-20 bg-gray-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Getting insured is simple with Sync. Follow these three easy steps.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: 1, title: "Tell Us About You", desc: "Share your insurance needs and we'll understand your unique situation." },
              { step: 2, title: "Compare Options", desc: "We compare plans from top insurers to find the best coverage and price." },
              { step: 3, title: "Get Protected", desc: "Choose your plan and get covered immediately with our fast processing." },
            ].map((item) => (
              <Card key={item.step} className="text-center p-6 border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {[
              { icon: CheckCircle, text: "Licensed & Regulated" },
              { icon: Clock, text: "24/7 Support" },
              { icon: Award, text: "20+ Years Experience" },
            ].map((badge) => (
              <div key={badge.text} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <badge.icon className="h-5 w-5 text-accent" />
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Insurance Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive coverage solutions designed to protect every aspect of your life and business.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-lg transition-all duration-300 border hover:border-accent/30">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
                  <div className="flex gap-3">
                    <Link to={service.path} className="text-sm font-medium text-accent hover:underline flex items-center gap-1">
                      Learn More <ArrowRight className="h-3 w-3" />
                    </Link>
                    <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-accent">
                      Get Quote
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 bg-gray-bg">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Sync Insurance Agency?
              </h2>
              <p className="text-muted-foreground mb-4">
                With over 20 years of experience in the Kenyan insurance market, Sync Insurance Agency has built a reputation for trust, reliability, and personalized service. We work with leading insurance companies to bring you the best coverage at competitive prices.
              </p>
              <p className="text-muted-foreground mb-6">
                Our team of licensed professionals is dedicated to understanding your unique needs and finding the right insurance solution. Whether you're an individual, a family, or a business, we've got you covered.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { icon: Award, label: "20+ Years", sub: "Experience" },
                  { icon: Users, label: "Personalized", sub: "Service" },
                  { icon: CheckCircle, label: "Fast", sub: "Claims" },
                ].map((item) => (
                  <div key={item.label} className="text-center p-4 bg-card rounded-lg shadow-sm">
                    <item.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                    <p className="font-bold text-sm">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.sub}</p>
                  </div>
                ))}
              </div>
              <Link to="/about">
                <Button className="bg-accent text-accent-foreground hover:bg-sky-light">
                  Learn More About Us <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <Shield className="h-16 w-16 text-accent mb-6" />
              <h3 className="font-display text-2xl font-bold mb-4">Your Protection, Our Priority</h3>
              <p className="text-primary-foreground/80 mb-4">We partner with Kenya's top insurance companies to deliver unmatched coverage and service quality.</p>
              <ul className="space-y-3">
                {["Competitive premiums from top insurers", "Dedicated claims support team", "Flexible payment options", "Nationwide coverage across Kenya"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 md:py-16 overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">Our Trusted Partners</h2>
          <p className="text-muted-foreground text-sm">We work with Kenya's leading insurance companies</p>
        </div>
        <div className="relative">
          <div className="flex animate-scroll gap-12 items-center">
            {[...partners, ...partners].map((partner, i) => (
              <div key={i} className="shrink-0 px-6 py-3 bg-muted rounded-lg text-sm font-semibold text-muted-foreground whitespace-nowrap">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-gray-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Have questions? Reach out to us and we'll get back to you within 24 hours.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              {[
                { icon: Phone, title: "Call Us", detail: "+254 750 612 347" },
                { icon: Mail, title: "Email Us", detail: "info@syncinsurancagency.com" },
                { icon: MapPin, title: "Visit Us", detail: "Jubilee Exchange Building, Mama Ngina Street", sub: "P.O Box 34367-00100, Nairobi, Kenya" },
              ].map((c) => (
                <Card key={c.title} className="border-none shadow-sm">
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <c.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{c.title}</h3>
                      <p className="text-sm text-muted-foreground">{c.detail}</p>
                      {c.sub && <p className="text-sm text-muted-foreground">{c.sub}</p>}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-gray-bg">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg px-6 border-none shadow-sm">
                <AccordionTrigger className="text-sm font-semibold hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Get Protected?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Don't wait until it's too late. Get comprehensive insurance coverage today and enjoy peace of mind knowing you're protected.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-sky-light font-semibold px-8">
                Get Your Free Quote
              </Button>
            </Link>
            <a href="tel:+254700000000">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8">
                <Phone className="h-4 w-4 mr-2" /> Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
