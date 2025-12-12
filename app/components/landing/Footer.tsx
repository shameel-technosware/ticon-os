'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <div className="footer-two footer-two-bg">
            <div className="container">
                <div className="row mb-n30">
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
                        {/* Footer Widget Start */}
                        <div className="footer-widget-two">
                            <div className="logo negative-margin">
                                <Link href="/">
                                    <img src="/assets/images/logo-2.png" alt="logo" />
                                </Link>
                            </div>
                            <ul className="footer-widget-two-list-icon">
                                <li><i className="fas fa-map-marker-alt"></i> <span> Dubai, UAE</span></li>
                                <li><i className="fas fa-envelope"></i> <span>hq@ticonglobal.com</span> </li>
                                <li><i className="fas fa-phone"></i><span>+971 55 386 996</span> </li>
                            </ul>
                            <ul className="social-icon d-flex flex-start">
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
                                    <a href="https://www.instagram.com/" className="instagram"><i className="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                        {/* Footer Widget End */}
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
                        {/* Footer Widget Start */}
                        <div className="footer-widget-two">
                            <div className="widget-list-wrapper">
                                <div className="widget-list-single">
                                    <h5 className="footer-widget-two-title">Links</h5>
                                    <ul className="footer-widget-two-list">
                                        <li><Link href="/contact">Customer</Link></li>
                                        <li><Link href="/contact">Visitor</Link></li>
                                        <li><Link href="/contact">Webmaster</Link></li>
                                        <li><Link href="/contact">Service</Link></li>
                                        <li><Link href="/contact">Career</Link></li>
                                    </ul>
                                </div>
                                <div className="widget-list-single">
                                    <h5 className="footer-widget-two-title">Help</h5>
                                    <ul className="footer-widget-two-list">
                                        <li><Link href="/contact">Support</Link></li>
                                        <li><Link href="/contact">Doc File</Link></li>
                                        <li><Link href="/contact">Forum</Link></li>
                                        <li><Link href="/contact">FAQ</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Footer Widget End */}
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
                        {/* Footer Widget Start */}
                        <div className="footer-widget-two">
                            <h5 className="footer-widget-two-title">Recent Posts</h5>
                            <ul className="sidebar-blog">
                                <li>
                                    <Link href="/blog" className="image"><img src="/assets/images/blog/small/1.png" alt="Blog Post" /></Link>
                                    <div className="content">
                                        <span className="date">15 Aug 2025</span>
                                        <Link className="title" href="/blog">Vizhinjam International Seaport</Link>
                                    </div>
                                </li>
                                <li>
                                    <Link href="/blog" className="image"><img src="/assets/images/blog/small/2.png" alt="Blog Post" /></Link>
                                    <div className="content">
                                        <span className="date">27 Oct 2025</span>
                                        <Link className="title" href="/blog">Dubai Global Business & Investment Hub</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* Footer Widget End */}
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
                        {/* Footer Widget Start */}
                        <div className="footer-widget-two">
                            <h5 className="footer-widget-two-title">Links</h5>
                            <ul className="instagrm">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <li key={i}>
                                        <a href="#">
                                            <img src={`/assets/images/blog/gallery/${i}.png`} alt="Insta-Image" />
                                            <div className="add-action">
                                                <i className="fab fa-instagram"></i>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Footer Widget End */}
                    </div>
                </div>
                <div className="row footer-two-copyright">
                    <div className="col-12 position-relative">
                        <div className="footer-two-copyright-inner">
                            <p className="order-md-1 order-2">© <span id="year">{new Date().getFullYear()}</span> TiCON Global. All Rights Reserved.</p>


                            <ul className="footer-two-bootm-list order-md-2 order-1">
                                <li><Link href="/contact">Terms &amp; Condition</Link></li>
                                <li><Link href="/contact">Privacy Policy</Link></li>
                                <li><Link href="/contact">Legal</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
