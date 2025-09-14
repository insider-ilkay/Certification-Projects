const uniteUnique = (...arrays) => {
    const seen = new Set();
    const result = [];
    
    for (const array of arrays) {
      for (const item of array) {
        if (!seen.has(item)) {
          seen.add(item);
          result.push(item);
        }
      }
    }
    
    return result;
}
  
const uniqueNumbers = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

console.log(uniqueNumbers)