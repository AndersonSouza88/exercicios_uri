var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numero;
var positivo = 0;
var negativo = 0;

for (var cont = 0; cont < 6; cont++) {
    numero = lines.shift();
    if (numero > 0) {
        positivo++;
    }
    else if (numero < 0) {
        negativo++;
    }
}
console.log(positivo + " valores positivos");
console.log(negativo + " valores negativos");