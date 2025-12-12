'use client';

import { motion } from 'framer-motion';

export default function WhyChooseUsSection() {
    return (
        <div className="why-choose-us section-margin-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="why-choose-us_inner">
                            {/* Why Choose us content Start */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5, delay: 0.1 }}
                                className="why-choose-us_content"
                            >
                                {/* Heading Start */}
                                <div className="heading-one">
                                    <span className="heading-one-subtitle">Why Choose Us</span>
                                    <h2 className="heading-one-title">Global Growth Partner</h2>
                                    <p>We align ideas, capital and expert guidance to build stronger ventures and drive global growth, sustainably.</p>
                                </div>
                                {/* Heading End */}
                            </motion.div>
                            {/* Why Choose us content End */}

                            {/* Why Choose us List Start */}
                            <ul className="why-choose-us_list">
                                <motion.li
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5, delay: 0.1 }}
                                    className="why-choose-us_list__single"
                                >
                                    <span className="check-icon">
                                        <img src="/assets/images/icon/check.png" alt="check" />
                                    </span>
                                    <div className="check-content">
                                        <h4 className="check-content_title">Strategic Venture Support</h4>
                                        <p className="check-content_text">We support your venture using safer models and stronger systems.</p>
                                    </div>
                                </motion.li>

                                <motion.li
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5, delay: 0.3 }}
                                    className="why-choose-us_list__single"
                                >
                                    <span className="check-icon">
                                        <img src="/assets/images/icon/check.png" alt="check" />
                                    </span>
                                    <div className="check-content">
                                        <h4 className="check-content_title">Support from TiCON Experts</h4>
                                        <p className="check-content_text">TiCON experts guide strategy to help your venture grow stronger.</p>
                                    </div>
                                </motion.li>

                                <motion.li
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                    className="why-choose-us_list__single"
                                >
                                    <span className="check-icon">
                                        <img src="/assets/images/icon/check.png" alt="check" />
                                    </span>
                                    <div className="check-content">
                                        <h4 className="check-content_title">Venture Report Suite</h4>
                                        <p className="check-content_text">Clear reports show performance and guide better growth decisions</p>
                                    </div>
                                </motion.li>
                            </ul>
                            {/* Why Choose us List End */}

                        </div>
                    </div>
                </div>
            </div>
            <div className="why-choose-us_shape scene">
                <motion.img
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.1 }}
                    className="shape shape1" src="/assets/images/choose/circle.png" alt="shape"
                />
                <div className="shape shape2"><img src="/assets/images/choose/shape1.png" alt="shape" /></div>
                <div className="shape shape3"><img src="/assets/images/choose/shape2.png" alt="shape" /></div>
            </div>
        </div>
    );
}
