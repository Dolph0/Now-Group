'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const VALUES = [
    {
        number: '01',
        title: 'Garantía',
        description:
            'Proteja sus activos valiosos y asegure su tranquilidad fortaleciendo su posición jurídica con documentos legales cuidadosamente elaborados y personalizados. Nuestra suite integral de soluciones legales está diseñada para proteger los intereses de la Administración Pública.',
        hasImage: true,
    },
    {
        number: '02',
        title: 'Empatía',
        description:
            'Atención individualizada y cercana para cada cliente institucional.',
    },
    {
        number: '03',
        title: 'Fiabilidad',
        description:
            'Capacidad para cumplir los servicios prometidos de forma fiable y precisa.',
    },
    {
        number: '04',
        title: 'Capacidad de Respuesta',
        description:
            'Disposición para ayudar a nuestros clientes y proporcionar un servicio rápido y eficiente.',
    },
    {
        number: '05',
        title: 'Resultados Tangibles',
        description:
            'Evidencia de resultados sólidos, instalaciones y personal cualificado a su disposición.',
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

export default function ValuesSection() {
    return (
        <section
            className="py-20 md:py-28 lg:py-32 bg-[var(--color-bg-light)]"
            aria-label="Código de Calidad"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Label */}
                <motion.span
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-sm font-medium text-[var(--color-text-secondary)] tracking-widest uppercase block mb-12 md:mb-16"
                >
                    Código de Calidad
                </motion.span>

                {/* Values List */}
                <div className="space-y-0">
                    {VALUES.map((value, index) => (
                        <motion.div
                            key={value.number}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="border-t border-gray-200 py-8 md:py-12"
                        >
                            <div className="grid grid-cols-12 gap-4 md:gap-8 items-start">
                                {/* Number */}
                                <div className="col-span-2 sm:col-span-1">
                                    <span className="text-sm text-[var(--color-text-muted)] font-medium">{value.number}</span>
                                </div>

                                {/* Image (only for first item) */}
                                {value.hasImage && (
                                    <div className="col-span-10 sm:col-span-4 md:col-span-3 order-3 sm:order-2">
                                        <div className="relative aspect-video rounded-lg overflow-hidden">
                                            <Image
                                                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80&fit=crop"
                                                alt="Garantía jurídica - protección legal"
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 640px) 100vw, 300px"
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Title */}
                                <div className={`${value.hasImage ? 'col-span-10 sm:col-span-4 md:col-span-4 order-2 sm:order-3' : 'col-span-10 sm:col-span-6 md:col-span-5 order-2'}`}>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
                                        {value.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <div className={`${value.hasImage ? 'col-span-12 sm:col-span-3 md:col-span-4 order-4' : 'col-span-12 sm:col-span-5 md:col-span-6 order-3'}`}>
                                    <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    {/* Bottom border */}
                    <div className="border-t border-gray-200" />
                </div>
            </div>
        </section>
    );
}
