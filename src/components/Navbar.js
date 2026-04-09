'use client';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const { data: session, status } = useSession();
    const [userProfile, setUserProfile] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [boardDropdownOpen, setBoardDropdownOpen] = useState(false);
    const [mobileBoardOpen, setMobileBoardOpen] = useState(false);

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

    const shouldShowClass9 = userProfile?.studentClass === 'Class 9' ||
        !userProfile?.studentClass;

    const shouldShowClass10 = userProfile?.studentClass === 'Class 10' ||
        !userProfile?.studentClass;


    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Test<span className={styles.highlight}>Series</span>
                </Link>

                {/* Sign Up button — mobile only, hidden when logged in */}
                {!session && status !== 'loading' && (
                    <button
                        onClick={() => signIn()}
                        className={styles.mobileSignupBtn}
                        aria-label="Sign Up"
                    >
                        Sign Up
                    </button>
                )}

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

                    {shouldShowClass9 && <Link href="/test-series/class-9" className={styles.link}>Class 9</Link>}
                    {shouldShowClass10 && <Link href="/test-series/class-10" className={styles.link}>Class 10</Link>}

                    <div className={styles.dropdown}>
                        <button 
                            className={styles.dropdownTrigger}
                            onClick={() => setBoardDropdownOpen(!boardDropdownOpen)}
                            style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', padding: 0 }}
                        >
                            Board {boardDropdownOpen ? '▴' : '▾'}
                        </button>
                        {boardDropdownOpen && (
                            <div className={styles.dropdownContent} style={{ display: 'flex' }}>
                                <Link href="/test-series/board-10" className={styles.dropdownItem} onClick={() => setBoardDropdownOpen(false)}>Class 10 Board</Link>
                                <Link href="/test-series/board-12" className={styles.dropdownItem} onClick={() => setBoardDropdownOpen(false)}>Class 12 Board</Link>
                            </div>
                        )}
                    </div>

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

                {shouldShowClass9 && <Link href="/test-series/class-9" className={styles.mobileLink} onClick={closeMenu}>Class 9</Link>}
                {shouldShowClass10 && <Link href="/test-series/class-10" className={styles.mobileLink} onClick={closeMenu}>Class 10</Link>}

                <button 
                    className={styles.mobileDropdownHeader}
                    onClick={() => setMobileBoardOpen(!mobileBoardOpen)}
                    style={{ background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit', width: '100%' }}
                >
                    Board Exam {mobileBoardOpen ? '▴' : '▾'}
                </button>
                {mobileBoardOpen && (
                    <>
                        <Link href="/test-series/board-10" className={styles.mobileDropdownItem} onClick={closeMenu}>Class 10 Board</Link>
                        <Link href="/test-series/board-12" className={styles.mobileDropdownItem} onClick={closeMenu}>Class 12 Board</Link>
                    </>
                )}

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
                    <>
                        <button
                            onClick={() => { signIn(); closeMenu(); }}
                            className={`${styles.authBtn} ${styles.mobileAuthBtn}`}
                            style={{ background: 'rgba(52,199,89,0.2)', border: '1px solid rgba(52,199,89,0.5)', marginTop: '0.5rem' }}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => { signIn(); closeMenu(); }}
                            className={`${styles.authBtn} ${styles.mobileAuthBtn}`}
                            style={{ background: 'rgba(99,102,241,0.25)', border: '1px solid rgba(99,102,241,0.6)', marginTop: '0.5rem', fontWeight: '700' }}
                        >
                            🎓 Sign Up / Register
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
