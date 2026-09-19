import { Button } from "../ui/button"
import { SectionHeading } from "../common/SectionHeading"
import { Dot } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"

const title = "Ready to automate your support?"
const subtitle = "Join 500+ companies delivering faster, smarter customer service with AssistHub AI"

export default function CTA() {
    return (
        <div id="about" className="bg-navy py-20 px-6">
            <SectionHeading title={title} subtitle={subtitle} variant="dark" />

            <section className="flex justify-center items-center gap-6 my-8">
                
                {/* Get Started for Free Button */}

                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="default" className="w-45 h-10">
                            Get Started for Free
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                        <DialogTitle>Start your free trial</DialogTitle>
                        </DialogHeader>
                        <form className="flex flex-col gap-4">
                        <input type="text" placeholder="Full name" className="border rounded-md px-3 py-2" />
                        <input type="email" placeholder="Work email" className="border rounded-md px-3 py-2" />
                        <Button type="submit">Create account</Button>
                        </form>
                    </DialogContent>
                </Dialog>

                {/* Book a Strategy Call Button */}

                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" className="w-45 h-10">Book a Strategy Call</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                        <DialogTitle>Book a Strategy Call</DialogTitle>
                        </DialogHeader>
                        <form className="flex flex-col gap-4">
                        <input type="text" placeholder="Full name" className="border rounded-md px-3 py-2" />
                        <input type="email" placeholder="Work email" className="border rounded-md px-3 py-2" />
                        <input type="text" placeholder="Company name" className="border rounded-md px-3 py-2" />
                        <textarea placeholder="What would you like to discuss?" className="border rounded-md px-3 py-2" rows={3} />
                        <Button type="submit">Request a Call</Button>
                        </form>
                    </DialogContent>
                </Dialog>

            </section>

            <section className="flex justify-center items-center gap-2 text-heading-dark-bg/50 text-sm">
                <p>14-day free trial</p>
                <Dot />
                <p>No credit card required</p>
                <Dot />
                <p>Cancel anytime</p>
            </section>
        </div>
    )
}