import React from 'react'
import { SectionHeading } from '../common/SectionHeading'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import Particles from '../Particles'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"

const subtitle = "AssistHub AI transforms your customer service from a cost center into a growth engine. Resolve 70% of tickets with human-grade AI that learns your business."

const Hero = () => {
  return (
    <div className="relative bg-navy  flex flex-col items-center justify-center overflow-hidden px-6 h-[calc(100vh-80px)]">

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

      <div className="relative z-10 flex flex-col items-center gap-16 text-center">
          <Badge variant="secondary">Now with GPT-4o Support</Badge>
          <SectionHeading title="Automate Support," highlight="Scale Success." subtitle={subtitle} variant="dark" size="hero" />
          <div className="flex gap-4">

            {/* Log in Button */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default" className="text-white hover:text-gold hover:bg-transparent">Log in</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Log in to AssistHub AI</DialogTitle>
                  </DialogHeader>
                  <form className="flex flex-col gap-4">
                    <input type="email" placeholder="Email" className="border rounded-md px-3 py-2" />
                    <input type="password" placeholder="Password" className="border rounded-md px-3 py-2" />
                    <Button type="submit">Log in</Button>
                  </form>
                </DialogContent>
              </Dialog>

            {/* Watch Demo Button */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Watch Demo</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>See AssistHub AI in Action</DialogTitle>
                  </DialogHeader>
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full rounded-md"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Product Demo"
                      allowFullScreen
                    />
                  </div>
                </DialogContent>
              </Dialog>

          </div>
      </div>
    </div>
  )
}

export default Hero
