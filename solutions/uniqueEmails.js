/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    var validEmails = []
    for (let i = 0; i < emails.length; i++) {
        let email = checkEmail(emails[i])
        if (validEmails.indexOf(email) == -1) {
            validEmails.push(email)
        }
    }
    return validEmails.length
};

function checkEmail(email) {
    var name = email.substring(0, email.indexOf('@'))
    name = name.replace(/\./g, "")
    name = name.replace(/\+.*/g, "")
    return name + email.substring(email.indexOf('@'))
}