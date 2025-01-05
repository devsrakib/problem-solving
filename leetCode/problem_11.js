const hasThreeDivisors = (n) => {
    const sqrt = Math.sqrt(n);
    if (sqrt % 1 !== 0) return false;

    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    return isPrime(sqrt);
};

console.log(hasThreeDivisors(2));  
