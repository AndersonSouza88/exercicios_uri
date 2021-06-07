var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

var perimetro = 0;
var area = 0;

if (B + C > A && A + C > B && A + B > C) {
    perimetro = A + B + C;
    console.log("Perimetro = " + perimetro.toFixed(1));
}
else{
    area = (A + B) * C / 2;
    console.log("Area = " + area.toFixed(1));
}
