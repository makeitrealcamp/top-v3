//Write a function called traverse that receives an array and a function.
// It should call the function for each element of the array passing the element as an argument.

function traverse (arr, fn){
  for (let i=0; i<arr.length; i++){
    console.log("Hello")
}
}

traverse([1, 2, 3], function(e) {
  console.log("Hello");
});
// should print:
// "Hello"
// "Hello"
// "Hello"
