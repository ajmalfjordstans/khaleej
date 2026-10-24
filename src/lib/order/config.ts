// Single-tenant ordering system — this site only ever orders for the Khaleej Mandi House store.
export const STORE_SLUG = 'khaleej-mandi-house';

// Site-level override that pauses online ordering regardless of the Admin setting. The normal
// control is Admin → Settings → Online Presence → "Accept online orders" (store.onlineOrderingEnabled);
// leave this false unless you need to pause the site without Admin. See useOrderingPaused.
export const ORDERING_PAUSED_OVERRIDE = true;
export const ORDERING_PAUSED_MESSAGE = 'Online ordering is unavailable right now. Please check back soon.';
