var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


var X = parseInt(lines[0].shift().split(' '));
var Y = parseInt(lines[1].shift().split(' '));


while (X != 0 || Y != 0) {
   
    if (X > 0 && Y > 0) {
        console.log("primeiro");
    }
    else if (X < 0 && Y > 0) {
        console.log("segundo");
    }
    else if (X < 0 && Y < 0) {
        console.log("terceiro");

    }
    else if (X > 0 && Y < 0) {
        console.log("quarto");
    }
    linha = lines.shift().split(' ');
    x = linha[0];
    y = linha[1];

}
