'use client';

import { motion } from 'framer-motion';

export default function ServiceSection() {
    return (
        <div className="service-two section-padding-bottom">
            <div className="service-two-shape scene">
                <div className="shape shape-1"><img src="/assets/images/shape/shape-20.png" alt="Shape" /></div>
                <div className="shape shape-2"><img src="/assets/images/shape/shape-22.png" alt="Shape" /></div>
                <div className="shape shape-3"><img src="/assets/images/shape/shape-23.png" alt="Shape" /></div>
                <div className="shape shape-4"><img src="/assets/images/service/service-two-bg.png" alt="Shape" /></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Heading Start */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9 }}
                            className="heading-one text-center"
                        >
                            <span className="heading-one-subtitle">Our Services</span>
                            <h2 className="heading-one-title">What we offer</h2>
                            <p>Transforming entrepreneurs into industry leaders by merging innovation, investment, mentorship, collaboration, and global opportunities.</p>
                        </motion.div>
                        {/* Heading End */}
                    </div>
                </div>
                <div className="row row-cols-md-2 row-cols-1 mb-n30">
                    {/* Service 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="col mb-30"
                    >
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
                    </motion.div>

                    {/* Service 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="col mb-30"
                    >
                        <div className="service-two-single">
                            <div className="service-two-thumb">
                                <span className="service-two-thumb-bg"></span>
                                <img className="img-gradient" src="/assets/images/icon/service/icon-8.png" alt="" />
                                <img className="img-white" src="/assets/images/icon/service/icon-10-white.png" alt="" />
                            </div>
                            <div className="service-two-content">
                                <h4 className="title">Investment Bridge</h4>
                                <p>We connect global investors with curated, high-potential ventures backed by strong business models and due diligence.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Service 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="col mb-30"
                    >
                        <div className="service-two-single">
                            <div className="service-two-thumb">
                                <span className="service-two-thumb-bg"></span>
                                <img className="img-gradient" src="/assets/images/icon/service/icon-9.png" alt="" />
                                <img className="img-white" src="/assets/images/icon/service/icon-10-white.png" alt="" />
                            </div>
                            <div className="service-two-content">
                                <h4 className="title">Venture Building</h4>
                                <p>We help startups launch, grow, and scale globally with hands-on support from ideation to execution and expansion.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Service 4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        className="col mb-30"
                    >
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
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
