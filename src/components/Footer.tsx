import { IconGitHub, IconInstagram, IconWhatsApp } from "./Icon"


const Footer = () => {
    return(
        <footer className="flex flex-col items-center footer footer-center bg-base-200/60 rounded-sm p-[50px] mt-[150px]">
            <div className="flex items-center mb-[50px]">
                <nav className="grid grid-flow-col gap-4 text-base-content me-[200px]">
                    <a href="#" className="link link-hover">About</a>
                    {/* <a href="#" className="link link-hover">Contact</a> */}
                    <a href="#" className="link link-hover">Jobs</a>
                    {/* <a href="#" className="link link-hover">Policy</a> */}
                </nav>
                <nav>
                    <div className="flex gap-4">
                        <a href="https://github.com/Antreslord" target="_blank" className="link link-animated" aria-label="Github Link">
                            <IconGitHub />
                        </a>
                        <a href="https://ig.me/m/cristian.delgado08" target="_blank" className="link link-animated" aria-label="Instagram Link">
                            <IconInstagram />
                        </a>
                        <a href="https://wa.me/573017046803" target="_blank" className="link link-animated" aria-label="Whatsapp Link">
                            <IconWhatsApp />
                        </a>
                    </div>
                </nav>
            </div>
            <aside>
                <p>Copyright © 2024 - All right reserved by FlyonUI</p>
            </aside>
        </footer>
    )
}

export default Footer