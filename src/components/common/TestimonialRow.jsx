import { testimonials } from "../../data/testimonials"
import TestimonialItem from "./TestimonialItem"

export function TestimonialRow () {
    return (
        <div className="flex justify-center items-center gap-5">
            {
                testimonials.map((item) => (
                    <TestimonialItem
                        key={item.name}
                        {...item}
                    />
                ))
            }
        </div>
    )
}