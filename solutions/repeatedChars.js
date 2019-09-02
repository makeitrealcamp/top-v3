function repeatedChars(a,b){
  let res=[]
  for(var i = 0; i <= a.length; i++) {
    for(var j = 0; j <= b.length; j++) {
        if(a[j] === b[i]) {
            res.push(a[j])
        }
    }
}
return res.join('')
}

console.log(repeatedChars("andres", "aaaaaaa"))
