function solution(id_list, report, k) {
    let result = [];
    let arr = [];
    let cnt = [];
    let tmp = [];

    for (let i in id_list){
        cnt[i]=0;
        result[i]=0;
    }

    const sett = [...new Set(report)];

    for (let i=0; i<sett.length; i++){
        arr[i] = sett[i].split(" ");
    }
    for (let i=0; i<id_list.length; i++){
        for(let j=0; j<arr.length; j++){
            if (arr[j][1] === id_list[i]){
                cnt[i]++;
            }
        }
    }
    for (let i=0; i<cnt.length; i++){
        for(let j=0; j<arr.length; j++){
            if (cnt[i] >= k){
                if (arr[j][1] === id_list[i]){
                    tmp.push(arr[j][0]); 
                }
            }
        }
    }

    for (let i=0; i<id_list.length; i++){
        for(let j=0; j<tmp.length; j++){
            if(tmp[j] === id_list[i])
                result[i]++;
        }
    }

    return result;

}
