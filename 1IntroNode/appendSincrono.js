//Terminal: node app.js para comenzar
//Síncrono 
console.log('Iniciando aplicación');
var fs = require('fs');
var contenido = "Hola usuario";
try{
    var data = fs.appendFileSync('saludosync.txt', contenido);
    console.log('Ya se han introducido los datos: '+ data);
}catch(err){
    if (err) console.log('Ha  habido un error');
}
