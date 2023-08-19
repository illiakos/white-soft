import Image from 'next/image'
import {useRouter} from "next/router";
import { HiArrowRight } from 'react-icons/hi';

export default function Primary() {

    const  router = useRouter();

    return (
        <section className={"flex h-fit mx-8 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-28 2xl:mx-32 mt-16 justify-between font-primary"}>
            <div className={"lg:w-2/3 w-full flex flex-col lg:py-16"}>
                <h1 className={"font-semibold lg:font-medium lg:text-start text-center text-text-black text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl"}>
                    WE WILL DEVELOP<br/>
                    THE BEST SOLUTION<br/>
                    FOR YOUR BUSINESS
                </h1>
                <p className={"font-medium text-text-grey lg:text-start text-center self-center lg:self-start " +
                    "text-text-xs sm:text-text-xs md:text-text-sm lg:text-md xl:text-lg 2xl:text-xl" +
                    "max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl" +
                    "mt-4"}>
                    Do you want a mobile app, website, or full-stack project according to your business requirements? We’re ready to help you with it for a small period and a very reasonable price
                </p>
                <div className={"flex self-center lg:self-start bg-primary-blue px-6 lg:px-8 py-3 lg:py-4 rounded-xl w-fit text-white mt-4 hover:scale-105 hover:bg-blue-7 transition-all duration-500 cursor-pointer"}>
                    <a className={"sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium"}>Contact us</a>
                    <HiArrowRight className={"sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-1 ml-2"}/>
                </div>
            </div>
            <div className={"relative w-1/3 hidden lg:flex"}>
                <Image
                    draggable={false}
                    layout={'fill'}
                    objectFit={'contain'}
                    src={'/images/sections/primary/team.png'}
                    alt={"Logo"}
                    className={"self-end"}
                />
            </div>
        </section>
    )
}
