var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var alcool = 0;
var gasolina = 0;
var diesel = 0;
var combustivel = parseInt(lines.shift());
 
while (combustivel != 4){
    combustivel = parseInt(lines.shift());
    if (combustivel == 1){
        alcool++;
    }else if(combustivel == 2){
        gasolina++
    }else if(combustivel == 3){
        diesel++
    }

}
console.log("MUITO OBRIGADO");
console.log("Alcool: " + alcool);
console.log("Gasolina: " + gasolina)
console.log("Diesel: " + diesel)