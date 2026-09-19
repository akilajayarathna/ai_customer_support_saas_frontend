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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"


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
          
            {/* Get Started Button */}
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full hover:bg-navy hover:text-white" variant={featured ? "default" : "outline"}>Get Started</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Get started with {title}</DialogTitle>
              </DialogHeader>
              <form className="flex flex-col gap-4">
                <input type="text" placeholder="Full name" className="border rounded-md px-3 py-2" />
                <input type="email" placeholder="Work email" className="border rounded-md px-3 py-2" />
                <Button type="submit">Continue with {title} plan</Button>
              </form>
            </DialogContent>
          </Dialog>

        </CardFooter>
        
      </Card>
  )
}
