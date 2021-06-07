var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var c = parseInt(lines.shift());

if (a < b && a < c && b < c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log();
    console.log(a);
    console.log(b);
    console.log(c);
} else if (a < b && a < c && c < b) {
    console.log(a);
    console.log(c);
    console.log(b);
    console.log();
    console.log(a);
    console.log(b);
    console.log(c);

}
else if (b < a && b < c && a < c) {
    console.log(b);
    console.log(a);
    console.log(c);
    console.log();
    console.log(a);
    console.log(b);
    console.log(c);
}
else if (b < a && b < c && c < a) {
    console.log(b);
    console.log(c);
    console.log(a);
    console.log();
    console.log(a);
    console.log(b);
    console.log(c);
}
else if (c < a && c < b && b < a) {
    console.log(c);
    console.log(b);
    console.log(a);
    console.log();
    console.log(a);
    console.log(b);
    console.log(c);

} else if ( c < a && c < b && a < b){
    console.log(c);
    console.log(a);
    console.log(b);
    console.log();
    console.log(a);
    console.log(b);
    console.log(c);
}