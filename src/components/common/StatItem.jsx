export function StatItem({ icon: Icon, value, title, description }) {
    return (
        <div className="flex flex-col gap-2">
            <div className="bg-gray-100 rounded-lg p-2 w-fit">
                <Icon className="w-5 h-5 text-navy" />
            </div>
            <p className="text-3xl font-bold text-navy">{value}</p>
            <p className="font-semibold">{title}</p>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    )
}