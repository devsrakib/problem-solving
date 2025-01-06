
// problem number 20

function isValid(s) {

    const stack = [];

    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        console.log(char, 'char first');
        
        if (char in bracketMap) { 


            const topElement = stack.length > 0 ? stack.pop() : '#';

            console.log(topElement, 'topElement');

            console.log(bracketMap[char], 'bracketMap');
            
            if (bracketMap[char] !== topElement) {

                return false;

            }
        } else {
            console.log('else element');
            
             // If it's an opening bracket
            stack.push(char);

        }
    }

    // If the stack is empty, all brackets were matched
    return stack.length === 0;
}

const result  = isValid('(')
console.log(result);
