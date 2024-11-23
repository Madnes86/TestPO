
function factorial(n) {
  if (n < 0) throw new Error("Факториал только для положительных чисел");
  return n === 0 ? 1 : n * factorial(n - 1);
}

function power(base, exp) {
  let result = 1;
  for (let i = 0; i < Math.abs(exp) ; i++) {
    result *= base;
  }
  return exp >= 0 ? result : 1 / result;
}

function sin(x, terms = 10) {
  x = x % (2 * Math.PI);
  let result = 0;
  for (let i = 0; i < terms; i++) {
    let term = power(-1, i) * power(x, 2 * i + 1) / factorial(2 * i + 1);
    result += term;
  }
  return result;
}

function cos(x, terms = 10) {
  x = x % (2 * Math.PI);
  let result = 0;
  for (let i = 0; i < terms; i++) {
    let term = power(-1, i) * power(x, 2 * i) / factorial(2 * i);
    result += term;
  }
  return result;
}

function ln(x, terms = 10) {
  if (x <= 0) throw new Error("Логарифм только для положительных чисел");
  if (x > 2)  return nell;
  let result = 0;
  const y = x - 1;
  for (let i = 1 ; i <= terms ; i++) {
    let term = power(-1, i + 1) * power(y, i) / i;
    result += term;
  }
  return result;
}

const { sqrt } = Math;

function f(x) {
  if (x === 0) throw new Error("ln не определен")
  if (x <= 0) {
    const sinX   = sin(x);
    const lnAbsX = ln(Math.abs(x));
    const cosLnAbsX = cos(lnAbsX);
    const result = sqrt(sinX * cosLnAbsX);
    return result;
  } else {
    const cosX   = cos(x);
    const sinX   = sin(x);
    const result = (1 - cosX) / sinX;
    return result;
  }
}

module.exports = { factorial, power, sin, cos, ln, f }; 
a = 0