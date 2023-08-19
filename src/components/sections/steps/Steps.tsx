import Scroller from "@/components/sections/services/components/Scroller";
import {AiOutlineInfoCircle} from "react-icons/ai";
import {useState} from "react";
import StepsCard from "@/components/sections/steps/components/StepsCard";
import {BsChevronRight} from "react-icons/bs";

export default function Steps() {

    interface StepsMap {
        [key: string]: { title: string; src: string, id: string };
    }

    const stepsMap: StepsMap = {
        "first": {
            title: 'Contact us and  discuss details of project',
            src: '/images/sections/steps/1.png',
            id: "01",
        },
        "second": {
            title: 'We start to implementing your idea ',
            src: '/images/sections/steps/2.png',
            id: "02",
        },
        "third": {
            title: 'App deploying and whole project finishing ',
            src: '/images/sections/steps/3.png',
            id: "03",
        },
    };


    return (
        <section className={"flex flex-col h-fit mt-16 mx-12 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-28 2xl:mx-32 justify-between font-primary"}>
                <h1 className={"text-4xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-semibold text-text-black self-center lg:self-start"}>
                    STEPS
                </h1>
            <div className={"mt-4 lg:mt-8"}>
                <div className={"w-full flex lg:flex-row flex-col gap-y-8 lg:gap-y-0 justify-between items-center"}>
                    <StepsCard title={stepsMap['first'].title} imageSrc={stepsMap['first'].src} id={stepsMap['first'].id}/>
                    <BsChevronRight className={"rotate-90 lg:rotate-0 text-primary-blue text-5xl mx-8 hover:translate-y-2 lg:hover:translate-x-2 duration-500 transition-all ease-in-out"}/>
                    <StepsCard title={stepsMap['second'].title} imageSrc={stepsMap['second'].src}  id={stepsMap['second'].id}/>
                    <BsChevronRight className={"rotate-90 lg:rotate-0 text-primary-blue text-5xl mx-8 hover:translate-y-2 lg:hover:translate-x-2 duration-500 transition-all ease-in-out"}/>
                    <StepsCard title={stepsMap['third'].title} imageSrc={stepsMap['third'].src}  id={stepsMap['third'].id}/>
                </div>
            </div>
        </section>
    )
}
