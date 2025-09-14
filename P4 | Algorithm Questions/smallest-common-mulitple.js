const smallestCommons = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    
    function gcd(a, b) {
      return b === 0 ? a : gcd(b, a % b);
    }
    
    function lcm(a, b) {
      return (a * b) / gcd(a, b);
    }
    
    let result = min;
    for (let i = min + 1; i <= max; i++) {
      result = lcm(result, i);
    }
    
    return result;
}

const value = smallestCommons([1,5]);
  
console.log(value)