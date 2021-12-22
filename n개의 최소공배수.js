function solution(arr) {
    let result = arr[0];

    for (let i=1; i<arr.length; i++){
        let lcm = result*arr[i]/gcd(result,arr[i]);
        result = lcm;
    }
    return result;
}

function gcd(n,m){
    while(n > 0){
          let x = m%n;
          m=n;
          n=x;
      }
        return m;
}
