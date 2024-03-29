import React, {FC, useEffect, useRef, useState} from "react";

interface ProgressBarProps {
    containerId:string
}

const ProgressBar:FC<ProgressBarProps> = ({ containerId }) => {
    const [isDown, setIsDown] = useState<boolean>(false)
    const [scrollWidth, setScrollWidth] = useState(0);
    const startX = useRef()
    const scrollLeft = useRef()
    //@ts-ignore
    function handleMouseMove(e, slider) {
        if(!slider.classList.contains("slider_active")) {return}
        e.preventDefault()
        const x = e.pageX - slider.offsetLeft+130
        //@ts-ignore
        const walk = (x - startX.current)
        //@ts-ignore
        slider.scrollLeft = scrollLeft.current - walk
    }
    //@ts-ignore
    function handleMouseDown(e, slider) {
        // slider.classList.add('cursor-grabbing')
        slider.classList.add("slider_active")
        scrollLeft.current = slider.scrollLeft
        startX.current = e.pageX
        // setIsDown(true)
    }
    //@ts-ignore
    function handleLeave(e, slider) {
        slider.classList.remove("slider_active")
        // setIsDown(false)
    }
    //@ts-ignore
    function handleUp(e, slider) {
        // setIsDown(false)
        slider.classList.remove("slider_active")
    }

    useEffect(()=>{
        console.log(isDown)
    }, [isDown])

    useEffect(() => {
        const container = document.getElementById(containerId);

        const handleScroll = () => {
            //@ts-ignore
            const { scrollLeft, scrollWidth, clientWidth } = container;
            const progressWidth = ((scrollLeft + clientWidth) / scrollWidth) * 100;
            setScrollWidth(progressWidth);
        };
        container?.addEventListener("scroll", handleScroll);
        container?.addEventListener("mousedown", (e)=>{
            handleMouseDown(e, container)
        })
        container?.addEventListener("mouseup", (e)=>{
            handleUp(e, container)
        })
        container?.addEventListener("mousemove", (e)=>{
            handleMouseMove(e, container)
        })
        container?.addEventListener("mouseleave", (e)=>{
            handleLeave(e,container)
        })

        //@ts-ignore
        const initialProgressWidth = ((container?.scrollLeft + container?.clientWidth) / container?.scrollWidth) * 100;
        setScrollWidth(initialProgressWidth);

        return () => {
            container?.removeEventListener("scroll", handleScroll);
            container?.removeEventListener("mousedown", (e)=>{
                handleMouseDown(e,container)
            })
            container?.removeEventListener("mouseup", (e)=>{
                handleUp(e,container)
            })
            container?.removeEventListener("mousemove", (e)=>{
                handleMouseMove(e,container)
            })
            container?.removeEventListener("mouseleave", (e)=>{
                handleLeave(e,container)
            })
        };
    }, [containerId]);

    return (
        <div className="relative h-3 rounded-md bg-white drop-shadow-xl shadow-blue-5 ">
            <div
                className="absolute rounded-md top-0 left-0 h-full bg-primary-blue transition-transform duration-500"
                style={{ width: `${scrollWidth}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
