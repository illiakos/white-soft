import React from "react";
import Image from "next/image";

interface MainInfoProps {
    title: string;
    type: string;
    description: string;
    technologies: string[]
}

const MainInfo: React.FC<MainInfoProps> = ({ title, type, description, technologies }) => {
    return (
        <main className={"flex flex-col w-[45rem] justify-between font-primary"}>
            <h1 className={"text-8xl text-text-black mb-4 font-bold"}>
                {title}
            </h1>
            <div className={"flex"}>
                <h2 className={"text-4xl font-semibold text-text-black mr-4"}>
                    Type:
                </h2>
                <p className={"text-4xl font-semibold text-text-black"}>{type}</p>
            </div>
            <h2 className={"text-4xl font-semibold text-text-black mt-4"}>
                Description:
            </h2>
            <p className={"text-xl font-medium text-text-grey mt-2"}>
                {description}
            </p>
            <hr className={"w-full h-1 bg-text-grey rounded mt-4"}/>
            <h2 className={"text-4xl font-semibold text-text-black mt-4"}>
                Technologies used:
            </h2>
            <div className={"w-full h-24 flex justify-between gap-x-8"}>
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
            <hr className={"w-full h-1 bg-text-grey rounded"}/>
        </main>
    );
};

export default MainInfo;
