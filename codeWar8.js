function tribonacci(signature,n){
  let answer = []
  let sum =0
  for(let i = 0 ; i < n ; i++){
      if( i < signature.length){
        answer.push(signature[i])
      }
      else {
        sum  =  signature[i-1] + signature[i-2] + signature[i-3]
         signature.push(sum)
         answer.push(signature[i])
      }
  }
  return answer
}

console.log(tribonacci([1 , 1 , 1] , 10))

// [1,1,1,3,5,9,17,31,57,105]