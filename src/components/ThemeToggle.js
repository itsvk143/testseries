'use client';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle({ variant = 'segmented', className = '' }) {
    const { theme, toggleTheme, setTheme, mounted } = useTheme();

    // Prevent mismatch during SSR
    const currentTheme = mounted ? theme : 'dark';
    const isDark = currentTheme === 'dark';

    if (variant === 'compact') {
        return (
            <button
                type="button"
                onClick={toggleTheme}
                className={`${styles.compactBtn} ${className}`}
                aria-label={isDark ? 'Switch to Day Theme' : 'Switch to Night Theme'}
                title={isDark ? 'Switch to Day Theme' : 'Switch to Night Theme'}
            >
                {isDark ? (
                    <Sun size={18} className={styles.compactSun} />
                ) : (
                    <Moon size={18} className={styles.compactMoon} />
                )}
            </button>
        );
    }

    return (
        <div className={`${styles.segmentedContainer} ${className}`} role="group" aria-label="Theme selection">
            <button
                type="button"
                onClick={() => setTheme('light')}
                className={`${styles.segmentedBtn} ${!isDark ? styles.segmentedBtnActive : ''}`}
                aria-pressed={!isDark}
                aria-label="Day Theme"
                title="Day Theme"
            >
                <Sun size={17} className={`${styles.icon} ${styles.iconSun}`} />
            </button>
            <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`${styles.segmentedBtn} ${isDark ? styles.segmentedBtnActive : ''}`}
                aria-pressed={isDark}
                aria-label="Night Theme"
                title="Night Theme"
            >
                <Moon size={17} className={`${styles.icon} ${styles.iconMoon}`} />
            </button>
        </div>
    );
}
