function solution(a, b) {
    let sum = 0;
    if (a > b){
        for (b; b<=a; b++){
            sum += b;
        }
    } else if (a < b){
        for (a; a<=b; a++){
            sum += a;
        }
    } else return a;
    return sum;
}
