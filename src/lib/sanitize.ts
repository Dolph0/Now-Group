/**
 * Sanitizes user input to prevent XSS attacks.
 * Strips HTML tags and dangerous attributes from text content.
 */
export function sanitizeInput(input: string): string {
    return input
        .replace(/<[^>]*>/g, '') // Strip HTML tags
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;')
        .trim();
}

/**
 * Sanitizes all string fields in a record.
 */
export function sanitizeRecord<T extends Record<string, unknown>>(data: T): T {
    const sanitized = { ...data };
    for (const key in sanitized) {
        if (typeof sanitized[key] === 'string') {
            (sanitized as Record<string, unknown>)[key] = sanitizeInput(sanitized[key] as string);
        }
    }
    return sanitized;
}
