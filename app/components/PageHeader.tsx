'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface PageHeaderProps {
    title: string;
    breadcrumb: { label: string; href?: string }[];
}

export default function PageHeader({ title, breadcrumb }: PageHeaderProps) {
    return (
        <div className="page-header relative overflow-hidden py-20 bg-gradient-to-br from-[#f8f9ff] to-[#e8f4f8]">
            {/* Background Shapes */}
            <div className="absolute inset-0 pointer-events-none opacity-60">
                <div className="absolute top-10 left-10 animate-float">
                    <img src="/assets/images/slider/slidertwo-shape/shape-1.png" alt="" />
                </div>
                <div className="absolute bottom-10 right-10 animate-float" style={{ animationDelay: '1s' }}>
                    <img src="/assets/images/slider/slidertwo-shape/shape-3.png" alt="" />
                </div>
            </div>

            <div className="container relative z-10">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="heading-one mb-0"
                        >
                            <h1 className="heading-one-title mb-4">{title}</h1>
                            <ul className="flex justify-center items-center gap-2 text-lg">
                                {breadcrumb.map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        {item.href ? (
                                            <>
                                                <Link href={item.href} className="text-gray-600 hover:text-[#417DD2] transition-colors">
                                                    {item.label}
                                                </Link>
                                                <span className="mx-2 text-gray-400">/</span>
                                            </>
                                        ) : (
                                            <span className="text-[#417DD2] font-semibold">{item.label}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
