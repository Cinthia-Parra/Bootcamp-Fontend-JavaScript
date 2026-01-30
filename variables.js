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

//modulo
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

//estructuras de contro

//if -> si esto, Else -> si no esto otro
if (edad >= 18 && tieneLicencia) {
    console.log("Puede conducir");
} else {
    console.log("No puede conducir");
}
