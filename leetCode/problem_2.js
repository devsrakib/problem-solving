// using forEach
function subOfTwoNumbers(...params){
    let total = 0;
     params.forEach(element =>{
       total = element + total
    })

    return total
}

console.log(subOfTwoNumbers(1,2,3,4,4));

// using for loop
function TwoSumByFor(...params){
    let total = 0;

    for(let i = 0; i < params?.length; i++){
        total += params[i]
    }
    return total
}

console.log(TwoSumByFor(1,2,3,4,4));


// using reduce
function sumTotalByReduce(...params){
    return params.reduce((sum, val) => sum + val, 0)

     

}

console.log(sumTotalByReduce(2,2,2,2));
