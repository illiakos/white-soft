import React from 'react';
import Image from "next/image";
import Scroller from "@/components/projects/sections/platforms/Scroller";
import {useRouter} from "next/router";

interface AvailablePlatformsProps {
    platforms: { url: string; width: string, link:string }[];
}



const AvailablePlatforms: React.FC<AvailablePlatformsProps> = ({ platforms }) => {

    const router = useRouter()

    return (
        <section className={"mx-8 mb-16 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-28 2xl:mx-32"}>
            <h2 className={"font-primary lg:text-4xl text-2xl font-semibold text-text-black mt-4"}>
                Available platforms:
            </h2>
            <div className={"w-full lg:flex hidden gap-x-8 mt-8"}>
                {platforms.map((platform) => (
                    <div key={platform.url}  className={`h-52 ${platform.width} relative`}>
                        <Image
                            draggable={false}
                            layout={'fill'}
                            objectFit={'contain'}
                            src={platform.url}
                            alt={"Logo"}
                            className={"hover:scale-105 transition-all duration-500 ease-in-out"}
                            onClick={() => router.push(platform.link)}
                        />
                    </div>
                ))}
            </div>
            <Scroller platforms={platforms}/>
        </section>

    );
};

export default AvailablePlatforms;
