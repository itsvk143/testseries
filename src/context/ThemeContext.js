'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
    theme: 'dark',
    toggleTheme: () => {},
    setTheme: () => {},
    mounted: false,
});

export const ThemeProvider = ({ children }) => {
    const [theme, setThemeState] = useState('dark');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        try {
            const stored = localStorage.getItem('polltest_theme');
            const initial = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
            setThemeState(initial);
            document.documentElement.setAttribute('data-theme', initial);
        } catch {
            setThemeState('dark');
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        setMounted(true);
    }, []);

    const setTheme = (newTheme) => {
        setThemeState(newTheme);
        try {
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('polltest_theme', newTheme);
        } catch (e) {
            console.warn('Unable to persist theme:', e);
        }
    };

    const toggleTheme = () => {
        const next = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, mounted }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
