import clsx from 'clsx'
import React, { useRef, useState, useCallback } from 'react'
import useIntersectionObserver from '@bakunya/intersectionobserver-hooks'

const ImageLazy = ({ src, alt, className }) => {
    const [shouldHidden, setShouldHidden] = useState(true)
    const ref = useRef()
    const options = useRef({
        root: null,
        rootMargin: '0px',
        threshold: 0
    })

    useIntersectionObserver(
        ref,
        options, 
        useCallback((observer, entries, ref) => {

            observer.unobserve(ref.current)
            observer.disconnect(ref.current)
            ref.current.setAttribute('src', src)

            const listener = () => {
                setShouldHidden(false)
                ref.current.removeEventListener('load', listener)
            }

            ref.current.addEventListener('load', listener)
            
        }, [setShouldHidden, src])
    )

    return (
        <img ref={ref} alt={alt} className={clsx(className, 'transition duration-500', shouldHidden ? 'opacity-0' : 'opacity-100')} />
    )
}

export default ImageLazy