function hasPairWithSum( arr, sum){
  let comp = []
  for (let i=0; i<arr.length; i++){
    let c = sum - arr[i]
    if (comp.includes(c)){
      return true
    } else {
      comp.push(c)
    }
  }
  return false
}
