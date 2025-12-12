'use client';

import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export default function SpecialitySection() {
    return (
        <div className="speciality">
            <div className="container">
                <div className="row align-items-center mb-n60">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.1 }}
                        className="col-lg-6 mb-60"
                    >
                        <div className="speciality-image">
                            <div className="speciality-image-inner">
                                <Tilt>
                                    <img src="/assets/images/speciality/speciality.png" alt="speciliity" />
                                </Tilt>
                            </div>
                            <div className="speciality-image-circle">
                                <div className="circle1">
                                    <motion.img
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 1.5, delay: 0.1 }}
                                        src="/assets/images/speciality/circle3.png" alt="circle"
                                    />
                                </div>
                                <div className="circle2">
                                    <motion.img
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 1.5, delay: 0.1 }}
                                        src="/assets/images/speciality/circle1.png" alt="circle"
                                    />
                                </div>
                                <div className="circle3">
                                    <motion.img
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 1.5, delay: 0.1 }}
                                        src="/assets/images/speciality/circle2.png" alt="circle"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        className="col-lg-6 mb-60"
                    >
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
                                    <p className="content_text">We guide founders with proven growth systems that shape powerful business models and unlock global opportunities.</p>
                                </div>
                            </li>

                            <li className="speciality_list__single">
                                <span className="icon">
                                    <img src="/assets/images/speciality/single2.png" alt="Icon" />
                                </span>
                                <div className="content">
                                    <h4 className="content_title">Growth Funding</h4>
                                    <p className="content_text">We help ventures attract investments, scale revenue, and build sustainable demand through strategic execution.</p>
                                </div>
                            </li>
                        </ul>
                        {/* Speciality list End */}
                    </motion.div>
                </div>
            </div>
            <div className="speciality-shape scene">
                <div className="shape shape1"><img src="/assets/images/speciality/shape1.png" alt="shape" /></div>
                <div className="shape shape2"><img src="/assets/images/speciality/shape2.png" alt="shape" /></div>
                <div className="shape shape3"><img src="/assets/images/speciality/shape3.png" alt="shape" /></div>
            </div>
        </div>
    );
}
