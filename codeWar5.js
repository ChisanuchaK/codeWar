var isSquare = function(n){
    for(let i = 0 ; i <= n ; i++){
        if(n  == Math.pow(i , 2)){
            return true
        }
    }
    return false
  }

console.log(isSquare(0))