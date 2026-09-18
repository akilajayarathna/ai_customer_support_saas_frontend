import { Button } from "../ui/button"
import { SectionHeading } from "../common/SectionHeading"

const title = "Ready to automate your support?"
const subtitle = "Join 500+ companies delivering faster, smarter customer sevice with AssistHub AI"

export default function CTA() {
    return (
        <div className="bg-navy" >
            <SectionHeading title={title} subtitle={subtitle} variant="dark" />

            <section className="flex justify-center items-center gap-6 my-6">
                <Button>Get Started for Free</Button>
                <Button variant="outline">Book a Strategy Call</Button>
            </section>
        </div>
        )
}