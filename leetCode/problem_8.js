/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
let result = x.toString().split('').reverse().join('');

if(result == x){
    return true
}
else{
    return false
}
};

