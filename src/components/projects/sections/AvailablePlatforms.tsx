import React from 'react';
import Image from "next/image";

interface AvailablePlatformsProps {
    platforms: { url: string; width: string }[];
}

const AvailablePlatforms: React.FC<AvailablePlatformsProps> = ({ platforms }) => {
    return (
        <section className={"mx-8 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-28 2xl:mx-32"}>
            <h2 className={"font-primary text-4xl font-semibold text-text-black mt-4"}>
                Available platforms:
            </h2>
            <div className={"w-full flex gap-x-8 mt-8"}>
                {platforms.map((platform) => (
                    <div key={platform.url}  className={`h-52 ${platform.width} relative`}>
                        <Image
                            draggable={false}
                            layout={'fill'}
                            objectFit={'contain'}
                            src={platform.url}
                            alt={"Logo"}
                            className={"hover:scale-105 transition-all duration-500 ease-in-out"}
                        />
                    </div>
                ))}
            </div>
        </section>

    );
};

export default AvailablePlatforms;
