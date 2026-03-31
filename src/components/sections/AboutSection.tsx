'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

/* ── Activity data ── */
const ACTIVITIES = [
    {
        title: 'Consultoría Integral',
        description:
            'Asesoramiento estratégico, económico y organizativo, incluyendo apoyo legal, administrativo y cumplimiento normativo.',
        imageSrc: '/images/about_consulting_img_1774953044000.png',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
            />
        ),
    },
    {
        title: 'Gestión de Eventos',
        description:
            'Organización y planificación integral de ferias, congresos, encuentros corporativos y actividades culturales.',
        imageSrc: '/images/about_events_img_1774953058697.png',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
        ),
    },
    {
        title: 'Marketing y Comunicación',
        description:
            'Servicios completos de publicidad, branding, diseño gráfico e identidad corporativa, tanto online como offline.',
        imageSrc: '/images/about_marketing_img_1774953076942.png',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
            />
        ),
    },
    {
        title: 'Transformación Digital e IT',
        description:
            'Consultoría tecnológica, desarrollo de software, ciberseguridad, inteligencia artificial, servicios en la nube y automatización.',
        imageSrc: '/images/about_tech_img_1774953089669.png',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z"
            />
        ),
    },
    {
        title: 'Formación y Educación',
        description:
            'Impartición de programas formativos, talleres, seminarios y conferencias en modalidad presencial y online.',
        imageSrc: '/images/about_training_img_1774953105250.png',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
        ),
    },
    {
        title: 'Gestión de Proyectos',
        description:
            'Coordinación, desarrollo y seguimiento integral de proyectos empresariales, tecnológicos y de innovación.',
        imageSrc: '/images/about_projects_img_1774953131393.png',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z"
            />
        ),
    },
    {
        title: 'Inversión y Holding',
        description:
            'Gestión de inversiones empresariales y administración de acciones o participaciones en otras sociedades nacionales o extranjeras.',
        imageSrc: '/images/about_holding_img_1774953145970.png',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
            />
        ),
    },
    {
        title: 'Propiedad Intelectual',
        description:
            'Creación, adquisición y comercialización de patentes, marcas, software y cualquier otro activo digital.',
        imageSrc: '/images/about_intellectual_img_1774953161171.png',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.764m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
            />
        ),
    },
    {
        title: 'Consideraciones Legales',
        description:
            'Las actividades profesionales se ejercen mediante intermediación y se permite la ejecución indirecta a través de otras sociedades.',
        imageSrc: '/images/about_legal_img_1774953174819.png',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
            />
        ),
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

/* ── Activity card (presentational) ── */
function ActivityCard({
    title,
    description,
    icon,
    imageSrc,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    imageSrc: string;
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-accent-gold)]/40 hover:shadow-xl transition-all duration-500 flex flex-col h-full"
        >
            {/* Image Box */}
            <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-[#0A1128]/20 to-transparent" />
                
                {/* Floating Icon */}
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-[var(--color-primary-dark)] flex items-center justify-center border border-white/20 group-hover:bg-[var(--color-accent-gold)] transition-colors duration-300 shadow-lg z-10">
                    <svg
                        className="w-6 h-6 text-[var(--color-accent-gold)] group-hover:text-white transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                    >
                        {icon}
                    </svg>
                </div>
            </div>

            {/* Content Space */}
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-accent-gold)] transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm flex-1">
                    {description}
                </p>
            </div>
            
            {/* Subtle bottom border highlight */}
            <div className="h-1 w-full bg-transparent group-hover:bg-gradient-to-r group-hover:from-[var(--color-accent-gold)] group-hover:to-yellow-300 transition-colors duration-500" />
        </motion.div>
    );
}

/* ============================================
   MAIN COMPONENT
   ============================================ */
export default function AboutSection() {
    return (
        <section
            id="sobre-nosotros"
            className="py-20 md:py-28 lg:py-32 bg-[var(--color-bg-light)]"
            aria-label="Sobre Nosotros"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* ── Section Header ── */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6"
                >
                    <span className="text-sm font-medium text-[var(--color-accent-gold)] tracking-widest uppercase">
                        Sobre Nosotros
                    </span>
                    <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[var(--color-text-primary)] leading-tight max-w-4xl mx-auto">
                        NowNexus Group es una firma consultora y legal multidisciplinar, con un equipo dinámico
                        y altamente cualificado, que opera bajo un sistema de gestión de calidad definido.
                    </h2>
                </motion.div>

                {/* ── Company Subtitle ── */}
                <motion.p
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-center text-lg md:text-xl font-medium text-[var(--color-accent-gold)] mb-16 md:mb-20 max-w-3xl mx-auto"
                >
                    Grupo de consultoría, asesoramiento, innovación, marketing y gestión de servicios
                </motion.p>

                {/* ── Grid: Activities with Images ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ACTIVITIES.map((activity, index) => (
                        <ActivityCard key={activity.title} {...activity} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
