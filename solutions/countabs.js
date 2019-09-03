/* Input: string
output: number of character a and b in string
Create a function called countABs
1. Declare the variables count for each of the characters that I want to count
2. Create an object with empty keys.
3. Write a loop to run the length of the string.
4. Write the condition to increase the count for each character that I want to count.
6. Include the result of the count as a key in each element of the objetc.
7. return the object */

function countABs (str){
  let countA = 1;
  let countB = 1;
  let obj = {
    a: "",
    b: ""
    }
  for (let i =0; i<=str.length; i++){
    if (str[i] === "a"){
      h = countA ++;
      obj.a = h;
    } if (str[i] === "b"){
      z = countB ++;
      obj.b = z
    }
  }
  return obj;
}
console.log(countABs("aaabbb"));
