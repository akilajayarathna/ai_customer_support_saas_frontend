import { Badge } from "./badge"
import { Button } from "./button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card"

export function PricingCard( { title, price, description, features } ) {
  return (
      <Card className="mx-auto w-full max-w-sm">

        <CardHeader>
          <Badge variant="default">{title}</Badge>
          <CardTitle>{price}</CardTitle>
          <CardDescription>
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="-mb-(--card-spacing)">
          <div className="-mx-(--card-spacing) max-h-48 space-y-4 overflow-y-scroll border-t bg-muted/50 px-(--card-spacing) py-4 text-sm leading-relaxed">
            <ul>
              {
                  features.map((item) => (
                      <li key={item}>{item}</li>
                  ))
              }
            </ul>
          </div>
        </CardContent>

        <CardFooter className="justify-end gap-2">
          <Button variant="outline">Get Started</Button>
        </CardFooter>
        
      </Card>
  )
}
