//Este es un comentario en JavaScript 

//Tipos de datos en JavaScript 

//Number: enteros y descimales 
let edad = 24;
let precio = 199.99;
 console.log("Number:");
 console.log(edad);
 console.log(precio);

 console.log(typeof edad); 
 console.log(typeof precio);

 //String: cadenas de texto 
 let nombre ='Ana'; 
 let saludo = "Hola mundo"; 

 console.log("String:");
 console.log(nombre);
 console.log(saludo);
 console.log(typeof nombre);
 console.log(typeof saludo);

 //Boolean: true o false
 let esMayorDeEdad = true;
 let tienePermiso = false;

 console.log("Type of data Boolean:");
 console.log(esMayorDeEdad);
 console.log(tienePermiso);
 console.log(typeof esMayorDeEdad);

 //Undefined: variable declarada pero sin valor asignado
 let telefono;
 console.log("Type of data Undefined:");
 console.log(telefono);
 console.log(typeof telefono);

 //Null: ausencia intencional de valor
 let Direccion = null;
 console.log("Type of data Null:");
 console.log(Direccion);
 console.log(typeof Direccion); //Resultado sera object, es un error historico de JavaScript (no es igual a object pero nunca lo cambiaron para que no chashe lo existente)

 //Object: coleccion de dato (estructura de datos con propiedades)
let persona = {
    nombre: 'Diego',
    edad: 30,
    ciudad: 'Madrid',
};

console.log("Type of data Object:");
console.log(typeof persona);
console.log(persona);

//symbol: valor unico e inmutable
let id =Symbol('id');
console.log("Type of data Symbol:");
console.log(id);
console.log(typeof id);