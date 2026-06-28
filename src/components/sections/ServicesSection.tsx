'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
    return (
        <section
            id="servicios"
            className="py-20 md:py-28 lg:py-32 bg-white"
            aria-label="Servicios"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            </div>
        </section>
    );
}
