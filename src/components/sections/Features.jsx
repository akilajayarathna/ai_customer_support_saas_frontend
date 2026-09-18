import FeatureCard from "../ui/FeatureCard"
import { features } from "../../data/features"
import { SectionHeading } from "../common/SectionHeading"

const title = "Advanced AI, Human Empathy"
const subtitle = "Everything you need to deliver world-class support at scale"

export default function Features() {
  return (
    <div>
        <section>
            <SectionHeading title={title} subtitle={subtitle} />
        </section>
        <section className="grid grid-cols-3 gap-6">
            {
                features.map((item) => (
                    <FeatureCard
                        key={item.title}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                    />
                ))
            }
        </section>
    </div>
  )
}