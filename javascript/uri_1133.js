var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift());
var y = parseInt(lines.shift());

if (x > y) {
    for (var cont = y + 1; cont < x; cont++) {
        if (cont % 5 === 2 || cont % 5 === 3) {
            console.log(cont);
        }
    }
} else {
    for (var cont = x + 1; cont < y; cont++) {
        if (cont % 5 === 2 || cont % 5 === 3) {
            console.log(cont);
        }
    }
}