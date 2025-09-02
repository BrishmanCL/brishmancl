// lib/fbq.ts
export const FB_PIXEL_ID = "2643255309304610";

// Tipos de eventos estándar
export const fbq = (
    event: string,
    data?: Record<string, any>
): void => {
    if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", event, data);
    }
};
