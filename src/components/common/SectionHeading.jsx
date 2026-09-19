export function SectionHeading({ title, highlight, subtitle, variant = "light", size = "default" }) {
    const isDark = variant === "dark"
    const isHero = size === "hero"

    return (
        <div className={`flex flex-col items-center text-center gap-4 mx-auto mb-12 ${isHero ? "max-w-4xl" : "max-w-2xl"}`}>
            <p className={`font-heading font-semibold ${isHero ? "text-6xl md:text-7xl" : "text-4xl md:text-5xl"} ${isDark ? "text-heading-dark-bg" : "text-heading"}`}>
                {title} {highlight && <span className="italic">{highlight}</span>}
            </p>
            <p className={`${isHero ? "text-lg" : ""} ${isDark ? "text-heading-dark-bg/80" : "text-body"}`}>
                {subtitle}
            </p>
        </div>
    )
}