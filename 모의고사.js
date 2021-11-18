function solution(answers) {

    let one = [1,2,3,4,5];
    let one_cnt = 0;
    let two = [2,1,2,3,2,4,2,5];
    let two_cnt = 0;
    let three = [3,3,1,1,2,2,4,4,5,5];
    let three_cnt = 0;
    
    let max_score = [1];
    
    for ( let i in answers)
    {
        if( one[i%5] === answers[i]) { one_cnt++; }
        if( two[i%8] === answers[i]) { two_cnt++; }
        if( three[i%9] === answers[i]) { three_cnt++; }

    }
    console.log("원 : "+one_cnt);
    console.log("투 : "+two_cnt);
    console.log("쓰리 : "+three_cnt);
    
    if( one_cnt > two_cnt && one_cnt > three_cnt ) { return max_score; } 
    if( two_cnt > one_cnt && two_cnt > three_cnt ) { 
        max_score.pop(); 
        max_score.push(2);
        return max_score;
    } 
    if( three_cnt > one_cnt && three_cnt > two_cnt ) { 
        max_score.pop(); 
        max_score.push(3);
        return max_score;
    } 
    if( one_cnt > two_cnt && one_cnt === three_cnt ) {
        max_score.push(3);
        return max_score;
    } 
    if( one_cnt === two_cnt && one_cnt > three_cnt ) {
        max_score.push(2);
        return max_score;
    } 
    if( one_cnt < two_cnt && two_cnt === three_cnt ) {
        max_score.pop();
        max_score.push(2);
        max_score.push(3);
        return max_score;
    } 
    if( one_cnt === two_cnt && one_cnt === three_cnt ) {
        max_score.push(2);
        max_score.push(3);
        return max_score; 
    } 
    
}

console.log(solution([1,2,3,4,5]));
console.log(solution([1,3,2,4,2]));