// MergeSort(lista)
//   Si la lista es vacía o tiene un elemento
//     retorne la lista
//   De lo contrario
//     divida la lista en dos (lista1 y lista2)
//     lista1 = MergeSort(lista1)
//     lista2 = MergeSort(lista2)
//     mezcle lista1 y lista2
//     retorne la lista mezclada

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    var half = Math.floor(arr.length / 2);
    var list1 = arr.slice(0, half);
    var list2 = arr.slice(half);

    list1 = mergeSort(list1);
    list2 = mergeSort(list2);

    return merge(list1, list2);
  }
}

function merge(l1, l2) {
  var arr = [];
  var i = 0;
  var j = 0;

  while(i < l1.length && j < l2.length) {
    if(l1[i] < l2[j]) {
      arr.push(l1[i]);
      i++;
    } else {
      arr.push(l2[j]);
      j++;
    }
  }
  return arr.concat(l1.slice(i)).concat(l2.slice(j));
}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));
console.log(mergeSort([2, 5, 1, 3, 7, 2, 3, 8, 6, 3]));
