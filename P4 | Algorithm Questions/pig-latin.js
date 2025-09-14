const translatePigLatin = (str) => {
    const vowels = 'aeiou';
    const firstVowelIndex = [...str].findIndex(char => vowels.includes(char));
    
    if (firstVowelIndex === 0) {
      return str + 'way';
    }
    
    if (firstVowelIndex === -1) {
      return str + 'ay';
    }
    
    return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + 'ay';
}
  
const translation = translatePigLatin('consonant');
  
console.log(translation)
  