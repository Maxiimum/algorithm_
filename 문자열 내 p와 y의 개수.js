function solution(s){
    let result = s.split('');
    let cnt_p = 0;
    let cnt_y = 0;

    for (let i in result){
        if (result[i] ==='p' || result[i] ==='P'){
            cnt_p++;
        } else if (result[i] ==='y' || result[i] ==='Y'){
            cnt_y++;
        }
    }

    return cnt_p===cnt_y ? true : false;
}
