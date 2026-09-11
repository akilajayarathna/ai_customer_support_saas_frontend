export function HowItWorksItem ( {no, title, description} ) {
    return (
        <div>
            <p>{no}</p>
            <div className="w-8 border-t-2 border-gold"></div>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}