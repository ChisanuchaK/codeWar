function likes(names) {
let message = ""
let userArray = []

for(let i = 0 ; i < names.length ; i++){
    userArray.push(names[i])
}
    if(userArray.length == 0){
        message = "no one likes this"
    }

    else if (userArray.length == 1){
        message = `${userArray[0]} likes this`
    }
    else if (userArray.length == 2){
        message = `${userArray[0]} and ${userArray[1]} like this`
    }
    else if (userArray.length == 3){
        message = `${userArray[0]}, ${userArray[1]} and ${userArray[2]} like this`
    }
    else{
        message = `${userArray[0]}, ${userArray[1]} and ${userArray.length -2} others like this`
    }
    return message
}

console.log(likes(["Alex", "Jacob", "Mark", "Max"]))



