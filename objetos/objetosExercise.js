// Problema: Crear objeto a partir de un Libro
// Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.

// Instrucciones para resolver el problema:
// Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
// También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'
// Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.


//Objeto de libro con propiedades
const Libro = {
    titulo: 'Los juegos del hambre',
    paginas: 458,
    autor: 'Stean Jones',
    idiona: 'Español',
    anoDePublicacion: 2001,
    disponibilidad: true,

    capitulos: [
        'El inicio de un Rey',
        'La perdida',
        'Ultima cena',
    ],

//metodo para mosrar los capitulos del libro
mostrarCapitulos () {
    this.capitulos.forEach((capitulos,i) => {
        console.log(`${i + 1}- ${capitulos}`);
    }
)
},

    // funcion para mostrar infor//
describirLibro () {
    console.log(`EL libro de: ${this.titulo}, del autor ${this.autor} ,\ntiene ${this.paginas}, fué publicado en ${this.anoDePublicacion}. \nActualmente se enucuentra disponible: ${Libro.disponibilidad}\n`);
},

//Agregar una capitulo 
addCapter (capituloAgregado) {
    this.capitulos.push(capituloAgregado)
    console.log(`Capitulo ${capituloAgregado} fue agregado`);
},
//ELiminar un capitulo
deleteCapter (capituloEliminado) {
    this.capitulos.pop(capituloEliminado)
    console.log(`Capitulo ${capituloEliminado} fue eliminado`);
},


}

Libro.describirLibro();
console.log('Los capitulos de este libro son:')
console.log('--------------------------------')
Libro.mostrarCapitulos();


console.log('--------------------------------')
Libro.addCapter('El quiebre');
Libro.mostrarCapitulos();

console.log('--------------------------------')
Libro.deleteCapter('El quiebre');
Libro.mostrarCapitulos();