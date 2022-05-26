import { useEffect } from "react"
import useLocalstorageState from "@/hooks/useLocalStorage"

const useDarkMode = (initialValue) => {
    const [isDark, setIsDark] = useLocalstorageState('darkmode', initialValue)

    useEffect(() => {
        
        if(isDark) document.getElementsByTagName('html')[0].classList.add('dark')
        else document.getElementsByTagName('html')[0].classList.remove('dark')

    }, [isDark])

    return [isDark, setIsDark]
}

export default useDarkMode