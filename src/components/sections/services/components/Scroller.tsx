import ProgressBar from "@/components/sections/services/components/ProgressBar";
import ServiceCard from "@/components/sections/services/components/ServiceCard";
import Modal from "@/components/sections/services/components/Modal";
import {useState} from "react";

export default function Scroller() {

    interface ServicesMap {
        [key: string]: { title: string; src: string };
    }

    const servicesMap: ServicesMap = {
        "your-custom-idea": { title: "Your Custom Idea", src: "/images/sections/services/question.png" },
        "full-stack-project": { title: "Full-Stack Project", src: "/images/sections/services/full-stack.png" },
        "web-app": { title: "Web App", src: "/images/sections/services/web-app.png" },
        "mobile-app": { title: "Mobile App", src: "/images/sections/services/mobile-app.png" },
        "tv-app": { title: "TV App", src: "/images/sections/services/tv-app.png" },
    };


    const [modalTrigger] = useState(false)

    return (
        <div>
            <div id="scroll-container-1" className="flex overflow-x-scroll pb-4 mt-4 hide-scroll-bar ">
                <div className="flex gap-4">
                    {Object.keys(servicesMap).map((serviceKey) => {
                        const { title, src } = servicesMap[serviceKey];
                        return <ServiceCard key={serviceKey} title={title} imageSrc={src} />;
                    })}
                </div>
            </div>
            <ProgressBar containerId="scroll-container-1"/>
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
