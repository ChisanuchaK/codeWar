function alphabetPosition(text){
   let numberOftext = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' ,'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' ,  'n' , 'o' , 'p' , 'q' ,
    'r' , 's' ,'t' , 'u' , 'v' , 'w' , 'x' , 'y' , 'z'] 
    let addText = text.toLowerCase().split("")
    let answer = [];
    for(let i = 0 ; i < addText.length ; i ++){
       if((numberOftext.indexOf(addText[i]) != -1)){
        answer.push( numberOftext.indexOf(addText[i])+1)
       }
    }
    return answer.join(" ")
    
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))