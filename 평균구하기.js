function solution(arr) {
    let sum = 0;
    let cnt = 0;

    for (let i of arr){
        sum += i
        cnt++;
    }

    return sum/cnt;
}
