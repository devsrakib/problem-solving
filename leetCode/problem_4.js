function inputArray(array){
    for(let i = 1; i < array?.length; i++){
        console.log(i);
        
        if(array[i] < array[i - 1]){
            return false
        }
    }
    return true
}


console.log(inputArray([1,2,3,4,5,5]));
