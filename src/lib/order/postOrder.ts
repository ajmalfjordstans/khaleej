/**
 * Bookkeeping done once an order actually exists: remembering the checkout phone against the
 * order id (OrderStatusPage needs it to look the order up for a guest) and the local order
 * history.
 *
 * Shared by CheckoutPage (order created immediately) and PendingCheckoutPage (Stripe flow — the
 * order only exists once the webhook has materialized it, after a full-page redirect, so the
 * details are parked in sessionStorage until then).
 */
export interface PlacedOrderDetails {
  phone: string;
  total: number;
  orderType: string;
  historyKey: string;
}

const PENDING_KEY = 'sc_pending_checkout_details';

/** Returns false if the order history couldn't be saved (storage full/blocked). */
export function recordPlacedOrder(orderId: string, d: PlacedOrderDetails): boolean {
  try {
    localStorage.setItem(`guest_order_phone_${orderId}`, d.phone);
  } catch { /* best-effort */ }

  const entry = { id: orderId, phone: d.phone, total: d.total, orderType: d.orderType, createdAt: new Date().toISOString() };
  try {
    const existing = JSON.parse(localStorage.getItem(d.historyKey) ?? '[]');
    localStorage.setItem(d.historyKey, JSON.stringify([entry, ...existing].slice(0, 20)));
    return true;
  } catch {
    return false;
  }
}

export function savePendingOrderDetails(d: PlacedOrderDetails) {
  try {
    sessionStorage.setItem(PENDING_KEY, JSON.stringify(d));
  } catch { /* best-effort — the order page can still be reached with the phone prompt */ }
}

export function takePendingOrderDetails(): PlacedOrderDetails | null {
  try {
    const raw = sessionStorage.getItem(PENDING_KEY);
    sessionStorage.removeItem(PENDING_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
