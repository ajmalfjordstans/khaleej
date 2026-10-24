// Single-tenant ordering system — this site only ever orders for the Khaleej Mandi House store.
export const STORE_SLUG = 'khaleej-mandi-house';

// Site-level kill switch for online ordering. While true the menu stays browsable, but items can't
// be added and cart/checkout are blocked. Flip to false and redeploy to take orders again.
export const ORDERING_PAUSED = true;
export const ORDERING_PAUSED_MESSAGE = 'Online ordering is unavailable right now. Please check back soon.';
