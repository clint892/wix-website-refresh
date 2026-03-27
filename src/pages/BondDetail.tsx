import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, FileCheck } from "lucide-react";
import SEO from "@/components/SEO";

const bondData: Record<string, { title: string; icon: any; desc: string; details: string; types: string[]; process: string[] }> = {
  performance: {
    title: "Performance Bonds",
    icon: FileCheck,
    desc: "A performance bond guarantees that a contractor will complete a project according to the terms and conditions of the contract. If the contractor fails to perform, the bond provides financial compensation.",
    details: "Performance bonds are essential in the construction and procurement industries. They protect project owners from financial loss if a contractor fails to fulfill contractual obligations. We work with leading surety companies to provide competitive rates and quick turnaround.",
    types: ["Construction Performance Bonds", "Supply Performance Bonds", "Service Performance Bonds", "Government Contract Bonds", "Maintenance Bonds"],
    process: ["Submit bond application with project details", "We assess and match you with the best surety company", "Receive your bond within 24-48 hours", "Ongoing support throughout your project"],
  },
  guarantee: {
    title: "Guarantee Bonds",
    icon: Shield,
    desc: "Guarantee bonds provide financial assurance that contractual obligations will be met. They protect the obligee against losses resulting from the principal's failure to meet obligations.",
    details: "Our guarantee bond solutions cover a wide range of needs including bid bonds, advance payment guarantees, and customs bonds. We understand the urgency of bond requirements and provide fast, reliable service.",
    types: ["Bid Bonds", "Advance Payment Guarantees", "Customs Bonds", "Court Bonds", "License & Permit Bonds"],
    process: ["Contact us with your bond requirements", "Provide necessary documentation", "We negotiate the best terms with surety companies", "Bond issued and delivered promptly"],
  },
};

const BondDetail = () => {
  const { type } = useParams<{ type: string }>();
  const bond = bondData[type || ""];

  if (!bond) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Bond Type Not Found</h1>
          <Link to="/"><Button>Back to Home</Button></Link>
        </div>
      </Layout>
    );
  }

  const Icon = bond.icon;

  return (
    <Layout>
      <SEO title={bond.title} description={bond.desc.substring(0, 155)} canonical={`/bonds/${type}`} />
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Icon className="h-10 w-10 text-accent" />
            <h1 className="font-display text-4xl md:text-5xl font-bold">{bond.title}</h1>
          </div>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">{bond.desc}</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-muted-foreground mb-8">{bond.details}</p>

          <h2 className="font-display text-2xl font-bold mb-6">Types of {bond.title}</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {bond.types.map((t) => (
              <div key={t} className="flex items-center gap-3 p-4 bg-gray-bg rounded-lg">
                <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-medium">{t}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold mb-6">How to Get a Bond</h2>
          <div className="space-y-4">
            {bond.process.map((step, i) => (
              <Card key={i} className="border-none shadow-sm">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-sm">{step}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-4">Need a {bond.title.slice(0, -1)}?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Contact us today and get your bond issued within 24-48 hours.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-sky-light font-semibold px-8">Apply Now</Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default BondDetail;
