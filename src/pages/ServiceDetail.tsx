import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const serviceData: Record<string, { title: string; desc: string; features: string[]; benefits: string[] }> = {
  health: {
    title: "Health Insurance",
    desc: "Comprehensive medical coverage that ensures you and your family have access to quality healthcare without financial burden. Our health insurance plans cover inpatient, outpatient, dental, and optical care.",
    features: ["Inpatient & Outpatient Coverage", "Dental & Optical Care", "Maternity Benefits", "Pre-existing Conditions Cover", "Emergency Evacuation", "International Coverage Options"],
    benefits: ["Access to top hospitals and clinics", "Cashless treatment at partner facilities", "Family and group plans available", "Flexible premium payment options"],
  },
  motor: {
    title: "Motor Insurance",
    desc: "Protect your vehicle with our comprehensive motor insurance plans. Whether you need third-party coverage or full comprehensive protection, we have the right plan for you.",
    features: ["Comprehensive Cover", "Third Party Only", "Third Party Fire & Theft", "Windscreen Cover", "Personal Accident Cover", "Roadside Assistance"],
    benefits: ["Quick claims processing", "Nationwide garage network", "New-for-old vehicle replacement", "No-claims discount rewards"],
  },
  business: {
    title: "Business Insurance",
    desc: "Safeguard your business with tailored coverage solutions. From property protection to liability coverage, we ensure your business operations are fully protected.",
    features: ["Property Insurance", "Professional Indemnity", "Public Liability", "Employers Liability", "Business Interruption", "Cyber Insurance"],
    benefits: ["Customized coverage packages", "Risk assessment consultations", "Competitive group rates", "Dedicated claims manager"],
  },
  life: {
    title: "Life Insurance",
    desc: "Secure your family's financial future with our life insurance plans. Provide peace of mind knowing your loved ones will be taken care of.",
    features: ["Term Life Insurance", "Whole Life Cover", "Education Policies", "Pension Plans", "Group Life Schemes", "Credit Life Insurance"],
    benefits: ["Guaranteed payouts", "Tax-efficient savings", "Flexible premium options", "Riders for critical illness"],
  },
  travel: {
    title: "Travel Insurance",
    desc: "Travel with confidence knowing you're protected against unexpected events. Our travel insurance covers medical emergencies, trip cancellations, and lost luggage.",
    features: ["Medical Emergency Cover", "Trip Cancellation", "Lost Luggage Protection", "Flight Delay Cover", "Personal Liability", "Adventure Sports Cover"],
    benefits: ["Worldwide coverage", "24/7 emergency assistance", "Single and multi-trip options", "Family travel packages"],
  },
  agriculture: {
    title: "Agriculture Insurance",
    desc: "Protect your farming investments with our comprehensive agriculture insurance. Coverage for crops, livestock, and farm equipment against various risks.",
    features: ["Crop Insurance", "Livestock Insurance", "Farm Equipment Cover", "Weather Index Insurance", "Poultry Insurance", "Aquaculture Cover"],
    benefits: ["Climate risk protection", "Affordable premiums for farmers", "Quick loss assessment", "Government subsidy eligible"],
  },
  "goods-in-transit": {
    title: "Goods in Transit Insurance",
    desc: "Protect your goods against loss or damage during transportation. Whether by road, rail, sea, or air, we've got your cargo covered.",
    features: ["All-Risk Transit Cover", "Named Perils Cover", "Inland Transit", "Marine Cargo Insurance", "Air Freight Cover", "Warehouse-to-Warehouse"],
    benefits: ["Comprehensive cargo protection", "Flexible coverage options", "Fast claims settlement", "Multi-modal transport cover"],
  },
};

const ServiceDetail = () => {
  const { type } = useParams<{ type: string }>();
  const service = serviceData[type || ""];

  if (!service) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Service Not Found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">{service.desc}</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl font-bold mb-6">What's Covered</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.features.map((f) => (
                <div key={f} className="flex items-center gap-3 p-3 bg-gray-bg rounded-lg">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-6">Key Benefits</h2>
            <div className="space-y-4">
              {service.benefits.map((b) => (
                <Card key={b} className="border-none shadow-sm">
                  <CardContent className="flex items-center gap-3 p-4">
                    <ArrowRight className="h-4 w-4 text-accent shrink-0" />
                    <span className="text-sm">{b}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-4">Get a {service.title} Quote</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Contact us today for a free, no-obligation quote tailored to your needs.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-sky-light font-semibold px-8">Get Your Quote</Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
