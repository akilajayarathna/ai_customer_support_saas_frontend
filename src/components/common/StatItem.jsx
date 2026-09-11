export function StatItem ( {icon: Icon, value, title, description} ) {
    return (
        <div>
            <div>
                <Icon />
            </div>
            <p>{value}</p>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}

