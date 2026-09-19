import Navbar from "./Navbar"
import Hero from "../sections/Hero"
import Stats from "../sections/Stats"
import Features from "../sections/Features"
import HowItWorks from "../sections/HowItWorks"
import Testimonials from "../sections/Testimonials"
import Pricing from "../sections/Pricing"
import CTA from "../sections/CTA"
import Footer from "./Footer"

export default function MainLayout() {
    return (
        <div id="top">
            <Navbar />
            <Hero />
            <Stats />
            <Features />
            <HowItWorks />
            <Testimonials />
            <Pricing />
            <CTA />
            <Footer />
        </div>
    )
}