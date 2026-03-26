'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

export default function ExperienceSection() {
    return (
        <section
            id="experiencia"
            className="py-20 md:py-28 lg:py-32 bg-white"
            aria-label="Experiencia"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="relative aspect-[4/3] rounded-xl overflow-hidden"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&fit=crop"
                            alt="Equipo legal de Now Group en sesión de trabajo institucional"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] leading-tight">
                            Alcanzando la Excelencia y Servicios de{' '}
                            <span className="text-[var(--color-accent-gold)]">Clase Mundial</span>
                        </h2>
                        <p className="mt-6 text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                            Nuestro equipo incluye socios, asociados y personal de apoyo;
                            además, contamos con letrados consultores disponibles para
                            proyectos específicos. Nuestros profesionales comparten su tiempo
                            entre las principales ciudades de España, con personal
                            especializado en las áreas clave del sector público.
                        </p>
                        <div className="mt-8">
                            <a
                                href="#contacto"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                Ver Más
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
