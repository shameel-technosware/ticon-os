import Scripts from "./components/Scripts";

export default function Home() {
  return (
    <>


    <header className="header-wrapper-two header-four sticky-header">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="header-top">
                        <div className="d-md-none d-flex align-items-center">
                            <a className="header-top-link d-flex align-items-center gap-1 left-link" href="tel:+4733378901"><img src="/assets/images/icon/social/social-icon-1.png" alt="" /></a>
                            <a className="header-top-link d-flex align-items-center gap-1" href="mailto:hq@ticonglobal.com"><img src="/assets/images/icon/social/social-icon-2.png" alt="" /></a>
                        </div>
                        <span className="d-none d-md-block">
                            <a className="header-top-link d-flex align-items-center gap-1" href="tel:+971 55 386 9966"><img src="/assets/images/icon/social/social-icon-1.png" alt="" /> +971 55 386 9966</a>
                        </span>
                        <span className="d-none d-md-block">
                            <a className="header-top-link d-flex align-items-center gap-1" href="mailto:hq@ticonglobal.com"><img src="/assets/images/icon/social/social-icon-2.png" alt="" /> hq@ticonglobal.com</a>
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
                            <a href="/">
                                <img className="logo-2" src="/assets/images/logo-2.png" alt="logoImage" />
                            </a>
                        </div>
                        {/* Header Logo End */}

                        <div className="flex-center header-right">
                            {/* Header Menu Start */}
                            <div className="d-none d-lg-flex header-right_menu">
                                <nav className="main-menu">
                                    <ul>
                                        <li>
                                            <a href="/">Home</a>
                                        </li>
                                        <li>
                                            <a href="/about">About</a>
                                        </li>
                                        <li>
                                            <a href="/services">Services</a>
                                        </li>
										
                                        <li>
											<a href="/contact">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                            {/* Header Menu End */}

                            {/* Header Actions Start */}
                            <div className="header-right_actions flex-center">
                                <div className="header-right_button header-button">
    <a href="https://wa.me/971553869966?text=Hi%20TiCON" className="btn-style-one" target="_blank" rel="noopener noreferrer">
    <span>Quick Connect</span></a>
                                </div>

                                <div className="hamburger d-block d-lg-none">
                                    {/* Mobile Menu Hambarger Action Button Start */}
                                    <a className="header-action-btn header-action-btn-menu hamburger_button d-flex" href="#/" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-header">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </a>
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

    <div className="offcanvas offcanvas-end" id="offcanvas-header">

        <div className="offcanvas-header">
            {/* Header Logo Start */}
            <div className="logo">
                <a href="/">
                    <img src="/assets/images/logo-2.png" alt="" />
                </a>
            </div>
            {/* Header Logo End */}
            <button type="button" className="btn-close text-reset mobilemenu-close" data-bs-dismiss="offcanvas" aria-label="Close">
                <i className="fas fa-times"></i>
            </button>
        </div>
        <div className="offcanvas-body">
            {/* mobile menu navigation start */}
            <nav>
                <ul className="mobile-menu">
                    <li>
                        <a href="/">HOME</a>
                    </li>
                    <li><a href="/about">ABOUT</a></li>
                    <li>
                        <a href="/services">SERVICES</a>
                    </li>
                    <li><a href="/contact">CONTACT US </a></li>
                </ul>
            </nav>
            {/* mobile menu navigation end */}
        </div>

    </div>

    {/* Slider Section start */}
    <div className="slider-two overflow-hidden">
        <div className="swiper slidertwo animation-style-02">
            <div className="swiper-wrapper">

                <div className="swiper-slide">
                    <div className="slidertwo-shape1">
                        <div className="scene">
                            <div className="shape shape-7"><img src="/assets/images/slider/slidertwo-shape/shape-1.png" alt="Shape" /></div>
                            <div className="shape shape-9"><img src="/assets/images/slider/slidertwo-shape/shape-3.png" alt="Shape" /></div>
                            <div className="shape shape-10" data-depth="0.07"><img src="/assets/images/slider/slidertwo-shape/shape-4.png" alt="Shape" /></div>
                            <div className="shape shape-11" data-depth="0.08"><img src="/assets/images/slider/slidertwo-shape/shape-5.png" alt="Shape" /></div>
                            <div className="shape shape-12" data-depth="0.08"><img src="/assets/images/slider/slidertwo-shape/shape-6.png" alt="Shape" /></div>
                            <div className="shape shape-14"><img src="/assets/images/slider/slidertwo-shape/shape-8.png" alt="Shape" /></div>
                            <div className="shape shape-15" data-depth="0.07"><img src="/assets/images/slider/slidertwo-shape/shape-9.png" alt="Shape" /></div>
                            <div className="shape shape-16"><img src="/assets/images/slider/slidertwo-shape/shape-10.png" alt="Shape" /></div>
                            <div className="shape shape-17"><img src="/assets/images/slider/slidertwo-shape/shape-11.png" alt="Shape" /></div>
                            <div className="shape shape-18" data-depth="0.08"><img src="/assets/images/slider/slidertwo-shape/shape-12.png" alt="Shape" /></div>
                            <div className="shape shape-19"><img src="/assets/images/slider/slidertwo-shape/shape-13.png" alt="Shape" /></div>
                            <div className="shape shape-20"><img src="/assets/images/slider/slidertwo-shape/shape-14.png" alt="Shape" /></div>
                            <div className="shape shape-21" data-depth="0.06"><img src="/assets/images/slider/slidertwo-shape/shape-15.png" alt="Shape" /></div>
                        </div>
                    </div>
                    <div className="slidertwo-shape2">
                        <div className="shape shape-6"><img src="/assets/images/slider/slidertwo-shape/shape-2.png" alt="Shape" /></div>
                        <div className="shape shape-8"><img src="/assets/images/slider/slidertwo-shape/shape-17.png" alt="Shape" /></div>
                        <div className="shape shape-13"><img src="/assets/images/slider/slidertwo-shape/shape-7.png" alt="Shape" /></div>
                    </div>
                    <div className="slidertwo-shape3">
                        <div className="shape shape-1"><img src="/assets/images/slider/slidertwo-shape/shape-18.png" alt="Shape" /></div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6 col-lg-4 order-lg-0 order-2">
                                <div className="slidertwo-leftimg">
                                    <div className="img-one"><img src="/assets/images/slider/slider-2-1.png" alt="ShapeImage" /></div>
                                    <div className="img-two"><img src="/assets/images/slider/slider-2-3.png" alt="ShapeImage" /></div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 mx-auto text-center align-self-center order-lg-0 order-1">
                                {/* Heading Start */}
                                <div className="heading-one">
<span className="heading-one-subtitle gradient-text-1">We are TiCONs</span>
<h2 className="heading-one-title">TiCON GLOBAL</h2>
<p>Crafting a new generation of leaders — visionary icons who go beyond tycoons — We Call them "The TiCONs"</p>
<a href="/contact" className="btn-style-one"><span>Contact Us</span></a>
                                </div>
                                {/* Heading End */}
                            </div>
                            <div className="col-6 col-lg-4 order-lg-0 order-2">
                                <div className="slidertwo-rightimg">
                                    <div className="img-one"><img src="/assets/images/slider/slider-2-2.png" alt="ShapeImage" /></div>
                                    <div className="img-two"><img src="/assets/images/slider/slider-2-4.png" alt="ShapeImage" /></div>
                                    <div className="img-three"><img src="/assets/images/slider/slider-2-5.png" alt="ShapeImage" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="swiper-slide">
                    <div className="slidertwo-shape1">
                        <div className="scene">
                            <div className="shape shape-7"><img src="/assets/images/slider/slidertwo-shape/shape-1.png" alt="Shape" /></div>
                            <div className="shape shape-9"><img src="/assets/images/slider/slidertwo-shape/shape-3.png" alt="Shape" /></div>
                            <div className="shape shape-10" data-depth="0.07"><img src="/assets/images/slider/slidertwo-shape/shape-4.png" alt="Shape" /></div>
                            <div className="shape shape-11" data-depth="0.08"><img src="/assets/images/slider/slidertwo-shape/shape-5.png" alt="Shape" /></div>
                            <div className="shape shape-12" data-depth="0.08"><img src="/assets/images/slider/slidertwo-shape/shape-6.png" alt="Shape" /></div>
                            <div className="shape shape-14"><img src="/assets/images/slider/slidertwo-shape/shape-8.png" alt="Shape" /></div>
                            <div className="shape shape-15" data-depth="0.07"><img src="/assets/images/slider/slidertwo-shape/shape-9.png" alt="Shape" /></div>
                            <div className="shape shape-16"><img src="/assets/images/slider/slidertwo-shape/shape-10.png" alt="Shape" /></div>
                            <div className="shape shape-17"><img src="/assets/images/slider/slidertwo-shape/shape-11.png" alt="Shape" /></div>
                            <div className="shape shape-18" data-depth="0.08"><img src="/assets/images/slider/slidertwo-shape/shape-12.png" alt="Shape" /></div>
                            <div className="shape shape-19"><img src="/assets/images/slider/slidertwo-shape/shape-13.png" alt="Shape" /></div>
                            <div className="shape shape-20"><img src="/assets/images/slider/slidertwo-shape/shape-14.png" alt="Shape" /></div>
                            <div className="shape shape-21" data-depth="0.06"><img src="/assets/images/slider/slidertwo-shape/shape-15.png" alt="Shape" /></div>
                        </div>
                    </div>
                    <div className="slidertwo-shape2">
                        <div className="shape shape-6"><img src="/assets/images/slider/slidertwo-shape/shape-2.png" alt="Shape" /></div>
                        <div className="shape shape-8"><img src="/assets/images/slider/slidertwo-shape/shape-17.png" alt="Shape" /></div>
                        <div className="shape shape-13"><img src="/assets/images/slider/slidertwo-shape/shape-7.png" alt="Shape" /></div>
                    </div>
                    <div className="slidertwo-shape3">
                        <div className="shape shape-1"><img src="/assets/images/slider/slidertwo-shape/shape-18.png" alt="Shape" /></div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6 col-lg-4 order-lg-0 order-2">
                                <div className="slidertwo-leftimg">
                                    <div className="img-one"><img src="/assets/images/slider/slider-2-1.png" alt="ShapeImage" /></div>
                                    <div className="img-two"><img src="/assets/images/slider/slider-2-3.png" alt="ShapeImage" /></div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 mx-auto text-center align-self-center order-lg-0 order-1">
{/* Heading Start */}
<div className="heading-one">
    <span className="heading-one-subtitle gradient-text-1">We are TiCONs</span>
    <h2 className="heading-one-title">Transforming Ideas<br />Globally</h2>
    <p>We turn bold ideas into ventures that grow and scale worldwide.</p>
    <a href="/about" className="btn-style-one"><span>Learn More</span></a>
</div>
{/* Heading End */}


                            </div>
                            <div className="col-6 col-lg-4 order-lg-0 order-2">
                                <div className="slidertwo-rightimg">
                                    <div className="img-one"><img src="/assets/images/slider/slider-2-2.png" alt="ShapeImage" /></div>
                                    <div className="img-two"><img src="/assets/images/slider/slider-2-4.png" alt="ShapeImage" /></div>
                                    <div className="img-three"><img src="/assets/images/slider/slider-2-5.png" alt="ShapeImage" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Swiper Pagination */}
            <div className="swiper-pagination slidertwo-pagination"></div>

        </div>
    </div>
    {/* Slider Section End */}

    {/* Strategy Section start */}
    <div className="section-padding-top strategy overflow-hidden">
        <div className="container">
            <div className="row">
                <div className="col-12 wow fadeInUp" data-wow-duration="0.9s" data-wow-delay="0.1s">
                    {/* Heading Start */}
<div className="heading-one text-center">
    <span className="heading-one-subtitle">We are TiCONs</span>
    <h2 className="heading-one-title">Transforming Ideas. Connecting Globally.</h2>
</div>

                    {/* Heading End */}
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-n30">

                <div className="col mb-30 wow fadeInBottomLeft" data-wow-duration="0.9s" data-wow-delay="0.1s">
                    {/* Single Strategy Start */}
                    <div className="strategy-single">

                        {/* Strategy Icon Start */}
                        <div className="strategy-icon">
                            <span></span>
                            <img src="/assets/images/icon/icon-1.png" alt="Icon" />
                        </div>
                        {/* Strategy Icon End */}

                        {/* Strategy content Start */}
                        <div className="strategy-content">
<h5 className="title">Transformation</h5>
<p>We turn bold ideas into profitable ventures through smart strategy and innovation.</p>

                        </div>
                        {/* Strategy content End */}

                    </div>
                    {/* Single Strategy End */}
                </div>

                <div className="col mb-30 wow fadeInUp" data-wow-duration="0.9s" data-wow-delay="0.1s">
                    {/* Single Strategy Start */}
                    <div className="strategy-single">

                        {/* Strategy Icon Start */}
                        <div className="strategy-icon">
                            <span></span>
                            <img src="/assets/images/icon/icon-2.png" alt="Icon" />
                        </div>
                        {/* Strategy Icon End */}

                        {/* Strategy content Start */}
                        <div className="strategy-content">
                            <h5 className="title">Investment</h5>
                            <p>We drive growth with smart capital, market insights, and strong strategic partnerships.</p>
                        </div>
                        {/* Strategy content End */}

                    </div>
                    {/* Single Strategy End */}
                </div>

                <div className="col mb-30 wow fadeInBottomRight" data-wow-duration="0.9s" data-wow-delay="0.1s">
                    {/* Single Strategy Start */}
                    <div className="strategy-single">

                        {/* Strategy Icon Start */}
                        <div className="strategy-icon">
                            <span></span>
                            <img src="/assets/images/icon/icon-3.png" alt="Icon" />
                        </div>
                        {/* Strategy Icon End */}

                        {/* Strategy content Start */}
                        <div className="strategy-content">
                            <h5 className="title">Connection</h5>
                            <p>We connect ideas, capital, and experts, uniting innovators and investors for impact.</p>
                        </div>
                        {/* Strategy content End */}

                    </div>
                    {/* Single Strategy End */}
                </div>

            </div>
        </div>
        <div className="strategy-home2-shape" data-depth="0.09">
            <div className="shape shape-1"><img src="/assets/images/shape/dot-1.png" alt="Shape" /></div>
            <div className="shape shape-2"><img src="/assets/images/shape/shape-21.png" alt="Shape" /></div>
        </div>
    </div>
    {/* Strategy Section end */}

    {/* About Section Start */}
    <div className="section-padding about-two">
        <div className="about-two-shape">
            <div className="shape shape-1 wow fadeInUp" data-wow-duration="0.9s"><img src="/assets/images/about/shape-2/shape-1.png" alt="Shape" /></div>
            <div className="shape shape-2 wow fadeInUp" data-wow-duration="0.9s"><img src="/assets/images/about/shape-2/shape-2.png" alt="Shape" /></div>
            <div className="shape shape-3 wow fadeInUp" data-wow-duration="0.9s"><img src="/assets/images/about/shape-2/shape-3.png" alt="Shape" /></div>
            <div className="shape shape-4 wow fadeInUp" data-wow-duration="0.9s"><img src="/assets/images/about/shape-2/shape-4.png" alt="Shape" /></div>
            <div className="shape shape-5"><img className="wow zoomIn" data-wow-duration="1.5s" data-wow-delay=".1s" src="/assets/images/about/shape-2/shape-5.png" alt="Shape" /></div>
            <div className="shape shape-6 wow fadeInUp" data-wow-duration="0.9s"><img src="/assets/images/about/shape-2/shape-6.png" alt="Shape" /></div>
            <div className="shape shape-7"><img className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s" src="/assets/images/about/shape-2/shape-7.png" alt="Shape" /></div>
        </div>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    {/* About Images Start */}
                    <div className="about-two-images me-0">
                        <div className="about-two-images-one wow fadeInUp" data-wow-duration="0.9s">
                            <img className="js-tilt" src="/assets/images/about/about-4.png" alt="QualityImage" />
                        </div>
                        <div className="about-two-images-two wow fadeInUp" data-wow-duration="0.9s">
                            <img className="js-tilt" src="/assets/images/about/about-5.png" alt="QualityImage" />
                        </div>
                    </div>
                    {/* About Images End */}
                </div>
                <div className="col-lg-6">
                    {/* Heading Start */}
                    <div className="heading-one">
                        <div className="wow fadeInUp" data-wow-duration="0.9s">
                            <span className="heading-one-subtitle">We are TiCONS</span>
                            <h2 className="heading-one-title">Join the TiCON Movement</h2>
                        </div>
                        <div className="about-two-text wow fadeInUp" data-wow-duration="0.9s">
                            <p>Whether you’re an investor seeking profitable opportunities or an entrepreneur ready to scale your vision — TiCON GLOBAL is your trusted partner in transformation.</p>
                            <p>Be a TiCON — crafted Tycoon, a Visionary Icon, who builds the future.</p>
                            <a href="/about" className="btn-style-one"><span>Learn More</span></a>
                        </div>
                    </div>
                    {/* Heading End */}
                </div>
            </div>
        </div>
    </div>
    {/* About Section Start */}

    {/* Service Two Section Start */}
    <div className="service-two section-padding-bottom">
        <div className="service-two-shape scene">
            <div className="shape shape-1" data-depth="0.08"><img src="/assets/images/shape/shape-20.png" alt="Shape" /></div>
            <div className="shape shape-2"><img src="/assets/images/shape/shape-22.png" alt="Shape" /></div>
            <div className="shape shape-3" data-depth="0.08"><img src="/assets/images/shape/shape-23.png" alt="<Shape" /></div>
            <div className="shape shape-4"><img src="/assets/images/service/service-two-bg.png" alt="Shape" /></div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {/* Heading Start */}
                    <div className="heading-one text-center wow fadeInUp" data-wow-duration="0.9s">
                        <span className="heading-one-subtitle">Our Services</span>
                        <h2 className="heading-one-title">What we offer</h2>
                        <p>Transforming entrepreneurs into industry leaders by merging innovation, investment, mentorship, collaboration, and global opportunities.</p>
                    </div>
                    {/* Heading End */}
                </div>
            </div>
            <div className="row row-cols-md-2 row-cols-1 mb-n30">
                <div className="col mb-30 wow fadeInUp" data-wow-duration="0.4s">
                    {/* Single service Start */}
                    <div className="service-two-single">
                        <div className="service-two-thumb">
                            <span className="service-two-thumb-bg"></span>
                            <img className="img-gradient" src="/assets/images/icon/service/icon-7.png" alt="" />
                            <img className="img-white" src="/assets/images/icon/service/icon-10-white.png" alt="" />
                        </div>
                        <div className="service-two-content">
                            <h4 className="title">Venture Consulting </h4>
                            <p>We deliver end-to-end business consulting, branding, and growth strategies to build strong, scalable ventures.</p>
                        </div>
                    </div>
                    {/* Single service Start */}
                </div>
                <div className="col mb-30 wow fadeInUp" data-wow-duration="0.6s">
                    {/* Single service Start */}
                    <div className="service-two-single">
                        <div className="service-two-thumb">
                            <span className="service-two-thumb-bg"></span>
                            <img className="img-gradient" src="/assets/images/icon/service/icon-8.png" alt="" />
                            <img className="img-white" src="/assets/images/icon/service/icon-10-white.png" alt="" />
                        </div>
                        <div className="service-two-content">
                            <h4 className="title">Investment Bridge</h4>
                            <p>We connect global investors with curated, high-potential ventures backed by strong business models and due diligence.
</p>
                        </div>
                    </div>
                    {/* Single service Start */}
                </div>
                <div className="col mb-30 wow fadeInUp" data-wow-duration="0.7s">
                    {/* Single service Start */}
                    <div className="service-two-single">
                        <div className="service-two-thumb">
                            <span className="service-two-thumb-bg"></span>
                            <img className="img-gradient" src="/assets/images/icon/service/icon-9.png" alt="" />
                            <img className="img-white" src="/assets/images/icon/service/icon-10-white.png" alt="" />
                        </div>
                        <div className="service-two-content">
                            <h4 className="title">Venture Building</h4>
                            <p>We help startups launch, grow, and scale globally with hands-on support from ideation to execution and expansion.
</p>
                        </div>
                    </div>
                    {/* Single service Start */}
                </div>
                <div className="col mb-30 wow fadeInUp" data-wow-duration="0.9s">
                    {/* Single service Start */}
                    <div className="service-two-single">
                        <div className="service-two-thumb">
                            <span className="service-two-thumb-bg"></span>
                            <img className="img-gradient" src="/assets/images/icon/service/icon-7.png" alt="" />
                            <img className="img-white" src="/assets/images/icon/service/icon-10-white.png" alt="" />
                        </div>
                        <div className="service-two-content">
                            <h4 className="title">Leadership Development</h4>
                            <p>We develop future-ready leaders by empowering entrepreneurs with skills, mindset, and real-world business exposure.</p>
                        </div>
                    </div>
                    {/* Single service Start */}
                </div>
            </div>
        </div>
    </div>
    {/* Service Two Section Start */}

    {/* Support Section Start */}
    <div className="support section-margin-bottom mousemove">
        <div className="container">
            <div className="support-bg">
                <div className="support-bg-img">
                    <img src="/assets/images/support/support-bg.png" alt="Support" />
                </div>
                <div className="row">
                    <div className="col-md-6">
                        {/* Heading Start */}
                        <div className="heading-one wow fadeInUp" data-wow-duration="0.9s">
<span className="heading-one-subtitle">Get Instant Support</span>
<h2 className="heading-one-title">Get Guidance from Our TiCON Experts</h2>
<p className="heading-one-text">Our experienced advisors help you solve business challenges, scale faster, and make smarter decisions with clarity and confidence.</p>

                            <a href="tel:+0123456789" className="phone-call">
                                <span className="phone-icon">
                                    <i className="fas fa-phone-alt"></i>
                                </span>
                                <span className="phone-text">+971 55 386 9966</span>
                            </a>
                            {/* Support Shape Start */}
                            <div className="support-shape-two">
                                <img src="/assets/images/support/support-arrow.png" alt="" />
                            </div>
                            {/* Support Shape End */}
                        </div>
                        {/* Heading End */}
                    </div>
                    <div className="col-md-6">
                        <div className="support-man wow fadeInUp" data-wow-duration="0.7s">
                            <img src="/assets/images/support/support-man.png" alt="SupportMan" />
                        </div>
                        <div className="support-shape-one">
                            <img className="wow zoomIn" data-wow-duration="1.5s" data-wow-delay=".1s" src="/assets/images/support/support-circle.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Support Section End */}

    {/* Speciality Section Start */}
    <div className="speciality ">
        <div className="container">
            <div className="row align-items-center mb-n60">
                <div className="col-lg-6 mb-60 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s">
                    <div className="speciality-image">
                        <div className="speciality-image-inner">
                            <img className="js-tilt" src="/assets/images/speciality/speciality.png" alt="speciliity" />
                        </div>
                        <div className="speciality-image-circle">
                            <div className="circle1">
                                <img className="wow zoomIn" data-wow-duration="1.5s" data-wow-delay=".1s" src="/assets/images/speciality/circle3.png" alt="circle" />
                            </div>
                            <div className="circle2">
                                <img className="wow zoomIn" data-wow-duration="1.5s" data-wow-delay=".1s" src="/assets/images/speciality/circle1.png" alt="circle" />
                            </div>
                            <div className="circle3">
                                <img className="wow zoomIn" data-wow-duration="1.5s" data-wow-delay=".1s" src="/assets/images/speciality/circle2.png" alt="circle" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-60 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
{/* Heading Start */}
<div className="heading-one">
    <span className="heading-one-subtitle">Our Excellence</span>
    <h2 className="heading-one-title">Build Global Brands</h2>
    <p>We develop strong brands with clear positioning, smart strategy, and impactful identity systems that attract customers, earn trust, and support global growth with consistency and long-term scalability.</p>
</div>
{/* Heading End */}

                    {/* Speciality list Start */}
  <ul className="speciality_list">
    <li className="speciality_list__single">
        <span className="icon">
            <img src="/assets/images/speciality/single1.png" alt="Icon" />
        </span>
        <div className="content">
            <h4 className="content_title">Venture Support</h4>
            <p className="content_text">We guide founders with proven growth systems that shape powerful business models and unlock global opportunities.
</p>
        </div>
    </li>

    <li className="speciality_list__single">
        <span className="icon">
            <img src="/assets/images/speciality/single2.png" alt="Icon" />
        </span>
        <div className="content">
            <h4 className="content_title">Growth Funding</h4>
            <p className="content_text">We help ventures attract investments, scale revenue, and build sustainable demand through strategic execution.
</p>
        </div>
    </li>
</ul>
                    {/* Speciality list End */}
                </div>
            </div>
        </div>
        <div className="speciality-shape scene">
            <img data-depth="0.20" className="shape shape1" src="/assets/images/speciality/shape1.png" alt="shape" />
            <img data-depth="0.20" className="shape shape2" src="/assets/images/speciality/shape2.png" alt="shape" />
            <img className="shape shape3" src="/assets/images/speciality/shape3.png" alt="shape" />
        </div>
    </div>
    {/* Speciality Section End */}

    {/* Choose us Section Start */}
    <div className="why-choose-us section-margin-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="why-choose-us_inner">
                        {/* Why Choose us content Start */}
                        <div className="why-choose-us_content wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s">
{/* Heading Start */}
<div className="heading-one">
    <span className="heading-one-subtitle">Why Choose Us</span>
    <h2 className="heading-one-title">Global Growth Partner</h2>
    <p>We align ideas, capital and expert guidance to build stronger ventures and drive global growth, sustainably.</p>
</div>
{/* Heading End */}
</div>
{/* Why Choose us content End */}

{/* Why Choose us List Start */}
<ul className="why-choose-us_list">
    <li className="why-choose-us_list__single wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s">
        <span className="check-icon">
            <img src="/assets/images/icon/check.png" alt="check" />
        </span>
        <div className="check-content">
            <h4 className="check-content_title">Strategic Venture Support</h4>
            <p className="check-content_text">We support your venture using safer models and stronger systems.</p>
        </div>
    </li>

    <li className="why-choose-us_list__single wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
        <span className="check-icon">
            <img src="/assets/images/icon/check.png" alt="check" />
        </span>
        <div className="check-content">
            <h4 className="check-content_title">Support from TiCON Experts</h4>
            <p className="check-content_text">TiCON experts guide strategy to help your venture grow stronger.</p>
        </div>
    </li>

    <li className="why-choose-us_list__single wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".5s">
        <span className="check-icon">
            <img src="/assets/images/icon/check.png" alt="check" />
        </span>
        <div className="check-content">
            <h4 className="check-content_title">Venture Report Suite</h4>
            <p className="check-content_text">Clear reports show performance and guide better growth decisions</p>
        </div>
    </li>
</ul>
{/* Why Choose us List End */}

                    </div>
                </div>
            </div>
        </div>
        <div className="why-choose-us_shape scene">
            <img className="shape shape1 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s" src="/assets/images/choose/circle.png" alt="shape" />
            <img className="shape shape2" src="/assets/images/choose/shape1.png" alt="shape" />
            <img data-depth="0.20" className="shape shape3" src="/assets/images/choose/shape2.png" alt="shape" />
        </div>
    </div>
    {/* Choose us Section end */}

    {/* Team Two Section Start */}
    <div className="team-two section-margin-top">
        {/* Team Two Shape Start */}
        <div className="team-two_shape scene">
            <img className="shape shape1 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s" src="/assets/images/team/team-two/shape1.png" alt="Shape" />
            <img className="shape shape2 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".5s" src="/assets/images/team/team-two/shape2.png" alt="Shape" />
            <img className="shape shape3 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s" src="/assets/images/team/team-two/shape3.png" alt="Shape" />
            <img className="shape shape4" src="/assets/images/team/team-two/shape4.png" alt="Shape" />
            <img className="shape shape5" src="/assets/images/team/team-two/shape5.png" alt="Shape" />
            <img className="shape shape6 wow zoomIn" data-wow-duration="1.5s" data-wow-delay=".1s" src="/assets/images/team/team-two/shape6.png" alt="Shape" />
        </div>
        {/* Team Two Shape End */}
        <div className="container">
            <div className="row mb-n60">
                <div className="col-lg-7 mb-60 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s">
                    {/* Team Two Images Start */}
                    <div className="team-two_images">
                        <img src="/assets/images/team/team-two/team1.png" alt="Team" className="js-tilt image1" />
                        <img src="/assets/images/team/team-two/team2.png" alt="Team" className="js-tilt image2" />
                        <img src="/assets/images/team/team-two/team3.png" alt="Team" className="js-tilt image3" />
                        <img src="/assets/images/team/team-two/circle1.png" alt="Team" className="image4" />
                        <img src="/assets/images/team/team-two/circle2.png" alt="Team" className="image5" />
                    </div>
                    {/* Team Two Images End */}
                </div>
                <div className="col-lg-5 align-self-center mb-60 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                    {/* About Tab Content Start */}
                    <div className="heading-one">
                        <span className="heading-one-subtitle">THE TiCON TEAM</span>
                        <h2 className="heading-one-title">Global Experts</h2>
                        <p>Our team provides strategic leadership, expert guidance, and hands-on venture support to build strong brands, streamline growth, and accelerate scalable success across global markets.</p>
                        <a href="/about" className="btn-style-one"><span>Know More</span></a>
                    </div>
                    {/* About Tab Content End */}
                </div>
            </div>
        </div>
    </div>
    {/* Team Two Section End */}

    {/* Testimonial Section Start */}
    <div className="section-padding testimonial-two scene">
        <div className="container">

            <div className="row">
                <div className="col-12 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s">
                    {/* Heading Start */}
                    <div className="heading-one">
                        <span className="heading-one-subtitle">Global Testimonials</span>
                        <h2 className="heading-one-title">Clients & Partners</h2>
                    </div>
                    {/* Heading End */}
                </div>
            </div>

            <div className="row">
                <div className="col-12 position-relative wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s">
                    <div className="testimonialtwo">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                {/* Testimonial Two Inner Start */}
                                <div className="testimonial-two-single">
                                    <div className="quote gradient-1">
                                        <img src="/assets/images/testimonial/quote.png" alt="QuoteIcon" />
                                    </div>
                                    <p className="text">TiCON helped us strengthen our brand strategy and business expansion plans. Their guidance accelerated our growth in the real estate market with clarity and confidence.
</p>
                                    <div className="user">
                                        <div className="user-image">
                                            <img src="/assets/images/testimonial/user-2.png" alt="UserImage" />
                                        </div>
                                        <div className="user-meta">
                                            <span className="name">Sulaiman Karadan</span>
                                            <p className="desig">CMD, Karadan Lands</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Testimonial Two Inner End */}
                            </div>
                            <div className="swiper-slide">
                                {/* Testimonial Two Inner Start */}
                                <div className="testimonial-two-single">
                                    <div className="quote gradient-1">
                                        <img src="/assets/images/testimonial/quote.png" alt="QuoteIcon" />
                                    </div>
                                    <p className="text">Working with TiCON brought new structure and direction to our company. Their business insights, leadership support and growth mindset have played a key role in our success.
