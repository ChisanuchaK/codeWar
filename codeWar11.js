function solution(list){
    let arrAnswer = [];
        for(let i = 0 ; i < list.length ; i++){
                if(list[i] == 0  || list[i] == undefined){
                    list.splice( i , 1);
                }
              
        }
        return list
   }

   console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))