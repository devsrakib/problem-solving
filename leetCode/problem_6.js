const row = 5;
const col = 4;
let star = ''


for(let i = row; i > 0; i--){
    for(let j = 0; j < i; j++){
        star += '*'
    }
    star += '\n'
}

console.log(star);



const rows = 4; 
const baseHeight = 2; 
const baseWidth = 5;
let pattern = '';

for (let i = 1; i <= rows; i++) {
    for (let j = 0; j < rows - i; j++) {
        pattern += ' ';
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        pattern += '*';
    }
    pattern += '\n';
}

// Base (Rectangle)
for (let i = 0; i < baseHeight; i++) {
    for (let j = 0; j < rows - 2; j++) {
        pattern += ' ';
    }
    for (let k = 0; k < baseWidth; k++) {
        pattern += '*';
    }
    pattern += '\n';
}

console.log(pattern);



const topWall = 5;
const sidesWall = 5;

let stars = ''

for(let i = 1; i <= topWall; i++){
    for(let j = 1; j <= sidesWall; j++){
        if(j == 1 || j == sidesWall){
            stars += '*'
        }else if(i == 1 || i == topWall){
            stars += '*'
        }else{
            stars += ' '
        }
    }
    stars += '\n'
}

console.log(stars);






