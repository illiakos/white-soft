
import Navbar from "@/components/sections/navbar/Navbar";
import {useRouter} from "next/router";
import Heading from "@/components/projects/sections/Heading";
import {FC} from "react";
import MainInfo from "@/components/projects/sections/MainInfo";
import AvailablePlatforms from "@/components/projects/sections/AvailablePlatforms";
import Screenshots from "@/components/projects/sections/Screenshots";




const ProjectPage:FC = () => {

    interface ProjectContentMap {
        [key: string]: {
            title: string;
            type: string,
            description: string;
            screenshots: string[];
            technologies: string[];
            platforms: { url: string; width: string }[];
        };
    }

    const projectContentMap: ProjectContentMap = {
        restTV: {
            title: "REST TV",
            type: "Full-stack project",
            description: "Rest tv- it’s our full-stack project. OTT platform. Here you can watch some tv or movies. Adding to it - here are implemented features such as archive and schedule. " +
                "Also here are implemented email sending and subscription using credit card features.  All of this is fully built using APIs ",
            screenshots: [
                "/images/projects/screenshots/rest-tv/1.jpg",
                "/images/projects/screenshots/rest-tv/2.jpg",
                "/images/projects/screenshots/rest-tv/3.jpg",
                "/images/projects/screenshots/rest-tv/4.png",
                "/images/projects/screenshots/rest-tv/5.jpg",
                "/images/projects/screenshots/rest-tv/6.jpg",
                "/images/projects/screenshots/rest-tv/7.jpg",
            ],
            technologies: [
                "/images/projects/technologies/rest-tv/flutter.png",
                "/images/projects/technologies/rest-tv/next-js.png",
                "/images/projects/technologies/rest-tv/node-js.png",
                "/images/projects/technologies/rest-tv/mongo-db.png",
                "/images/projects/technologies/rest-tv/digital-ocean.png",
            ],
            platforms: [
                { url: "/images/projects/platforms/rest-tv/mobile.png", width: "w-24" },
                { url:  "/images/projects/platforms/rest-tv/tablet.png", width: "w-96" },
                { url: "/images/projects/platforms/rest-tv/laptop.png", width: "w-80" },
                { url: "/images/projects/platforms/rest-tv/tv.png", width: "w-72" },
            ],
        },
    };
    const router = useRouter();
    const { projectId } = router.query;

    // Check if the projectId is a string
    if (typeof projectId !== 'string') {
        return <div>Loading...</div>; // Handle loading state or error
    }

    const project = projectContentMap[projectId]; // Access the project using projectId

    if (!project) {
        // Handle the case where the project doesn't exist
        return <div>Project not found</div>;
    }


    return (
        <main className={"flex flex-col max-w-screen min-h-full bg-primary-light-blue"}>
            <Navbar/>
            <Heading title={project.title}/>
            <div className={"flex mt-16 justify-end gap-x-16 mx-8 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-28 2xl:mx-32"}>
                <Screenshots screenshots={project.screenshots}/>
                <MainInfo title={project.title} type={project.type} description={project.description} technologies={project.technologies}/>
            </div>
            <AvailablePlatforms  platforms={project.platforms}/>
            <div className={"h-96"}></div>
        </main>
    );
}

export default ProjectPage;
