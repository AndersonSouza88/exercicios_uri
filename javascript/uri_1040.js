var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var l1 = lines.shift();
var l2 = lines.shift();
l1 = input.split(' ');
var n1 = parseFloat(l1.shift());
var n2 = parseFloat(l1.shift());
var n3 = parseFloat(l1.shift());
var n4 = parseFloat(l1.shift());

var media = ((n1 * 2) + (n2 * 3) + (n3 * 4) + (n4 * 1)) / 10;
console.log("Media: " + media.toFixed(1));

if (media >= 7.0) {
    console.log("Aluno aprovado.");
}
else if (media < 5.0) {
    console.log("Aluno reprovado.");
}
else {
    console.log("Aluno em exame.");

    var notaExame = parseFloat(l2);
    console.log("Nota do exame: " + notaExame.toFixed(1));
    var mediaFinal = (media + notaExame) / 2;
    if (mediaFinal >= 5.0) {
        console.log("Aluno aprovado.");
    }
    else {
        console.log("Aluno reprovado.");
    }
    console.log("Media final: " + mediaFinal.toFixed(1));
}
