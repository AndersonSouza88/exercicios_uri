var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());
var fatoral = 1;

for (var cont = 1; cont <= N; cont++) {
    fatoral = fatoral * cont;
}
console.log(fatoral);