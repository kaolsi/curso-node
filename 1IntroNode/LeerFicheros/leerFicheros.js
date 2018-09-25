
const fs = require('fs');
var num1;
var num2;

//Síncrono
var num1 = fs.readFileSync('./numero1.txt','utf8');
var num2 = fs.readFileSync('./numero2.txt','utf8');

//Asíncrono
/*Se ahorraría tiempo pero no se puede de forma normal ya que */

var suma = parseInt(num1)+parseInt(num2);
console.log(suma);