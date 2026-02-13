let edad = 20;
//Ejerciocio de condicionales:
//If (sí) es su edad es menor a 18 -> es menor de edad, si no, Else(entonces) es mayor de edad

//en el if es la opcion que esperamos que se cumpla
if (edad < 18) {
  console.log("Eres menor de edad."); // se ejecuta si la condicion es true
} else {
  console.log("Eres mayor de edad."); // se ejecuta si la condicion es false
}

console.log("------------------------------");




//EJERCICIO 2 PARA ENTREGAR EN LA PLATAFORMA

// Si la nota es 90 o más, el estudiante aprueba con "Excelente".-
// Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".-
// Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
// Si la nota es menor de 60, el estudiante no aprueba.

let calificaciones = 90;
//LOGICA 
/* si es mayor o igual a 90 -> excelente,
   si no, entonces SI es mayor o igual a 75 Y menor o igual a 89 -> bien
   ni no, entonces SI es mayor o igual a 60 y mayor  oigual a 74 -> suficiente
   si no -> ENTONCES no cae en nigun caso y por ende no aprueba */

if (calificaciones >= 90) {
  console.log("Excelente");
} else if (calificaciones >= 75 && calificaciones <= 89) {
  console.log("Bien");
} else if (calificaciones >= 60 && calificaciones <= 74) {
  console.log("Suficiente");
} else {
  console.log("No aprobaste");
}
