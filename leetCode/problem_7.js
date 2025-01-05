/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const arr = num.toString().split("").sort()
    console.log(arr);
    const first = Number(arr[0] + arr[2])
    const second =  Number(arr[1] + arr[3])
    console.log('first', first);
    console.log('second', second);
    
   const sum = Number(arr[0] + arr[2]) + Number(arr[1] + arr[3])
   return sum
    
};

console.log(minimumSum(4009));



/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const digits = [];
    while (num > 0) {
        digits.push(num % 10);
        num = Math.floor(num / 10);
    }
    
    digits.sort((a, b) => a - b);

    const num1 = digits[0] * 10 + digits[2];
    const num2 = digits[1] * 10 + digits[3];
    
    return num1 + num2;
};

console.log(minimumSum(2932)); 
