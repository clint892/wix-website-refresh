import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            We'd love to hear from you. Reach out for a free insurance consultation or any questions you may have.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold mb-6">Contact Information</h2>
              {[
                { icon: Phone, title: "Phone", lines: ["+254 700 000 000", "+254 711 000 000"] },
                { icon: Mail, title: "Email", lines: ["info@syncinsurance.co.ke", "claims@syncinsurance.co.ke"] },
                { icon: MapPin, title: "Office", lines: ["Nairobi, Kenya", "CBD Area"] },
                { icon: Clock, title: "Business Hours", lines: ["Mon - Fri: 8:00 AM - 5:00 PM", "Sat: 9:00 AM - 1:00 PM"] },
              ].map((item) => (
                <Card key={item.title} className="border-none shadow-sm">
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                      {item.lines.map((line) => (
                        <p key={line} className="text-sm text-muted-foreground">{line}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Form */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
