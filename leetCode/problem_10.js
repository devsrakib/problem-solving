function makeFancyString(s) {
    const result = []; 

    for (let i = 0; i < s.length; i++) {
        
        if (result.length >= 2 && result[result.length - 1] === s[i] && result[result.length - 2] === s[i]) {
            // console.log(result.length >= 2, '1111:::');
            console.log(result.length >= 2, '1111:::');
            continue; 
        }
        result.push(s[i]);
    }
// console.log(result.join(''));
console.log(result[result.length - 1], '909090909009');

    return result.join(''); 
}

console.log(makeFancyString("leeetcode")); 
console.log(makeFancyString("aaabaaaa"));  
console.log(makeFancyString("aab"));     
