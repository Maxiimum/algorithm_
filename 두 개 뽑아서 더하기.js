function solution(numbers) {
    let sum_arr= [];

    for (let i=0; i<numbers.length; i++){
        for (let j=0; j<numbers.length; j++){
            if(i !== j){
               sum_arr.push(numbers[i]+numbers[j]);
            }
        }
    }
    const result = [...new Set(sum_arr)].sort( (a,b) => {return a - b});
    return result;
}
