import { navLinks } from "../../data/navLinks"
import { Button } from "../ui/button"
import logo from "../../assets/images/logo.png"
import { HashLink as Link} from "react-router-hash-link"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black/50">

        <div>
            <img src={logo} alt="company-logo" className="w-auto h-8" />
        </div>
        
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
            <Button variant="outline">Log in</Button>
            <Button variant="default">Get Started</Button>
        </div>
    </nav>
  )
}

export default Navbar