import Link from "next/link"
import Image from "next/image"
import Avatar from "../../assets/images/memoji.png"

const Navbar: React.FC = () => {
    return (
        <nav className="mb-3 flex w-full px-3 pt-8 md:mb-12 lg:px-6 lg:pt-16">
            <div className="flex w-full justify-between">
                <div className="flex items-center gap-3">
                    <div className="overflow-hidden rounded-full">
                        <Image priority={true} src={Avatar} width={64} height={64} alt="Bilge Codel Profile Picture" />
                    </div>
                    {/* <div className="mb-1 flex flex-col gap-1">
                        <span className="font-bold text-[#35353F] text-base md:text-lg lg:text-xl">Bilge Codel</span>
                        <span className="text-[#4c4c55] text-sm md:text-base lg:text-lg">UI/UX Designer</span>
                    </div> */}
                </div>
                <ul className="flex items-center gap-3 md:gap-7">
                    <li>
                        <Link href="#about" scroll={true} className="text-base font-bold text-[#35353F] md:text-lg lg:text-xl" aria-label="Home">Home</Link>
                    </li>
                    <li>
                        <Link href="#projects" scroll={true} className="text-base text-[#35353F] hover:font-medium md:text-lg lg:text-xl" aria-label="Works">Works</Link>
                    </li>
                    <li>
                        <Link href="/bilge.codel.pdf" className="text-base text-[#35353F] hover:font-medium md:text-lg lg:text-xl" aria-label="CV">CV</Link>
                    </li>
                    <li>
                        <Link href="mailto:bilge.codel@outlook.com" className="text-base text-[#35353F] hover:font-medium md:text-lg lg:text-xl" aria-label="Contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar