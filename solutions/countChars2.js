/*
* Declarar función que recibe un String
* Debe retornar un Objeto con el número de veces que un cáracter
aparece en el String
* Definir un nuevo Objeto
* Iniciar a recorrer el String desde índice "0" hasta el length del String
    ** Si el valor es una propiedad de el objeto sumar + "1" ,
    ** Si no está agregarlo con valor de "1",
    ** Si el Objeto tiene la propiedad ' ' eliminarla.
Retornar el Objeto (Imprimir en consola)
*/


function frequencies(str){
    obj = {}
    for (let i = 0; i < str.length; i++){
        if (obj.hasOwnProperty(str[i])){
            obj[str[i]] += 1
        }
        else {
            obj[str[i]]  = 1
        }
        if (obj.hasOwnProperty(' ')){
            delete obj[' ']
        }
    }
console.log(obj)
}

frequencies("anita lava la tina")