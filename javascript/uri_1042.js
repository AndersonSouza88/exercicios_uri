var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numeros = input.split(' ');

var a = parseInt(numeros.shift());
var b = parseInt(numeros.shift());
var c = parseInt(numeros.shift());
//a,b,c
if (a < b && a < c) {//a menor valor
    console.log(a);

} else if (b < a && b > c){
    console.log(b);

} else {
    console.log(c);
}

console.log(' ');

if (a < b && a > c ){
    console.log(a);

}  else if (b < a && b > c){ 
    console.log(b);
    
} else {
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);