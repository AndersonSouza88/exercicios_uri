var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var M = parseInt(lines.shift());
var N = parseInt(lines.shift());
var soma = 0;
lines = input.split(' ');

while (M > 0 && N > 0) {
    if (M > N) {
        for (var cont = N; cont <= M; cont++) {
            soma += cont
            console.log(cont + " ");
        }
    } else {
        for (var cont = M; cont <= N; cont++) {
            soma += cont
            console.log(cont + "");
        }
        console.log("SUM=" + soma);
        M = parseInt(lines.shift());
        N = parseInt(lines.shift());
        soma = 0;
      
    }











}