import Link from "next/link"
 
export default function NotFound() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex w-full max-w-xl flex-col items-center px-3">
                <div className="mb-5 text-6xl font-bold text-[#BEBEBE]">404</div>
                <h1 className="mb-3 text-center text-2xl font-bold leading-[2.3rem] text-[#35353F] sm:leading-[2.6rem] md:text-3xl md:leading-[3rem] lg:text-4xl lg:leading-[3.5rem]">Something went wrong</h1>
                <p className="text-center leading-[1.6rem] text-[#35353F]">The link may be broken or the page may have been removed. Check that the link you are trying to open is correct.</p>
                <Link href="/" className="mt-5 flex cursor-pointer items-center gap-1.5 rounded-full bg-[#35353F] px-5 py-3.5 font-bold transition duration-200 hover:bg-[#35353F]/90" aria-label="Go home">
                    <p className="text-white">Go Home</p>
                </Link>
            </div>
        </div>
    )
}