/**
*Function createPairs(array) receives an array of strings and prints the strings in random pairs,
in case the number of elements of the array is odd, the last name will be printed alone.
*Steps:
1. Create an object array where each object has two properies: name and weight. 
    Each name is one of the strings from the imput array.
    The weight is randomly assinged number.
2. Sort the object array using the criteria of greatest weight.
3. Print every Two numbers of the array until no one or just one is left and then print the last one if it exist.

This function has linear complexity given the fact that the amount of operations are proportional to the length of the array.
*@param {String[]} array
*/
function createPairs(array) {
    let objs = new Array()
    for(let i = 0; i < array.length; i++) {
        objs[i] = {name: array[i],weight: Math.random()}       
    }
    objs.sort((a, b) => a.weight - b.weight);
    for (let i = 0; i < objs.length; i=i+2) {
        if(i==objs.length-1){
            console.log(objs[i].name)
        }else{
            console.log(objs[i].name+" & "+objs[i+1].name)
        }
    }
}
console.log(createPairs(["Juan", "Pedro", "Mario", "Sergio", "Andrés", "Miguel","Alejandro"]));