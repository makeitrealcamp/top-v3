function findLongestWordLength (str){
  str = str.split(" ");
  let longestWord = 0;
  for (let i = 0; i < str.length; i++){
    if(str[i].length > longestWord){
      longestWord = str[i].length
    }
  }
  return longestWord
}


test('returns longest word length', function() {
  expect(findLongestWordLength("hi world")).toBe(5);
  expect(findLongestWordLength("the vampire serie")).toBe(7);
  expect(findLongestWordLength("The quick brown fox jumped over the lazy dog")).toBe(6);
})
