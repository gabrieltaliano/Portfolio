import { useEffect, useRef, ReactNode } from 'react'
import useScroll from '../Hooks/useScroll';

export default function Container({ children }: any) {


    const containerRef = useRef<HTMLInputElement>(null!)

    const { setScrollTop } = useScroll()

    const handleScroll = () => {
        if (containerRef.current) {
            const { scrollTop } = containerRef.current //offsetHeight, offsetTop, scrollHeight, scrollTop
            setScrollTop(scrollTop)
        }
    }

    useEffect(() => {
        const { scrollTop } = containerRef.current
        setScrollTop(scrollTop)
    }, [setScrollTop])


    return (
      <main
        className="h-full flex flex-col grow bg-gray-400 overflow-auto scroll-smooth select-none snap-y"
        ref={containerRef}
        onScroll={handleScroll}
      >
        {children}
      </main>
    );
}
