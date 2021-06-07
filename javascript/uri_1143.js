var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());

for( var cont = 1 ; cont <= N; cont++){
    console.log( cont + " " + (cont * cont) + " " + (cont * cont * cont));
}