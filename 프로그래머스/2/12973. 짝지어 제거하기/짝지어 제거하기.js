function solution(s) {
    const stack = [];
    
    for(let c of s) {
        if(stack.length === 0) {
            stack.push(c);
        }else {
            let last = stack[stack.length - 1];
            
            if(last === c) {
                stack.pop();
            }else {
                stack.push(c);
            }
        }
    }
    
    return stack.length === 0 ? 1 : 0;
}