import Image from 'next/image'
import {useRouter} from "next/router";
import { MdAlternateEmail } from 'react-icons/md';

export default function Navbar() {

    const  router = useRouter();


    return (
        <header className={"flex h-fit mx-32 mt-8 justify-between font-primary"}>
                <div className={"relative w-64"}>
                    <Image
                        draggable={false}
                        onClick={() => {
                            router.push('/')
                        }}
                        layout={'fill'}
                        objectFit={'contain'}
                        src={'/images/sections/navbar/logo.svg'}
                        alt={"Logo"}
                        className={"cursor-pointer outline-0 remove-highlight z-[115]"}
                    />
                </div>
                <ul className={"gap-x-8 flex text-text-black text-lg font-medium w-fit"}>
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
            <ul className={"flex text-text-black text-lg font-medium w-fit"}>
                <MdAlternateEmail className={"mt-1.5 mr-1 hover:scale-110 transitional-all duration-300 cursor-pointer"}/>
                <li className={"cursor-pointer hover:underline font-medium"}>white.soft.business@gmail.com</li>
            </ul>
        </header>
    )
}
