
const tweet = 'aprendiendo JavaScript con el curso de desarrollo wed completos';
const producto6 = 'monitor HD'


console.log(tweet.length);
console.log(producto6);

// IndexOf

console.log(tweet.indexOf('JavaScript'));
console.log(producto6.indexOf('tablet'));//cuando la palabra no se encuentra nos envia un menos 1 (-1)

// includes (retorna true o false ) 

console.log(tweet.includes('JavaScript'));// true por que si se encuentra la palabra JavaScript
console.log(producto6.includes('tablet'));// false por que si se encuentra la palabra tablet