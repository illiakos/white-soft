import Image from 'next/image';
import { HiArrowRight } from 'react-icons/hi';
import {useRouter} from "next/router";

interface ProjectCardProps {
    title: string;
    imageSrc: string;
    comingSoon: boolean;
    description: string;
    link: string;
}

export default function ProjectCard({ title, imageSrc, comingSoon, description, link }: ProjectCardProps) {

    const router = useRouter();

    return (
        <div className={"p-4 lg:p-8 w-72 sm:w-80 lg:w-96 flex flex-col bg-white rounded-xl items-center justify-center"}>
            <div className={"relative w-2/3 pb-56"}>
                <Image
                    draggable={false}
                    layout={'fill'}
                    objectFit={'contain'}
                    src={imageSrc}
                    alt={"Logo"}
                    onClick={() => router.push(link)}
                    className={`self-end cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out ${title == "REST TV" ? "scale-110 hover:scale-125" : "scale-100 hover:scale-110"}`}
                />
            </div>
            <h2 className={"text-text-black font-bold text-lg lg:text-2xl mt-4 lg:mt-8 self-center"}>{title}</h2>

            {comingSoon ? (
                // Project is coming soon: display question mark and "Coming soon" text
                <></>
            ) : (
                // Normal projects: display description and "Read more" button
                <>
                    <p className={"text-text-grey font-medium text-sm lg:text-lg self-center text-center"}  onClick={() => router.push(link)}>
                        {description}
                    </p>
                    <button onClick={() => router.push(link)} className={"bg-primary-blue text-md lg:text-xl text-white font-semibold w-full rounded-xl py-3 lg:py-4 mt-4 hover:scale-105 hover:bg-blue-7 transition-all duration-500 ease-in-out"}>
                        Read more
                    </button>
                </>
            )}
        </div>
    );
}
