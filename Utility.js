class Utility {
  static sortArray(arr) {
    if (!Array.isArray(arr)) throw new Error("Введен не массив");
    return arr.sort((a, b) => a - b);
  }

  static isPalindrome(str) {
    if (typeof str !== "string") throw new Error("Введена не строка");
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleaned === cleaned.split("").reverse().join("");
  }

  static factorial(n) {
    if (typeof n !== "number" || n < 0) throw new Error("Ошибка факториала");
    return n === 0 ? 1 : n * Utility.factorial(n - 1);
  }

  static fibonacci(n) {
    if (typeof n !== "number" || n < 0) throw new Error("Введеное число не интегрируется");
    const fib = [0, 1];
    for (let i = 2 ; i <= n ; i++ ) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib[n];
  }

  static subStrSearch(str, sub) {
    if (typeof str !== "string" || typeof sub !== "string") throw new Error("Не строки");
    return str.includes(sub);
  }

  static isPrime(num) {
    if (typeof num !== "number" || num <= 1) return false;
    for (let i = 2 ; i <= Math.sqrt(num) ; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  static reverseNumber(x) {
    if (typeof x !== "number") throw new Error("Введено не число");
    const reversed = parseInt(Math.abs(x).toString().split("").reverse().join(""));
    if (reversed > 0x7FFFFFFF) return 0;
    return x < 0 ? -reversed : reversed;
  }

  static toRoman(num) {
    if (typeof num !== "number" || num <= 0 || num >= 4000) throw new Error("Число не в рамках 1-3999");
    const romanNumerals = [
      ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
      ["C", 100] , ["XC", 90] , ["L", 50] , ["XL", 40],
      ["X", 10]  , ["IX", 9]  , ["V", 5]  , ["IV", 4], ["I", 1]
    ];
    let result = "";
    for (const [roman, value] of romanNumerals) {
      while (num >= value) {
        result += roman;
        num    -= value;
      }
    }
    return result;
  }
}

module.exports = Utility;