'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';

export default function AboutSection() {
    return (
        <div className="section-padding about-two">
            <div className="about-two-shape">
                {/* Simplified animations for shapes */}
                <div className="shape shape-1"><img src="/assets/images/about/shape-2/shape-1.png" alt="Shape" /></div>
                <div className="shape shape-2"><img src="/assets/images/about/shape-2/shape-2.png" alt="Shape" /></div>
                <div className="shape shape-3"><img src="/assets/images/about/shape-2/shape-3.png" alt="Shape" /></div>
                <div className="shape shape-4"><img src="/assets/images/about/shape-2/shape-4.png" alt="Shape" /></div>
                <div className="shape shape-5"><img src="/assets/images/about/shape-2/shape-5.png" alt="Shape" /></div>
                <div className="shape shape-6"><img src="/assets/images/about/shape-2/shape-6.png" alt="Shape" /></div>
                <div className="shape shape-7"><img src="/assets/images/about/shape-2/shape-7.png" alt="Shape" /></div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        {/* About Images Start */}
                        <div className="about-two-images me-0">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9 }}
                                className="about-two-images-one"
                            >
                                <Tilt>
                                    <img src="/assets/images/about/about-4.png" alt="QualityImage" />
                                </Tilt>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9 }}
                                className="about-two-images-two"
                            >
                                <Tilt>
                                    <img src="/assets/images/about/about-5.png" alt="QualityImage" />
                                </Tilt>
                            </motion.div>
                        </div>
                        {/* About Images End */}
                    </div>
                    <div className="col-lg-6">
                        {/* Heading Start */}
                        <div className="heading-one">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9 }}
                            >
                                <span className="heading-one-subtitle">We are TiCONS</span>
                                <h2 className="heading-one-title">Join the TiCON Movement</h2>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9 }}
                                className="about-two-text"
                            >
                                <p>Whether you’re an investor seeking profitable opportunities or an entrepreneur ready to scale your vision — TiCON GLOBAL is your trusted partner in transformation.</p>
                                <p>Be a TiCON — crafted Tycoon, a Visionary Icon, who builds the future.</p>
                                <Link href="/about" className="btn-style-one"><span>Learn More</span></Link>
                            </motion.div>
                        </div>
                        {/* Heading End */}
                    </div>
                </div>
            </div>
        </div>
    );
}
