import { useRef, ReactNode } from 'react'
import useScroll from '../Hooks/useScroll'


interface MyProps {
    children?: ReactNode;
    offset?: number;
    mode?: 'fadeIn' | 'fadeOut';
    className?: string;
    style?: React.CSSProperties;
}


export default function ShowOnScroll({ children = null, offset = 100, mode = 'fadeIn', className='', style={} }: MyProps) {
    const inputRef = useRef<HTMLInputElement>(null!)

    const { scrollTop } = useScroll()



    let effect = ''

    if (mode === 'fadeIn') {
        effect = inputRef.current?.offsetTop > scrollTop - offset ? 'delayedIn' : ''
    }
    if (mode === 'fadeOut') {
        effect = inputRef.current?.offsetTop < scrollTop - offset ? 'delayedOut' : ''
    }

    return (
        <div
            ref={inputRef}
            className={`${effect} ${className}`}
            style={style}
        >
            {children}
        </div>
    )
}

