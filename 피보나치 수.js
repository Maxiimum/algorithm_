function solution(n) {
    let F = [];
    F.push(0),F.push(1);
    
    for(let i=2; i<=n; i++){
        let sum = (F[i-1]+F[i-2])%1234567;
        F.push(sum);
    }
    return F[n];
}
