import Image from 'next/image'
import {useRouter} from "next/router";
import { HiArrowRight } from 'react-icons/hi';

export default function About() {

    const  router = useRouter();

    return (
        <section className={"flex flex-col lg:flex-row mt-16 lg:mt-0 h-fit mx-8 sm:mx-16 md:mx-20 lg:mx-24 lg:mx-28 2xl:mx-32 justify-between font-primary"}>
            <div className={"hidden lg:flex lg:relative w-1/3"}>
                <Image
                    draggable={false}
                    layout={'fill'}
                    objectFit={'contain'}
                    src={'/images/sections/about/team.png'}
                    alt={"Logo"}
                    className={"self-end"}
                />
            </div>
            <div className={"lg:w-1/2 w-full flex flex-col lg:py-32"}>

                <h1 className={"text-4xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-semibold text-text-black self-center lg:self-end"}>
                    ABOUT US
                </h1>
                <div className={"grid sm:grid-cols-2 grid-rows-2 gap-8 mt-8 lg:mt-32"}>
                    <div>
                        <h3 className={"lg:text-4xl text-2xl font-bold lg:font-semibold text-text-black"}>
                            Quality
                        </h3>
                        <p className={"text-md lg:text-xl text-text-grey"}>
                            We provide high-quality solutions for your business. Due to our 2+ years of experience, smart and dedicated developers team

                        </p>
                    </div>


                    <div>
                        <h3 className={"lg:text-4xl text-2xl font-bold lg:font-semibold text-text-black"}>
                            Speed
                        </h3>
                        <p className={"text-md lg:text-xl text-text-grey"}>
                            We contact the customer, discuss details, and technical requirement, and after we have an agreement - our team starts developing immediately

                        </p>
                    </div>


                    <div>
                        <h3 className={"lg:text-4xl text-2xl font-bold lg:font-semibold text-text-black"}>
                            Reasonable prices
                        </h3>
                        <p className={"text-md lg:text-xl text-text-grey"}>
                            Our software meets all the standards, quality and order completing speed are on a huge level, but prices remain democratic

                        </p>
                    </div>


                    <div>
                        <h3 className={"lg:text-4xl text-2xl font-bold lg:font-semibold text-text-black"}>
                            Experience
                        </h3>
                        <p className={"text-md lg:text-xl text-text-grey"}>
                            White Soft have pasted some projects, which are working perfectly, producing content or commodity with better efficiency thanks to us

                        </p>
                    </div>


                </div>
            </div>
        </section>
    )
}
