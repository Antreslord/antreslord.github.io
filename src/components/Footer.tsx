import { IconGitHub, IconInstagram, IconWhatsApp } from "./Icon"


const Footer = () => {
    return(
        <footer className="md:bg-base-200/60 md:rounded-sm md:p-[50px] md:w-full flex flex-col md:items-center footer footer-center mt-[150px] w-full">
            <div className="flex justify-around mb-[50px]">
                <nav className="md:me-[200px] grid grid-flow-col gap-4 text-base-content">
                    <a href="#" className="link link-hover">About</a>
                    {/* <a href="#" className="link link-hover">Contact</a> */}
                    <a href="#" className="link link-hover">Jobs</a>
                    {/* <a href="#" className="link link-hover">Policy</a> */}
                </nav>
                <nav className="flex">
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
                <p className="w-full text-center">Copyright © 2026 - All right reserved by Cristian Delgado</p>
            </aside>
        </footer>
    )
}

export default Footer