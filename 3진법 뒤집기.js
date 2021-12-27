function solution(n) {
    let tri = n.toString(3).split('').map(Number).reverse().join('');
    let result = Number.parseInt(tri,3);

    return result;

}
