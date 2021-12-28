function solution(n) {
    let x = 0;
    for (let i=2; i<n; i++){
        if (n%i===1){
            x=i;
            return x;
        }
    }
}
