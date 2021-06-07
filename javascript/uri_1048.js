var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var salario = parseFloat(lines.shift());
var reajuste = 0;
var novoSalaraio = 0;
var percentual = 0;

if (salario >= 0 && salario <= 400.00) {
    //15%
    novoSalaraio = salario + (salario * 0.15);
    reajuste = novoSalaraio - salario;
    percentual = "15 %";
}
else if (salario >= 400.01 && salario <= 800.00) {
    //12%
    novoSalaraio = salario + (salario * 0.12);
    reajuste = novoSalaraio - salario;
    percentual = "12 %";

}
else if (salario >= 800.01 && salario <= 1200.00) {
    //10%
    novoSalaraio = salario + (salario * 0.10);
    reajuste = novoSalaraio - salario;
    percentual = "10 %";

}
else if (salario >= 1200.01 && salario <= 2000.00) {
    //7%
    novoSalaraio = salario + (salario * 0.07);
    reajuste = novoSalaraio - salario;
    percentual = "7 %";

}
else if (salario > 20000.00) {
    //4%
    novoSalaraio = salario + (salario * 0.04);
    reajuste = novoSalaraio - salario;
    percentual = "4 %";

}

console.log("Novo salario: " + novoSalaraio.toFixed(2));
console.log("Reajuste ganho: " + reajuste.toFixed(2));
console.log("Em percentual: " + percentual);


