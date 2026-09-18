import { useState } from "react"
import { PricingCard } from "../ui/PricingCard"
import { pricingPlans } from "../../data/pricingPlans"
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"

export default function Pricing () {
    const [billingCycle, setBillingCycle] = useState("monthly");
    
    return (
        <div>
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
                            <ToggleGroupItem value="monthly" aria-label="Toggle monthly">
                                monthly
                            </ToggleGroupItem>
                            <ToggleGroupItem value="annually" aria-label="Toggle annually">
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
                    />
                ))
            }
            </section>
        </div>
    )
}