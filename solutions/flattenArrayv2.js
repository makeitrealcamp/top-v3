


function flatten(array) {
    var array_flattend = [];
    console.log('Array F al inicio ->'+ array_flattend);
    if (array.length===0) {
       return 1
   }
   console.log('Array 0 ->'+ array[0]);
   if (Array.isArray(array[0])){
       return array_flattend=(array_flattend.concat((array[0].slice(0))))
        flatten(array.slice(1))
    } else {
       return  array_flattend=array_flattend.concat(array[0])
        flatten(array.slice(1))
        }
    return array_flattend
  }

console.log('Resultado final'+flatten([[1, 2, 3], [4, 5]])); // [1, 2, 3, 4, 5]
//console.log(flatten([[[1, [1.1]], 2, 3], [4, 5]])); // [1, 1.1, 2, 3, 4, 5]
