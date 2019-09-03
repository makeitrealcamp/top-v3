/*
Function hasPairWithSum receives an array of integers 'array' and a integer 'sum', 
returns true if a pair of numbers of the given array can be added up to obtain sum.


hasPairwithSum([1, 2, 4, 4],8) returns true given that the last two number of the array add up to 8.
hasPairwithSum([1, 2, 3, 9],8) returns false given that only 

Instructions
1. Define an array 'comp' to store the complements of each number of the array
2. Run 'array' searching for a complement of each element in 'comp'
3. if there is a complement in 'comp' return true else add the complement of the element to the array and keep running the array
4. return false if the iteration finished without a coincidence
*/
function hasPairWithSum(array, sum){
    let comp = Array()
    for (let i = 0; i < array.length; i++) {
        if(comp.indexOf(sum-array[i])>-1){
            return true
        }else{
            comp.push(sum-array[i])
        }
    }
    return false
}
console.log(hasPairWithSum([1, 2, 4, 4],8))
console.log(hasPairWithSum([1, 2, 3, 9],8))
