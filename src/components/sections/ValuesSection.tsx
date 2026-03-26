'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const VALUES = [
    {
        number: '01',
        title: 'Garantía',
        description:
            'Proteja sus activos valiosos y asegure su tranquilidad fortaleciendo su posición jurídica con documentos legales cuidadosamente elaborados y personalizados. Nuestra suite integral de soluciones legales está diseñada para proteger los intereses de la Administración Pública.',
        hasImage: true,
        imageSrc: '/values/garantia.png',
    },
    {
        number: '02',
        title: 'Empatía',
        description:
            'Entendemos profundamente los retos y necesidades de nuestros clientes. Ofrecemos una atención individualizada y cercana, estableciendo relaciones de confianza a largo plazo que nos permiten adaptar nuestras soluciones a la realidad específica de cada institución.',
        hasImage: true,
        imageSrc: '/values/empatia.png',
    },
    {
        number: '03',
        title: 'Fiabilidad',
        description:
            'Nuestro compromiso es la excelencia constante. Demostramos capacidad para cumplir los servicios prometidos de forma fiable, precisa y en los plazos acordados. Cada proceso está supervisado bajo rigurosos estándares de control para garantizar operaciones sin fisuras.',
        hasImage: true,
        imageSrc: '/values/fiabilidad.png',
    },
    {
        number: '04',
        title: 'Capacidad de Respuesta',
        description:
            'En un entorno institucional dinámico, el tiempo es crítico. Destacamos por nuestra agilidad y disposición total para ayudar a nuestros clientes, proporcionando un servicio rápido, eficiente y resolutivo ante cualquier imprevisto o exigencia.',
        hasImage: true,
        imageSrc: '/values/respuesta.png',
    },
    {
        number: '05',
        title: 'Resultados Tangibles',
        description:
            'No nos limitamos a proyecciones; aportamos valor real. Ofrecemos evidencia de resultados sólidos a través de nuestras instalaciones de primer nivel, tecnología avanzada y un equipo humano altamente cualificado siempre a su entera disposición.',
        hasImage: true,
        imageSrc: '/values/resultados.png',
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const expandVariants = {
    collapsed: {
        height: 0,
        opacity: 0,
        marginTop: 0,
    },
    expanded: {
        height: 'auto',
        opacity: 1,
        marginTop: 16,
    },
};

export default function ValuesSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

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

                {/* Values List — Accordion */}
                <div className="space-y-0">
                    {VALUES.map((value, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <motion.div
                                key={value.number}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="border-t border-gray-200"
                            >
                                {/* Clickable Header */}
                                <button
                                    type="button"
                                    onClick={() => handleToggle(index)}
                                    className="w-full py-8 md:py-12 flex items-center justify-between gap-4 text-left cursor-pointer group focus:outline-none"
                                    aria-expanded={isActive}
                                >
                                    <div className="flex items-center gap-4 md:gap-8 min-w-0">
                                        <span className="text-sm text-[var(--color-text-muted)] font-medium shrink-0">
                                            {value.number}
                                        </span>
                                        <h3
                                            className={`text-2xl md:text-3xl lg:text-4xl font-bold transition-colors duration-300 ${
                                                isActive
                                                    ? 'text-[var(--color-text-primary)]'
                                                    : 'text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)]'
                                            }`}
                                        >
                                            {value.title}
                                        </h3>
                                    </div>

                                    {/* Expand/Collapse Icon */}
                                    <motion.span
                                        animate={{ rotate: isActive ? 45 : 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="text-2xl md:text-3xl text-[var(--color-text-muted)] shrink-0 leading-none"
                                    >
                                        +
                                    </motion.span>
                                </button>

                                {/* Expandable Content */}
                                <AnimatePresence initial={false}>
                                    {isActive && (
                                        <motion.div
                                            key={`content-${value.number}`}
                                            variants={expandVariants}
                                            initial="collapsed"
                                            animate="expanded"
                                            exit="collapsed"
                                            transition={{
                                                height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                                                opacity: { duration: 0.3, delay: 0.1 },
                                                marginTop: { duration: 0.4 },
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-8 md:pb-12 grid grid-cols-12 gap-4 md:gap-8">
                                                {/* Image (if present) */}
                                                {value.hasImage && (
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.5, delay: 0.15 }}
                                                        className="col-span-12 sm:col-span-5 md:col-span-4"
                                                    >
                                                        <div className="relative aspect-video rounded-lg overflow-hidden">
                                                            <Image
                                                                src={value.imageSrc || '/hero-video-fallback.jpg'}
                                                                alt={`${value.title} - Now Group`}
                                                                fill
                                                                className="object-cover"
                                                                sizes="(max-width: 640px) 100vw, 300px"
                                                            />
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {/* Description */}
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.4, delay: 0.2 }}
                                                    className={`${
                                                        value.hasImage
                                                            ? 'col-span-12 sm:col-span-7 md:col-span-6 sm:col-start-6 md:col-start-6'
                                                            : 'col-span-12 sm:col-span-8 md:col-span-6 sm:col-start-4 md:col-start-4'
                                                    }`}
                                                >
                                                    <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
                                                        {value.description}
                                                    </p>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                    {/* Bottom border */}
                    <div className="border-t border-gray-200" />
                </div>
            </div>
        </section>
    );
}
