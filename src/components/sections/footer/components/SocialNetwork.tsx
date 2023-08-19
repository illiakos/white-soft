import Image from 'next/image'
import {useRouter} from "next/router";
import { HiArrowRight } from 'react-icons/hi';
import Scroller from "@/components/sections/services/components/Scroller";
import Modal from "@/components/sections/services/components/Modal";
import {useState} from "react";


interface SocialNetworkProps {
    imageSrc: string;
    link: string;
}

export default function SocialNetwork({imageSrc, link} :SocialNetworkProps) {

    const router = useRouter();

    return (
            <li className={"cursor-pointer hover:underline mt-4 "}>
                <div className={"relative w-12 h-12"}>
                    <Image
                        draggable={false}
                        onClick={() => {
                            router.push(link)
                        }}
                        layout={'fill'}
                        objectFit={'contain'}
                        src={imageSrc}
                        alt={"Logo"}
                        className={"cursor-pointer outline-0 remove-highlight z-[115] hover:scale-110 duration-500 transition-all ease-in-out"}
                    />
                </div>
            </li>
    )
}
