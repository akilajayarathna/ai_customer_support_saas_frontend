export function SectionHeading({ title, highlight, subtitle, variant = "light" }) {
    const isDark = variant === "dark"

    return (
        <div className="flex flex-col items-center text-center gap-8">
            <p className={`font-heading text-6xl font-semibold ${isDark ? "text-heading-dark-bg" : "text-heading"}`}>
                {title} <span className="italic">{highlight}</span>
            </p>
            <p className={`max-w-135 ${isDark ? "text-heading-dark-bg/80" : "text-body"}`}>
                {subtitle}
            </p>
        </div>
    )
}