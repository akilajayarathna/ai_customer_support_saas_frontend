import TestimonialRow from "../common/TestimonialRow"
import  { SectionHeading } from "../common/SectionHeading"

const title = "Trusted by Support Leaders"

export default function Testimonials () {
    return (
        <div id="testimonials" className="py-20 px-6">
            <SectionHeading title={title} />
            <TestimonialRow />
        </div>
    )
}