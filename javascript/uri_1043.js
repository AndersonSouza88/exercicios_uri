var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

var perimetro;
var area;

if (A + B > C) {
    perimetro =(A + B) *2 / 2;
    console.log("Perimetro = " + perimetro.toFixed(1));
}
else {
    area = A + B + C;
    console.log("Area = " + area.toFixed(1));
}
