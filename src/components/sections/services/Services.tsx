
import Scroller from "@/components/sections/services/components/Scroller";
import {AiOutlineInfoCircle} from "react-icons/ai";
import {useState} from "react";

export default function Services() {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <section className={"flex flex-col h-fit mt-16 mx-32 justify-between font-primary"}>
            <div className={"flex "}>
                <h1 className={"text-5xl font-semibold text-text-black self-start"}>
                    SERVICES
                </h1>
               <AiOutlineInfoCircle className={"text-primary-blue text-2xl mt-3 ml-1 font-black"}/>
            </div>
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
