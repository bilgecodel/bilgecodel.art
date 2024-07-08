import Link from "next/link"
import projectsData from "../../../services/projectsData"
import Image from "next/image"

const Projects: React.FC = () => {
    return (
        <section id="projects" className="mb-0 w-full px-3 py-8 md:mb-24 lg:px-6 lg:py-16">
            <div className="flex justify-center">
                <div className="flex w-full flex-col gap-12 md:gap-24 lg:gap-36">
                    {projectsData.projects.map((project, index) => (
                        <Link key={index} href={project.link} target="_blank" className="group flex w-full flex-col-reverse items-center gap-6 md:flex-row md:justify-between" aria-label={project.title}>
                            <span className="text-2xl font-medium text-[#35353F] md:text-3xl lg:text-4xl">{project.title}</span>
                            <div className="relative overflow-hidden rounded-3xl">
                                <Image src={project.image} alt={project.title} width={440} height={440} quality={100} />
                                <div className="absolute left-0 top-0 z-10 size-full transition-all group-hover:bg-[#1B1B1B]/50" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects