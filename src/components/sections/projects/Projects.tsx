import Image from 'next/image'
import {useRouter} from "next/router";
import { HiArrowRight } from 'react-icons/hi';
import Scroller from "@/components/sections/services/components/Scroller";
import ProjectCard from "@/components/sections/projects/components/ProjectCard";

export default function Projects() {

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
    };


    const  router = useRouter();

    return (
        <section className={"flex flex-col h-fit mt-32 mx-32 justify-between font-primary"}>
            <h1 className={"text-5xl font-semibold text-text-black self-end"}>
                OUR PROJECTS
            </h1>
            <div className={"grid grid-cols-4 gap-x-4 mt-4"}>
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
        </section>
    )
}
