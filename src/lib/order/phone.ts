/**
 * Phone numbers leave this site in international (E.164) form — the ordering backend rejects
 * anything else for checkout, reservations and sign-up. Customers type UK numbers the usual way
 * ("07700 900000"), so convert: a leading 0 becomes +44, 00 becomes +, and spaces, dashes and
 * brackets are dropped. Numbers already starting with + are kept as they are.
 */
const E164_PHONE_RE = /^\+[1-9]\d{6,14}$/;

export function toInternationalPhone(input: string): string {
  const compact = input.trim().replace(/[\s\-().]/g, '');
  if (!compact) return '';
  if (compact.startsWith('+')) return compact;
  if (compact.startsWith('00')) return `+${compact.slice(2)}`;
  if (compact.startsWith('0')) return `+44${compact.slice(1)}`;
  if (compact.startsWith('44')) return `+${compact}`;
  return compact;
}

export function isValidPhone(input: string): boolean {
  return E164_PHONE_RE.test(toInternationalPhone(input));
}
