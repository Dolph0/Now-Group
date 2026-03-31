'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/schemas/contactSchema';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

export default function ContactSection() {
    const [formStatus, setFormStatus] = useState<FormStatus>('idle');
    const [serverMessage, setServerMessage] = useState('');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            nombre: '',
            cargo: '',
            entidad: '',
            email: '',
            telefono: '',
            asunto: '',
            mensaje: '',
            consentimientoRGPD: false,
        },
    });

    const onSubmit = async (data: ContactFormData) => {
        setFormStatus('submitting');
        setServerMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setFormStatus('success');
                setServerMessage(result.message);
                reset();
            } else if (response.status === 429) {
                setFormStatus('error');
                setServerMessage(result.message || 'Demasiadas peticiones. Por favor, intente más tarde.');
            } else {
                setFormStatus('error');
                setServerMessage(result.message || 'Error al enviar la consulta. Por favor, inténtelo de nuevo.');
            }
        } catch {
            setFormStatus('error');
            setServerMessage('Error de conexión. Por favor, verifique su conexión a internet e inténtelo de nuevo.');
        }
    };

    return (
        <section
            id="contacto"
            className="py-20 md:py-28 lg:py-32 bg-white"
            aria-label="Contacto"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="text-sm font-medium text-[var(--color-text-secondary)] tracking-widest uppercase">
                        Contacto
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text-primary)]">
                        Envíenos su <span className="text-[var(--color-accent-gold)]">consulta</span>
                    </h2>
                    <p className="mt-4 text-base md:text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        Complete el formulario con los datos de su empresa o institución y nuestro equipo se pondrá en contacto a la mayor brevedad.
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-3xl mx-auto"
                >
                    {/* Success Message */}
                    {formStatus === 'success' && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-8 p-6 rounded-xl bg-green-50 border border-green-200"
                            role="alert"
                        >
                            <div className="flex items-center gap-3">
                                <svg className="w-6 h-6 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-green-800 font-medium">{serverMessage}</p>
                            </div>
                        </motion.div>
                    )}

                    {/* Error Message */}
                    {formStatus === 'error' && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-8 p-6 rounded-xl bg-red-50 border border-red-200"
                            role="alert"
                        >
                            <div className="flex items-center gap-3">
                                <svg className="w-6 h-6 text-red-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-red-800 font-medium">{serverMessage}</p>
                            </div>
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                        {/* Row 1: Nombre + Cargo */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="contact-nombre" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                                    Nombre completo *
                                </label>
                                <input
                                    id="contact-nombre"
                                    type="text"
                                    autoComplete="name"
                                    {...register('nombre')}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.nombre ? 'border-red-400 bg-red-50' : 'border-gray-300'
                                        } text-[var(--color-text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-gold)]/50 focus:border-[var(--color-accent-gold)] transition-colors`}
                                    placeholder="Juan García Pérez"
                                />
                                {errors.nombre && (
                                    <p className="mt-1.5 text-sm text-red-600" role="alert">{errors.nombre.message}</p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="contact-cargo" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                                    Cargo *
                                </label>
                                <input
                                    id="contact-cargo"
                                    type="text"
                                    autoComplete="organization-title"
                                    {...register('cargo')}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.cargo ? 'border-red-400 bg-red-50' : 'border-gray-300'
                                        } text-[var(--color-text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-gold)]/50 focus:border-[var(--color-accent-gold)] transition-colors`}
                                    placeholder="Director General"
                                />
                                {errors.cargo && (
                                    <p className="mt-1.5 text-sm text-red-600" role="alert">{errors.cargo.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Row 2: Entidad */}
                        <div>
                            <label htmlFor="contact-entidad" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                                Entidad / Empresa *
                            </label>
                            <input
                                id="contact-entidad"
                                type="text"
                                autoComplete="organization"
                                {...register('entidad')}
                                className={`w-full px-4 py-3 rounded-lg border ${errors.entidad ? 'border-red-400 bg-red-50' : 'border-gray-300'
                                    } text-[var(--color-text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-gold)]/50 focus:border-[var(--color-accent-gold)] transition-colors`}
                                placeholder="Ayuntamiento de Madrid"
                            />
                            {errors.entidad && (
                                <p className="mt-1.5 text-sm text-red-600" role="alert">{errors.entidad.message}</p>
                            )}
                        </div>

                        {/* Row 3: Email + Teléfono */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                                    Correo Corporativo *
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    autoComplete="email"
                                    {...register('email')}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300'
                                        } text-[var(--color-text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-gold)]/50 focus:border-[var(--color-accent-gold)] transition-colors`}
                                    placeholder="nombre@entidad.es"
                                />
                                {errors.email && (
                                    <p className="mt-1.5 text-sm text-red-600" role="alert">{errors.email.message}</p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="contact-telefono" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                                    Teléfono *
                                </label>
                                <input
                                    id="contact-telefono"
                                    type="tel"
                                    autoComplete="tel"
                                    {...register('telefono')}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.telefono ? 'border-red-400 bg-red-50' : 'border-gray-300'
                                        } text-[var(--color-text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-gold)]/50 focus:border-[var(--color-accent-gold)] transition-colors`}
                                    placeholder="+34 600 000 000"
                                />
                                {errors.telefono && (
                                    <p className="mt-1.5 text-sm text-red-600" role="alert">{errors.telefono.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Row 4: Asunto */}
                        <div>
                            <label htmlFor="contact-asunto" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                                Asunto *
                            </label>
                            <input
                                id="contact-asunto"
                                type="text"
                                {...register('asunto')}
                                className={`w-full px-4 py-3 rounded-lg border ${errors.asunto ? 'border-red-400 bg-red-50' : 'border-gray-300'
                                    } text-[var(--color-text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-gold)]/50 focus:border-[var(--color-accent-gold)] transition-colors`}
                                placeholder="Consulta sobre contratación o servicio legal"
                            />
                            {errors.asunto && (
                                <p className="mt-1.5 text-sm text-red-600" role="alert">{errors.asunto.message}</p>
                            )}
                        </div>

                        {/* Row 5: Mensaje */}
                        <div>
                            <label htmlFor="contact-mensaje" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                                Mensaje *
                            </label>
                            <textarea
                                id="contact-mensaje"
                                rows={5}
                                {...register('mensaje')}
                                className={`w-full px-4 py-3 rounded-lg border ${errors.mensaje ? 'border-red-400 bg-red-50' : 'border-gray-300'
                                    } text-[var(--color-text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-gold)]/50 focus:border-[var(--color-accent-gold)] transition-colors resize-vertical`}
                                placeholder="Describa brevemente su consulta..."
                            />
                            {errors.mensaje && (
                                <p className="mt-1.5 text-sm text-red-600" role="alert">{errors.mensaje.message}</p>
                            )}
                        </div>

                        {/* RGPD Checkbox */}
                        <div>
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    {...register('consentimientoRGPD')}
                                    className={`mt-1 w-4 h-4 rounded border ${errors.consentimientoRGPD ? 'border-red-400' : 'border-gray-300'
                                        } text-[var(--color-accent-gold)] focus:ring-[var(--color-accent-gold)] cursor-pointer`}
                                />
                                <span className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                    He leído y acepto la{' '}
                                    <span className="text-[var(--color-text-primary)] underline">Política de Privacidad</span>.
                                    Sus datos serán tratados conforme al RGPD y la LOPDGDD. *
                                </span>
                            </label>
                            {errors.consentimientoRGPD && (
                                <p className="mt-1.5 text-sm text-red-600" role="alert">{errors.consentimientoRGPD.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                disabled={formStatus === 'submitting'}
                                className="w-full sm:w-auto px-10 py-4 rounded-full bg-[var(--color-primary-dark)] text-white font-semibold text-base hover:bg-[var(--color-primary-darker)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                            >
                                {formStatus === 'submitting' ? (
                                    <>
                                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        Enviar Consulta
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
