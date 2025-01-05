

// give an array of integers,
// three way to solve a problems


function arrayReplace(inputArray, elementToReplace, subtractionElem) {
    if (inputArray?.length === 0) return

   inputArray?.forEach((element, index) => {
        if (element === elementToReplace) {
            inputArray[index] = subtractionElem
        }
    });
return inputArray

}


const result1 = arrayReplace([1, 2, 1], 1, 3);

console.log(result1);





function arrayReplace(inputArray, elementToReplace, subtractionElem) {
    if (!inputArray?.length) return; // Check for an empty array

    return inputArray.map(element => 
        element === elementToReplace ? subtractionElem : element
    );
}

const result2 = arrayReplace([1, 2, 1], 1, 3);

console.log(result2); // Output: [3, 2, 3]







function inputArray(array, replace, subtraction){
    if(array?.length === 0) return

   for(let i = 0; i < array?.length; i++){
    if(array[i] === replace){
        array[i] = subtraction

    }
   }
 return array   
}

const result3 = inputArray([1,2,1], 1, 3)
console.log(result3);

