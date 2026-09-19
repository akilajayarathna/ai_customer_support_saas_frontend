import { Badge } from "./badge"
import { Button } from "./button"
import { Check } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card"

export function PricingCard({ title, price, description, features, featured }) {
  return (
    <Card className={`mx-auto w-full max-w-sm hover:scale-105 transition-transform duration-300 ease-in-out ${featured ? "border-2 border-gold shadow-lg scale-105" : ""}`}>
      
      <CardHeader>
        {featured && <Badge className="bg-gold text-black w-fit mb-2">Recommended</Badge>}
        <Badge variant="default">{title}</Badge>
        <CardTitle>{price}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

        <CardContent className="-mb-(--card-spacing)">
          <div className="-mx-(--card-spacing) max-h-48 space-y-4 border-t px-(--card-spacing) py-4 text-sm leading-relaxed">
            <ul>
              {
                  features.map((item) => (
                    <span key={item} className="flex items-center gap-2 mb-2">
                      <Check className="h-4 w-4" />
                      <li>{item}</li>
                    </span>
                  ))
              }
            </ul>
          </div>
        </CardContent>

        <CardFooter className="justify-center">
          <Button variant="outline" className="w-full hover:bg-navy hover:text-white">
            Get Started
          </Button>
        </CardFooter>
        
      </Card>
  )
}
