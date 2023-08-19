import Image from 'next/image'
import {useRouter} from "next/router";
import { HiArrowRight } from 'react-icons/hi';
import Scroller from "@/components/sections/services/components/Scroller";
import Modal from "@/components/sections/services/components/Modal";
import {useState} from "react";


interface StepsCardProps {
    title: string;
    imageSrc: string;
    id: string;
}

export default function StepsCard({title, imageSrc, id} :StepsCardProps) {


    return (
        <div className={"relative p-4 lg:w-96 w-full flex flex-col bg-white rounded-xl items-center justify-center"}>
            <p className={"absolute left-4 top-4 text-primary-blue font-semibold text-lg sm:text-lg lg:text-xl"}>{id}</p>
            <div className={"relative w-full pb-56 md: pb-80 lg:pb-96"}>
                <Image
                    draggable={false}
                    layout={'fill'}
                    objectFit={'contain'}
                    src={imageSrc}
                    alt={"Logo"}
                    className={"self-end cursor-pointer hover:scale-105 transition-all duration-500"}
                />
            </div>
            <h2 className={"text-primary-blue text-center font-bold text-lg lg:text-2xl mb-8 self-center"}>{title}</h2>
        </div>
    )
}
