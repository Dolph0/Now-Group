'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COOKIE_CONSENT_KEY = 'now-group-cookie-consent';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                    role="dialog"
                    aria-label="Consentimiento de cookies"
                >
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-8">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                            <div className="flex-1">
                                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                                    🍪 Utilizamos cookies
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Este sitio utiliza cookies técnicas y de análisis para garantizar la mejor experiencia.
                                    Consulta nuestra Política de Cookies para más información.
                                </p>
                            </div>
                            <div className="flex items-center gap-3 shrink-0">
                                <button
                                    onClick={handleReject}
                                    className="px-5 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors cursor-pointer"
                                >
                                    Rechazar
                                </button>
                                <button
                                    onClick={handleAccept}
                                    className="px-5 py-2.5 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors cursor-pointer"
                                >
                                    Aceptar
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
