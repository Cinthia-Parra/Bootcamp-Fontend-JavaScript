//Diferencia entre var y val

var color = 'Amarillo';
var color = 'Azul';
var color = 'Morado';

console.log(color);

// val color = 'Amarillo';
// val color = 'Azul';
// val color = 'Morado';

//comparacion simple
let numeroA = 10;
let numeroB = '10';
console.log(numeroA == numeroB); //true

//suma
let suma = numeroA + Number(numeroB);
console.log(suma); //20 
//resta
let resta = numeroA - Number(numeroB);
console.log(resta); //0
//multiplicacion
let multiplicacion = numeroA * Number(numeroB);
console.log(multiplicacion);
//division
let division = numeroA / Number(numeroB);
console.log(division);

//resto de la division
let resultado = 10 % 3; //1
console.log(resultado);

//acumuladores
let contador = 0;
contador += 5; //contador = contador + 5
console.log(contador);

//comparacion estricta
console.log(numeroA === numeroB); //false   

//comparadores logicos
let edad = 18;
console.log(edad >= 18); //true
console.log(edad <= 18); //true
console.log(edad > 18); //false
console.log(edad < 18); //false

//negacion
// ! -> not
console.log(!(edad < 18)); //true 
console.log(!(edad >= 18)); //false

//modulo (para saber si es entero o no, ejemplo caundo divides si te da cero es entero si no entonces tiene . con decimales, entonces ya no es entero las partes)
// ** -> exponente
let exp = nummeroA ** 3; //10^3 = 10*10*10 = 1000
console.log(exp);

//distinto de estrictamente
// !== diferente de valor o tipo
// != diferente de valor
console.log(numeroA !== numeroB); //true 
console.log(numeroA != numeroB); //false

//operadores de comparacion logica AND y OR
let tieneLicencia = true;
let tieneDinero = false;
//&& -> esto y esto, || -> esto o esto
console.log(edad >= 18 && tieneLicencia); //false  
console.log(edad >= 18 || tieneDinero); //true

//estructuras de control / condicionales

//if -> si esto, Else -> si no esto otro
if (edad >= 18 && tieneLicencia) {
    console.log("Puede conducir");
} else {
    console.log("No puede conducir");
}

//Ejercicios de operadores logicos

//AND (Y) &&
//OR (O) ||
//NOT (NO) !


let edadVotante = 25;
let tieneINE = true;


if (edadVotante >= 18 && tieneINE) {
    console.log('Puedes votar en las elecciones.');
} else {
    console.log('No puedes votar.');
}


let numero = 5;
numero = parseInt(numero);

//si queremos saber si es par o impar

if (numero % 2 === 0) {
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}

console.log()

let esPremium = false;
let totalCompa = 120;
let esFinDeSemana = true;

if (esPremium || totalCompa > 1000 && esFinDeSemana) {
    console.log("Descuento aplicado.");
}else {
    console.log("No aplica descuento.");   
}
