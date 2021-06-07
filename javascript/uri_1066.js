var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numero;
var positivo = 0;
var negativo = 0
var par = 0;
var impar = 0;

for (var cont = 0; cont < 5; cont++) {
    numero = parseInt(lines.shift());
    if (numero % 2 === 0) {
        par++;
    }
    else {
        impar++;
    }
    if (numero > 0) {
        positivo++;
    }
    else if (numero < 0) {
        negativo++;
    } 
}
console.log(par + " valor(es) par(es)");
console.log(impar + " valor(es) impar(es)");
console.log(positivo + " valor(es) positivo(s)");
console.log(negativo + " valor(es) negativo(s)");