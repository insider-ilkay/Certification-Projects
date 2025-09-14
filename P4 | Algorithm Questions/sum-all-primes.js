const sumPrimes = (num) => {
    const isPrime = n => {
      if (n < 2) return false;
      if (n === 2) return true;
      if (n % 2 === 0) return false;
      return !Array.from({length: Math.floor(Math.sqrt(n)) - 1}, (_, i) => i + 2)
        .some(divisor => n % divisor === 0);
    };
    
    return Array.from({length: num - 1}, (_, i) => i + 2)
      .filter(isPrime)
      .reduce((sum, prime) => sum + prime, 0);
}
  
const sum = sumPrimes(10);

console.log(sum);