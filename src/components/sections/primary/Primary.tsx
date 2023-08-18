import Image from 'next/image'
import {useRouter} from "next/router";
import { HiArrowRight } from 'react-icons/hi';

export default function Primary() {

    const  router = useRouter();

    return (
        <section className={"flex h-fit mx-32 mt-16 justify-between font-primary"}>
            <div className={"w-2/3 py-16"}>
                <h1 className={"font-medium text-text-black text-7xl"}>
                    WE WILL DEVELOP<br/>
                    THE BEST SOLUTION<br/>
                    FOR YOUR BUSINESS
                </h1>
                <p className={"font-medium text-text-grey text-xl max-w-2xl mt-4"}>
                    Do you want a mobile app, website, or full-stack project according to your business requirements? We’re ready to help you with it for a small period and a very reasonable price
                </p>
                <div className={"flex bg-primary-blue px-8 py-3 rounded-xl w-fit text-white mt-4"}>
                    <a className={"text-3xl"}>Contact us</a>
                    <HiArrowRight className={"text-2xl mt-1 ml-2"}/>
                </div>
            </div>
            <div className={"relative w-1/3"}>
                <Image
                    draggable={false}
                    layout={'fill'}
                    objectFit={'fill'}
                    src={'/images/sections/primary/team.png'}
                    alt={"Logo"}
                    className={"self-end"}
                />
            </div>
        </section>
    )
}
