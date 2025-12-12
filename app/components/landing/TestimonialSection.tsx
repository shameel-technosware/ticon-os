'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function TestimonialSection() {
    return (
        <div className="section-padding testimonial-two scene">
            <div className="container">

                <div className="row">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.1 }}
                        className="col-12"
                    >
                        {/* Heading Start */}
                        <div className="heading-one">
                            <span className="heading-one-subtitle">Global Testimonials</span>
                            <h2 className="heading-one-title">Clients & Partners</h2>
                        </div>
                        {/* Heading End */}
                    </motion.div>
                </div>

                <div className="row">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.1 }}
                        className="col-12 position-relative"
                    >
                        <div className="testimonialtwo">
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                navigation={{
                                    nextEl: '.testimonial-slider-button-next',
                                    prevEl: '.testimonial-slider-button-prev',
                                }}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                className="swiper-wrapper"
                            >
                                <SwiperSlide>
                                    <div className="testimonial-two-single">
                                        <div className="quote gradient-1">
                                            <img src="/assets/images/testimonial/quote.png" alt="QuoteIcon" />
                                        </div>
                                        <p className="text">TiCON helped us strengthen our brand strategy and business expansion plans. Their guidance accelerated our growth in the real estate market with clarity and confidence.</p>
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
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-two-single">
                                        <div className="quote gradient-1">
                                            <img src="/assets/images/testimonial/quote.png" alt="QuoteIcon" />
                                        </div>
                                        <p className="text">Working with TiCON brought new structure and direction to our company. Their business insights, leadership support and growth mindset have played a key role in our success.</p>
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
                                </SwiperSlide>
                                <SwiperSlide>
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
                                </SwiperSlide>
                            </Swiper>
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
                    </motion.div>
                </div>

            </div>
        </div>
    );
}
