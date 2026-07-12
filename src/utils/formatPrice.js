/**
 * formatPrice
 * Formats a numeric price into a luxury-friendly currency string.
 * e.g. 2450000 -> "$2,450,000" | with `perMonth` -> "$8,500/mo"
 */
export function formatPrice(value, { perMonth = false } = {}) {
  if (value === null || value === undefined) return '';
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
  return perMonth ? `${formatted}/mo` : formatted;
}

/**
 * formatCompactPrice
 * Shorter form used in tight UI spaces, e.g. "$2.4M" instead of "$2,450,000"
 */
export function formatCompactPrice(value) {
  if (value === null || value === undefined) return '';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value);
}
