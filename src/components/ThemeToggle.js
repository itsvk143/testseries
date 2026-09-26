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
                title="Day Theme (Light)"
            >
                <Sun size={15} className={`${styles.icon} ${styles.iconSun}`} />
                <span>Day</span>
            </button>
            <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`${styles.segmentedBtn} ${isDark ? styles.segmentedBtnActive : ''}`}
                aria-pressed={isDark}
                title="Night Theme (Dark)"
            >
                <Moon size={15} className={`${styles.icon} ${styles.iconMoon}`} />
                <span>Night</span>
            </button>
        </div>
    );
}
