var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift());

if (x % 2 === 0) {
    x++;
}

for (var cont = 0; cont < 6; cont++) {
    console.log(x);
    //x = x + 2;
    x += 2;
}