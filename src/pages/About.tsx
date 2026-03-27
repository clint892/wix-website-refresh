import Layout from "@/components/Layout";
import { Shield, Target, Eye, Users, Award, CheckCircle, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const team = [
  { name: "John Kamau", role: "Managing Director", desc: "20+ years in insurance industry leadership." },
  { name: "Grace Akinyi", role: "Operations Manager", desc: "Expert in claims management and client relations." },
  { name: "Peter Mutua", role: "Senior Agent", desc: "Specialist in commercial and business insurance." },
];

const values = [
  { icon: Shield, title: "Integrity", desc: "We operate with transparency and honesty in every interaction." },
  { icon: Heart, title: "Client First", desc: "Your needs are at the center of everything we do." },
  { icon: Award, title: "Excellence", desc: "We strive for the highest standards in service delivery." },
  { icon: Users, title: "Partnership", desc: "We build lasting relationships with clients and partners." },
];

const About = () => {
  return (
    <Layout>
      <SEO title="About Us" description="Learn about Sync Insurance Agency — your trusted insurance partner in Kenya with years of experience providing comprehensive coverage solutions." canonical="/about" />
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">About Sync Insurance</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Dedicated to providing trusted, comprehensive insurance solutions for individuals and businesses across Kenya since 2004.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2004, Sync Insurance Agency has grown from a small Nairobi-based brokerage to one of Kenya's most trusted insurance intermediaries. Our journey has been driven by a simple mission: to make quality insurance accessible and affordable for everyone.
            </p>
            <p className="text-muted-foreground mb-4">
              Over the past two decades, we've helped thousands of individuals and businesses find the right insurance coverage. We work with over 15 leading insurance companies in Kenya, giving our clients access to the best products at competitive prices.
            </p>
            <p className="text-muted-foreground">
              Our team of licensed insurance professionals brings decades of combined experience, ensuring that every client receives personalized attention and expert guidance throughout their insurance journey.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "20+", label: "Years Experience" },
              { num: "5,000+", label: "Happy Clients" },
              { num: "15+", label: "Insurance Partners" },
              { num: "98%", label: "Claims Success" },
            ].map((stat) => (
              <Card key={stat.label} className="text-center border-none shadow-md">
                <CardContent className="p-6">
                  <p className="font-display text-3xl font-bold text-accent">{stat.num}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-gray-bg">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 max-w-4xl">
          <Card className="border-none shadow-md">
            <CardContent className="p-8">
              <Target className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-display text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground text-sm">
                To provide accessible, affordable, and comprehensive insurance solutions that protect our clients' assets, health, and future, while delivering exceptional personalized service.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md">
            <CardContent className="p-8">
              <Eye className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-display text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground text-sm">
                To be Kenya's most trusted insurance agency, recognized for our commitment to client satisfaction, innovation in insurance solutions, and contribution to financial inclusion.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v) => (
              <Card key={v.title} className="text-center border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <v.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-display font-bold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20 bg-gray-bg">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((t) => (
              <Card key={t.name} className="text-center border-none shadow-md">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-display font-bold">{t.name}</h3>
                  <p className="text-sm text-accent font-medium mb-2">{t.role}</p>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Contact our team today for a free insurance consultation.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-sky-light font-semibold px-8">Contact Us Today</Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
