import Image from 'next/image'
import {useRouter} from "next/router";
import { HiArrowRight } from 'react-icons/hi';
import Scroller from "@/components/sections/services/components/Scroller";
import Modal from "@/components/sections/services/components/Modal";
import {useState} from "react";


interface ServiceCardProps {
    title: string;
    imageSrc: string;
}

export default function ServiceCard({title, imageSrc} :ServiceCardProps) {

    const [modalTrigger, setModalTrigger] = useState(false);

    const handleClick = () => {
        console.log(modalTrigger)
        setModalTrigger(true);
    };

    return (
        <div className={"p-4 w-64 h-64 lg:h-96 lg:w-96 flex flex-col bg-white rounded-xl items-center justify-center"}>
            <div className={"relative w-2/3 h-2/3"}>
                <Image
                    draggable={false}
                    layout={'fill'}
                    objectFit={'contain'}
                    src={imageSrc}
                    alt={"Logo"}
                    className={"self-end cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out"}
                    onClick={handleClick}
                />
            </div>
            <h2 className={"text-text-black font-bold text-lg lg:text-2xl mt-8 self-center"}>{title}</h2>
            <Modal trigger={modalTrigger}/>
        </div>
    )
}
