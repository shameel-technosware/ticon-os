'use client';

import { motion } from 'framer-motion';

export default function StrategySection() {
    return (
        <div className="section-padding-top strategy overflow-hidden">
            <div className="container">
                <div className="row">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.1 }}
                        className="col-12"
                    >
                        {/* Heading Start */}
                        <div className="heading-one text-center">
                            <span className="heading-one-subtitle">We are TiCONs</span>
                            <h2 className="heading-one-title">Transforming Ideas. Connecting Globally.</h2>
                        </div>
                        {/* Heading End */}
                    </motion.div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-n30">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }} // fadeInBottomLeft approximation
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.1 }}
                        className="col mb-30"
                    >
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
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }} // fadeInUp
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.1 }}
                        className="col mb-30"
                    >
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
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }} // fadeInBottomRight approximation
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.1 }}
                        className="col mb-30"
                    >
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
                    </motion.div>

                </div>
            </div>
            {/* Parallax shape usually needs more complex logic or just CSS animation. 
                Using simple image for now as React replacement for data-depth */}
            <div className="strategy-home2-shape">
                <div className="shape shape-1"><img src="/assets/images/shape/dot-1.png" alt="Shape" /></div>
                <div className="shape shape-2"><img src="/assets/images/shape/shape-21.png" alt="Shape" /></div>
            </div>
        </div>
    );
}
