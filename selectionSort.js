function selectionSort(arr) {
   for (let i = 0; i < arr.length; i++) {
       let min = i; //Guarda el último valor del arreglo
       for (let j = i + 1; j < arr.length; j++) {
           if (arr[min] > arr[j]) {
               min = j; // cambia las posiciones después de iterar
           }
       }
       if (i !== min) {
           [arr[ i ],arr[min]]= [arr[min],arr[ i ]];
       }
   }
   return arr
}
console.log(selectionSort([ 3,7,98,45,22,2]))
