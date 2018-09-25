const fs = require('fs');
const data = fs.readFileSync('./prueba.txt', 'utf-8');

console.log('El contenido del fichero es: ${data}');