function solution(N, stages) {
    const arr = [];
    
    for(let i = 1; i <= N; i++) {
        let same = 0;
        let total = 0;
        for(let j = 0; j < stages.length; j++) {
            if(stages[j] === i) same += 1;
            if(stages[j] >= i) total += 1;
        }
        arr.push([i, same/total]);
    }
    
    arr.sort((a, b) => {
        if(a[1] > b[1]) {
            return -1;
        }else if(a[1] < b[1]) {
            return 1;
        }else {
            return a[0] - b[0];
        }
    });
    
    return arr.map((v) => v[0]);
}