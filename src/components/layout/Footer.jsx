import { TiSocialTwitter } from "react-icons/ti"
import { TiSocialFacebook } from "react-icons/ti"
import { TiSocialLinkedin } from "react-icons/ti"

export default function Footer() {
    return (
        <footer className="flex justify-between items-center px-8 py-6 text-heading">
            <p className="text-sm">&copy; {new Date().getFullYear()} AssistHub AI. All rights reserved.</p>

            <section className="flex items-center gap-5 text-heading/80 text-sm">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Security</p>
                <p>Status</p>
                <p>Contact</p>
            </section>

            <section className="flex items-center gap-4 text-heading/80">
                <TiSocialTwitter className="w-5 h-5" />
                <TiSocialFacebook className="w-5 h-5" />
                <TiSocialLinkedin className="w-5 h-5" />
            </section>
        </footer>    
    )
}