function solution(cards1, cards2, goal) {
    let answer = 'Yes';
    
    for(let word of goal) {
        if(cards1.length > 0 && cards1[0] === word) {
            cards1.shift();
            continue;
        }else if(cards2.length > 0 && cards2[0] === word) {
            cards2.shift();
            continue;
        }else {
            answer = 'No';
            break;
        }
    }
    
    return answer;
}