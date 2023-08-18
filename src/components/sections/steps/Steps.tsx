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
        <section className={"flex flex-col h-fit mt-16 mx-32 justify-between font-primary"}>
            <div className={"flex "}>
                <h1 className={"text-5xl font-semibold text-text-black self-start"}>
                    STEPS
                </h1>
            </div>
            <div className={"mt-8"}>
                <div className={"w-full flex justify-between items-center"}>
                    <StepsCard title={stepsMap['first'].title} imageSrc={stepsMap['first'].src} id={stepsMap['first'].id}/>
                    <BsChevronRight className={"text-primary-blue text-3xl mx-8"} />
                    <StepsCard title={stepsMap['second'].title} imageSrc={stepsMap['second'].src}  id={stepsMap['second'].id}/>
                    <BsChevronRight className={"text-primary-blue text-3xl mx-8"}/>
                    <StepsCard title={stepsMap['third'].title} imageSrc={stepsMap['third'].src}  id={stepsMap['third'].id}/>
                </div>
            </div>
        </section>
    )
}
