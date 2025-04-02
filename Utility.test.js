
const { factorial, power, sin, cos, ln, f } = require('./Utility');

// Модульный тест
test('factorial()', () => {
  expect(factorial(0)).toBe(1);
  expect(factorial(3)).toBe(120);
  expect(() => factorial(-1)).toThrow("Факториал только для положительных чисел");
});
test('power()', () => {
  expect(power(2, 3)).toBe(8);
  expect(power(2, -3)).toBeCloseTo(0.125);
  expect(power(2, 0)).toBe(1);
});
test('sin', () => {
  expect(sin(0)).toBeCloseTo(0);
  expect(sin(Math.PI / 2)).toBeCloseTo(1);
  expect(sin(Math.PI)).toBeCloseTo(0);
});
test('cos', () => {
  expect(cos(0)).toBeCloseTo(1);
  expect(cos(Math.PI / 2)).toBeCloseTo(0);
  expect(cos(Math.PI)).toBeCloseTo(-1);
});
test('ln', () => {
  expect(ln(1)).toBeCloseTo(0);
  expect(() => ln(-1)).toThrow("Логарифм только для положительных чисел");
});
// Интеграционный тест
test('f(x)', () => {
  expect(f(-1)).toBeNaN();
  expect(f(2)).toBeCloseTo(0.5463024898437906);
});
