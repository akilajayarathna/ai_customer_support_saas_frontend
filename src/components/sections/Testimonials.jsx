import TestimonialRow from "../common/TestimonialRow"
import  { SectionHeading } from "../common/SectionHeading"

const title = "Trusted by Support Leaders"

export default function Testimonials () {
    return (
        <div>
            <SectionHeading title={title} />
            <TestimonialRow />
        </div>
    )
}