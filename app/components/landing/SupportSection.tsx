'use client';

import { motion } from 'framer-motion';

export default function SupportSection() {
    return (
        <div className="support section-margin-bottom mousemove">
            <div className="container">
                <div className="support-bg">
                    <div className="support-bg-img">
                        <img src="/assets/images/support/support-bg.png" alt="Support" />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            {/* Heading Start */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9 }}
                                className="heading-one"
                            >
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
                            </motion.div>
                            {/* Heading End */}
                        </div>
                        <div className="col-md-6">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                className="support-man"
                            >
                                <img src="/assets/images/support/support-man.png" alt="SupportMan" />
                            </motion.div>
                            <div className="support-shape-one">
                                <motion.img
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 1.5, delay: 0.1 }}
                                    src="/assets/images/support/support-circle.png" alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
