import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
}

const SITE_NAME = "Sync Insurance Agency";
const BASE_URL = "https://wix-whisperer-magic.lovable.app";

const SEO = ({ title, description, canonical, type = "website" }: SEOProps) => {
  useEffect(() => {
    const fullTitle = title === "Home" ? `${SITE_NAME} | Trusted Insurance Solutions in Kenya` : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);

    const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;
    if (canonicalUrl) {
      setMeta("property", "og:url", canonicalUrl);
      let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonicalUrl);
    }

    // JSON-LD structured data
    let script = document.querySelector("#json-ld") as HTMLScriptElement;
    if (!script) {
      script = document.createElement("script");
      script.id = "json-ld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "InsuranceAgency",
      name: SITE_NAME,
      url: BASE_URL,
      telephone: "+254750612347",
      email: "info@syncinsurancagency.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jubilee Exchange Building, Mama Ngina Street",
        postOfficeBoxNumber: "P.O Box 34367-00100",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      description,
    });

    return () => {
      const s = document.querySelector("#json-ld");
      if (s) s.remove();
    };
  }, [title, description, canonical, type]);

  return null;
};

export default SEO;
