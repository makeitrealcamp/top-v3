function traverse(arr, fn) {
	for (let i = 0; i < arr.length; i++) {
		fn(arr[i]);
	}
}

traverse([ 1, 2, 3, 4 ], function(e) {
	console.log(e);
});
// should print:
// 1
// 2
// 3
// 4
