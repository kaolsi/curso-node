
/*                      ------------------------OBJETO------------------------
25/9/2018
Funcionamiento de objetos en javascript:
    -No existe la clase como tal, los parámetros se crean junto al primer objeto
*/
var miAlumno = {
    nombre: "Lolo",
    apellido: "Lolez",
    curso: 3,
    nota: 7,
    saludo: function(){
        console.log("Hola");
        return this.nombre;
    }
}
console.log(miAlumno.saludo());

/*   ------------------------------SHORTHAND PROPERTIES------------
Si el valor de la var y la var se llaman igual en el constructor, se pueden omitir*/
/*function createMonster (name,power){
    return{type: 'Monster', name: name, power:power};
}*/

function createMonster (name,power){
    return{type: 'Monster', name, power};
}

var mon = createMonster("lala","poder");

/* -----------------ACCESO A LAS VARIABLES DE UN OBJETO:    DESTRUCTURING(ES6)------
Podemos asignarla de la forma clásica:*/
var miNombre = miAlumno.nombre;

//O asignando mediante los nombres de los campos:
var { nombre, apellido} = miAlumno;
console.log(nombre);

//Podemos utilizar una variable con 3 puntos que agrupe lo que queda del objeto:
var { nombre, apellido, ...datoEscolar} = miAlumno;
//nombre=nombre
//apellido=apellido
//datoEScolar=clase y notas


/*--------------------------------------TEMPLATE STRINGS (ES6)-----------
*/
var a=5;
var b=10;
console.log(`Quince es ${a+b}`);

