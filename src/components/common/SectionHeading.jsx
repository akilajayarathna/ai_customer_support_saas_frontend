export function SectionHeading({ title, highlight, subtitle }) {
    return (
        <div className="flex flex-col items-center text-center gap-8">
            <p className="font-heading text-heading-dark-bg text-6xl font-semibold">
                {title} <span className="italic">{highlight}</span>
            </p>
            <p className="text-heading-dark-bg/80 max-w-135">
                {subtitle}
            </p>
        </div>
    )
}