'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function StickyHeader() {
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [user, setUser] = useState<any>(null); // Using any for User to avoid complex import for now, or could import { User } from '@supabase/supabase-js'
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Auth State Check
    useEffect(() => {
        // Dynamic import to avoid SSR issues if any, though standard import works too.
        // Assuming supabase is initialized in lib/supabase.ts
        const { supabase } = require('@/lib/supabase');

        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        };

        getUser();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
            setUser(session?.user ?? null);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleLogout = async () => {
        const { supabase } = require('@/lib/supabase');
        await supabase.auth.signOut();
        setShowDropdown(false);
        window.location.reload(); // Simple reload to refresh state
    };

    // Close mobile menu on route change
    useEffect(() => {
        closeMobileMenu();
        setShowDropdown(false); // Close dropdown on route change too
    }, [pathname]);

    return (
        <>
            <header className={`header-wrapper-two header-four sticky-header ${isSticky ? 'sticky' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header-top">
                                <div className="d-md-none d-flex align-items-center">
                                    <a className="header-top-link d-flex align-items-center gap-1 left-link" href="tel:+4733378901">
                                        <img src="/assets/images/icon/social/social-icon-1.png" alt="" />
                                    </a>
                                    <a className="header-top-link d-flex align-items-center gap-1" href="mailto:hq@ticonglobal.com">
                                        <img src="/assets/images/icon/social/social-icon-2.png" alt="" />
                                    </a>
                                </div>
                                <span className="d-none d-md-block">
                                    <a className="header-top-link d-flex align-items-center gap-1" href="tel:+971 55 386 9966">
                                        <img src="/assets/images/icon/social/social-icon-1.png" alt="" /> +971 55 386 9966
                                    </a>
                                </span>
                                <span className="d-none d-md-block">
                                    <a className="header-top-link d-flex align-items-center gap-1" href="mailto:hq@ticonglobal.com">
                                        <img src="/assets/images/icon/social/social-icon-2.png" alt="" /> hq@ticonglobal.com
                                    </a>
                                </span>
                                <div>
                                    <ul className="social-icon">
                                        <li>
                                            <a href="https://www.facebook.com/" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" className="twitter"><i className="fab fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/" className="youtube"><i className="fab fa-youtube"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="flex-center justify-content-between">
                                {/* Header Logo Start */}
                                <div className="logo">
                                    <Link href="/">
                                        <img className="logo-2" src="/assets/images/logo-2.png" alt="logoImage" />
                                    </Link>
                                </div>
                                {/* Header Logo End */}

                                <div className="flex-center header-right">
                                    {/* Header Menu Start */}
                                    <div className="d-none d-lg-flex header-right_menu">
                                        <nav className="main-menu">
                                            <ul>
                                                <li><Link href="/">Home</Link></li>
                                                <li><Link href="/about">About</Link></li>
                                                <li><Link href="/services">Services</Link></li>
                                                <li><Link href="/contact">Contact</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    {/* Header Menu End */}

                                    {/* Header Actions Start */}
                                    <div className="header-right_actions flex-center">
                                        <div className="header-right_button header-button me-3 position-relative">
                                            {user ? (
                                                <>
                                                    <button
                                                        onClick={() => setShowDropdown(!showDropdown)}
                                                        className="btn-style-one border-0"
                                                        style={{ background: 'transparent', border: '2px solid #4fcbf1', padding: '15px 35px', cursor: 'pointer' }}
                                                    >
                                                        <span style={{ color: '#4fcbf1' }}>Profile <i className={`fas fa-chevron-${showDropdown ? 'up' : 'down'} ms-2`}></i></span>
                                                    </button>

                                                    {showDropdown && (
                                                        <div
                                                            className="position-absolute bg-white rounded shadow-lg p-2"
                                                            style={{
                                                                top: '100%',
                                                                right: 0,
                                                                width: '180px',
                                                                zIndex: 1000,
                                                                marginTop: '10px',
                                                                borderTop: '3px solid #4fcbf1'
                                                            }}
                                                        >
                                                            <Link href="/dashboard" className="d-block p-2 text-dark hover-bg-light mb-1" style={{ textDecoration: 'none', transition: 'all 0.3s' }}>
                                                                <i className="fas fa-columns me-2 text-info"></i> Dashboard
                                                            </Link>
                                                            <button
                                                                onClick={handleLogout}
                                                                className="d-block w-100 text-start p-2 text-danger bg-transparent border-0"
                                                                style={{ transition: 'all 0.3s' }}
                                                            >
                                                                <i className="fas fa-sign-out-alt me-2"></i> Logout
                                                            </button>
                                                        </div>
                                                    )}
                                                </>
                                            ) : (
                                                <Link href="/login" className="btn-style-one" style={{ background: 'transparent', border: '2px solid #4fcbf1', padding: '18px 35px' }}>
                                                    <span style={{ color: '#4fcbf1' }}>Login</span>
                                                </Link>
                                            )}
                                        </div>
                                        <div className="header-right_button header-button">
                                            <a href="https://wa.me/971553869966?text=Hi%20TiCON" className="btn-style-one" target="_blank" rel="noopener noreferrer">
                                                <span>Quick Connect</span>
                                            </a>
                                        </div>

                                        <div className="hamburger d-block d-lg-none">
                                            {/* Mobile Menu Hambarger Action Button Start */}
                                            <button
                                                className="header-action-btn header-action-btn-menu hamburger_button d-flex border-0 bg-transparent"
                                                onClick={toggleMobileMenu}
                                                aria-label="Toggle Navigation"
                                            >
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </button>
                                            {/* Mobile Menu Hambarger Action Button End */}
                                        </div>
                                    </div>
                                    {/* Header Social Actions End */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Offcanvas */}
            <div className={`offcanvas offcanvas-end ${isMobileMenuOpen ? 'show' : ''}`}
                id="offcanvas-header"
                style={{ visibility: isMobileMenuOpen ? 'visible' : 'hidden' }}
                aria-modal={isMobileMenuOpen}
                role="dialog"
            >
                {/* Backdrop */}
                {isMobileMenuOpen && (
                    <div className="offcanvas-backdrop fade show" onClick={closeMobileMenu}></div>
                )}

                <div className="offcanvas-header">
                    {/* Header Logo Start */}
                    <div className="logo">
                        <Link href="/" onClick={closeMobileMenu}>
                            <img src="/assets/images/logo-2.png" alt="logo" />
                        </Link>
                    </div>
                    {/* Header Logo End */}
                    <button type="button" className="btn-close text-reset mobilemenu-close" onClick={closeMobileMenu} aria-label="Close">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className="offcanvas-body">
                    {/* mobile menu navigation start */}
                    <nav>
                        <ul className="mobile-menu">
                            <li><Link href="/" onClick={closeMobileMenu}>HOME</Link></li>
                            <li><Link href="/about" onClick={closeMobileMenu}>ABOUT</Link></li>
                            <li><Link href="/services" onClick={closeMobileMenu}>SERVICES</Link></li>
                            <li><Link href="/contact" onClick={closeMobileMenu}>CONTACT US</Link></li>
                            {user ? (
                                <>
                                    <li><Link href="/dashboard" onClick={closeMobileMenu}>DASHBOARD</Link></li>
                                    <li><button onClick={() => { handleLogout(); closeMobileMenu(); }} className="border-0 bg-transparent p-0 text-start w-100" style={{ fontWeight: 600, fontSize: '16px', color: '#141d38' }}>LOGOUT</button></li>
                                </>
                            ) : (
                                <li><Link href="/login" onClick={closeMobileMenu}>LOGIN</Link></li>
                            )}
                        </ul>
                    </nav>
                    {/* mobile menu navigation end */}
                </div>
            </div>
            {/* End Mobile Menu Offcanvas */}
        </>
    );
}
