import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import SEO from "@/components/SEO";

const articles = [
  { title: "Understanding Health Insurance in Kenya", date: "March 10, 2026", excerpt: "A comprehensive guide to choosing the right health insurance plan for you and your family in Kenya.", category: "Health" },
  { title: "Why Every Driver Needs Comprehensive Motor Insurance", date: "March 5, 2026", excerpt: "Learn why third-party only coverage might not be enough and how comprehensive plans protect you better.", category: "Motor" },
  { title: "Performance Bonds: A Contractor's Guide", date: "February 28, 2026", excerpt: "Everything contractors need to know about performance bonds, how they work, and how to get one quickly.", category: "Bonds" },
  { title: "Top 5 Business Risks and How to Insure Against Them", date: "February 20, 2026", excerpt: "Identify the key risks facing Kenyan businesses and the insurance solutions available to mitigate them.", category: "Business" },
  { title: "Travel Insurance Tips for International Travelers", date: "February 15, 2026", excerpt: "Essential tips for choosing travel insurance that provides adequate coverage for your trips abroad.", category: "Travel" },
  { title: "Agriculture Insurance: Protecting Kenya's Farmers", date: "February 8, 2026", excerpt: "How agriculture insurance is helping Kenyan farmers protect their livelihoods against climate risks.", category: "Agriculture" },
];

const News = () => {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">News & Insights</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Stay informed with the latest insurance news, tips, and industry insights from our team.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {articles.map((article) => (
              <Card key={article.title} className="border-none shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-3">{article.category}</span>
                  <h3 className="font-display font-bold text-lg mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
