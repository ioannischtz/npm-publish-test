import { greet, hello } from '../src/index';

describe('Integration Tests', () => {
	describe('greet function', () => {
		it('should greet a person by name', () => {
			const result = greet('Alice');
			expect(result).toContain('Alice');
			expect(result).toContain('Hello');
		});

		it('should greet another person', () => {
			const result = greet('Bob');
			expect(result).toBe('Hello, Bob! Testing changes to the package');
		});

		it('should handle special characters in names', () => {
			const result = greet("O'Brien");
			expect(result).toContain("O'Brien");
		});
	});

	describe('hello constant', () => {
		it('should export hello constant with correct value', () => {
			expect(hello).toBe('world');
		});

		it('should be a string type', () => {
			expect(typeof hello).toBe('string');
		});
	});

	describe('Edge cases', () => {
		it('should handle empty string', () => {
			const result = greet('');
			expect(result).toContain('Hello');
		});

		it('should handle very long names', () => {
			const longName = 'A'.repeat(1000);
			const result = greet(longName);
			expect(result).toContain(longName);
		});

		it('should handle unicode characters', () => {
			const result = greet('<‰');
			expect(result).toContain('<‰');
		});
	});

	describe('Integration scenarios', () => {
		it('should work with multiple calls', () => {
			const names = ['Alice', 'Bob', 'Charlie'];
			const results = names.map((name) => greet(name));

			expect(results).toHaveLength(3);
			results.forEach((result, index) => {
				expect(result).toContain(names[index]);
			});
		});

		it('should maintain consistent behavior', () => {
			const name = 'TestUser';
			const result1 = greet(name);
			const result2 = greet(name);

			expect(result1).toBe(result2);
		});
	});
});
