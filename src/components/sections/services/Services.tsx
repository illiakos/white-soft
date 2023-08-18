import Image from 'next/image'
import {useRouter} from "next/router";
import { HiArrowRight } from 'react-icons/hi';

export default function Services() {

    const  router = useRouter();

    return (
        <section className={"flex h-fit mx-32 justify-between font-primary"}>
            <h1 className={"text-5xl font-semibold text-text-black self-end"}>
                SERVICES
            </h1>
        </section>
    )
}
