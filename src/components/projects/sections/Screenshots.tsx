import React, {useState} from 'react';
import Image from "next/image";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";

interface ScreenshotsProps {
    screenshots: string[];
}

const Screenshots: React.FC<ScreenshotsProps> = ({ screenshots }) => {

    const [mainImageIndex, setMainImageIndex] = useState<number>(3);

    const scrollMainImage = (type:boolean) => {
        if (type) {
            if (mainImageIndex > screenshots.length-2) {
                setMainImageIndex(0);
            } else {
                setMainImageIndex(mainImageIndex+1);
            }
        } else {
            if (mainImageIndex > 0) {
                setMainImageIndex(screenshots.length-1);
            } else {
                setMainImageIndex(mainImageIndex-1);
            }
        }
        console.log("=============")
        console.log(mainImageIndex)
        console.log(mainImageIndex+1 > screenshots.length-1 ? mainImageIndex - screenshots.length: mainImageIndex+1)
        console.log(mainImageIndex+2 > screenshots.length-1 ? mainImageIndex + 1 - screenshots.length : mainImageIndex+2)
        console.log(mainImageIndex+3 > screenshots.length-1 ? mainImageIndex + 2 - screenshots.length : mainImageIndex+3)
    }

    return (
        <section className={"grid gap-4 grid-cols-3 grid-rows-3 h-[50rem] justify-center w-full font-primary"}>
            {/*<button onClick={event => console.log(screenshots[mainImageIndex-2])}>ads</button>*/}
            <div className={"relative col-span-3 rounded-xl row-span-2"}>
                <Image
                    draggable={false}
                    layout={'fill'}
                    objectFit={'cover'}
                    src={screenshots[mainImageIndex]}
                    alt={"Logo"}
                    className={"rounded-xl"}
                />
                <AiOutlineRight className={"absolute top-1/2 bottom-1/2 right-4 text-white text-3xl cursor-pointer"} onClick={() => scrollMainImage(true)}/>
                <AiOutlineLeft className={"absolute top-1/2 bottom-1/2 left-4 text-white text-3xl cursor-pointer"} onClick={() => scrollMainImage(false)}/>
            </div>
            <div className={"relative rounded-xl"}>
                <Image
                    draggable={false}
                    layout={'fill'}
                    objectFit={'cover'}
                    src={screenshots[mainImageIndex+1 > screenshots.length-1 ? screenshots.length - mainImageIndex : mainImageIndex+1]}
                    alt={"Logo"}
                    className={"rounded-xl"}
                />
            </div>
            <div className={"relative rounded-xl"}>
                <Image
                    draggable={false}
                    layout={'fill'}
                    objectFit={'cover'}
                    src={screenshots[mainImageIndex+2 > screenshots.length-1 ? screenshots.length - mainImageIndex - 1 : mainImageIndex+2]}
                    alt={"Logo"}
                    className={"rounded-xl"}
                />
            </div>
            <div className={"relative rounded-xl"}>
                <Image
                    draggable={false}
                    layout={'fill'}
                    objectFit={'cover'}
                    src={screenshots[mainImageIndex+3 > screenshots.length-1 ? screenshots.length - mainImageIndex - 2 : mainImageIndex+3]}
                    alt={"Logo"}
                    className={"rounded-xl"}
                />
            </div>
        </section>
    );
};

export default Screenshots;
