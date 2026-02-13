// Declara un arreglo llamado frutas con varios tipos de frutas.
// Crea un objeto para almacenar la cantidad de cada tipo de fruta.
// Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
// Imprime en la consola la cantidad de cada tipo de fruta.

// Opcional: intenta implementar la solución con el otro ciclo también (for/while).



// Declara un arreglo llamado frutas con varios tipos de frutas.
let frutas = ['manzana', 'banana', 'naranja', 'manzana', 'cereza', 'banana', 'naranja', 'manzana'];

// Crea un objeto para almacenar la cantidad de cada tipo de fruta.
let carritoDeFrutas = [];
let conteo = {};

// Contar las frutas usando un ciclo for
    console.log('------ frutas + indice --------');
    document.write('------- frutas + indice --------' + '<br>');

// Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
for (let indice =0; indice <frutas.length; indice++){
    console.log((indice)+'.'+frutas[indice]);
    document.write((indice)+'.'+frutas[indice] + '<br>');
    let fruta = frutas[indice];

    if (conteo[fruta] === undefined){
        conteo[fruta] = 0;
    }
    conteo[fruta] ++;
}
// Imprime en la consola la cantidad de cada tipo de fruta.
    document.write('------- conteo de frutas --------' + '<br>');
    console.log('-------conteo de frutas------------------');
for (let fruta in conteo) {
    console.log(fruta + 's:'+ conteo[fruta]);
    document.write(fruta + 's:'+ conteo[fruta] + '<br>');
}