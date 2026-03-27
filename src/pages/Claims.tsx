import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Phone, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import SEO from "@/components/SEO";

const steps = [
  { title: "Report the Incident", desc: "Contact us immediately to report the incident. Call our claims hotline or visit our office." },
  { title: "Document Everything", desc: "Gather all relevant documents, photos, and evidence related to the incident." },
  { title: "Submit Your Claim", desc: "Fill out the claims form and submit it along with supporting documents." },
  { title: "Claim Assessment", desc: "Our claims team will assess your claim and keep you updated on progress." },
  { title: "Settlement", desc: "Once approved, your claim will be settled promptly according to your policy terms." },
];

const Claims = () => {
  return (
    <Layout>
      <SEO title="Claims" description="File an insurance claim with Sync Insurance Agency. Follow our simple step-by-step process for quick and efficient claims resolution." canonical="/claims" />
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Insurance Claims</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Filing a claim shouldn't be stressful. Our dedicated claims team is here to guide you through every step of the process.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-gray-bg">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6 max-w-4xl">
          {[
            { icon: Phone, title: "Claims Hotline", desc: "+254 750 612 347", sub: "Available 24/7" },
            { icon: FileText, title: "Download Forms", desc: "Get claim forms", sub: "PDF format" },
            { icon: Clock, title: "Processing Time", desc: "7-14 business days", sub: "Average turnaround" },
          ].map((item) => (
            <Card key={item.title} className="text-center border-none shadow-md">
              <CardContent className="p-6">
                <item.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-display font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                <p className="text-xs text-muted-foreground">{item.sub}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Claims Process</h2>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <Card key={i} className="border-none shadow-sm">
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 md:py-20 bg-gray-bg">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-center mb-8">Claims Tips</h2>
          <div className="space-y-4">
            {[
              "Report incidents to the police within 24 hours (for theft/accident claims)",
              "Take clear photos of any damage or injuries",
              "Keep all receipts and medical records",
              "Do not admit liability at the scene of an accident",
              "Contact us before authorizing any repairs",
            ].map((tip) => (
              <div key={tip} className="flex items-start gap-3 p-4 bg-card rounded-lg shadow-sm">
                <AlertTriangle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <p className="text-sm">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-4">Need Help With a Claim?</h2>
          <p className="text-primary-foreground/80 mb-8">Our claims team is ready to assist you.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-sky-light font-semibold px-8">Contact Claims Team</Button>
            </Link>
            <a href="tel:+254700000000">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8">
                <Phone className="h-4 w-4 mr-2" /> Call Hotline
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Claims;
