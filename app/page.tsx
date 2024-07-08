import About from "./containers/Home/About"
import Projects from "./containers/Home/Projects"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

export default function Home() {
    return (
        <main className="flex w-full justify-center">
            <div className="flex w-full flex-col items-center">
                <div className="w-full max-w-[1056px]">
                    <Navbar />
                    <About />
                    <Projects />
                    <Footer />
                </div>
            </div>
        </main>
    )
}