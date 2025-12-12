'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// For Parallax effect
import Tilt from 'react-parallax-tilt';

export default function HeroSection() {
    return (
        <div className="slider-two overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.slidertwo-pagination'
                }}
                className="slidertwo"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="slidertwo-shape1">
                        <div className="scene">
                            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} style={{ position: 'absolute', width: '100%', height: '100%' }}>
                                <div className="shape shape-7"><img src="/assets/images/slider/slidertwo-shape/shape-1.png" alt="Shape" /></div>
                                <div className="shape shape-9"><img src="/assets/images/slider/slidertwo-shape/shape-3.png" alt="Shape" /></div>
                                {/* Add more shapes as needed, keeping original structure */}
                                <div className="shape shape-14"><img src="/assets/images/slider/slidertwo-shape/shape-8.png" alt="Shape" /></div>
                            </Tilt>
                        </div>
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
                                    <Link href="/contact" className="btn-style-one"><span>Contact Us</span></Link>
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
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="slidertwo-shape1">
                        <div className="scene">
                            {/* Reusing shapes logic or simplifying for React */}
                            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} style={{ position: 'absolute', width: '100%', height: '100%' }}>
                                <div className="shape shape-7"><img src="/assets/images/slider/slidertwo-shape/shape-1.png" alt="Shape" /></div>
                            </Tilt>
                        </div>
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
                                    <Link href="/about" className="btn-style-one"><span>Learn More</span></Link>
                                </div>
                                {/* Heading End */}
                            </div>
                            <div className="col-6 col-lg-4 order-lg-0 order-2">
                                <div className="slidertwo-rightimg">
                                    <div className="img-one"><img src="/assets/images/slider/slider-2-2.png" alt="ShapeImage" /></div>
                                    <div className="img-two"><img src="/assets/images/slider/slider-2-4.png" alt="ShapeImage" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Swiper Pagination */}
                <div className="swiper-pagination slidertwo-pagination"></div>
            </Swiper>
        </div>
    );
}
