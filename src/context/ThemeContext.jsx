import React from 'react'
import useDarkMode from '@/hooks/useDarkMode'

const ThemeContext = React.createContext()

export const useTheme = () => React.useContext(ThemeContext)

const ThemeProvider = ({ children, initialTheme }) => {
    const [isDarkMode, setDarkMode] = useDarkMode(initialTheme === 'dark')
    const toggleDarkMode = React.useCallback(() => {

        setDarkMode(!isDarkMode)

    }, [isDarkMode, setDarkMode])

    return (
        <ThemeContext.Provider value={{ toggleDarkMode }}>
            { children }
        </ThemeContext.Provider>
    )
}

export default ThemeProvider