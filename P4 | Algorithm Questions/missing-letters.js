const fearNotLetter = (str) => {
    const missing = [...str].find((char, i) => {
      if (i === str.length - 1) return false;
      return str.charCodeAt(i + 1) - str.charCodeAt(i) > 1;
    });
    
    return missing ? String.fromCharCode(missing.charCodeAt(0) + 1) : undefined;
}
  
const missingLetter = fearNotLetter('abce');
  
console.log(missingLetter)
  
  