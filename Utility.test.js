const Utility = require('./Utility');

test('sortArray: should sort array of integers', () => {
  expect(Utility.sortArray([3, 1, 2])).toEqual([1, 2, 3]);
  expect(() => Utility.sortArray("string")).toThrow("Введен не массив");
});
test('isPalindrome', () => {
  expect(Utility.isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  expect(Utility.isPalindrome("hello")).toBe(false);
});
test('factorial', () => {
  expect(Utility.factorial(5)).toBe(120);
  expect(() => Utility.factorial(-1)).toThrow("Ошибка факториала");
})
test('subStrSearch', () => {
  expect(Utility.subStrSearch('hello', 'hel')).toBe(true);
  expect(Utility.subStrSearch('hello', 'name')).toBe(false);
});
test('isPrime', () => {
  expect(Utility.isPrime(11)).toBe(true);
  expect(Utility.isPrime(4)).toBe(false);
});
test('fibonacci', () => {
  expect(Utility.fibonacci(6)).toBe(8);
  expect(() => Utility.fibonacci(-1)).toThrow("Введеное число не интегрируется");
});
test('reverseNumber', () => {
  expect(Utility.reverseNumber(123)).toBe(321);
  expect(Utility.reverseNumber(-123)).toBe(-321);
  expect(Utility.reverseNumber(123456789)).toBe(987654321);
  expect(() => Utility.reverseNumber('123')).toThrow("Введено не число");
});
test('toRoman', () => {
  expect(Utility.toRoman(1987)).toBe("MCMLXXXVII");
  expect(() => Utility.toRoman(4000)).toThrow("Число не в рамках 1-3999");
});