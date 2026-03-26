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
                {/* View More */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <a
                        href="#contacto"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        Ver Más
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
