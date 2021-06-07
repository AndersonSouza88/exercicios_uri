var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numero;
var cont = 0;
var positivo = 0;

while (cont < 6) {
    numero = parseFloat(lines.shift());
    if (numero > 0) {
        positivo++;
    }
    cont++;
}
console.log(positivo + " valores positivos");