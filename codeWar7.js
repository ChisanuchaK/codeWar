function pigIt(str){
    let arrayWords = str.split(" ")
    let reverseWords = []
    const selectedSpecialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
        for(let i = 0 ; i < arrayWords.length ; i++){    
            const firstElement = arrayWords[i].split("").shift()
            let word = arrayWords[i].split("").slice(1).join("")
                if(selectedSpecialCharacters.indexOf(arrayWords[i]) < 0){
                    reverseWords.push(word + firstElement + "ay")
                }
                else{
                    reverseWords.push(word + firstElement )
                }
        } 
     
    return reverseWords.join(" ")
  }
  console.log(pigIt('Pig kim kim is cool !'))
