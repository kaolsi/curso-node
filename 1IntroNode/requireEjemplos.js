//Terminal: node index2.js para comenzar
/*
Datos del sistema operativo -> objeto -> print dato del objeto en fichero
*/
var fs = require('fs');
var os = require('os');

console.log('Iniciando aplicación');

var user = os.userInfo();
var username = user.username;

var contenido = "Hola " + username;
fs.appendFile(
    'saludo.txt',
    contenido,
    function(err,data){
        if (err) console.log('Ha  habido un error');
        else console.log('Se han introducido datos');
    }
);
