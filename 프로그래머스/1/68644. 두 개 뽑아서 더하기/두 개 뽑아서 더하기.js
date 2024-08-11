function solution(numbers) {
    const set = new Set();
    // 두 개의 수를 뽑아 set에 넣기 (중복 제거)
    for(let i = 0; i < numbers.length-1; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            let sum = numbers[i] + numbers[j];
            set.add(sum);
        }
    }
    // 오름차순 배열로 정렬하기
    const answer = [...set].sort((a, b) => a - b);
    return answer;
}