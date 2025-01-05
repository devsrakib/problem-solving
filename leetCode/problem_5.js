function sumAllPrime(num){

    let totalNum = 0;

    for(let i = 2; i< num; i++){
        console.log(i, '..........');
        
        for(let j = 2; j < num; j++){
            console.log(j,';;;;;;;;');
            
            if(i === j){
                totalNum += i
            }
            if(i%j === 0){
                break
            }
        }
    }
    return totalNum
}


console.log(sumAllPrime(10));
