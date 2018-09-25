const fs = require('fs')
fs.readFile('./prueba.txt', 'utf-8', (err, data)=>{
    if(err) throw err
    console.log('Contenido fichero: ${data}')
})
console.log('Todavía no tenemos el valor de fs.readFile')