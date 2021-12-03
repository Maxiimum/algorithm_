function solution(participant, completion) {
    
    participant = participant.sort();
    completion = completion.sort();
    
    for ( let i in participant) {
         if(participant[i] !== completion[i])
            return participant[i];
    }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]));
