const pairElement = (str) => {
    return [...str].map(char => {
      switch (char) {
        case 'A': return [char, 'T'];
        case 'T': return [char, 'A'];
        case 'C': return [char, 'G'];
        case 'G': return [char, 'C'];
        default: return [char, ''];
      }
    });
}
  
const pairs = pairElement('GCG');
  
console.log(pairs)