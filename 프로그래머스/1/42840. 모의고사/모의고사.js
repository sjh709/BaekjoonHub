function solution(answers) {
    const arr1 = [1, 2, 3, 4, 5]; // 5개씩 반복
    const arr2 = [2, 1, 2, 3, 2, 4, 2, 5]; // 8개씩 반복
    const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 10개씩 반복
    
    let score = [0, 0, 0, 0];
    
    // 정답 체크
    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === arr1[i % arr1.length]) score[1]++;
        if(answers[i] === arr2[i % arr2.length]) score[2]++;
        if(answers[i] === arr3[i % arr3.length]) score[3]++;
    }
    
    let maxScore = Math.max(...score);
    let result = [];
    
    // 가장 높은 점수 받은 사람 배열에 넣기 - 오름차순
    for(let i = 1; i <= 3; i++) {
        if(score[i] === maxScore) result.push(i);
    }
    
    return result;
}