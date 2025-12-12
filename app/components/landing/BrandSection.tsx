'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function BrandSection() {
    return (
        <div className="brand-four">
            <div className="container">
                <div className="row">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.1 }}
                        className="col-12"
                    >
                        <div className="brand-slider brand-style">
                            <Swiper
                                modules={[Autoplay]}
                                slidesPerView={2}
                                spaceBetween={30}
                                breakpoints={{
                                    576: { slidesPerView: 3 },
                                    768: { slidesPerView: 4 },
                                    992: { slidesPerView: 5 },
                                }}
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                            >
                                <SwiperSlide>
                                    <a className="brand-after" href="#"><img src="/assets/images/brand/brand-three/1.png" alt="Brand-Image" /></a>
                                    <a className="brand-before" href="#"><img src="/assets/images/brand/brand-three/1-1.png" alt="Brand-Image" /></a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a className="brand-after" href="#"><img src="/assets/images/brand/brand-three/2.png" alt="Brand-Image" /></a>
                                    <a className="brand-before" href="#"><img src="/assets/images/brand/brand-three/2-1.png" alt="Brand-Image" /></a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a className="brand-after" href="#"><img src="/assets/images/brand/brand-three/3.png" alt="Brand-Image" /></a>
                                    <a className="brand-before" href="#"><img src="/assets/images/brand/brand-three/3-1.png" alt="Brand-Image" /></a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a className="brand-after" href="#"><img src="/assets/images/brand/brand-three/4.png" alt="Brand-Image" /></a>
                                    <a className="brand-before" href="#"><img src="/assets/images/brand/brand-three/4-1.png" alt="Brand-Image" /></a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a className="brand-after" href="#"><img src="/assets/images/brand/brand-three/5.png" alt="Brand-Image" /></a>
                                    <a className="brand-before" href="#"><img src="/assets/images/brand/brand-three/5-1.png" alt="Brand-Image" /></a>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="shape shape-1">
                <motion.img
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.1 }}
                    src="/assets/images/brand/brand-three/circle.png" alt="Circle"
                />
            </div>
            <div className="shape shape-2">
                <motion.img
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    src="/assets/images/brand/brand-three/circle2.png" alt="Circle"
                />
            </div>
        </div>
    );
}
