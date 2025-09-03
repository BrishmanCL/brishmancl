export type MetaPixelEvent =
    | "PageView"
    | "ViewContent"
    | "Search"
    | "AddToCart"
    | "AddToWishlist"
    | "InitiateCheckout"
    | "AddPaymentInfo"
    | "Purchase"
    | "Lead"
    | "CompleteRegistration"
    | "Contact"; // <-- el que te interesa

export const FB_PIXEL_ID = "2643255309304610";

declare global {
    interface Window {
        fbq?: (...args: unknown[]) => void;
    }
}

export const fbq = (
    event: MetaPixelEvent,
    data?: Record<string, unknown>
): void => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", event, data);
    }
};
