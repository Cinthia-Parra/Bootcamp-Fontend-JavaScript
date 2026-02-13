//repite mientras una condicion sea verdadera
let i = 1; //inicializacion
while (i <= 3) { //condicion

console.log('while', i);
i++; // i = i + 1 variable de control
}

console.log('------------------------------');
//Ejercicio 2: 

let entrada = '';
while (entrada !== 'salir') {
  entrada = prompt('Ingresa un texto (escribe "salir" para terminar):');
}
  console.log('Saliste');

// arrays o arreglos
let frutas = ['manzana', 'banana', 'naranja', 'cereza'];

// console.log(frutas [2]); naranja
console.log(frutas.length); // longitud del array

//Ejercicio 3: recorrer un array con for
for (let indice = 0; indice < frutas.length; indice++) {
  console.log('fruta =', frutas[indice]);
}
console.log('---------Metodos de los arreglos---------------------');

alumnons = [];
console.log(alumnons);

//metodo push: agrega un elemento al final del array
alumnons.push('Juan');
alumnons.push('Ana');
alumnons.push('Cesar');

console.log(alumnons);

alumnons.pop(); // elimina el ultimo elemento
console.log(alumnons);

alumnons.unshift('Luisa'); // agrega un elemento al inicio del array
console.log(alumnons);


alumnons.shift(); // elimina el primer elemento del array
console.log(alumnons);



let listDeSuper = ['Manzana', 'Papel de Baño', 'Naranja', 'Jabon'];
console.log(listDeSuper);

for (let i = 0; i < listDeSuper.length; i++) {
  console.log((i + 1) + '. ' + listDeSuper[i]);
}

console.log('Total de productos: ' + listDeSuper.length);


// EXTRA 2 Propmt (Guardar la lista que te da el usuario, dentro de un arreglo)


let listaSuper = [];
let producto = "inicio";

while (producto !== ""){
    producto = prompt('Ingresa un producto del super.')

    if (producto !== ""){
        listaSuper.push(producto);
    }
}

for (let indice = 0; indice < listaSuper.length; indice++){
    console.log((indice+1) + " - " + listaSuper[indice]);
}

console.log("Total de la lista=", listaSuper.length)