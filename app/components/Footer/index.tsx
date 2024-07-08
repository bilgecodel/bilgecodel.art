import React from "react"
import Link from "next/link"
import socialData from "../../services/socialData"

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full px-3 lg:px-6">
            <div className="flex w-full items-center justify-between gap-16 border-t border-[#BEBEBE] py-6">
                <p className="text-sm md:text-base lg:text-lg">{currentYear} © Design by <b className="font-bold">Bilge Codel</b> and Development by <Link href="https://yilmazev.dev" target="_blank" className="font-bold">Yilmaz Ev</Link></p>
                <ul className="flex items-center justify-end gap-3 md:gap-6">
                    {socialData.socialLink.map((social, index) => (
                        <li key={index}>
                            <Link href={social.link} target="_blank" className="block h-full w-full" aria-label={social.label}>
                                <div className="flex items-center justify-center">
                                    {social.icon && React.createElement(social.icon, {
                                        ...social.IconProps,
                                        className: "fill-[#35353F]"
                                    })}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer