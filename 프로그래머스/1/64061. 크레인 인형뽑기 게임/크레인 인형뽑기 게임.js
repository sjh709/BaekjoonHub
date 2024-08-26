function solution(board, moves) {
    const stack = [];
    let answer = 0;
    
    for(let move of moves) {
        for(let i = 0; i < board.length; i++) {
            if(board[i][move - 1] !== 0) {
                if(stack.length === 0) {
                    stack.push(board[i][move - 1]);
                }else {
                    const top = stack[stack.length - 1];
                    if(top === board[i][move - 1]) {
                        stack.pop();
                        answer += 2;
                    }else {
                        stack.push(board[i][move - 1]);
                    }
                }
                board[i][move - 1] = 0;
                break;
            }
        }
    }
    
    return answer;
}