</p>
                                    <div className="user">
                                        <div className="user-image">
                                            <img src="/assets/images/testimonial/user-3.png" alt="UserImage" />
                                        </div>
                                        <div className="user-meta">
                                            <span className="name">Aasim</span>
                                            <p className="desig">MD, MoR Realtors</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Testimonial Two Inner End */}
                            </div>
                            <div className="swiper-slide">
                                {/* Testimonial Two Inner Start */}
                                <div className="testimonial-two-single">
                                    <div className="quote gradient-1">
                                        <img src="/assets/images/testimonial/quote.png" alt="QuoteIcon" />
                                    </div>
                                    <p className="text">TiCON is building a transformational ecosystem for entrepreneurs and investors. Their purpose, commitment and execution make them a powerful force for future business growth.</p>
                                    <div className="user">
                                        <div className="user-image">
                                            <img src="/assets/images/testimonial/user-4.png" alt="UserImage" />
                                        </div>
                                        <div className="user-meta">
                                            <span className="name">Santhosh Babu</span>
                                            <p className="desig">MD, Orglens & ODA</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Testimonial Two Inner End */}
                            </div>
                        </div>
                    </div>
                    {/* Testimonial arrow start */}
                    <div className="testimonial-two-arrow">
                        <div className="swiper-arrow-long">
                            <div className="testimonial-slider-button-prev prev-button">
                                <img className="arrow-1" src="/assets/images/slider/arrow-1.png" alt="ArrowImage" />
                                <img className="arrow-2" src="/assets/images/slider/arrow-2.png" alt="ArrowImage" />
                            </div>
                            <div className="testimonial-slider-button-next next-button">
                                <img className="arrow-1" src="/assets/images/slider/arrow-1.png" alt="ArrowImage" />
                                <img className="arrow-2" src="/assets/images/slider/arrow-2.png" alt="ArrowImage" />
                            </div>
                        </div>
                    </div>
                    {/* Testimonial arrow end */}
                </div>
            </div>

        </div>
    </div>
    {/* Testimonial Section End */}

    {/* Brand Section Start */}
    <div className="brand-four">
        <div className="container">
            <div className="row">
                <div className="col-12 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s">
                    <div className="brand-slider brand-style swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                {/* Single Brand Start */}
                                <a className="brand-after" href="#"><img src="/assets/images/brand/brand-three/1.png" alt="Brand-Image" /></a>
                                <a className="brand-before" href="#"><img src="/assets/images/brand/brand-three/1-1.png" alt="Brand-Image" /></a>
                                {/* Single Brand End */}
                            </div>
                            <div className="swiper-slide">
                                {/* Single Brand Start */}
                                <a className="brand-after" href="#"><img src="/assets/images/brand/brand-three/2.png" alt="Brand-Image" /></a>
                                <a className="brand-before" href="#"><img src="/assets/images/brand/brand-three/2-1.png" alt="Brand-Image" /></a>
                                {/* Single Brand End */}
                            </div>
                            <div className="swiper-slide">
                                {/* Single Brand Start */}
                                <a className="brand-after" href="#"><img src="/assets/images/brand/brand-three/3.png" alt="Brand-Image" /></a>
                                <a className="brand-before" href="#"><img src="/assets/images/brand/brand-three/3-1.png" alt="Brand-Image" /></a>
                                {/* Single Brand End */}
                            </div>
                            <div className="swiper-slide">
                                {/* Single Brand Start */}
                                <a className="brand-after" href="#"><img src="/assets/images/brand/brand-three/4.png" alt="Brand-Image" /></a>
                                <a className="brand-before" href="#"><img src="/assets/images/brand/brand-three/4-1.png" alt="Brand-Image" /></a>
                                {/* Single Brand End */}
                            </div>
                            <div className="swiper-slide">
                                {/* Single Brand Start */}
                                <a className="brand-after" href="#"><img src="/assets/images/brand/brand-three/5.png" alt="Brand-Image" /></a>
                                <a className="brand-before" href="#"><img src="/assets/images/brand/brand-three/5-1.png" alt="Brand-Image" /></a>
                                {/* Single Brand End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="shape shape-1 wow zoomIn" data-wow-duration="1.5s" data-wow-delay=".1s">
            <img src="/assets/images/brand/brand-three/circle.png" alt="Circle" />
        </div>
        <div className="shape shape-2 wow zoomIn" data-wow-duration="1.5s" data-wow-delay=".3s">
            <img src="/assets/images/brand/brand-three/circle2.png" alt="Circle" />
        </div>
    </div>
    {/* Brand Section End */}

    {/* Home Contact Form Start */}
    <div className="home-contact">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="home-contact_wrapper">
                        {/* Home Contact Content Start */}
                        <div className="home-contact_content wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s">
