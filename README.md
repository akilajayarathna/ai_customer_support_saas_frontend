# AssistHub AI — SaaS Landing Page

A fully responsive, multi-section landing page for a fictional AI-powered customer support SaaS product. Built as a front-end portfolio project to demonstrate component-driven React architecture, a custom design system built on top of shadcn/ui, and modern UI/UX patterns common in real-world SaaS marketing sites.

**🔗 Live Demo:** [assisthub-ai-landing.vercel.app](https://assisthub-ai-landing.vercel.app/)

---

## ✨ Features

- **Responsive multi-section layout** — Hero, live-style stats, feature grid, "how it works" process steps, testimonials, pricing, and a final call-to-action, all built as independent, reusable React components.
- **Interactive pricing toggle** — switch between Monthly and Annually billing, with prices updating dynamically across all plan cards.
- **Custom design system** — a hand-tuned navy, gold, off-white, and black theme built on top of shadcn/ui's theming layer (Tailwind CSS v4 `@theme` tokens), including a light/dark section variant system for consistent typography across light and dark backgrounds.
- **Component library** — extends shadcn/ui's Button, Card, Badge, and Dialog components with custom variants (e.g. a branded "gold" button variant) rather than duplicating styling logic.
- **Data-driven rendering** — all repeatable content (features, stats, testimonials, pricing plans, nav links) lives in dedicated data files and is rendered via component composition, making content easy to update without touching markup.
- **Sticky navigation** with smooth-scrolling anchor links to on-page sections.
- **Interactive modals** (via shadcn/ui Dialog) for Log in, Get Started, Watch Demo, and Book a Strategy Call actions.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React (Vite) |
| Styling | Tailwind CSS v4 |
| Component Library | shadcn/ui, react bits |
| Icons | lucide-react, react-icons |
| Deployment | Vercel (continuous deployment from GitHub) |

---

## 📁 Project Structure

```
src/
├── assets/               # Images, logo
├── components/
│   ├── ui/               # shadcn/ui-generated components (Button, Card, Badge, Dialog, etc.)
│   ├── layout/            # Navbar, Footer
│   ├── common/            # Reusable components (FeatureCard, PricingCard, StatItem, SectionHeading, etc.)
│   └── sections/           # Page sections (Hero, Stats, Features, Pricing, CTA, etc.)
├── data/                  # Static content — navLinks, features, stats, testimonials, pricingPlans
├── lib/                   # Utility functions (cn helper)
├── App.jsx
├── main.jsx
└── index.css              # Tailwind config, theme tokens, global styles
```

---

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/akilajayarathna/ai_customer_support_saas_landing_page.git
cd ai_customer_support_saas_landing_page
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 📌 Roadmap

- [ ] Backend integration (Supabase/Firebase) for real authentication and lead capture
- [ ] Connect pricing sign-up forms to a live database
- [ ] Mobile navigation menu
- [ ] Section-entry scroll animations


---

## 📄 License

This project is for portfolio/demonstration purposes.