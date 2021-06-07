var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');
//var lines = input.split('\n');
var inicio = parseInt(lines.shift());
var fim = parseInt(lines.shift());

if (inicio == fim) {
    console.log("O JOGO DUROU 24 HORA(S)");
} else if (inicio < fim) {

    console.log("O JOGO DUROU " + (fim - inicio) + " HORA(S)");
} else {

    console.log("O JOGO DUROU " + ((24 - inicio) + fim) + " HORA(S)");
}




