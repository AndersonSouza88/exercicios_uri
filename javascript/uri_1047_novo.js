var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var horaInicio = parseInt(lines.shift());
var minInicio = parseInt(lines.shift());
var horaFim = parseInt(lines.shift());
var minFim = parseInt(lines.shift());

var instanteInicio = (horaInicio * 60) + minInicio;
var instanteFim = (horaFim * 60) + minFim;
var duracao = 0;
if (instanteFim > instanteInicio) {
    duracao = instanteFim - instanteInicio;
} else {
    duracao = (24 * 60) - instanteInicio + instanteFim;
}
var duracaoHoras = parseInt(duracao / 60);
var duracaoMin = parseInt(duracao % 60);
console.log("O JOGO DUROU " + parseInt(duracaoHoras) + " HORA(S) E " + parseInt(duracaoMin) + " MINUTO(S)")
