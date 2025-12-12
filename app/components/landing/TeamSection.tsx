'use client';

import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Link from 'next/link';

export default function TeamSection() {
    return (
        <div className="team-two section-margin-top">
            {/* Team Two Shape Start */}
            <div className="team-two_shape scene">
                <div className="shape shape1"><img src="/assets/images/team/team-two/shape1.png" alt="Shape" /></div>
                <div className="shape shape2"><img src="/assets/images/team/team-two/shape2.png" alt="Shape" /></div>
                <div className="shape shape3"><img src="/assets/images/team/team-two/shape3.png" alt="Shape" /></div>
                <div className="shape shape4"><img src="/assets/images/team/team-two/shape4.png" alt="Shape" /></div>
                <div className="shape shape5"><img src="/assets/images/team/team-two/shape5.png" alt="Shape" /></div>
                <div className="shape shape6"><img src="/assets/images/team/team-two/shape6.png" alt="Shape" /></div>
            </div>
            {/* Team Two Shape End */}
            <div className="container">
                <div className="row mb-n60">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.1 }}
                        className="col-lg-7 mb-60"
                    >
                        {/* Team Two Images Start */}
                        <div className="team-two_images">
                            <Tilt className="image1"><img src="/assets/images/team/team-two/team1.png" alt="Team" /></Tilt>
                            <Tilt className="image2"><img src="/assets/images/team/team-two/team2.png" alt="Team" /></Tilt>
                            <Tilt className="image3"><img src="/assets/images/team/team-two/team3.png" alt="Team" /></Tilt>
                            <img src="/assets/images/team/team-two/circle1.png" alt="Team" className="image4" />
                            <img src="/assets/images/team/team-two/circle2.png" alt="Team" className="image5" />
                        </div>
                        {/* Team Two Images End */}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        className="col-lg-5 align-self-center mb-60"
                    >
                        {/* About Tab Content Start */}
                        <div className="heading-one">
                            <span className="heading-one-subtitle">THE TiCON TEAM</span>
                            <h2 className="heading-one-title">Global Experts</h2>
                            <p>Our team provides strategic leadership, expert guidance, and hands-on venture support to build strong brands, streamline growth, and accelerate scalable success across global markets.</p>
                            <Link href="/about" className="btn-style-one"><span>Know More</span></Link>
                        </div>
                        {/* About Tab Content End */}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
