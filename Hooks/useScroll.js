import { useContext } from "react";
import { ScrollContext } from '../Contexts/scrollContext.js'

export default function useScroll() {

    const containerRef = useContext(ScrollContext)

    return { ...containerRef}
}