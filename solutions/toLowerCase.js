/*
Entrada = String con mayúsculas
La función convierte el string a solamente con minúsculas
Instrucciones
definir i=0
mientras i sea menor a la longitud del string de entrada
    definir code = codigo de caracter en posición i
    si code esta entre 65 y 90
        reemplazar el caracter i del string por el caracter con el código code+32
retornar string
*/

function toLowerCase2(str) {
    for(let i=0;i<str.length;i++){
        let code = str.charCodeAt(i);
        if(64<code&&code<91){
            str=str.replace(str[i],String.fromCharCode(code+32))
        }
    }
    return str;
};

console.log(toLowerCase2("TEST test"))