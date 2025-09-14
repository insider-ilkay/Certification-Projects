const truthCheck = (collection, pre) => {
    return collection.every(obj => obj[pre]);
}
  
const isTrue = truthCheck([{'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa'}, {'user': 'Po', 'sex': 'female'}], 'user');
  
console.log(isTrue);