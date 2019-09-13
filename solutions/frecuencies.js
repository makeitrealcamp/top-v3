function frequencies(str) {
    let obj = {}
    str = str.replace(/ /g, "")
    for (let i = 0; i < str.length; i++) {
        let key = str[i]
        if (obj[key] != undefined) {
            obj[key]++
        } else {
            obj[key] = 1
        }
    }
    return obj
}
console.log(frequencies("anita lava la tina"))