import {FC, useState} from "react";
import {BiCross, BiHome, BiMenu} from 'react-icons/bi';
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {GrClose} from "react-icons/gr";
import {MdAlternateEmail} from "react-icons/md";


const Navbar: FC = () => {

    const [open, setOpen] = useState<boolean>(false)
    const router = useRouter()


    return (
        <header className={"flex flex-row justify-between lg:justify-between mx-8 sm:mx-16 md:mx-20 lg:mx-24 lg:mx-28 2lg:mx-32 sm:py-8 items-center bg-white-bg"}>
            <div className={"relative w-1/2 md:w-1/3 lg:w-1/6 pb-24 z-[115]"}>
                <Image
                    draggable={false}
                    onClick={() => {
                        router.push('/')
                    }}
                    layout={'fill'}
                    objectFit={'contain'}
                    src={'/images/sections/navbar/logo.svg'}
                    alt={"Логотип"}
                    className={"cursor-pointer outline-0 remove-highlight z-[115]"}
                />
            </div>
            <ul className={"text-lg font-medium hidden lg:flex lg:flex-row flex-col gap-x-1 lg:gap-x-6 lg:gap-y-0 gap-y-4 lg:mb-0 mb-6 items-center text-text-black transition-all duration-500 z-[111]"}>
                <li>
                    <Link href={"#about"}
                          className={"cursor-pointer transition-all duration-500 hover:underline hover:underline-offset-4 text-center"}>About us</Link>
                </li>
                <li>
                    <Link href={"#services"}
                          className={"cursor-pointer transition-all duration-500 hover:underline hover:underline-offset-4 text-center"}>Services</Link>
                </li>
                <li>
                    <Link href={"#projects"}
                          className={"cursor-pointer transition-all duration-500 hover:underline hover:underline-offset-4 text-center"}>Projects</Link>
                </li>
                <li>
                    <Link href={"#steps"}
                          className={"cursor-pointer transition-all duration-500 hover:underline hover:underline-offset-4 text-center"}>Steps</Link>
                </li>
            </ul>
            <nav
                className={`flex lg:justify-between lg:text-red-500 justify-center items-center lg:flex-row flex-col lg:bg-transparent bg-white ${open ? 'lg:visible visible' : ' lg:visible lg:flex hidden'} lg:relative fixed top-0 left-0 lg:w-auto lg:h-auto w-screen h-screen  z-[110]`}>
                <ul className={"text-lg font-medium flex lg:hidden lg:flex-row flex-col gap-x-1 lg:gap-x-6 lg:gap-y-0 gap-y-4 lg:mb-0 mb-6 items-center text-text-black transition-all duration-500 z-[111]"}>
                    <li>
                        <Link href={"#about"}
                              className={"cursor-pointer transition-all duration-500 hover:underline hover:underline-offset-4 text-center"}>About us</Link>
                    </li>
                    <li>
                        <Link href={"#services"}
                              className={"cursor-pointer transition-all duration-500 hover:underline hover:underline-offset-4 text-center"}>Services</Link>
                    </li>
                    <li>
                        <Link href={"#projects"}
                              className={"cursor-pointer transition-all duration-500 hover:underline hover:underline-offset-4 text-center"}>Projects</Link>
                    </li>
                    <li>
                        <Link href={"#steps"}
                              className={"cursor-pointer transition-all duration-500 hover:underline hover:underline-offset-4 text-center"}>Steps</Link>
                    </li>
                </ul>
                <div
                    className={"flex flex-row gap-x-6 lg:ml-6 sm:flex-row flex-col sm:gap-y-0 gap-6 items-center z-[111]"}>
                    <ul className={"flex text-text-black text-lg font-medium w-fit"}>
                        <MdAlternateEmail className={"mt-1.5 mr-1 hover:scale-110 transitional-all duration-300 cursor-pointer"}/>
                        <li className={"cursor-pointer hover:underline font-medium"}>white.soft.business@gmail.com</li>
                    </ul>
                </div>
            </nav>
            {open ? <GrClose className={"text-blue-6 text-4xl cursor-pointer mt-2 z-[111] lg:hidden"} onClick={() => {
                setOpen(false)
            }}/> : <BiMenu className={"text-blue-6 cursor-pointer text-5xl mt-2 z-[111] lg:hidden"} onClick={() => {
                setOpen(true)
            }}/>}
        </header>
    )
}
export default Navbar;
