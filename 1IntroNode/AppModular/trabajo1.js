/*
Es recomendable dividir un proyecto en módulos cortos que 
hagan cada tarea. De esta forma no solo es más cómodo sino
que también podemos acceder a esos datos desde múltiples 
ficheros.
Este proyecto está dividido en dos ficheros:
    -trabajo1.js: Main file.
    -user.js: Recupera el usuario del sistema
*/
console.log('Iniciando app');
const fs = require('fs');
const {username, edad} = require('./user');

const saludo = `Hola ${username} tienes ${edad} años`;
fs.appendFile('saludo.txt', saludo, (err) => {
    err ? console.log('Ha habido un error') : console.log('Todo ok');
})