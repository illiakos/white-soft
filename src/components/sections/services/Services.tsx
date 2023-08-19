
import Scroller from "@/components/sections/services/components/Scroller";
import {AiOutlineInfoCircle} from "react-icons/ai";
import {useState} from "react";

export default function Services() {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <section className={"flex flex-col h-fit mt-16 mx-8 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-28 2xl:mx-32 justify-between font-primary"}>
                <h1 className={"text-4xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-semibold text-text-black self-center lg:self-start"}>
                    SERVICES
                </h1>
            {modalVisible ?
                <div className={""}>

                </div>
                :
                <></>
            }
            <Scroller/>
        </section>
    )
}
