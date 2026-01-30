// console.log('Hola, me llamo Cinthia');
// console.log('¿COmó te llamas?');
let nombreUsuario = prompt('Ingresa tu nombre: ');
console.log('--------------------------------')
console.log('Hola ' + nombreUsuario + ', bienvenido/a al curso de JavaScript con topic de Mascotas!');
//preguntar nombre al usuario, cuantos perros y gatos tiene, mostrarlos y luego sumar el total para estipular cuantas en total tiene

let mascotaGato = prompt('¿Cuantos gatos?'); 
let mascotaPerro = prompt('¿Cuantos perros?');
//por defecto marcaba string entonces se tuvo que convertir a numero usando Number()

//la diferencia de Number es que convierte tanto enteros como decimales y es mas escritos entonces si tienes un string o otro tipo de dato da error -> (NaN) -> not a number
//USO DE NUMBER()
let mascotaGatoNum = Number(mascotaGato);
let mascotaPerroNum = Number(mascotaPerro);

/*se puede hacer tambien el cambio de dato con parseInt o parseFloat

USO DE PARSEINT Y PARSEFLOAT
let mascotaGatoNum = parseInt(mascotaGato); //convierte a entero
let mascotaPerroNum = parseFloat(mascotaPerro); //convierte a decimal

lo que hace parseInt es tomar la parte entera y descartar la decimal y es mas tolerante, si tiene otro tipo de dato solo lo ignora y puede seguir funcionando
*/

let mascotas = (mascotaGatoNum + mascotaPerroNum); 

console.log(' mascotas de'+ nombreUsuario + ' es: ' + mascotas);

console.log('------------------------------')
document.write(nombreUsuario + 'tiene un total de mascotas de:'+ mascotas + '<br>');
document.write('de las cuales tiene ' + mascotaGatoNum + ' gatos y ' + mascotaPerro + ' perros.');
//type of data on console log with variables
console.log(typeof mascotas);

//escribir informacion en la pagina web de forma inmediata
// document.write('El nombre del usuario es: ' + nombreUsuario + '<br>');
document.write('La cantidad de mascotas que tiene ' + nombreUsuario + ' es: ' + mascotas + '<br>');

//ventanas tipo alert type of Spam
alert('Gracias por visitar nuestra pagina, ' + nombreUsuario + '. ¡Vuelve pronto!');