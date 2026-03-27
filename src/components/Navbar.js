'use client';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const { data: session, status } = useSession();
    const [userProfile, setUserProfile] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (session?.user) {
            fetchUserProfile();
        }
    }, [session]);

    // Close menu on route changes or outside click
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const fetchUserProfile = async () => {
        try {
            const res = await fetch('/api/user/profile');
            const data = await res.json();
            setUserProfile(data);
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };

    const closeMenu = () => setMenuOpen(false);

    const shouldShowNEET = userProfile?.examPreparingFor === 'NEET' ||
        userProfile?.examPreparingFor === 'Both JEE & NEET' ||
        !userProfile?.examPreparingFor;

    const shouldShowJEEMains = userProfile?.examPreparingFor === 'JEE Mains' ||
        userProfile?.examPreparingFor === 'JEE Advanced' ||
        userProfile?.examPreparingFor === 'Both JEE & NEET' ||
        !userProfile?.examPreparingFor;

    const shouldShowJEEAdvance = userProfile?.examPreparingFor === 'JEE Advanced' ||
        userProfile?.examPreparingFor === 'Both JEE & NEET' ||
        !userProfile?.examPreparingFor;

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Test<span className={styles.highlight}>Series</span>
                </Link>

                {/* Hamburger Button - visible only on mobile/tablet */}
                <button
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`} />
                    <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`} />
                    <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`} />
                </button>

                {/* Desktop Links */}
                <div className={styles.links}>
                    {shouldShowNEET && <Link href="/test-series/neet" className={styles.link}>NEET</Link>}
                    {shouldShowJEEMains && <Link href="/test-series/jee-mains" className={styles.link}>JEE Mains</Link>}
                    {shouldShowJEEAdvance && <Link href="/test-series/jee-advance" className={styles.link}>JEE Advance</Link>}

                    {session ? (
                        <>
                            <Link href="/dashboard" className={styles.link} style={{ color: '#34c759', fontWeight: 'bold' }}>
                                📊 Dashboard
                            </Link>
                            <span className={styles.link} style={{ color: '#7dd3fc', fontWeight: 'normal' }}>
                                👤 {session.user?.name}
                            </span>
                            {session.user?.isAdmin && (
                                <Link href="/admin" className={styles.link} style={{ color: '#f59e0b', fontWeight: 'bold' }}>
                                    ⚙️ Admin
                                </Link>
                            )}
                            <button
                                onClick={() => signOut()}
                                className={styles.authBtn}
                                style={{ background: 'rgba(255,59,48,0.2)', border: '1px solid rgba(255,59,48,0.5)' }}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => signIn()}
                            className={styles.authBtn}
                            style={{ background: 'rgba(52,199,89,0.2)', border: '1px solid rgba(52,199,89,0.5)' }}
                        >
                            Login
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
                {shouldShowNEET && <Link href="/test-series/neet" className={styles.mobileLink} onClick={closeMenu}>NEET</Link>}
                {shouldShowJEEMains && <Link href="/test-series/jee-mains" className={styles.mobileLink} onClick={closeMenu}>JEE Mains</Link>}
                {shouldShowJEEAdvance && <Link href="/test-series/jee-advance" className={styles.mobileLink} onClick={closeMenu}>JEE Advance</Link>}

                {session ? (
                    <>
                        <Link href="/dashboard" className={styles.mobileLink} onClick={closeMenu} style={{ color: '#34c759' }}>
                            📊 Dashboard
                        </Link>
                        <span className={styles.mobileLink} style={{ color: '#7dd3fc' }}>
                            👤 {session.user?.name}
                        </span>
                        {session.user?.isAdmin && (
                            <Link href="/admin" className={styles.mobileLink} onClick={closeMenu} style={{ color: '#f59e0b' }}>
                                ⚙️ Admin
                            </Link>
                        )}
                        <button
                            onClick={() => { signOut(); closeMenu(); }}
                            className={`${styles.authBtn} ${styles.mobileAuthBtn}`}
                            style={{ background: 'rgba(255,59,48,0.2)', border: '1px solid rgba(255,59,48,0.5)' }}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <button
                        onClick={() => { signIn(); closeMenu(); }}
                        className={`${styles.authBtn} ${styles.mobileAuthBtn}`}
                        style={{ background: 'rgba(52,199,89,0.2)', border: '1px solid rgba(52,199,89,0.5)' }}
                    >
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
