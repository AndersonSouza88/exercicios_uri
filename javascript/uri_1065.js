var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numero;
var pares = 0;

for (var cont = 0; cont < 5; cont++) {
    numero =parseInt(lines.shift());
    if (numero % 2 == 0) {
        pares++;
    }

}
console.log(pares + " valores pares");