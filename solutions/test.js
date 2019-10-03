function checkEmail(email) {
    var name = email.substring(0, email.indexOf('@'))
    name = name.replace(/\./g, "")
    name = name.replace(/\+.*/g, "")
    return name + email.substring(email.indexOf('@'))
}
console.log(checkEmail("test.juan.riano+testtest@gmail.com"));