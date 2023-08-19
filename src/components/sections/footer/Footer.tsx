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
        <header className={"flex lg:flex-row flex-col bg-primary-blue h-fit mt-16 lg:mt-32 px-12 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-32 p-8 justify-between font-primary"}>
            <div className={"flex flex-col"}>
                <div className={"relative w-64 pb-24 self-center lg:self-start"}>
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
                <p className={"self-center text-center sm:text-start lg:self-start text-primary-light-blue"}>Contact us and  discuss details of project</p>
            </div>
            <div className={"hidden lg:flex flex-col"}>
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
            <div className={"hidden lg:flex flex-col"}>
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

            {/*Only on mobile*/}
            <div className={"flex flex-col text-center sm:text-start sm:flex-row lg:hidden mt-8"}>
                <div className={"flex flex-col justify-between w-full"}>
                    <h3 className={"text-white text-lg lg:text-2xl font-semibold"}>Useful links</h3>
                    <ul className={"gap-y-2 flex flex-col text-primary-light-blue text-md md:text-lg font-medium w-full sm:w-fit"}>
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
                <div className={"flex flex-col mt-4 sm:mt-0"}>
                    <h3 className={"text-white text-lg lg:text-2xl font-semibold"}>Follow us</h3>
                    <ul className={"gap-x-4 flex justify-between sm:justify-start w-full sm:w-fit text-primary-light-blue text-lg font-medium w-fit"}>
                        {Object.keys(socialNetworksMap).map((socialNetworkKey) => {
                            const { imageSrc, link } = socialNetworksMap[socialNetworkKey];
                            return(
                                <SocialNetwork imageSrc={imageSrc} link={link} key={socialNetworkKey}/>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </header>
    )
}
