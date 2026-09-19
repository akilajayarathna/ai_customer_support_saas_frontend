import { Button } from "../ui/button"
import { SectionHeading } from "../common/SectionHeading"
import { Dot } from 'lucide-react'

const title = "Ready to automate your support?"
const subtitle = "Join 500+ companies delivering faster, smarter customer service with AssistHub AI"

export default function CTA() {
    return (
        <div id="about" className="bg-navy py-20 px-6">
            <SectionHeading title={title} subtitle={subtitle} variant="dark" />

            <section className="flex justify-center items-center gap-6 my-8">
                <Button>Get Started for Free</Button>
                <Button variant="outline">Book a Strategy Call</Button>
            </section>

            <section className="flex justify-center items-center gap-2 text-heading-dark-bg/50 text-sm">
                <p>14-day free trial</p>
                <Dot />
                <p>No credit card required</p>
                <Dot />
                <p>Cancel anytime</p>
            </section>
        </div>
    )
}