<h4 className="subtitle">Reach TiCON</h4>
<h2 className="title">Let’s Build Together</h2>
<p>Connect with our team for venture support, guidance, and new growth opportunities to scale globally.</p>
                            <ul className="home-contact_info">
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <div className="details">
                                        <h5 className="details-title">Call Us</h5>
                                        <a href="tel:+971 55 386 9966" className="details-text">+971 55 386 9966</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="details">
                                        <h5 className="details-title">Email Us</h5>
                                        <a href="mailto:hq@ticonglobal.com" className="details-text">hq@ticonglobal.com</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* Home Contact Content End */}

                        {/* Home Content Form Start */}
                        <form className="home-contact_form wow fadeInUp"  id="contactForm" data-wow-duration="1.5s" data-wow-delay=".3s">
                            <div className="form-single">
                                <input type="text" placeholder="Your name" name="name" />
                            </div>
                            <div className="form-single">
                                <input type="email" placeholder="Your Email"   name="email" />
                            </div>
                            <div className="form-single">
                                <input placeholder="Your phone" name="phone" />
                            </div>
							   <div className="form-single">
							    <input placeholder="Your Subject" name="subject" />
                                
                            </div>
                            <div className="form-single">
                                <textarea name="message" placeholder="Write message here"></textarea>
                            </div>
                            <button type="submit" className="btn-style-four">Submit now</button>
                        </form>
                        {/* Home Content Form End */}
                    </div>
                </div>
            </div>
        </div>
        <div className="shape shape-1 wow zoomIn" data-wow-duration="1.5s" data-wow-delay=".1s">
            <img src="/assets/images/contact/circle.png" alt="Circle" />
        </div>
        <div className="shape shape-2 wow zoomIn" data-wow-duration="1.5s" data-wow-delay=".1s">
            <img src="/assets/images/contact/circle2.png" alt="Circle" />
        </div>
    </div>
    {/* Home Contact Form End */}

    {/* Home Blog Section Start */}
    <div className="section-margin blog-post-two scene">
        <div className="container mb-n30">

            <div className="row">
                <div className="col-12 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s">
                    {/* Heading Start */}
                    <div className="heading-one text-center">
       <span className="heading-one-subtitle">Latest Insights</span>
