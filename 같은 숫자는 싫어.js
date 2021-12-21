function solution(arr){
    let result = [];
    
    for (let i in arr){
        if (arr[i] !==arr[i-1]){
            result.push(arr[i]);
        }
    }
    return result;
    
}
