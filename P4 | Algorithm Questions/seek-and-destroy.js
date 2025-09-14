const destroyer = (arr) =>  {
    const toRemove = Array.from(arguments).slice(1);
    return arr.filter(item => !toRemove.includes(item));
}
  
const values = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
 
console.log(values)