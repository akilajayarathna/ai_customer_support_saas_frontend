import { StatItem } from "./StatItem"
import { stats } from "../../data/stats"

export function StatsRow () {
    return (
        <div className="flex justify-center items-center gap-16 py-12">
            {
                stats.map((item) => (
                    <StatItem 
                        key={item.title} 
                        icon={item.icon}
                        value={item.value}
                        title={item.title} 
                        description={item.description} 
                    />
                ))
            }
        </div>
    )
}