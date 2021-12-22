function solution(s) {
    let arr = s.split('')
    let result = [];
    if (arr.length % 2 === 0){
        result.push(arr[arr.length/2-1]);
        result.push(arr[arr.length/2]);
    } else {
      result.push(arr[Math.floor(arr.length/2)]);
    }
    return result.join('');
}
