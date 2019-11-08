function traverse (arr, fn){
  for (let i=0; i<arr.length; i++){
    console.log(arr[i])
}
}

traverse([1, 2, 3,4], function(e) {
  console.log("Hello");
});
// should print:
// 1
// 2
// 3
// 4
