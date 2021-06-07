var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numero = 0;
var nota;
var cont;
var media = 0;
var novoCalculo = 1;

while (novoCalculo == 1) {
    cont = 0;
    nota = 0;
    numero = parseFloat(lines.shift());
    while (cont < 2) {
        if (numero >= 0 && numero <= 10) {
            nota = nota + numero;
            cont++;
        }
        else {
            console.log("nota invalida");
        }
        if (cont < 2) {
            numero = parseFloat(lines.shift());
        }
    }
    media = nota / cont;
    console.log("media = " + media.toFixed(2));
    
    console.log("novo calculo (1-sim 2-nao)");
    novoCalculo = parseInt(lines.shift());

    while (novoCalculo !== 1 && novoCalculo !== 2) {
        console.log("novo calculo (1-sim 2-nao)");
        novoCalculo = parseInt(lines.shift());
    }
}
