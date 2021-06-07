var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var soma = 0;
var x = parseInt(lines.shift());
var y = parseInt(lines.shift());

if (x < y) {
    for (var i = x + 1; i < y; i++) {
        if (i % 2 != 0) {
            soma += i
        }
    }

} else {
    for (var i = y + 1; i < x; i++) {
        if (i % 2 != 0) {
            soma += i;
        }
    }
}
console.log(soma);