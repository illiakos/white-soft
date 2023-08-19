
import ServiceCard from "@/components/sections/services/components/ServiceCard";
import Modal from "@/components/sections/services/components/Modal";
import {useState} from "react";
import ProgressBar from "@/components/sections/projects/components/ProgressBar";
import ProjectCard from "@/components/sections/projects/components/ProjectCard";

export default function Scroller() {

    interface ProjectsMap {
        [key: string]: { title: string; src: string, comingSoon: boolean, description: string, link: string };
    }

    const projectsMap: ProjectsMap = {
        "rest-tv": {
            title: 'REST TV',
            src: '/images/sections/projects/rest-tv.png',
            comingSoon: false,
            description: 'It was full-stack projects. OTT platform (Cinema and TV channels) with subscription implementation. Available on different platforms, such as mobile, tablet, or TV',
            link:"/projects/restTV"
        },
        "dvbt": {
            title: 'DVBT',
            src: '/images/sections/projects/dvbt.png',
            comingSoon: false,
            description: 'It was full-stack projects. Online shop of dvbt-t2 antennas. Website is fully responsive and has features, like choosing antenna due to location, cart and filters',
            link:"/projects/dvbt"
        },
        "coming-soon-1": {
            title: 'Coming soon...',
            src: '/images/sections/services/question.png',
            comingSoon: true,
            description: 'Description for coming soon projects 1',
            link:"/"
        },
        "coming-soon-2": {
            title: 'Coming soon...',
            src: '/images/sections/services/question.png',
            comingSoon: true,
            description: 'Description for coming soon projects 2',
            link:"/"
        },
        "coming-soon-3": {
            title: 'Coming soon...',
            src: '/images/sections/services/question.png',
            comingSoon: true,
            description: 'Description for coming soon projects 3',
            link:"/"
        },
    };


    const [modalTrigger] = useState(false)

    return (
        <div>
            <div id="scroll-container-2" className="flex overflow-x-scroll pb-4 mt-4 hide-scroll-bar ">
                <div className="flex gap-4">
                    {Object.keys(projectsMap).map((projectKey) => {
                        const { title, src, comingSoon, description, link } = projectsMap[projectKey];
                        return (
                            <ProjectCard
                                key={projectKey}
                                title={title}
                                imageSrc={src}
                                comingSoon={comingSoon}
                                description={description}
                                link={link}
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
