/*
Entrada: Un string como un arreglo de caracteres (s)

Salida: Revertir el string sin crear un nuevo arreglo y sin usar el metodo reverse.

Instrucciones:
1. Crear una función reverseString que reciba un arreglo que simboliza un string (s) como argumento .
2. Recorrer el arreglo desde el ultimo elemento hasta el primero.
3. Ingresar el caracter del elemento como un nuevo elemento.
4. Borrar los elementos desde la posicion 0 hasta la mitad del arreglo resultado.
5. Retornar el arreglo resultante despues de borrar

*/

var reverseString = function(s) {
    for (let i=s.length - 1; i>=0; i--){
        s.push(s[i]);
    }
    s.splice(0, s.length/2)
    return s;
};
console.log(reverseString(["h","e","l","l","o"]));
