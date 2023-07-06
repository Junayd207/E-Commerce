import { useState, useEffect, useRef } from "react"

function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)
    
    function enter() {
        setHovered(true)
    }
    
    function leave() {
        setHovered(false)
    }
    
    useEffect(() => {
        const instance = ref.current
        if (instance) {
            instance.addEventListener('mouseenter', enter);
            instance.addEventListener('mouseleave', leave);
        }
        return () => {    
            instance.removeEventListener("mouseenter", enter)
            instance.removeEventListener("mouseleave", leave)
        }
    }, [ref, enter, leave])
    
    return [hovered, ref]
}

export default useHover