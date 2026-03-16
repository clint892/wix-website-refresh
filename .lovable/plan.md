

# Sync Insurance Agency Website

Recreating the full Sync Insurance Agency website with the same blue/white color scheme and a working contact form.

## Pages

### 1. Home Page
- **Hero Section**: Full-width background image with overlay, "Trusted Insurance Solutions for You & Your Business" headline, subtitle, "Get Your Free Quote" and "Learn More" CTAs
- **3-Step Quote Process**: Three cards (Tell Us About You → Compare Options → Get Protected) with numbered blue circles and trust badges below
- **Insurance Services Grid**: 9 service cards (Health, Motor, Business, Life, Travel, Agriculture, Performance Bonds, Guarantee Bonds, Goods on Transit) each with image, description, and "Learn More" / "Get Quote" buttons
- **About Section**: Split layout with company story text on the left, image on the right, and 3 highlight badges (20+ Years, Personalized Service, Fast Claims)
- **Partners Logo Carousel**: Scrolling row of insurance partner logos (Kenya Orient, GA Insurance, PACIS, Madison, AIG, APA, First Assurance, Directline, Jubilee)
- **Contact Section**: Contact info cards (phone, email, office address) + working contact form
- **Testimonials**: Client quote cards in a carousel/grid
- **FAQ Accordion**: 8 expandable questions about services, claims, payments
- **Final CTA**: "Ready to Get Protected?" banner with action buttons

### 2. About Page
- Company history, mission, team info, values, and partner details

### 3. Services Pages
- Individual pages for each service type with detailed descriptions

### 4. Bonds Page
- Performance Bonds, Guarantee Bonds details

### 5. Claims Page
- Claims process information and how to file

### 6. Contact Page
- Full contact form, map/address, phone numbers, email

### 7. News Page
- News/updates section (placeholder content)

### 8. Privacy Page
- Privacy policy content

## Shared Components
- **Navbar**: Logo ("SYNC Insurance Agency" shield logo), nav links (Home, About, Services dropdown, Bonds dropdown, Claims, Contact, News, Privacy), "Call Now" and "Get Quote" buttons
- **Footer**: Company info, quick links, services list, contact details, social links

## Design
- **Colors**: Navy blue (#1B3A7D) primary, white backgrounds, light gray (#F5F7FA) alternating sections, blue (#2563EB) accents for buttons/circles
- **Typography**: Clean sans-serif, bold headings
- **Cards**: White with subtle shadows and rounded corners
- **Responsive**: Mobile-first with hamburger menu

## Working Contact Form (Backend)
- Lovable Cloud edge function to receive form submissions and send email notifications
- Form fields: Full Name, Phone Number, Email Address, Message
- Input validation with Zod
- Toast notifications for success/error feedback

