/*The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.*/


var hammingDistance = function(x, y) {
    function dec2Bin(decimal) {
        return decimal<1 ? 0 : (Math.floor(decimal%2)+10*(dec2Bin(decimal/2)))        
    }
    const arr1=dec2Bin(x).toString().split('');
    const arr2=dec2Bin(y).toString().split('');
//console.log('arr1 '+ arr1);
console.log('arr1 lengt-> '+ arr1.length);
//console.log('arr2 '+ arr2);
console.log('arr1 lengt-> '+ arr2.length);

    if (arr1.length < arr2.length) {       
        for (let i=arr1.length; i<arr2.length-1;i++){
            arr1.unshift('0')
        }
        
    } else  if (arr1.length > arr2.length){
        for (let i=arr2.length; i<arr1.length-1;i++){
            arr2.unshift('0')
        }
    }
   
    let res=0

    for( let i=0; i<arr1.length; i++) {
        console.log('arr1-> '+ arr1[i] + '  arr2-> ' + arr2[i]);
        if (arr1[i] != arr2[i]){
            res++
        }
    }
    return res
};




console.log(hammingDistance(93,73))
console.log(hammingDistance(1,4))
console.log(hammingDistance(4,14))
console.log(hammingDistance(1577962638,1727613287))


