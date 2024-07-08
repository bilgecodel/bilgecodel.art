"use client"

import Link from "next/link"

const About: React.FC = () => {
    return (
        <section id="about" className="my-3 flex w-full px-3 py-8 md:mb-12 lg:px-6 lg:py-16">
            <div className="flex flex-col">
                <div className="mb-3 sm:mb-6">
                    <h1 className="text-2xl font-bold text-[#35353F] md:text-3xl lg:text-4xl">I’m Bilge 👋🏻</h1>
                </div>
                <p className="w-full text-2xl leading-[2.3rem] text-[#35353F] sm:leading-[2.6rem] md:text-3xl md:leading-[3rem] lg:text-4xl lg:leading-[3.5rem]">A Product Designer focused on creating user-centric, impactful, and innovative products.</p>
                <div className="mb-4 mt-8 text-lg text-[#35353F] sm:flex-row md:mt-12 md:text-xl lg:text-2xl">
                    <p className=" float-start">Get in touch</p>
                    <span className="ml-2 mr-3">👉🏻</span>
                    <Link href="mailto:bilge.codel@outlook.com" className="font-bold" aria-label="Contact with bilge.codel@outlook.com">bilge.codel@outlook.com</Link>
                </div>
            </div>
        </section>
    )
}

export default About