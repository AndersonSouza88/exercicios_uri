var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());

for (var cont = 0; cont < N; cont++) {
    var x = parseInt(lines.shift());
    if (x === 0) {
        console.log("NULL");
    } else if (x % 2 === 0 && x > 0) {
        console.log("EVEN POSITIVE");
    } else if (x % 2 === 0 && x < 0) {
        console.log("EVEN NEGATIVE");
    } else if (x % 2 != 0 && x > 0) {
        console.log("ODD POSITIVE");
    } else if (x % 2 != 0 && x < 0) {
        console.log("ODD NEGATIVE");
    }
}
