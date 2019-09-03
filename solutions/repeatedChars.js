/*
Write a function called repeatedChars that receives two strings
and returns a new string with the characters that are repeated
in both input strings:
*/


// Declarar funcion que recibe dos arreglos (a y b)
// Declarar nuevo arreglo
// Recorrer uno "a" y comprar si está en "b"
    // Si esta escribir "a" dentro del nuevo arreglo
// Retornar nuevo arreglo



function repeatedChars(a, b) {
    res = ''
    for (let i = 0; i < a.length; i++) {
        if (b.includes(a[i])) {
            res = res + a[i]
        }
    }
    console.log(res)
}
repeatedChars("german", "gabriela");