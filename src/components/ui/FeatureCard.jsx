import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card"


export default function FeatureCard( { image, title, description } ) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">

      <img
        src={image}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover"
      />

      <CardHeader>

        <CardTitle>{title}</CardTitle>

        <CardDescription>
          {description}
        </CardDescription>

      </CardHeader>
    </Card>
  )
}
