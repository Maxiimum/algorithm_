function solution(s, n) {
    let arr = s.split('');
    const SfCC = String.fromCharCode;
    // arr = ['a','','B','','z']   n=4
    
    for (let i in arr){
        if (arr[i] === 'z')
            arr[i] = SfCC(96)+n;
        if (arr[i] === 'Z')
            arr[i] = SfCC(64)+n;
        
        arr[i] = arr[i].codePointAt(0)+n;
        
        if (arr[i]-n < 90 && arr[i] > 90){
            arr[i] = SfCC(arr[i]-26);
        } else if (arr[i]-n < 122 && arr[i] > 122){
            arr[i] = SfCC(arr[i]-26);
        } else {
            arr[i] = SfCC(arr[i]);
        }
        
        if (arr[i] < SfCC(65)){
            arr[i] = ' ';
        }
    }

    return arr.join('');
}
