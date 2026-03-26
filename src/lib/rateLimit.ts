/**
 * In-memory rate limiter.
 * Tracks requests per IP with a sliding window approach.
 * Configured for 5 requests per 15 minutes per IP.
 */

interface RateLimitEntry {
    timestamps: number[];
}

const rateLimitStore = new Map<string, RateLimitEntry>();

const MAX_REQUESTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

/**
 * Check if a given IP has exceeded the rate limit.
 * Returns true if the request is allowed, false if rate-limited.
 */
export function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
    const now = Date.now();
    const entry = rateLimitStore.get(ip);

    if (!entry) {
        rateLimitStore.set(ip, { timestamps: [now] });
        return { allowed: true, remaining: MAX_REQUESTS - 1 };
    }

    // Filter out timestamps outside the sliding window
    entry.timestamps = entry.timestamps.filter((ts) => now - ts < WINDOW_MS);

    if (entry.timestamps.length >= MAX_REQUESTS) {
        return { allowed: false, remaining: 0 };
    }

    entry.timestamps.push(now);
    return { allowed: true, remaining: MAX_REQUESTS - entry.timestamps.length };
}

// Periodic cleanup to prevent memory leaks
if (typeof setInterval !== 'undefined') {
    setInterval(() => {
        const now = Date.now();
        for (const [ip, entry] of rateLimitStore.entries()) {
            entry.timestamps = entry.timestamps.filter((ts) => now - ts < WINDOW_MS);
            if (entry.timestamps.length === 0) {
                rateLimitStore.delete(ip);
            }
        }
    }, WINDOW_MS);
}
