function accum(s) {
	let inputText = s.split("")
    let answer = []
    for(let i = 0 ; i < inputText.length ; i ++){
            answer.push(inputText[i].toUpperCase())
            for(let j = 0 ; j < i ; j++){
                answer[i] = answer[i] + inputText[i].toLowerCase()              
            }
    }
    
    return answer.join("-")
}

console.log(accum("kim"))