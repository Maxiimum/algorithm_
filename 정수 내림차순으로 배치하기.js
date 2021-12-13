function solution(n) {
    let result = n.toString().split("").map(Number).sort((a, b) => {return b - a;}).join('');
    
    return parseInt(result);
}
