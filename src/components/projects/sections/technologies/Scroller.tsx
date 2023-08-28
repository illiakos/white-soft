
import ServiceCard from "@/components/sections/services/components/ServiceCard";
import Modal from "@/components/sections/services/components/Modal";
import React, {useState} from "react";
import ProgressBar from "@/components/projects/sections/technologies/ProgressBar";
import ProjectCard from "@/components/sections/projects/components/ProjectCard";
import Image from "next/image";
import MainInfo from "@/components/projects/sections/MainInfo";

interface ScrollerProps {
    technologies: string[]
}

const Scroller: React.FC<ScrollerProps> = ({technologies }) => {


    const [modalTrigger] = useState(false)

    return (
        <div>
            <div id="technologies-scroll-container" className="flex lg:hidden overflow-x-scroll pb-4 mt-4 hide-scroll-bar ">
                <div className={" h-24 flex justify-between gap-x-16"}>
                    {technologies.map((technology) => (
                        <div key={technology} className={"w-24 relative"}>
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
            </div>
            <ProgressBar containerId="technologies-scroll-container"/>
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
