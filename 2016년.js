function solution(a, b) {
    const day = ['THU','FRI','SAT','SUN','MON','TUE','WED'];
    const last = [31,29,31,30,31,30,31,31,30,31,30,31];

    for (let i=0; i<a-1; i++){
        b += last[i];
    }
    return day[b%7];
}
