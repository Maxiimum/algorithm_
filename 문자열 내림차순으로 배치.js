function solution(s) {
    let result = 
        s.split('')
         .map((a) => {return a.charCodeAt(0)})
         .sort((a,b) => {return b-a});
    
    return result.map((a) => {return String.fromCharCode(a);}).join('');
