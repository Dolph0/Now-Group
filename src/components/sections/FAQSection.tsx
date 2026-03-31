'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ_ITEMS = [
    {
        question: '¿Qué servicios ofrece NowNexus Group para el sector público y privado?',
        answer:
            'NowNexus Group ofrece un catálogo completo de servicios jurídicos y de consultoría para empresas y administraciones, incluyendo asesoramiento en licitaciones y contratación, compliance normativo, derecho público y privado, representación legal y consultoría estratégica.',
    },
    {
        question: '¿Cómo puedo solicitar una consulta inicial?',
        answer:
            'Puede solicitar una consulta a través del formulario de contacto de nuestra web, proporcionando los datos de su entidad o empresa. Nuestro equipo revisará su consulta y se pondrá en contacto con usted en un plazo máximo de 48 horas laborables para programar una reunión inicial.',
    },
    {
        question: '¿NowNexus Group trabaja tanto con el sector público como con el privado?',
        answer:
            'Sí, contamos con amplia experiencia asesorando tanto a empresas privadas como a todos los niveles de la Administración Pública (ayuntamientos, diputaciones, ministerios, etc.). Adaptamos nuestro enfoque a las necesidades específicas de cada corporación.',
    },
    {
        question: '¿Cuál es el proceso para gestionar una licitación o contrato?',
        answer:
            'Nuestro proceso incluye el análisis de los pliegos, la preparación de la documentación técnica y administrativa, la revisión de solvencias, la estrategia de oferta económica y el seguimiento de todo el procedimiento hasta la adjudicación, incluyendo la gestión de recursos si fuera necesario.',
    },
    {
        question: '¿Garantizan la confidencialidad de las consultas?',
        answer:
            'Absolutamente. Toda la información compartida está protegida por el secreto profesional y cumplimos estrictamente con el RGPD y la LOPDGDD. Los datos se transmiten mediante cifrado TLS 1.3 y nunca se almacenan sin su autorización expresa.',
    },
    {
        question: '¿En qué ciudades tiene presencia NowNexus Group?',
        answer:
            'NowNexus Group cuenta con presencia en las principales ciudades de España: Madrid, Barcelona, Sevilla y Valencia. Además, ofrecemos servicio remoto a nivel nacional para facilitar la accesibilidad desde cualquier punto del territorio.',
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            className="py-20 md:py-28 lg:py-32 bg-[var(--color-bg-light)]"
            aria-label="Preguntas Frecuentes"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    {/* Label */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3"
                    >
                        <span className="text-sm font-medium text-[var(--color-text-secondary)] tracking-widest uppercase">
                            Preguntas Frecuentes
                        </span>
                    </motion.div>

                    {/* Accordion */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-9"
                    >
                        <div className="divide-y divide-gray-200">
                            {FAQ_ITEMS.map((item, index) => (
                                <div key={index} className="py-6">
                                    <button
                                        onClick={() => toggleItem(index)}
                                        className="w-full flex items-center justify-between text-left cursor-pointer group"
                                        aria-expanded={openIndex === index}
                                        aria-controls={`faq-answer-${index}`}
                                    >
                                        <span className="text-base md:text-lg font-semibold text-[var(--color-text-primary)] pr-8 group-hover:text-[var(--color-accent-gold)] transition-colors">
                                            {item.question}
                                        </span>
                                        <motion.svg
                                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="w-5 h-5 text-gray-400 shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </motion.svg>
                                    </button>
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                id={`faq-answer-${index}`}
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                className="overflow-hidden"
                                                role="region"
                                            >
                                                <p className="pt-4 text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
                                                    {item.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
