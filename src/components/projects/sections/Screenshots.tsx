import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import {IoArrowBack} from "react-icons/io5";
import {useRouter} from "next/router";

interface ScreenshotsProps {
    screenshots: string[];
}

const Screenshots: React.FC<ScreenshotsProps> = ({ screenshots }) => {
    const [mainImageIndex, setMainImageIndex] = useState<number>(0);
    const [fullscreenImageIndex, setFullscreenImageIndex] = useState<number | null>(null);

    const scrollMainImage = (type: boolean) => {
        if (type) {
            setMainImageIndex((mainImageIndex + 1) % screenshots.length);
        } else {
            setMainImageIndex((mainImageIndex - 1 + screenshots.length) % screenshots.length);
        }
    };

    const scrollFullScreenMainImage = (type: boolean) => {
        if (fullscreenImageIndex !== null) {
            const newIndex = (fullscreenImageIndex + (type ? 1 : -1) + screenshots.length) % screenshots.length;
            setFullscreenImageIndex(newIndex);
        }
    };

    const openFullscreenImage = (index: number) => {
        setFullscreenImageIndex(index);
    };

    const closeFullscreenImage = () => {
        setFullscreenImageIndex(null);
    };

    const router = useRouter();

    return (
        <section className={'grid gap-4 grid-cols-3 lg:grid-rows-3 grid-rows-1 lg:h-[50rem] h-[25rem] justify-center w-full font-primary lg:mt-0 mt-8'}>

            <div className={'relative col-span-3 rounded-xl lg:row-span-2 row-span-3'} style={{ userSelect: 'none' }}>
                <Image
                    draggable={false}
                    layout={'fill'}
                    objectFit={'cover'}
                    src={screenshots[mainImageIndex]}
                    alt={'Screenshot'}
                    className={'rounded-xl cursor-pointer'}
                    onClick={() => openFullscreenImage(mainImageIndex)}
                />
                <AiOutlineRight
                    className={'absolute top-1/2 bottom-1/2 right-4 text-text-black text-3xl cursor-pointer'}
                    onClick={() => scrollMainImage(true)}
                />
                <AiOutlineLeft
                    className={'absolute top-1/2 bottom-1/2 left-4 text-text-black text-3xl cursor-pointer'}
                    onClick={() => scrollMainImage(false)}
                />
                <IoArrowBack
                    className={'absolute top-6 left-4 text-text-black text-3xl cursor-pointer'}
                    onClick={() => router.back()}
                />
            </div>
            {[0, 1, 2].map((offset) => (
                <div key={offset} className={'relative rounded-xl'}>
                    <Image
                        draggable={false}
                        layout={'fill'}
                        objectFit={'cover'}
                        src={screenshots[(mainImageIndex + offset + 1) % screenshots.length]}
                        alt={'Screenshot'}
                        className={'rounded-xl cursor-pointer'}
                        onClick={() => openFullscreenImage((mainImageIndex + offset + 1) % screenshots.length)}
                    />
                </div>
            ))}
            {fullscreenImageIndex !== null && (
                <div className={'fixed inset-0 flex items-center justify-center z-[999]'}>
                    <div className={' absolute inset-0 bg-text-black opacity-95 backdrop-blur-xl' } style={{ userSelect: 'none' }}/>
                    <AiOutlineLeft
                        className={'absolute top-1/2 bottom-1/2 left-4 text-white text-3xl cursor-pointer z-[9999]'}
                        onClick={() => scrollFullScreenMainImage(false)}
                    />
                    <Image
                        draggable={false}
                        layout={'fill'}
                        objectFit={'contain'}
                        src={screenshots[fullscreenImageIndex]}
                        alt={'Screenshot'}
                        className={'cursor-pointer'}
                        onClick={closeFullscreenImage}
                        style={{ userSelect: 'none' }}
                    />
                    <AiOutlineRight
                        className={'absolute top-1/2 bottom-1/2 right-4 text-white text-3xl cursor-pointer z-[9999]'}
                        onClick={() => scrollFullScreenMainImage(true)}
                    />
                </div>
            )}
        </section>

    );
};

export default Screenshots;
