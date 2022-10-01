function findNb(m) {
    // n^(3)+(n-1)^(3)+...+1^(3)=m
    let result = 0;
    let start = 1
     do {
        result += Math.pow(start , 3)
        if(result == m) {
            return start
        }
        ++start
     } while (result <= m);
    return (-1);
}


console.log(findNb(1071225))