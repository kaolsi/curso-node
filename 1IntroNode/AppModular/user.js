/*
-trabajo1.js
-user.js
*/

console.log('Cargando módulo de usuario');

const os = require('os');
const {username} = os.userInfo();
const edad = 25;
const direccion = "Tenor Fleta";

module.exports = {
    username,
    edad,
    direccion
}