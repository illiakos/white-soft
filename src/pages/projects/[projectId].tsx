
import Navbar from "@/components/sections/navbar/Navbar";
import {useRouter} from "next/router";
import Heading from "@/components/projects/sections/Heading";
import {FC} from "react";
import MainInfo from "@/components/projects/sections/MainInfo";
import AvailablePlatforms from "@/components/projects/sections/platforms/AvailablePlatforms";
import Screenshots from "@/components/projects/sections/Screenshots";
import {RiHomeLine} from "react-icons/ri";
import {FaRegAddressCard} from "react-icons/fa";
import {BsChevronRight} from "react-icons/bs";




const ProjectPage:FC = () => {

    interface ProjectContentMap {
        [key: string]: {
            title: string;
            type: string,
            description: string;
            screenshots: string[];
            technologies: string[];
            platforms: { url: string; width: string, link:string }[];
        };
    }

    const projectContentMap: ProjectContentMap = {
        restTV: {
            title: "REST TV",
            type: "Full-stack project",
            description: "Rest tv- it’s our full-stack project. OTT platform. Here you can watch some tv or movies. Adding to it - here are implemented features such as archive and schedule. " +
                "Also here are implemented email sending and subscription using credit card features.  All of this is fully built using APIs ",
            screenshots: [
                "/images/projects/screenshots/rest-tv/1.png",
                "/images/projects/screenshots/rest-tv/2.jpg",
                "/images/projects/screenshots/rest-tv/3.jpg",
                "/images/projects/screenshots/rest-tv/4.jpg",
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
                { url: "/images/projects/platforms/rest-tv/mobile.png", width: "w-24", link: "https://play.google.com/store/apps/details?id=white.soft.flutter_apps"},
                { url:  "/images/projects/platforms/rest-tv/tablet.png", width: "w-96", link: "https://play.google.com/store/apps/details?id=white.soft.flutter_apps" },
                { url: "/images/projects/platforms/rest-tv/laptop.png", width: "w-80", link: "https://maximum-ott.com/"},
                { url: "/images/projects/platforms/rest-tv/tv.png", width: "w-72", link: "https://play.google.com/store/apps/details?id=white.soft.maximum_ott_tv"},
            ],
        },
        dvbt: {
            title: "BEST ANTENNA",
            type: "Full-stack project",
            description: "BEST ANTENNA- it’s our full-stack project. Here you can choose an dvbt-2 antenna for your requirements. Adding to it - here is implemented recommend " +
                "an antenna according to your location  " ,
            screenshots: [
                "/images/projects/screenshots/dvbt/1.png",
                "/images/projects/screenshots/dvbt/2.png",
                "/images/projects/screenshots/dvbt/3.png",
                "/images/projects/screenshots/dvbt/1.png",
                "/images/projects/screenshots/dvbt/5.png",
            ],
            technologies: [
                "/images/projects/technologies/dvbt/spring.png",
                "/images/projects/technologies/dvbt/next-js.png",
                "/images/projects/technologies/dvbt/redis.png",
                "/images/projects/technologies/dvbt/postgre.png",
                "/images/projects/technologies/dvbt/digital-ocean.png",
            ],
            platforms: [
                { url: "/images/projects/platforms/dvbt/mobile.png", width: "w-24", link: "https://best-antennat-2.com/"},
                { url:  "/images/projects/platforms/dvbt/tablet.png", width: "w-96", link: "https://best-antennat-2.com/" },
                { url: "/images/projects/platforms/dvbt/laptop.png", width: "w-80", link: "https://best-antennat-2.com/"},
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
        <main className={"flex flex-col max-w-screen min-h-full bg-primary-light-blue font-primary"}>
            <Navbar/>
            <Heading title={project.title}/>
            <div className={"flex items-center text-text-black mt-6 lg:mt-8  gap-x-4 mx-8 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-28 2xl:mx-32"}>
                <div className={"flex lg:text-xl text-lg font-semibold items-center gap-2"}>
                    <RiHomeLine className={"cursor-pointer"} onClick={() => router.push("/")}/>
                    <a className={"cursor-pointer"} onClick={() => router.push("/")}>Main</a>
                </div>
                <BsChevronRight className={"lg:text-xl text-lg font-semibold"}/>
                <div className={"flex lg:text-xl text-lg font-semibold items-center gap-2"}>
                    <FaRegAddressCard className={"cursor-pointer"} />
                    <a className={"cursor-pointer"}>{project.title} </a>
                </div>
            </div>
            <div className={"flex lg:flex-row flex-col-reverse mt-6 lg:mt-8 gap-x-16 mx-8 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-28 2xl:mx-32"}>
                <Screenshots screenshots={project.screenshots}/>
                <MainInfo title={project.title} type={project.type} description={project.description} technologies={project.technologies}/>
            </div>
            <AvailablePlatforms  platforms={project.platforms}/>

        </main>
    );
}

export default ProjectPage;
