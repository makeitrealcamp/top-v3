function countABs(str){
    obj = {a: 0, b: 0}
    for (let i = 0; i < str.length; i++){
        if (str[i] === 'a'){
            obj.a += 1
        }
        if (str[i] === 'b'){
            obj.b += 1
        }
    }
    return obj
}
countABs("aaabbb"); // { a: 3, b: 3 }