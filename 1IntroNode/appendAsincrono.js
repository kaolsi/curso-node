//Terminal: node appendAsincrono.js para comenzar
//Asíncrono
console.log('Iniciando aplicación');
var fs = require('fs');

fs.appendFile(
    'saludo.txt',
    'Hola usuario',
    function(err,data){
        if (err) console.log('Ha  habido un error');
        else console.log('Se han introducido datos');
    }
);
console.log('Todavía no se han introducido los datos');