var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift());
var y = parseInt(lines.shift());
var soma = 0;

if (x > y) {
    for (var cont = y; cont <= x; cont++) {
        if (cont % 13 != 0) {
            soma += cont;
        }
    } 
}
else{
    for(var i = x ; i <= y; i++){
        if(i %13 !=0){
            soma +=i;
        }
    }
}
console.log(soma);