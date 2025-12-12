'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogSection() {
    return (
        <div className="section-margin blog-post-two scene">
            <div className="container mb-n30">

                <div className="row">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.1 }}
                        className="col-12"
                    >
                        {/* Heading Start */}
                        <div className="heading-one text-center">
                            <span className="heading-one-subtitle">Latest Insights</span>
                            <h2 className="heading-one-title">Growth Updates</h2>
                            <p>Explore the latest developments, achievements and milestones from TiCON and our global business network.</p>
                        </div>
                        {/* Heading End */}
                    </motion.div>
                </div>

                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.1 }}
                        className="col mb-30"
                    >
                        {/* Single Blog Grid Start */}
                        <div className="blog-grid-single">
                            <div className="blog-grid-image ">
                                <Link href="/blog" className="blogpost-image"><img src="/assets/images/blog/home-blog1.png" alt="BlogImage" /></Link>
                                <div className="blog-grid-image-thumb">
                                    <span className="date">15</span>
                                    <span className="text">Aug</span>
                                </div>
                            </div>
                            <div className="blog-grid-content">
                                <span className="subtitle">Investment</span>
                                <h4 className="title"><Link href="/about">Vizhinjam International Seaport: Investment Opportunities</Link></h4>
                            </div>
                        </div>
                        {/* Single Blog Grid End */}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        className="col mb-30"
                    >
                        {/* Single Blog Grid Start */}
                        <div className="blog-grid-single">
                            <div className="blog-grid-image">
                                <Link href="/blog" className="blogpost-image"><img src="/assets/images/blog/home-blog2.png" alt="BlogImage" /></Link>
                                <div className="blog-grid-image-thumb">
                                    <span className="date">27</span>
                                    <span className="text">Oct</span>
                                </div>
                            </div>
                            <div className="blog-grid-content">
                                <span className="subtitle">Business</span>
                                <h4 className="title"><Link href="/about">Dubai Global Business & Investment Hub</Link></h4>
                            </div>
                        </div>
                        {/* Single Blog Grid End */}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="col mb-30"
                    >
                        {/* Single Blog Grid Start */}
                        <div className="blog-grid-single">
                            <div className="blog-grid-image">
                                <Link href="/blog" className="blogpost-image"><img src="/assets/images/blog/home-blog3.png" alt="BlogImage" /></Link>
                                <div className="blog-grid-image-thumb">
                                    <span className="date">14</span>
                                    <span className="text">Nov</span>
                                </div>
                            </div>
                            <div className="blog-grid-content">
                                <span className="subtitle">Leadership</span>
                                <h4 className="title"><Link href="/about">Business Leadership & Future Leaders Ecosystem</Link></h4>
                            </div>
                        </div>
                        {/* Single Blog Grid End */}
                    </motion.div>

                </div>

            </div>
            <div className="shape shape-1">
                <motion.img
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.1 }}
                    src="/assets/images/blog/shape/shape1.png" alt="Circle"
                />
            </div>
            <div className="shape shape-2">
                <img src="/assets/images/blog/shape/shape2.png" alt="Circle" />
            </div>
            <div className="shape shape-3">
                <img src="/assets/images/blog/shape/shape3.png" alt="Circle" />
            </div>
        </div>
    );
}
