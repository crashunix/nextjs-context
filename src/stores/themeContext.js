import { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {},
})

export const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState('light')

    useEffect(() => {
        console.log('useEffect');
        const localTheme = localStorage.getItem('theme')
        if(localTheme) {
            setTheme(localTheme)
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        console.log('toggleTheme');
    }

    const context = { theme, toggleTheme }

    return (
        <ThemeContext.Provider value={context}>
            { children }
        </ThemeContext.Provider>
    );
}

export default ThemeContext;