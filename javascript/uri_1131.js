var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var golsInter;
var golsGremio;
var novo = 1;
var totalJogos = 0;
var vitoriasGremio = 0;
var vitoriasInter = 0;
var empates = 0;

while (novo == 1) {
    totalJogos++;
    golsInter = parseInt(lines.shift());
    golsGremio = parseInt(lines.shift());
    if (golsInter > golsGremio) {
        vitoriasInter++;
    } else if (golsGremio > golsInter) {
        vitoriasGremio++;
    }
    else {
        empates++;
    }
    console.log("Novo grenal (1-sim 2-nao)");
    novo = parseInt(lines.shift());
    while (novo != 1 && novo != 2) {
        console.log("Novo grenal (1-sim 2-nao)");
        novo = parseInt(lines.shift());
    }
}
console.log(totalJogos + " grenais");
console.log("Inter:" + vitoriasInter);
console.log("Gremio:" + vitoriasGremio);
console.log("Empates:" + empates);

 if(vitoriasInter > vitoriasGremio){
     console.log("Inter venceu mais");

 }
 else if(vitoriasGremio > vitoriasInter){
     console.log("Gremio venceu mais");
 }
else{
    console.log("Nao houve vencedor");
}


