/*

entradas = dos strings
salida = string con las letras en común de esos string
Instrucciones
definir repeated como string vacío
definir i = 0
mientras i sea menor que la longitud del primer string
    si la letra en la posición i del string 1 se encuentra contenida en el string 2
        añadir la letra i del string 1 a repeated
retornar repeated
*/

function repeatedChars(str1,str2) {
    let repeated = ""
    for (let i = 0; i < str1.length; i++) {
        if(str2.indexOf(str1[i])>-1){
            repeated=repeated.concat(str1[i])
        }     
    }
    return repeated
}
console.log(repeatedChars("german", "gabriela"))