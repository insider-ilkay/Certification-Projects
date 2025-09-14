const Person = function(firstAndLastName) {
    let firstName = firstAndLastName.split(' ')[0];
    let lastName = firstAndLastName.split(' ')[1];
    
    this.getFirstName = () => firstName;
    this.getLastName = () => lastName;
    this.getFullName = () => `${firstName} ${lastName}`;
    this.setFirstName = (first) => firstName = first;
    this.setLastName = (last) => lastName = last;
    this.setFullName = (firstAndLastName) => {
      [firstName, lastName] = firstAndLastName.split(' ');
    };
};
  
const ilkay = new Person('Ilkay Bora');

console.log(ilkay.getFirstName())
console.log(ilkay.getLastName())
console.log(ilkay.getFullName())

ilkay.setFullName('Ilkay Mehmet')

console.log(ilkay.getFirstName())
console.log(ilkay.getLastName())
console.log(ilkay.getFullName())