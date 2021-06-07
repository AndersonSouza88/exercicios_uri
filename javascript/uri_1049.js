var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');
//para o Windows,deve-se atribuir o \r em entradas do tipo string
// para que isso não fique concatenando no final da palavra

var tipo = lines.shift();
var especie = lines.shift();
var alimentacao = lines.shift();

//vertebrado
if (tipo == "vertebrado") {
    if (especie == "ave") {//ave
        if (alimentacao == "carnivoro") {
            console.log("aguia")
        }
        else {// onivoro
            console.log("pomba");
        }
    }
    else { // mamifero
            if (alimentacao == "onivoro") {
                console.log("homem");
            }
            else {//herbivoro
                console.log("vaca");
        }
    }
}
//invertebrado
else {
    if (especie == "inseto") {//inseto
        if (alimentacao == "hematofago") {
            console.log("pulga");
        }
        else {//herbivoro
            console.log("lagarta");
        }
    }
    else {//anelideo
        if (alimentacao == "hematofago") {
            console.log("sanguessuga")
        }
        else {
            console.log("minhoca");
        }
    }
}
