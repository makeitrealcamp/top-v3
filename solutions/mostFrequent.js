function mostFrequent(arr) {
    let obj = {}
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i]
        if (obj[key] != undefined) {
            obj[key]++
        } else {
            obj[key] = 1
        }

        for (let j = i; j < obj.length; j++) {
            if (obj[key] > max) {
                max = obj[key]
            }
        }
    }

    console.log(max);

}

mostFrequent([1, 3, 2, 1, 4, 1])