var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x = parseFloat(lines.shift());
var soma = 0;
var i = 0;

while (x >= 0) {
    i++;
    soma = soma + x;
    x = parseInt(lines.shift());
}
media = soma / i;
console.log(media.toFixed(2));