var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

//Sort Simples

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var c = parseInt(lines.shift());

var menor = 0;
var meio = 0;
var maior = 0;

//A, B, C ou A, C, B
if (a < b && a < c && b < c) {
    menor = a;
    meio = b;
    maior = c;
} else if (a < b && a < c && c < b) {
    menor = a;
    meio = c;
    maior = b;
}
//B, A, C ou B, C, A
else if (b < a && b < c && a < c) {
    menor = b;
    meio = a;
    maior = c;
} else if (b < a && b < c && c < a) {
    menor = b;
    meio = c;
    maior = a;
}
//C, B, A ou C, A, B
else if (c < a && c < b && b < a) {
    menor = c;
    meio = b;
    maior = a;
} else {
    menor = c;
    meio = a;
    maior = b;
}
//exibindo do menor para o maior
console.log(menor);
console.log(meio);
console.log(maior);

console.log();//pulando linha

//exibindo na ordem digitada pelo usuário
console.log(a);
console.log(b);
console.log(c);




