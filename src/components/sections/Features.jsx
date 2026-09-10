import FeatureCard from "../ui/FeatureCard"
import { features } from "../../data/features"

export function Features() {
  return (
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
  )
}