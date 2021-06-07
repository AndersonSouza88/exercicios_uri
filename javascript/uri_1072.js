var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());
var In = 0 ;
var Out = 0;

for(var i =0 ; i <N ; i++){
    var x = parseInt(lines.shift());
    if( x >= 10 && x <= 20){
        In++;
    }
    else{
        Out++;
    }
}
console.log( In +" in");
console.log( Out + " out");



