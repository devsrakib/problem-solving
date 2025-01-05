function mainArray(accounts) {
    let maxWealth = 0;

    for (let i = 0; i < accounts.length; i++) {
        console.log(i, accounts[i]); 
        const currentWealth = accounts[i].reduce((a, b) => a + b, 0);

        if (currentWealth > maxWealth) {
            maxWealth = currentWealth;
        }
    }

    return maxWealth; 
}

const result = mainArray([[1, 2, 4], [3, 4, 1], [5, 1, 5]]);

