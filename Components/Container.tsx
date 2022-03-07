import { useEffect, useState, useRef, ReactNode, FunctionComponent } from 'react'
import useScroll from "../Hooks/useScroll"



interface MyProps {
    children?: ReactNode;
}


export default function Container({ children }: MyProps) {


    const containerRef = useRef<HTMLInputElement>(null!)

    const { scrollTop, setScrollTop } = useScroll()

    const handleScroll = () => {
        if (containerRef.current) {
            const { offsetHeight, offsetTop, scrollHeight, scrollTop } = containerRef.current
            // setContainerData({ offsetHeight, offsetTop, scrollHeight, scrollTop })
            setScrollTop(scrollTop)
        }
    }

    useEffect(() => {
        const { offsetHeight, offsetTop, scrollHeight, scrollTop } = containerRef.current
        setScrollTop(scrollTop)
    }, [setScrollTop])


    return (
        <main
            className='flex flex-col grow bg-gray-400 overflow-auto scroll-smooth snap-proximity snap-y'
            ref={containerRef} onScroll={handleScroll}
        >
            {children}
        </main>
    )
}
