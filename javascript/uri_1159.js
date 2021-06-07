var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift());
var soma = 0;
var cont = 0;

while (x != 0) {
    cont = 0;
    soma = 0;

    while (cont < 5) {
        if (x % 2 == 0) {
            soma += x;
            cont++;
        }
        x++
    }
    console.log(soma);
    x = parseInt(lines.shift());
}