var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numero;
var positivo = 0;
var media = 0;
var soma = 0;

for (var cont = 0; cont < 6; cont++) {
    numero = parseFloat(lines.shift());
    if (numero > 0) {
        soma = soma + numero;
        positivo++;
    }
}
media = soma / positivo;
console.log(positivo + " valores positivos");
console.log(media.toFixed(1));