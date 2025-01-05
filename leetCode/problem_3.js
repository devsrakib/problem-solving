function addWall(params){
    let wall = "*".repeat(params[0]?.length + 2);
    params.unshift(wall)
    params.push(wall)
    
    for(i = 1; i < params.length - 1; i++){
        params[i] = '*'.concat(params[i],"*")
    }
    return params
}


console.log(addWall(['abc', 'ded']));



// way two
function addWall(params) {
    let wall = "*".repeat(params[0]?.length + 2);

    let framedRows = params.map(row => `*${row}*`);

    return [wall, ...framedRows, wall];
}

console.log(addWall(['abc', 'ded']));
