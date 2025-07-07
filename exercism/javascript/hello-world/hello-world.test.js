import { hello } from './hello-world.js';

describe('hello function', () => {
  test('should return "Hello, World!"', () => {
    expect(hello()).toBe('Hello, World!');
  });

  test('should return a string', () => {
    const result = hello();
    expect(typeof result).toBe('string');
  });

  test('should not be empty', () => {
    const result = hello();
    expect(result.length).toBeGreaterThan(0);
  });
}); 