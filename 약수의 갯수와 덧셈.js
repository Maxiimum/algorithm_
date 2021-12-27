function solution(left, right) {
    let sum = 0;
    for (let i = left; i <=right; i++){

        if(divisor_cnt(i)%2 === 0){sum += i;}
        else {sum -= i;}

    }
    return sum;
}
function divisor_cnt(a){
    let cnt = 0;
    for(let i=1; i<=a; i++){
        if(a%i===0){
            cnt++;
        }
    }
    return cnt;
}
