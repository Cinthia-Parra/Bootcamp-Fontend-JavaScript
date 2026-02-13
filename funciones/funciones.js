//sintaxis básica de una función en JavaScript
function nombreDeFuncion(parametros) {
  // Cuerpo de la función
}

function saludar(nombre) {
  return "Hola " + nombre + "!";
}

saludar("Ana"); // Devuelve 'Hola Ana!'

let saludo = saludar("Luis"); // Devuelve 'Hola Luis!'

console.log(saludo); // Imprime 'Hola Luis!'

function sumar(a, b) {
  console.log(a + b); // Imprime la suma de a y b
  return a + b; //retornando el valor de la suma
}
a = 20;
b = 30;

let resultado = sumar(a, b); //variable global
console.log(resultado); // Imprime 50

function restar(num1, num2) {
  let resultado = num1 - num2; //variable local
  return resultado; //return entrega un valor para poder usarlo después
}
console.log(restar(10, 5)); // Imprime 5

function sinRetourn() {
  //cuando no hay return, la función devuelve undefined
  let x = 10;
}
//se logra ejecutar la función pero no devuelve ningún valor
console.log(sinRetourn()); // Imprime undefined, ya que la función no retorna ningún valor
console.log("------------------");

function multiplicar(dato1, dato2) {
  return dato1 * dato2;
}
console.log(multiplicar);
console.log(multiplicar(4)); // Imprime NaN, ya que falta un argumento

//console.log (ana); imprime error porque la variable no está definida

console.log("--------- Arrow function---------");
// Sintaxis de una función flecha (arrow function)
const dividir = (a, b) => a / b; //lo que diga la flecha es lo que se retorna -> ya no se ocupa el return
console.log(dividir(20, 4));

console.log("--------- Arrow function suma---------");

const suma = (a, b) => {
  //una funcion ,as larga con llaves, si necesita el return para devolver un valor
  return a + b;
};
console.log(suma(10, 15)); // Imprime 25

console.log("--------- Arrow function multiplicacion---------");

const multi = (a, b) => {
  return a * b;
}; //si se usa return, se usan paréntesis
console.log(multi(5, 4)); // Imprime 20

console.log("--------- Función anónima---------");
//las funciones anonimas son aquellas que no tienen nombre y no se oucpen mas veces, o queremos evitar scope gloval
//callback (seusa mucho funcines anonis para callbacks, es decir, funciones que se pasan como argumento a otras funciones)
setTimeout(function () {
  console.log("esto se ejecuto después de 3 segundos");
}, 3000);

//cuando NO utilizar funciones anónimas:
//si queremos reutilizar la función, es mejor darle un nombre para poder llamarla después
//cuando tiene logica compleja, es mejor darle un nombre para mejorar la legibilidad del código
//cuando necesitamos testear la función, es mejor darle un nombre para poder escribir pruebas unitarias

// ejecicio 1: funciones para calcular el área de un triangulo
//ejecicio 2: funcion pE verificar si un número es par o impar
//ejercicio 3: funcion para genrar  numeros de fibonacci

//utilizar la funcion con dos ejemplos
console.log("----------Area triangulo---------");
//EJERCICIO 1
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.log(areaTriangulo(20, 10));
console.log(areaTriangulo(50, 90));

console.log("----------par o impar ---------");

function esPar(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return true;
  }
  return false;
}
console.log(esPar(2));
console.log(esPar(3));


// EJERCICIOS
console.log("-----Calcular Area de un Triangulo----")
// Funcion para calcular el area de un triangulo 
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log(areaTriangulo(10, 5)); // 25
console.log(areaTriangulo(7, 4));  // 14

// Lo mismo pero con arrow 
const calcularSuperficie = (b, h) => (b * h) / 2;
console.log(calcularSuperficie(12, 6)); // 36
console.log(calcularSuperficie(9, 4));  // 18

console.log("-----Verificar si es primo----")
// Funcion para verificar si un numero es primo
function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) { // Math.sqrt nos ayuda a llegar hasta la raiz cuadra del numero
        if (numero % i === 0) return false; // Operador modulo (si el residuo es 0 el numero SI se divide, entonces no es primo)
    }
    return true; // Si no encontro divisor, es true
}
console.log(esPrimo(7));  // true
console.log(esPrimo(12)); // false

//Lo mismo pero con arrow
const validarPrimo = (n) => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {  // Empieza en 2 (primer divisor posible)
        if (n % i === 0) return false;
    }
    return true;
};
console.log(validarPrimo(11)); // true
console.log(validarPrimo(15)); // false

console.log("-----Generar Fibonacci----")
// Funcion para generar numeros fibonacci 
function fibonacci(n) { // Cuantos numeros quieres
    let serie = []; // Arreglo vacio

    if (n >= 1) serie.push(0);
    if (n >= 2) serie.push(1);

    for (let i = 2; i < n; i++) { // Empieza desde la posición 2 porque la 0 y 1 ya existen 
        serie.push(serie[i - 1] + serie[i - 2]);
    }

    return serie;
}
console.log(fibonacci(5));  // [0, 1, 1, 2, 3]
console.log(fibonacci(8));  // [0, 1, 1, 2, 3, 5, 8, 13]

// Lo mismo pero con arrow function 
const crearFibonacci = (cantidad) => {
    let lista = [];

    if (cantidad >= 1) lista.push(0);
    if (cantidad >= 2) lista.push(1);

    for (let i = 2; i < cantidad; i++) {
        lista.push(lista[i - 1] + lista[i - 2]); // suma los dos números anteriores y agrega el resultado al arreglo
    }

    return lista; // Devuelve la serie
};
console.log(crearFibonacci(6)); // [0, 1, 1, 2, 3, 5]
console.log(crearFibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

