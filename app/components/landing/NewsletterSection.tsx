'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function NewsletterSection() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            // Simulate API call
            setStatus('success');
            setEmail('');
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="newsletter">
            <div className="newsletter-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {/* Newsletter Inner Start */}
                            <div className="newsletter-inner">
                                {/* Newsletter Content start */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5, delay: 0.1 }}
                                    className="heading-one"
                                >
                                    <span className="heading-one-subtitle">Join the TiCON Network</span>
                                    <h2 className="heading-one-title">Stay Updated Always</h2>
                                    <p className="heading-one-text">Receive insights, growth strategies, and venture opportunities to support your business and stay ahead globally.</p>
                                </motion.div>

                                {/* Newletter Form start */}
                                <motion.form
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5, delay: 0.3 }}
                                    className="footer-widget-form"
                                    onSubmit={handleSubmit}
                                >
                                    <input
                                        type="text"
                                        placeholder="Your Email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <button type="submit" disabled={status === 'submitting'}>
                                        <img src="/assets/images/icon/icon-5.png" alt="IconImage" />
                                    </button>
                                </motion.form>
                                {status === 'success' && <p className="text-white mt-3">Subscribed successfully!</p>}
                                {status === 'error' && <p className="text-white mt-3">Subscription failed.</p>}
                            </div>
                            {/* Newsletter Inner End */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape shape-1">
                <img src="/assets/images/newsletter/shape1.png" alt="Circle" />
            </div>
            <div className="shape shape-2">
                <motion.img
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.1 }}
                    src="/assets/images/newsletter/shape2.png" alt="Circle"
                />
            </div>
        </div>
    );
}
