function shortestToChar(S, C) {
    let ans = [];
    for (let i = 0; i < S.length; i++) {
        for (let j = 0; j < S.length; j++) {
            if ((S[i + j] === C || S[i - j] === C)) {
                ans.push(j);
                break;
            }
        }
    }
    return ans;
}
console.log(shortestToChar("loveleetcode", "e"));