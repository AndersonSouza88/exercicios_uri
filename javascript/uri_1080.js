var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var maior = 0;
var posMaior = 1;
var x;

for(var cont = 1 ; cont <= 100; cont ++){
    x= parseInt(lines.shift());
    if(cont ===1){
        maior = x;
        posMaior = 1;
    }else if( x > maior){
        maior = x;
        posMaior = cont;
    }
}
console.log(maior);
console.log(posMaior);