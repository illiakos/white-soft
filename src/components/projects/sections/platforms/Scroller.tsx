
import ServiceCard from "@/components/sections/services/components/ServiceCard";
import Modal from "@/components/sections/services/components/Modal";
import React, {useState} from "react";
import ProgressBar from "@/components/projects/sections/technologies/ProgressBar";
import ProjectCard from "@/components/sections/projects/components/ProjectCard";
import Image from "next/image";
import MainInfo from "@/components/projects/sections/MainInfo";

interface ScrollerProps {
    platforms: { url: string; width: string }[];
}

const Scroller: React.FC<ScrollerProps> = ({platforms }) => {


    const [modalTrigger] = useState(false)

    return (
        <div>
            <div id="platforms-scroll-container" className="flex lg:hidden overflow-x-scroll pb-4 mt-4 hide-scroll-bar ">
                <div className={"flex gap-x-8 mt-8"}>
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
            </div>
            <ProgressBar containerId="platforms-scroll-container"/>
            <Modal trigger={modalTrigger}/>
            <style jsx>{`
              .hide-scroll-bar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }

              .hide-scroll-bar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
        </div>
    )
}

export default Scroller;
