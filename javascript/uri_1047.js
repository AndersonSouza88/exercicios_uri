var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var horaInicio = parseInt(lines.shift());
var minInicio = parseInt(lines.shift());
var horaFim = parseInt(lines.shift());
var minFim = parseInt(lines.shift());

var hora = 0;
var min = 0;

if (horaFim >= horaInicio) {
    hora = horaFim - horaInicio;
}
else {
    hora = (24 - horaInicio) + horaFim;
}
if (minFim >= minInicio) {
    min = minFim - minInicio;
}
else {
    hora = hora - 0;
    min = (60 + minFim) - minInicio;
}
if(min >= 0 && hora <=24){
    if (horaInicio == horaFim && minInicio == minFim) {
        console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
    }
}
else {
    console.log("O JOGO DUROU " + parseInt (hora) + " HORA(S) E " + parseInt(min) + " MINUTO(S)");
}