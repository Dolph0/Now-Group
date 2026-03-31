'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LegalModal from '@/components/ui/LegalModal';

const FOOTER_LINKS = {
    servicios: [
        { label: 'Licitaciones y Contratos', href: '#servicios' },
        { label: 'Compliance y Normativa', href: '#servicios' },
        { label: 'Derecho Administrativo', href: '#servicios' },
        { label: 'Contratación Corporativa', href: '#servicios' },
    ],
    firma: [
        { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
        { label: 'Equipo', href: '#servicios' },
        { label: 'Experiencia', href: '#experiencia' },
        { label: 'Contacto', href: '#contacto' },
    ],
    compania: [
        { label: 'Blog', href: '#' },
        { label: 'Guías', href: '#' },
        { label: 'Prensa', href: '#' },
    ],
};

const SOCIAL_LINKS = [
    {
        label: 'LinkedIn',
        href: '#',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: 'X (Twitter)',
        href: '#',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        label: 'Instagram',
        href: '#',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
    },
];

export default function Footer() {
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const handleNavClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            event.preventDefault();
            const targetId = href.replace('#', '');
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <>
            <footer className="bg-[var(--color-primary-dark)] text-white" role="contentinfo">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
                        {/* Brand Column */}
                        <div className="sm:col-span-2 lg:col-span-2">
                            <span className="text-2xl font-black tracking-tight">NowNexus Group.</span>
                            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-sm">
                                NowNexus Group es una firma integral especializada en derecho público y corporativo, comprometida con
                                la excelencia en el servicio y el desarrollo estratégico de empresas e instituciones.
                            </p>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Servicios</h3>
                            <ul className="space-y-3">
                                {FOOTER_LINKS.servicios.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Firm */}
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Firma</h3>
                            <ul className="space-y-3">
                                {FOOTER_LINKS.firma.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Compañía</h3>
                            <ul className="space-y-3">
                                {FOOTER_LINKS.compania.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-500 text-center md:text-left">
                            © {new Date().getFullYear()} NowNexus Group. Todos los derechos reservados.
                        </p>
                        <div className="flex items-center gap-6 flex-wrap justify-center">
                            <button
                                onClick={() => setActiveModal('privacy')}
                                className="text-sm text-gray-500 hover:text-white transition-colors cursor-pointer"
                            >
                                Privacidad
                            </button>
                            <button
                                onClick={() => setActiveModal('terms')}
                                className="text-sm text-gray-500 hover:text-white transition-colors cursor-pointer"
                            >
                                Aviso Legal
                            </button>
                            <button
                                onClick={() => setActiveModal('cookies')}
                                className="text-sm text-gray-500 hover:text-white transition-colors cursor-pointer"
                            >
                                Política de Cookies
                            </button>
                        </div>
                        <div className="flex items-center gap-4">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="text-gray-500 hover:text-white transition-colors duration-200"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>

            {/* Legal Modals */}
            <AnimatePresence>
                {activeModal === 'privacy' && (
                    <LegalModal title="Política de Privacidad" onClose={() => setActiveModal(null)}>
                        <h3 className="text-lg font-semibold mb-3">1. Responsable del Tratamiento</h3>
                        <p className="mb-4 text-gray-600">NowNexus Group, S.L. es el responsable del tratamiento de los datos personales recogidos a través de este sitio web, de acuerdo con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).</p>
                        <h3 className="text-lg font-semibold mb-3">2. Finalidad del Tratamiento</h3>
                        <p className="mb-4 text-gray-600">Los datos recogidos mediante el formulario de contacto serán utilizados exclusivamente para gestionar su consulta legal y mantener comunicación profesional con usted.</p>
                        <h3 className="text-lg font-semibold mb-3">3. Base Jurídica</h3>
                        <p className="mb-4 text-gray-600">El tratamiento de datos se basa en el consentimiento explícito otorgado por el interesado al marcar la casilla correspondiente en el formulario de contacto.</p>
                        <h3 className="text-lg font-semibold mb-3">4. Derechos del Interesado</h3>
                        <p className="text-gray-600">Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad dirigiéndose a proteccion.datos@nowgroup.es.</p>
                    </LegalModal>
                )}
                {activeModal === 'terms' && (
                    <LegalModal title="Aviso Legal" onClose={() => setActiveModal(null)}>
                        <h3 className="text-lg font-semibold mb-3">1. Datos Identificativos</h3>
                        <p className="mb-4 text-gray-600">En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información, NowNexus Group, S.L. informa que es titular del presente sitio web.</p>
                        <h3 className="text-lg font-semibold mb-3">2. Propiedad Intelectual</h3>
                        <p className="mb-4 text-gray-600">Todos los contenidos del sitio web (textos, imágenes, logotipos, diseño gráfico) son propiedad exclusiva de NowNexus Group, S.L. y están protegidos por las leyes de propiedad intelectual e industrial.</p>
                        <h3 className="text-lg font-semibold mb-3">3. Limitación de Responsabilidad</h3>
                        <p className="text-gray-600">NowNexus Group, S.L. no se hace responsable de los daños que pudieran derivarse del uso del sitio web, ni garantiza la ausencia de virus u otros elementos que pudieran causar alteraciones.</p>
                    </LegalModal>
                )}
                {activeModal === 'cookies' && (
                    <LegalModal title="Política de Cookies" onClose={() => setActiveModal(null)}>
                        <h3 className="text-lg font-semibold mb-3">1. ¿Qué son las cookies?</h3>
                        <p className="mb-4 text-gray-600">Las cookies son pequeños archivos de texto que se almacenan en su dispositivo al visitar un sitio web. Sirven para recordar sus preferencias y mejorar la experiencia de navegación.</p>
                        <h3 className="text-lg font-semibold mb-3">2. Cookies Utilizadas</h3>
                        <p className="mb-4 text-gray-600">Este sitio web utiliza cookies técnicas estrictamente necesarias para el funcionamiento del sitio y cookies de preferencias para recordar las elecciones del usuario.</p>
                        <h3 className="text-lg font-semibold mb-3">3. Gestión de Cookies</h3>
                        <p className="text-gray-600">Puede configurar su navegador para bloquear o eliminar las cookies. Sin embargo, esto puede afectar la funcionalidad de algunas secciones del sitio web.</p>
                    </LegalModal>
                )}
            </AnimatePresence>
        </>
    );
}
