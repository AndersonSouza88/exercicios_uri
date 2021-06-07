var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');
var X = parseFloat(input);

if (X >= 0 && X <= 25.0000) {
    console.log("Intervalo [0,25]");

} else if (X >= 25.00001 && X <= 50.0000000) {
    console.log("Intervalo (25,50]");

}

 else if (X >= 75.00001 && X <= 100.0000000) {
    console.log("Intervalo (75,100]");

} else {
    console.log("Fora de intervalo");

}