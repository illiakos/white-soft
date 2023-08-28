import React from "react";
import Image from "next/image";
import Scroller from "@/components/projects/sections/technologies/Scroller";

interface MainInfoProps {
    title: string;
    type: string;
    description: string;
    technologies: string[]
}

const MainInfo: React.FC<MainInfoProps> = ({ title, type, description, technologies }) => {
    return (
        <main className={"flex flex-col lg:w-[45rem] justify-between font-primary"}>
            <h1 className={"lg:text-8xl md:text-7xl sm:text-6xl text-6xl text-text-black mb-4 font-bold"}>
                {title}
            </h1>
            <div className={"flex"}>
                <h2 className={"lg:text-4xl text-2xl font-semibold text-text-black mr-4"}>
                    Type:
                </h2>
                <p className={"lg:text-4xl text-2xl font-semibold text-text-black"}>{type}</p>
            </div>
            <h2 className={"lg:text-4xl text-2xl font-semibold text-text-black mt-4"}>
                Description:
            </h2>
            <p className={"lg:text-xl text-md font-medium text-text-grey mt-2"}>
                {description}
            </p>
            <hr className={"w-full h-1 bg-text-grey rounded mt-4"}/>
            <h2 className={"lg:text-4xl text-2xl font-semibold text-text-black mt-4"}>
                Technologies used:
            </h2>
            <div className={"w-full h-24 lg:flex justify-between gap-x-8 hidden"}>
                {technologies.map((technology) => (
                    <div key={technology} className={"w-52 relative"}>
                        <Image
                            draggable={false}
                            layout={'fill'}
                            objectFit={'contain'}
                            src={technology}
                            alt={"Logo"}
                            className={"hover:scale-110 transition-all duration-500 ease-in-out"}
                        />
                    </div>
                ))}
            </div>
            <hr className={"w-full h-1 bg-text-grey rounded hidden lg:flex"}/>
            <Scroller technologies={technologies}/>
        </main>
    );
};

export default MainInfo;
