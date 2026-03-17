import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-primary-foreground/80 text-lg">Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl prose prose-sm">
          <h2 className="font-display text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground mb-6">
            We collect personal information that you provide to us when you request insurance quotes, submit applications, or contact us. This may include your name, email address, phone number, physical address, identification details, and information related to your insurance needs.
          </p>

          <h2 className="font-display text-2xl font-bold mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-6">
            We use your personal information to process insurance applications, provide quotes, manage policies, process claims, communicate with you about your coverage, and improve our services. We may also use your information to send you relevant insurance updates and offers.
          </p>

          <h2 className="font-display text-2xl font-bold mb-4">3. Information Sharing</h2>
          <p className="text-muted-foreground mb-6">
            We may share your information with insurance companies and underwriters for the purpose of obtaining quotes and processing policies. We do not sell your personal information to third parties. We may share information when required by law or to protect our legal rights.
          </p>

          <h2 className="font-display text-2xl font-bold mb-4">4. Data Security</h2>
          <p className="text-muted-foreground mb-6">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="font-display text-2xl font-bold mb-4">5. Your Rights</h2>
          <p className="text-muted-foreground mb-6">
            You have the right to access, correct, or delete your personal information. You may also object to or restrict the processing of your data. To exercise these rights, please contact us using the information provided below.
          </p>

          <h2 className="font-display text-2xl font-bold mb-4">6. Cookies</h2>
          <p className="text-muted-foreground mb-6">
            Our website may use cookies to enhance your browsing experience. You can control cookies through your browser settings. Disabling cookies may limit some features of our website.
          </p>

          <h2 className="font-display text-2xl font-bold mb-4">7. Contact Us</h2>
          <p className="text-muted-foreground mb-6">
            If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at:
          </p>
          <ul className="text-muted-foreground mb-6 list-none pl-0 space-y-1">
            <li>Email: info@syncinsurancagency.com</li>
            <li>Phone: +254 750 612 347</li>
            <li>Address: Jubilee Exchange Building, Mama Ngina Street, P.O Box 34367-00100, Nairobi, Kenya</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