<h2 className="heading-one-title">Growth Updates</h2>
<p>Explore the latest developments, achievements and milestones from TiCON and our global business network.</p>
                    </div>
                    {/* Heading End */}
                </div>
            </div>

            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1">

                <div className="col mb-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s">
                    {/* Single Blog Grid Start */}
                    <div className="blog-grid-single">
                        <div className="blog-grid-image ">
                            <a href="/blog" className="blogpost-image"><img src="/assets/images/blog/home-blog1.png" alt="BlogImage" /></a>
                            <div className="blog-grid-image-thumb">
                                <span className="date">15</span>
                                <span className="text">Aug</span>
                            </div>
                        </div>
                        <div className="blog-grid-content">
                            <span className="subtitle">Investment</span>
                            <h4 className="title"><a href="/about">Vizhinjam International Seaport: Investment Opportunities</a></h4>
                        </div>
                    </div>
                    {/* Single Blog Grid End */}
                </div>

                <div className="col mb-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                    {/* Single Blog Grid Start */}
                    <div className="blog-grid-single">
                        <div className="blog-grid-image">
                            <a href="/blog" className="blogpost-image"><img src="/assets/images/blog/home-blog2.png" alt="BlogImage" /></a>
                            <div className="blog-grid-image-thumb">
                                <span className="date">27</span>
                                <span className="text">Oct</span>
                            </div>
                        </div>
                        <div className="blog-grid-content">
                            <span className="subtitle">Business</span>
                            <h4 className="title"><a href="/about">Dubai Global Business & Investment Hub</a></h4>
                        </div>
                    </div>
                    {/* Single Blog Grid End */}
                </div>

                <div className="col mb-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".5s">
                    {/* Single Blog Grid Start */}
                    <div className="blog-grid-single">
                        <div className="blog-grid-image">
                            <a href="/blog" className="blogpost-image"><img src="/assets/images/blog/home-blog3.png" alt="BlogImage" /></a>
                            <div className="blog-grid-image-thumb">
                                <span className="date">14</span>
                                <span className="text">Nov</span>
                            </div>
                        </div>
                        <div className="blog-grid-content">
                            <span className="subtitle">Leadership</span>
                            <h4 className="title"><a href="/about">Business Leadership & Future Leaders Ecosystem</a></h4>
                        </div>
                    </div>
                    {/* Single Blog Grid End */}
                </div>

            </div>

        </div>
        <div className="shape shape-1 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s">
            <img src="/assets/images/blog/shape/shape1.png" alt="Circle" />
        </div>
        <div className="shape shape-2" data-depth="0.06">
            <img src="/assets/images/blog/shape/shape2.png" alt="Circle" />
        </div>
        <div className="shape shape-3" data-depth="0.06">
            <img src="/assets/images/blog/shape/shape3.png" alt="Circle" />
        </div>
    </div>
    {/* Home Blog Section End */}

    {/* Newletter Section Start */}
    <div className="newsletter">
        <div className="newsletter-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col">
                        {/* Newsletter Inner Start */}
                        <div className="newsletter-inner">
                            {/* Newsletter Content start */}
                            <div className="heading-one wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s">
