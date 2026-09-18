import { works } from "../../data/works"
import { HowItWorksItem } from "./HowItWorksItem"

export default function HowItWorksRow () {
    return (
        <div className="grid grid-cols-4 gap-16 py-12 px-12 max-w-7xl mx-auto">
            {
                works.map((item) => (
                    <HowItWorksItem
                        key={item.no}
                        no={item.no}
                        title={item.title}
                        description={item.description}
                    />
                ))
            }
    </div>
    )
}