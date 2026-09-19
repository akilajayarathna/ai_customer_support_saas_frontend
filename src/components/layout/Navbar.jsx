import { navLinks } from "../../data/navLinks"
import { Button } from "../ui/button"
import logo from "../../assets/images/logo.png"
import { HashLink as Link} from "react-router-hash-link"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full flex justify-between items-center px-8 py-4 bg-navy">

        <a href="#top">
            <img src={logo} alt="company-logo" className="w-auto h-10" />
        </a>
        
        <div className="flex items-center gap-8">
            {
                navLinks.map((item) => (
                    <Link 
                        key={item.label} 
                        smooth 
                        to={item.href}
                        className="text-heading-dark-bg hover:text-gold transition-colors"
                    >
                        {item.label}
                    </Link>
                ))
            }
        </div>

        <div className="flex items-center gap-4">

            {/* Log in Button */}

            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="ghost" className="text-white hover:text-gold hover:bg-transparent">Log in</Button>
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

            {/* Get Started Button */}

            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="default">Get Started</Button>
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

        </div>
    </nav>
  )
}

export default Navbar