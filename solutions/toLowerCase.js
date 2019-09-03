/*
Implement function ToLowerCase() that has a string parameter str,
and returns the same string in lowercase.
*/

// Definir función, q recibe un String (str) como parametro
// Se define un nuevo String (str2)
// Se recorre 'str'
    // Si el charCodeAt esta entre 64 y 91 (Carácteres Mayús)
        // Se remplaza por el caracter 32 posiciones despúes por medio de
        // la var Z y se concatena a 'str2'
    // Si no: se concatena el mismo caracter a 'str2'
// Se iguala el valor del primer 'str' con 'str2'
// Se retorna 'str'



function toLowerCase(str){
    str2 = ''
    for (let i = 0; i < str.length; i++){
        if (str.charCodeAt([i]) > 64 && str.charCodeAt([i]) < 91){
            let z = (str.charCodeAt([i]) + 32)
            str2 = str2 + String.fromCharCode(z)
        }
        else{
            str2 = str2 + str[i]
        }
    }
    str = str2
    console.log(str)
}


toLowerCase("LOVELY")