<span className="heading-one-subtitle">Join the TiCON Network</span>
<h2 className="heading-one-title">Stay Updated Always</h2>
<p className="heading-one-text">Receive insights, growth strategies, and venture opportunities to support your business and stay ahead globally.</p>
                            </div>

                            {/* Newletter Form start */}
                            <form id="newsletter-form"    className="footer-widget-form wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                                <input type="text" placeholder="Your Email"  name="email" name="email" />
                                <button><img src="/assets/images/icon/icon-5.png" alt="IconImage" /></button>
                            </form>
                        </div>
                        {/* Newsletter Inner End */}
                    </div>
                </div>
            </div>
        </div>
        <div className="shape shape-1">
            <img src="/assets/images/newsletter/shape1.png" alt="Circle" />
        </div>
        <div className="shape shape-2 wow zoomIn" data-wow-duration="1.5s" data-wow-delay=".1s">
            <img src="/assets/images/newsletter/shape2.png" alt="Circle" />
        </div>
    </div>
    {/* Newletter Section End */}

    {/* Footer Two Start */}
    <div className="footer-two footer-two-bg">
        <div className="container">
            <div className="row mb-n30">
                <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
                    {/* Footer Widget Start */}
                    <div className="footer-widget-two">
                        <div className="logo negative-margin">
                            <a href="/">
                                <img src="/assets/images/logo-2.png" alt="" />
                            </a>
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
                                    <li><a href="/contact">Customer</a></li>
                                    <li><a href="/contact">Visitor</a></li>
                                    <li><a href="/contact">Webmaster</a></li>
                                    <li><a href="/contact">Service</a></li>
                                    <li><a href="/contact">Career</a></li>
                                </ul>
                            </div>
                            <div className="widget-list-single">
                                <h5 className="footer-widget-two-title">Help</h5>
                                <ul className="footer-widget-two-list">
                                    <li><a href="/contact">Support</a></li>
                                    <li><a href="/contact">Doc File</a></li>
                                    <li><a href="/contact">Forum</a></li>
                                    <li><a href="/contact">FAQ</a></li>
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
                                <a href="/blog" className="image"><img src="/assets/images/blog/small/1.png" alt="Blog Post" /></a>
                                <div className="content">
                                    <span className="date">15 Aug 2025</span>
                                    <a className="title" href="/blog">Vizhinjam International Seaport</a>
                                </div>
                            </li>
                            <li>
                                <a href="/blog" className="image"><img src="/assets/images/blog/small/2.png" alt="Blog Post" /></a>
                                <div className="content">
                                    <span className="date">27 Oct 2025</span>
                                    <a className="title" href="/blog">Dubai Global Business & Investment Hub</a>
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
                            <li>
                                <a href="#">
                                    <img src="/assets/images/blog/gallery/1.png" alt="Insta-Image" />
                                    <div className="add-action">
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/assets/images/blog/gallery/2.png" alt="Insta-Image" />
                                    <div className="add-action">
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/assets/images/blog/gallery/3.png" alt="Insta-Image" />
                                    <div className="add-action">
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/assets/images/blog/gallery/4.png" alt="Insta-Image" />
                                    <div className="add-action">
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/assets/images/blog/gallery/5.png" alt="Insta-Image" />
                                    <div className="add-action">
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/assets/images/blog/gallery/6.png" alt="Insta-Image" />
                                    <div className="add-action">
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Footer Widget End */}
                </div>
            </div>
            <div className="row footer-two-copyright">
                <div className="col-12 position-relative">
                    <div className="footer-two-copyright-inner">
<p className="order-md-1 order-2">© <span id="year"></span> TiCON Global. All Rights Reserved.</p>


                        <ul className="footer-two-bootm-list order-md-2 order-1">
                            <li><a href="/contact">Terms &amp; Condition</a></li>
                            <li><a href="/contact">Privacy Policy</a></li>
                            <li><a href="/contact">Legal</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Footer Two End */}

    {/* Scroll Top Start */}
    <a href="#" className="scroll-top show" id="scroll-top">
        <i className="arrow-top fas fa-angle-double-up"></i>
        <i className="arrow-bottom fas fa-angle-double-up"></i>
    </a>
    {/* Scroll Top End */}

    {/* JS Vendor, Plugins & Activation Script Files */}

    {/* Vendors JS */}
	

    
    
    
    

    {/* Plugins JS */}
    
    
    
    
    
    
    
    
    
    
    
    

    {/* Activation JS */}
    
    

{/* newsletter-disable */}





      <Scripts />
    </>
  );
}
