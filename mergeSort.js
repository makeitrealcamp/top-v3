// merge

function mergeSort(arr) {
    if (arr.lenght <= 1) {
        return arr
    }
        if (arr.length > 1) {
            var mit = Math.floor(arr.length / 2)
            var list1 = arr.splice(0, (mit))
            var list2 = arr
            return merge(list1, list2, arr)
      function merge(list1, list2, arr) {
        if (list1.length === 0) {
            return arr.concat(list2)
            } else if (list2.length === 0) {
            return arr.concat(list1)
            }if (list1[0] <= list2[0]) {
                  arr = arr.concat(list1.splice(0, 1))
            } if (list2[0] < list1[0]) {
                  arr = arr.concat(list2.splice(0, 1))
                }
                return merge(list1, list2, arr)
    }

}
console.log(mergeSort([2, 5, 6, 3, 7, 1]));
