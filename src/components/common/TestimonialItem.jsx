import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Card, CardContent } from "../ui/card"

export default function TestimonialItem({ description, image, name, designation }) {
  return (
    <Card className="relative mx-auto w-full max-w-sm">
      <CardContent className="space-y-4">
        <div className="flex gap-1">
          <Star className="text-gold fill-gold w-4 h-4" />
          <Star className="text-gold fill-gold w-4 h-4" />
          <Star className="text-gold fill-gold w-4 h-4" />
          <Star className="text-gold fill-gold w-4 h-4" />
          <Star className="text-gold fill-gold w-4 h-4" />
        </div>

        <p className="italic text-gray-700">"{description}"</p>

        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name?.[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-500">{designation}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}