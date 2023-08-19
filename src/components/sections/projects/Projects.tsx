
import Scroller from "@/components/sections/projects/components/Scroller";

export default function Projects() {

    return (
        <section className={"flex flex-col h-fit mt-16 lg:mt-32 mx-8 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-28 2xl:mx-32 justify-between font-primary"}>
            <h1 className={"text-center text-4xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-semibold text-text-black self-center lg:self-end"}>
                OUR PROJECTS
            </h1>
            <Scroller/>
        </section>
    )
}
