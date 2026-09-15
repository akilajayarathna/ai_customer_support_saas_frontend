import React from 'react'
import { SectionHeading } from '../common/SectionHeading'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import Particles from '../Particles'

const subtitle = "AssistHub AI transforms your customer service from a cost center into a growth engine. Resolve 70% of tickets with human-grade AI that learns your business."

const Hero = () => {
  return (
    <div className="relative bg-navy min-h-screen">

      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 text-center">
          <Badge variant="secondary">Now with GPT-4o Support</Badge>
          <SectionHeading title="Automate Support," highlight="Scale Success." subtitle={subtitle} />
          <div className="flex gap-4">
              <Button variant="default">Start Free Trial</Button>
              <Button variant="outline">Watch Demo</Button>
          </div>
      </div>
    </div>
  )
}

export default Hero
