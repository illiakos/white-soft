import Image from 'next/image'
import Navbar from "@/components/Navbar";
import Primary from "@/components/sections/primary/Primary";

export default function Home() {
  return (
    <main className={"flex flex-col w-screen h-screen bg-primary-light-blue"}>
        <Navbar/>
        <Primary/>
    </main>
  )
}
