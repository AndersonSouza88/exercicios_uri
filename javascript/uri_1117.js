var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numero = parseFloat(lines.shift());
var nota = 0;
var cont = 0;
var media = 0;

while (cont < 2) {
    if (numero >= 0 && numero <= 10) {
        nota = nota + numero;
        cont++;
    }
    else {
        console.log("nota invalida");
    }

    if (cont <= 2) {
        numero = parseFloat(lines.shift());

    }
}

media = nota / cont;
console.log("media = " + media.toFixed(2));

