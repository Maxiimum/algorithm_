function solution(numbers, hand) {
    const location = [[3,1],[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];
    let result = [];
    let l_curlo = [3,0];
    let r_curlo = [3,2];


    for (let i in numbers){
        switch(numbers[i]){
                case 1: result.push("L"); l_curlo = location[1]; break;
                case 2: 
                    if(lo_calcu(2,l_curlo) > lo_calcu(2,r_curlo)){
                        result.push("R"); r_curlo = location[2]; break;
                    } 
                    else if (lo_calcu(2,l_curlo) < lo_calcu(2,r_curlo)){
                        result.push("L"); l_curlo = location[2]; break;
                    }
                    else if (lo_calcu(2,l_curlo) === lo_calcu(2,r_curlo)){
                        if (hand === "right"){result.push("R"); r_curlo = location[2]; break;}
                        else {result.push("L"); l_curlo = location[2]; break;}
                    }
                case 3: result.push("R"); r_curlo = location[3]; break;
                case 4: result.push("L"); l_curlo = location[4]; break;
                case 5:  
                    if(lo_calcu(5,l_curlo) > lo_calcu(5,r_curlo)){
                        result.push("R"); r_curlo = location[5]; break;
                    } 
                    else if (lo_calcu(5,l_curlo) < lo_calcu(5,r_curlo)){
                        result.push("L"); l_curlo = location[5]; break;
                    }
                    else if (lo_calcu(5,l_curlo) === lo_calcu(5,r_curlo)){
                        if (hand === "right"){result.push("R"); r_curlo = location[5]; break;}
                        else {result.push("L"); l_curlo = location[5]; break;}
                    }
                case 6: result.push("R"); r_curlo = location[6]; break;
                case 7: result.push("L"); l_curlo = location[7]; break;
                case 8: 
                    if(lo_calcu(8,l_curlo) > lo_calcu(8,r_curlo)){
                        result.push("R"); r_curlo = location[8]; break;
                    } 
                    else if (lo_calcu(8,l_curlo) < lo_calcu(8,r_curlo)){
                        result.push("L"); l_curlo = location[8]; break;
                    }
                    else if (lo_calcu(8,l_curlo) === lo_calcu(8,r_curlo)){
                        if (hand === "right"){result.push("R"); r_curlo = location[8]; break;}
                        else {result.push("L"); l_curlo = location[8]; break;}
                    }
                case 9: result.push("R"); r_curlo = location[9]; break;
                case 0: 
                    if(lo_calcu(0,l_curlo) > lo_calcu(0,r_curlo)){
                        result.push("R"); r_curlo = location[0]; break;
                    } 
                    else if (lo_calcu(0,l_curlo) < lo_calcu(0,r_curlo)){
                        result.push("L"); l_curlo = location[0]; break;
                    }
                    else if (lo_calcu(0,l_curlo) === lo_calcu(0,r_curlo)){
                        if (hand === "right"){result.push("R"); r_curlo = location[0]; break;}
                        else {result.push("L"); l_curlo = location[0]; break;}
                    }
        }

    }
    return result.join("");
}


function lo_calcu(n, curlo){
    let distance = 0;
    switch(n){
        case 2: distance = Math.abs(0-curlo[0])+Math.abs(1-curlo[1]); break;
        case 5: distance = Math.abs(1-curlo[0])+Math.abs(1-curlo[1]); break;
        case 8: distance = Math.abs(2-curlo[0])+Math.abs(1-curlo[1]); break;
        case 0: distance = Math.abs(3-curlo[0])+Math.abs(1-curlo[1]); break;
    }
    return distance;
}
