function solution(s) {
    
    let result = s.split('');  
    let bool = true;
    
    for (let i in result){
        if (result[i] !== ' ' && bool){
            result[i] = result[i].toUpperCase();
            bool = false;
        } else if (result[i] !==' ' && !bool){
            result[i] = result[i].toLowerCase();
            bool = true;
        }
        if (result[i] === ' '){
            bool =true;
        }
    }
    
    return result.join('');
}
