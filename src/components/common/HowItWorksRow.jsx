import { works } from "../../data/works"
import { HowItWorksItem } from "./HowItWorksItem"

export function HowItWorksRow () {
    return (
        <div className="flex justify-center items-center gap-20">
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