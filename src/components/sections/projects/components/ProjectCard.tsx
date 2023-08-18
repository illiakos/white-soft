import Image from 'next/image';
import { HiArrowRight } from 'react-icons/hi';

interface ProjectCardProps {
    title: string;
    imageSrc: string;
    comingSoon: boolean;
    description: string;
}

export default function ProjectCard({ title, imageSrc, comingSoon, description }: ProjectCardProps) {
    return (
        <div className={"p-8 flex flex-col bg-white rounded-xl items-center justify-center"}>
            <div className={"relative w-2/3 pb-56"}>
                <Image
                    draggable={false}
                    layout={'fill'}
                    objectFit={'contain'}
                    src={imageSrc}
                    alt={"Logo"}
                    className={"self-end cursor-pointer hover:scale-105 transition-all duration-500"}
                />
            </div>
            <h2 className={"text-text-black font-bold text-2xl mt-8 self-center"}>{title}</h2>

            {comingSoon ? (
                // Project is coming soon: display question mark and "Coming soon" text
                <p className={"text-text-grey font-medium text-lg self-center text-center"}>
                    Coming soon
                </p>
            ) : (
                // Normal project: display description and "Read more" button
                <>
                    <p className={"text-text-grey font-medium text-lg self-center text-center"}>
                        {description}
                    </p>
                    <button className={"bg-primary-blue text-xl text-white font-semibold w-full rounded-xl py-4 mt-4"}>
                        Read more
                    </button>
                </>
            )}
        </div>
    );
}
