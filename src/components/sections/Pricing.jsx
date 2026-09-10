import { useState } from "react"
import { PricingCard } from "../ui/PricingCard"
import { pricingPlans } from "../../data/pricingPlans"

export function Pricing () {
    const [billingCycle, setBillingCycle] = useState("monthly");
    
    return (
        <section className="grid grid-cols-3 gap-2">
                {
                    pricingPlans.map((item) => (
                        <PricingCard 
                            key={item.title}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                            features={item.features}
                        />
                    ))
                }
            </section>
    )
}