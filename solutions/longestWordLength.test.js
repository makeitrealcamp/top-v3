// write your pseudocode
/*Input: String
output: Number longest string
Recieve the string
New variable = Split the string by words 
create a result variable
For each element
  if word lenght > result
    result= word.length
return result
*/
// write your solution here

function findLongestWordLength(str) {
  str1=str.split(' ');  
  let result=0
  for (let i=0; i<str1.length; i++){
    if (str1[i].length>result) {
      result = str1[i].length
    } 
  }
  return result
}


// tests
test('returns longest word length', function() {
  expect(findLongestWordLength("hi world")).toBe(5);
  expect(findLongestWordLength("the vampire serie")).toBe(7);
  expect(findLongestWordLength("The quick brown fox jumped over the lazy dog")).toBe(6);
})
