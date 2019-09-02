/*
implement function ToLowerCase() that has 
a string parameter str, and returns the same string in lowercase. 

https://leetcode.com/problems/to-lower-case/description/

*/
var toLowerCase = function(str) {
  let letters={
      A:'a', B:'b', C:'c', D:'d', E:'e', F:'f', G:'g', H:'h', I:'i', J:'j', K:'k', L:'l', M:'m', 
      N:'n', O:'o', P:'p', Q:'q', R:'r', S:'s', T:'t', U:'u', V:'v', W:'w', X:'x', Y:'y', Z:'z'}  
  str=str.split('')
     for (let i=0; i< str.length; i++){
      if (letters.hasOwnProperty(str[i])){
        str[i]=letters[str[i]]
      }
  }
   return str.join('')
};

console.log(toLowerCase("Hello"))