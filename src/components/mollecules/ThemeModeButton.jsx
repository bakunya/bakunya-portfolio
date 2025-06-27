import React from 'react'
import SunIcon from 'react-bootstrap-icons/dist/icons/sun'
import MoonIcon from 'react-bootstrap-icons/dist/icons/moon-fill'
import { useTheme } from '@/context/ThemeContext'

const ThemeModeButton = () => {
    const { toggleDarkMode } = useTheme()
    const handleChangeTheme = React.useCallback(() => {
        toggleDarkMode(prev => !prev)
    }, [toggleDarkMode])

    return (
        <button className='w-[46px] h-[46px] btn-secondary relative flex items-center justify-center' onClick={handleChangeTheme}>
            <SunIcon size={20} className="transition-main opacity-0 dark:opacity-100 absolute" />
            <MoonIcon size={20} className="transition-main opacity-100 dark:opacity-0 absolute" />
        </button>
    )
}

export default React.memo(ThemeModeButton)