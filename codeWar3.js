function findMissingLetter(array)
{   
    let alphabetPosition = [...'abcdefghijklmnopqrstuvwxyz']; 
    
    let answer = "";
    for(let i = 0; i < alphabetPosition.length ; i++){
        if(!(alphabetPosition.indexOf(array[i].toLowerCase()) - alphabetPosition.indexOf(array[i+1].toLowerCase()) == -1) ){
            answer =   alphabetPosition[alphabetPosition.indexOf(array[i].toLowerCase())+1]
            break;
        }
    }
      if(array[1] == array[1].toLowerCase()){
            answer = answer.toLowerCase()
      }
      else{
        answer = answer.toUpperCase()
      }
    return answer
}


console.log(findMissingLetter(['a','b','c','f']))