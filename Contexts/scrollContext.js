import { createContext, useRef, useState } from "react";

export const ScrollContext = createContext()

export const ScrollProvider = ({ children }) => {
    const [scrollTop, setScrollTop] = useState(0)

    return <ScrollContext.Provider value={{
        scrollTop, setScrollTop
    }} >{children}</ScrollContext.Provider>
}

