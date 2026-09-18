export function HowItWorksItem ( {no, title, description} ) {
    return (
        <div>
            <p className="text-white/20 text-2xl pb-5">{no}</p>
            <div className="w-8 border-t-2 border-gold pb-5"></div>
            <p className="font-semibold text-heading-dark-bg pb-5">{title}</p>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    )
}