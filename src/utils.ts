/**
 * Utility functions
 */

/**
 * Format a number as currency
 */
export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Check if a number is even
 */
export function isEven(n: number): boolean {
  return n % 2 === 0;
}

/**
 * Check if a number is odd
 */
export function isOdd(n: number): boolean {
  return !isEven(n);
}
