import { useState } from "react"
import { PricingCard } from "../ui/PricingCard"
import { pricingPlans } from "../../data/pricingPlans"
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"
import { SectionHeading } from "../common/SectionHeading"

const title = "Simple Transparent Pricing"
const subtitle = "Select the plan that fits your current volume"

export default function Pricing () {
    const [billingCycle, setBillingCycle] = useState("monthly");
    
    return (
        <div id="pricing" className="py-20 px-6">
            <SectionHeading title={title} subtitle={subtitle} />
            <section className="flex justify-center items-center my-5">
                {
                        <ToggleGroup 
                            variant="outline" 
                            type="single"
                            value={billingCycle}
                            onValueChange={
                                (value) => {
                                    if (value) setBillingCycle(value)
                                }
                            }
                        >
                            <ToggleGroupItem value="monthly" aria-label="Toggle monthly" className="px-6 py-2">
                                monthly
                            </ToggleGroupItem>
                            <ToggleGroupItem value="annually" aria-label="Toggle annually" className="px-6 py-2">
                                annually
                            </ToggleGroupItem>
                        </ToggleGroup>
                    
                }
            </section>

            <section className="grid grid-cols-3 gap-2">
            {
                pricingPlans.map((item) => (
                    <PricingCard 
                        key={item.title}
                        title={item.title}
                        price={item.price[billingCycle]}
                        description={item.description}
                        features={item.features}
                        featured={item.featured}
                    />
                ))
            }
            </section>
        </div>
    )
}