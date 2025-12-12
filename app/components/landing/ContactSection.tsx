'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulation of API call
        // In a real Next.js app, this would likely go to an API route (e.g. /api/contact)
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            // const res = await fetch('/api/contact', { ... });
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="home-contact">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="home-contact_wrapper">
                            {/* Home Contact Content Start */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5, delay: 0.1 }}
                                className="home-contact_content"
                            >
                                <h4 className="subtitle">Reach TiCON</h4>
                                <h2 className="title">Let’s Build Together</h2>
                                <p>Connect with our team for venture support, guidance, and new growth opportunities to scale globally.</p>
                                <ul className="home-contact_info">
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                        <div className="details">
                                            <h5 className="details-title">Call Us</h5>
                                            <a href="tel:+971 55 386 9966" className="details-text">+971 55 386 9966</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="details">
                                            <h5 className="details-title">Email Us</h5>
                                            <a href="mailto:hq@ticonglobal.com" className="details-text">hq@ticonglobal.com</a>
                                        </div>
                                    </li>
                                </ul>
                            </motion.div>
                            {/* Home Contact Content End */}

                            {/* Home Content Form Start */}
                            <motion.form
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5, delay: 0.3 }}
                                className="home-contact_form"
                                onSubmit={handleSubmit}
                            >
                                <div className="form-single">
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-single">
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-single">
                                    <input
                                        placeholder="Your phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-single">
                                    <input
                                        placeholder="Your Subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-single">
                                    <textarea
                                        name="message"
                                        placeholder="Write message here"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn-style-four" disabled={status === 'submitting'}>
                                    {status === 'submitting' ? 'Submitting...' : 'Submit now'}
                                </button>
                                {status === 'success' && <p className="form-message success">Message sent successfully!</p>}
                                {status === 'error' && <p className="form-message error">Something went wrong. Please try again.</p>}
                            </motion.form>
                            {/* Home Content Form End */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape shape-1">
                <motion.img
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.1 }}
                    src="/assets/images/contact/circle.png" alt="Circle"
                />
            </div>
            <div className="shape shape-2">
                <motion.img
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.1 }}
                    src="/assets/images/contact/circle2.png" alt="Circle"
                />
            </div>
        </div>
    );
}
