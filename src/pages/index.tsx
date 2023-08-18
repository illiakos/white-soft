import Image from 'next/image'
import Navbar from "@/components/Navbar";
import Primary from "@/components/sections/primary/Primary";
import About from "@/components/sections/about/About";
import Services from "@/components/sections/services/Services";
import Projects from "@/components/sections/projects/Projects";

export default function Home() {
  return (
    <main className={"flex flex-col max-w-screen min-h-full bg-primary-light-blue"}>
        <Navbar/>
        <Primary/>
        <About/>
        <Services/>
        <Projects/>
    </main>
  )
}
