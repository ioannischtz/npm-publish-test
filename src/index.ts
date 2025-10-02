/**
 * Calculator utility functions for testing npm publish workflow
 */

export interface CalculatorOptions {
  precision?: number;
}

export class Calculator {
  private precision: number;

  constructor(options: CalculatorOptions = {}) {
    this.precision = options.precision ?? 2;
  }

  /**
   * Add two numbers
   */
  add(a: number, b: number): number {
    return this.round(a + b);
  }

  /**
   * Subtract two numbers
   */
  subtract(a: number, b: number): number {
    return this.round(a - b);
  }

  /**
   * Multiply two numbers
   */
  multiply(a: number, b: number): number {
    return this.round(a * b);
  }

  /**
   * Divide two numbers
   */
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return this.round(a / b);
  }

  private round(value: number): number {
    const factor = Math.pow(10, this.precision);
    return Math.round(value * factor) / factor;
  }
}

/**
 * Default calculator instance
 */
export const calculator = new Calculator();

/**
 * Get the package version
 */
export function getVersion(): string {
  return '0.0.1';
}
