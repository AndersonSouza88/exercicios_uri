var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');
//var lines = input.split('\n');

//lanche
var cod = parseInt(lines.shift());
var qtd = parseInt(lines.shift());
var total = 0;

if (cod == 1) {
    total = qtd * 4.00;   
}
else if (cod == 2) {
    total = qtd * 4.50;
}
else if (cod == 3) {
    total = qtd * 5.00;
}
else if (cod == 4) {
    total = qtd * 2.00;
}
else  {
    total = qtd * 1.50;

}


console.log("Total: R$ " + total.toFixed(2));

