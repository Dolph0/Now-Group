import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/schemas/contactSchema';
import { sanitizeRecord } from '@/lib/sanitize';
import { checkRateLimit } from '@/lib/rateLimit';

const ALLOWED_ORIGINS = [
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
];

function getClientIp(request: NextRequest): string {
    const forwarded = request.headers.get('x-forwarded-for');
    if (forwarded) {
        return forwarded.split(',')[0].trim();
    }
    return request.headers.get('x-real-ip') || '127.0.0.1';
}

export async function POST(request: NextRequest) {
    try {
        // 1. CORS Validation
        const origin = request.headers.get('origin');
        if (origin && !ALLOWED_ORIGINS.includes(origin)) {
            return NextResponse.json(
                { success: false, message: 'Origen no autorizado' },
                { status: 403 }
            );
        }

        // 2. Rate Limiting
        const clientIp = getClientIp(request);
        const { allowed, remaining } = checkRateLimit(clientIp);

        if (!allowed) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Demasiadas peticiones. Por favor, intente más tarde.',
                },
                {
                    status: 429,
                    headers: {
                        'X-RateLimit-Remaining': '0',
                        'Retry-After': '900',
                    },
                }
            );
        }

        // 3. Parse and Validate with Zod
        const body = await request.json();
        const validationResult = contactFormSchema.safeParse(body);

        if (!validationResult.success) {
            const fieldErrors = validationResult.error.flatten().fieldErrors;
            return NextResponse.json(
                {
                    success: false,
                    message: 'Datos de formulario no válidos',
                    errors: fieldErrors,
                },
                { status: 400 }
            );
        }

        // 4. Sanitize all text fields
        const sanitizedData = sanitizeRecord(validationResult.data);

        // 5. Dispatch to external service (mock for now)
        // In production, integrate with SendGrid/Resend/CRM API:
        // const apiKey = process.env.CRM_API_KEY;
        // await fetch('https://api.sendgrid.com/v3/mail/send', { ... });
        console.log('[Contact API] Sanitized data received:', {
            nombre: sanitizedData.nombre,
            cargo: sanitizedData.cargo,
            entidad: sanitizedData.entidad,
            email: sanitizedData.email,
            asunto: sanitizedData.asunto,
            timestamp: new Date().toISOString(),
        });

        // 6. Success Response
        return NextResponse.json(
            {
                success: true,
                message: 'Consulta procesada correctamente',
            },
            {
                status: 200,
                headers: {
                    'X-RateLimit-Remaining': remaining.toString(),
                },
            }
        );
    } catch (error) {
        console.error('[Contact API] Internal error:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Error interno del servidor. Por favor, intente más tarde.',
            },
            { status: 500 }
        );
    }
}
