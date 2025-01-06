/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let romanData = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let current = romanData[s[i]];
        let next = romanData[s[i + 1]];

        if (next > current) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
};

const result = romanToInt('MCMXCIV');
console.log(result); // Output: 1994
