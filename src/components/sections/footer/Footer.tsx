import Image from 'next/image'
import {useRouter} from "next/router";
import { MdAlternateEmail } from 'react-icons/md';
import SocialNetwork from "@/components/sections/footer/components/SocialNetwork";

export default function Footer() {

    const router = useRouter();

    interface SocialNetworksMap {
        [key: string]: { imageSrc: string; link: string};
    }

    const socialNetworksMap: SocialNetworksMap = {
        "twitter": {
            link: '/',
            imageSrc: '/images/sections/footer/twitter.png',
        },
        "facebook": {
            link: '/',
            imageSrc: '/images/sections/footer/facebook.png',
        },
        "instagram": {
            link: '/',
            imageSrc: '/images/sections/footer/instagram.png',
        },
        "tiktok": {
            link: '/',
            imageSrc: '/images/sections/footer/tiktok.png',
        },
    };


    return (
        <header className={"flex bg-primary-blue h-fit mt-32 px-32 p-8 justify-between font-primary"}>
            <div className={"flex flex-col"}>
                <div className={"relative w-64 pb-24"}>
                    <Image
                        draggable={false}
                        onClick={() => {
                            router.push('/')
                        }}
                        layout={'fill'}
                        objectFit={'contain'}
                        src={'/images/sections/footer/logo-white.png'}
                        alt={"Logo"}
                        className={"cursor-pointer outline-0 remove-highlight z-[115]"}
                    />
                </div>
                <p>Contact us and  discuss details of project</p>
            </div>
            <div className={"flex flex-col"}>
                <h3 className={"text-white text-2xl font-semibold"}>Useful links</h3>
                <ul className={"gap-y-2 flex flex-col text-primary-light-blue text-lg font-medium w-fit"}>
                    <li className={"cursor-pointer hover:underline "}>
                        About us
                    </li>
                    <li className={"cursor-pointer hover:underline "}>
                        Services
                    </li>
                    <li className={"cursor-pointer hover:underline "}>
                        Projects
                    </li>
                    <li className={"cursor-pointer hover:underline "}>
                        Steps
                    </li>
                </ul>

            </div>
            <div className={"flex flex-col"}>
                <h3 className={"text-white text-2xl font-semibold"}>Follow us</h3>
                <ul className={"gap-x-4 flex text-primary-light-blue text-lg font-medium w-fit"}>
                    {Object.keys(socialNetworksMap).map((socialNetworkKey) => {
                        const { imageSrc, link } = socialNetworksMap[socialNetworkKey];
                        return(
                            <SocialNetwork imageSrc={imageSrc} link={link} key={socialNetworkKey}/>
                        );
                    })}
                </ul>
            </div>
        </header>
    )
}
