// Problema: Crear objeto a partir de un Libro
// Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.

// Instrucciones para resolver el problema:
// Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
// También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'
// Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.


//ONjeto de libro con propiedades
const Libro = {
    titulo: 'Los juegos del hambre',
    paginas: 458,
    autor: 'Stean Jones',
    idiona: 'Español',

    capitulos: [
        'El inicio de un Rey',
        'La perdida',
        'Ultima cena',
    ],

    // funcion para mostrar infor//
MostrarInformacion () {
    console.log(`${titulo} del ${autor} tiene ${paginas}`)
}
}

