var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());

for (var i = 1; i <= N; i++) {
	if (i % 2 == 0) console.log(i + '^2 = ' + (i * i));
}