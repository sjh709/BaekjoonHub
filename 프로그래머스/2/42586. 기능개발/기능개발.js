function solution(progresses, speeds) {
    const answer = [];
    const n = progresses.length;
    
    const daysLeft = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    
    let count = 0;
    let maxDay = daysLeft[0];
    
    for(let i = 0; i < n; i++) {
        if(maxDay >= daysLeft[i]) {
            count++;
        }else {
            answer.push(count);
            count = 1;
            maxDay = daysLeft[i];
        }
    }
    answer.push(count);
    
    return answer;
}