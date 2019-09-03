/*Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

 

Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

https://leetcode.com/problems/reverse-string/
*/

/* Pseudocodigo
Entrada: vector de caracteres
Salida: vector al revés

Para cada elemento del vector hasta la mitad de la longitud del vector, incrementando de a uno
    en una variable temporal guardar el elemento del vector
    en la primera posición del vector guardar el ultimo elemento
    en la última posición guardar el primer elemento
devolver el vector

*/

var reverseString = function(s) {   
    let length=s.length - 1;
    for (let i = 0; i <= Math.floor(length / 2); i++) {
        let temp = s[i];        
        s[i] = s[length - i];        
        s[length - i] = temp;
    }
    return s;
};

console.log(reverseString(["h","e","l","l","o"]))

//console.log(reverseString(["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"]))

