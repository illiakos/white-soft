
import ServiceCard from "@/components/sections/services/components/ServiceCard";
import Modal from "@/components/sections/services/components/Modal";
import {useState} from "react";
import ProgressBar from "@/components/sections/projects/components/ProgressBar";
import ProjectCard from "@/components/sections/projects/components/ProjectCard";

export default function Scroller() {

    interface ProjectsMap {
        [key: string]: { title: string; src: string, comingSoon: boolean, description: string };
    }

    const projectsMap: ProjectsMap = {
        "rest-tv": {
            title: 'REST TV',
            src: '/images/sections/projects/rest-tv.png',
            comingSoon: false,
            description: 'It was full-stack project. OTT platform (Cinema and TV channels) with subscription implementation. Available on different platforms, such as mobile, tablet, or TV',
        },
        "dvbt": {
            title: 'DVBT',
            src: '/images/sections/projects/dvbt.png',
            comingSoon: false,
            description: 'It was full-stack project. Online shop of dvbt-t2 antennas. Website is fully responsive and has features, like choosing antenna due to location, cart and filters',
        },
        "coming-soon-1": {
            title: 'Coming soon...',
            src: '/images/sections/services/question.png',
            comingSoon: true,
            description: 'Description for coming soon project 1',
        },
        "coming-soon-2": {
            title: 'Coming soon...',
            src: '/images/sections/services/question.png',
            comingSoon: true,
            description: 'Description for coming soon project 2',
        },
        "coming-soon-3": {
            title: 'Coming soon...',
            src: '/images/sections/services/question.png',
            comingSoon: true,
            description: 'Description for coming soon project 3',
        },
    };


    const [modalTrigger] = useState(false)

    return (
        <div>
            <div id="scroll-container-2" className="flex overflow-x-scroll pb-4 mt-4 hide-scroll-bar ">
                <div className="flex gap-4">
                    {Object.keys(projectsMap).map((projectKey) => {
                        const { title, src, comingSoon, description } = projectsMap[projectKey];
                        return (
                            <ProjectCard
                                key={projectKey}
                                title={title}
                                imageSrc={src}
                                comingSoon={comingSoon}
                                description={description}
                            />
                        );
                    })}
                </div>
            </div>
            <ProgressBar containerId="scroll-container-2"/>
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
