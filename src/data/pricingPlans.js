export const pricingPlans = [
    {
        title: "Starter",
        price: { 
            monthly: "$79 /mo", 
            annually: "$63 /mo" 
        },
        description: "Perfect for small teams getting started with AI support.",
        features: ["Up to 1,000 AI resolutions", "Standard Knowledge Base", "Email & Web Chat", "Basic Analytics"]
    },
    {
        title: "Professional",
        featured: true,
        price: { 
            monthly: "$239 /mo", 
            annually: "$191 /mo" 
        },
        description: "Advanced features for growing customer success teams.",
        features: ["Up to 5,000 AI resolutions", "Sentiment Analysis", "Auto-Routing", "Omnichannel (Slack, WA)"]
    },
    {
        title: "Enterprise",
        price: { 
            monthly: "Custom", 
            annually: "Custom" 
        },
        description: "Bespoke solutions for global organizations.",
        features: ["Unlimited AI resolutions", "Dedicated Success Manager", "Custom API Integration", "SLA & Security Audit", "On-premise Deployment"]
    }
]