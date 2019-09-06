/*
MergeSort(lista)
  Si la lista es vacía o tiene un elemento
    retorne la lista
  De lo contrario
    divida la lista en dos (lista1 y lista2)
    lista1 = MergeSort(lista1)
    lista2 = MergeSort(lista2)
    mezcle lista1 y lista2
    retorne la lista mezclada
*/



function mergeSort (array) {
    if (array.length <=1) {
        return array
    }
  
    const subArray1= array.slice(0,Math.floor(array.length/2));
    const subArray2= array.slice(Math.floor(array.length/2),array.length);
    const left =mergeSort(subArray1)
    const right=mergeSort(subArray2) 
    return merge(mergeSort(left), mergeSort(right));
}


function merge (subArray1, subArray2) {
    var i_sA2=0;
    var i_sAm=0;
    var i_sA1=0;
    var array_merge=[];
    while (i_sA1<subArray1.length && i_sA2<subArray2.length) {        
        if (subArray1[i_sA1] <= subArray2[i_sA2]) {
            array_merge[i_sAm]=subArray1[i_sA1];
            i_sA1++
            
        } else {
            array_merge[i_sAm]=subArray2[i_sA2];
            i_sA2++
            }        
    i_sAm++    
    }
    
return  array_merge.concat(subArray1.slice(i_sA1)).concat(subArray2.slice(i_sA2));
}

console.log(mergeSort([10,9,8,7,6,5,4,3,2,1]));