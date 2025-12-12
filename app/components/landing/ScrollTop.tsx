'use client';

import { useEffect, useState } from 'react';

export default function ScrollTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <a
            href="#"
            className={`scroll-top ${isVisible ? 'show show-active' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
        >
            <i className="arrow-top fas fa-angle-double-up"></i>
            <i className="arrow-bottom fas fa-angle-double-up"></i>
        </a>
    );
}
