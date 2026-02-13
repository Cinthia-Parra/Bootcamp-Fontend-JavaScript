//Problema: Seguimiento de Libros
//Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.

/*Instrucciones para resolver el problema:
Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído. */

let librosLeidos = []; //that's needs stay at the top

const nombreUsuario = saludo(); //this variant is for the function of saludo, if we put it after the function then it will not work because the function is not defined yet, so we need to put it before the function to be able to use it in the function of mostrarLibrosLeidos
preguntarSiHayLibroNuevo(); //that's the validation function for the question if the user has read a new book, if the answer is yes then it will ask for the title of the book and add it to the array of librosLeidos, if the answer is no then it will show the books that have been read
mostrarLibrosLeidos(librosLeidos, nombreUsuario); //that need 2 parameters because we need to show the name of the user and the books that have been read, if we put it without parameters then it will not work because the function of mostrarLibrosLeidos needs 2 parameters to be able to show the name of the user and the books that have been read

//that function is for validate the user name
function saludo () {
    let nombreUsuario = null ;
    let soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; //validation numbers with compatation
    
    while ( 
        nombreUsuario === null || 
        nombreUsuario.trim() === '' || 
        !soloLetras.test(nombreUsuario) //we get a verification on case of the user get numbers
    ) {
        nombreUsuario = prompt (
            'Hola, bienvenid@ al archivo de libros, ¿Cúal es tu nombre? ');
    }
    console.log('el nombre de usuario es ' + nombreUsuario)
     return nombreUsuario;
};
//that works to ask the user if they have read a new book and if they want to add it to the array of librosLeidos, if they want to add it then it will ask for the title of the book and add it to the array of librosLeidos, if they don't want to add it then it will show the books that have been read
function preguntarSiHayLibroNuevo() {
    const regexSiNo = /^(si|no)$/i;
    let respuesta = null;

    while (
        respuesta === null ||
        respuesta.trim() === "" ||
        !regexSiNo.test(respuesta)
    ) {
        respuesta = prompt("¿Has leído un nuevo libro? (si / no)");
    }
    if (respuesta.toLowerCase() === 'si') {
        let continuar = 'si';
        while (continuar === 'si') {
            let tituloLibro = null;
            while (tituloLibro === null || tituloLibro.trim() === '') {
                tituloLibro = prompt('¿Cuál es el título del libro que has leído?');
            }
            console.log('Libro agregado: ' + tituloLibro);
            agregarLibro(tituloLibro);

            continuar = prompt("¿Has leído otro libro? (si / no)").toLowerCase();
        }
console.log("Libros leídos:", librosLeidos);
 return librosLeidos;
    }
}
//that is for add the book to an array of librosleidos
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}
//that function is for show the books that have been read, it needs 2 parameters because we need to show the name of the user and the books that have been read, if we put it without parameters then it will not work because the function of mostrarLibrosLeidos needs 2 parameters to be able to show the name of the user and the books that have been read
function mostrarLibrosLeidos(libros, nombreUsuario) {
    let totalLibros = libros.length;
    let nombreLibros = libros.join('<br>');
    document.write(
        'Hola ' + nombreUsuario + ',<br>'+ 'has leído ' + totalLibros + ' libros.<br><br>Libros leídos:<br> ' + nombreLibros
    );
}
