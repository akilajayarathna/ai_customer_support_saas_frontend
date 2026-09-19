import HowItWorksRow from "../common/HowItWorksRow"
import { SectionHeading } from "../common/SectionHeading"

const title = "Deployment in Minutes"
const subtitle = "Connect your tools and let AssistHub AI do the heavy lifting"

export default function HowItWorks () {
    return (
        <div className="bg-navy py-20 px-6">
            <SectionHeading title={title} subtitle={subtitle} variant="dark"/>
            <HowItWorksRow />
        </div>
    )
}