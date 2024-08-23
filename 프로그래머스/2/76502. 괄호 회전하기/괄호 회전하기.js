function isMatch(arr) {
    const stack = [];
    
    for(const c of arr) {
        if(c === '(' || c === '{' || c === '[') {
            stack.push(c);
        }else {
            if(stack.length === 0) {
                return false;
            }else {
                const temp = stack[stack.length - 1];
                if((temp === '(' && c === ')') ||
                   (temp === '{' && c === '}') ||
                   (temp === '[' && c === ']')) {
                    stack.pop();
                }
            }
        }
    }
    
    return stack.length === 0;
}

function solution(s) {
    const arr = [];
    let cnt = 0;
    
    for(const c of s) {
      arr.push(c); 
    }
    
    for(let i = 0; i < s.length; i++) {
        const c = arr.shift();
        arr.push(c);
        if(isMatch(arr)) {
            cnt += 1;
        }
    }
    
    return cnt;
}