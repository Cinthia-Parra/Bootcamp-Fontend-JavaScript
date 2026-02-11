//un objeto es una colección de propiedades, cada propiedad es una asociación entre un nombre (o clave) y un valor. El valor de una propiedad puede ser una función, lo que se conoce como método del objeto. Los objetos son fundamentales en JavaScript y se utilizan para representar entidades del mundo real, organizar datos y crear estructuras complejas.

//Ejemplo de un objeto en JavaScript

const disco = {
    //Propiedades (datos del disco) atributos del objeto
    titulo: 'LO-VE',
    artista: 'Demi Lovato',
    anio: 2020,
    disponible: true,

    //Propiedad de tipo arreglo arerglo
    canciones: ['Lovely','Alone','Strong', 'True Love'],

    //Podemos guarda ACCIONES/METODOS relacionadas con los datos
    //Metodó que muestra información
    mostrarInfo() {
        console.log(` ${this.titulo} de ${this.artista}, lanzado en ${this.anio}`);
        //this es ina referencia al objeto actual, en este caso al objeto disco, entonces this.artista se refiere a la propiedad artista del objeto disco, this.titulo se refiere a la propiedad titulo del objeto disco, this.anio se refiere a la propiedad anio del objeto disco y this.disponible se refiere a la propiedad disponible del objeto disco
        //apunta a ESTE objeto (disco)
    },

    //Mwtodo que liste las canciones
    mostrarCanciones() {
        this.canciones.forEach((cancion, i ) => {
            console.log(`${i + 1}. ${cancion}`); //el i pertenece al indice para mostrarlo y se comienza en +1 para que no comienze en cero
        }
    )},

    //Agregar una cancion nueva al disco
    agregrarCancion(nombre) {
        this.canciones.push(nombre);
        console.log(`Canción "${nombre}" agregada al disco.`);
    },

    //elminiar una cancion del disco
    eliminarCancion(nombre) {
        this.canciones.pop(nombre)
        console.log(`Canción "${nombre}" eliminada del disco.`)
    }
}

//-----------CONSOLES LOGS PARA VER LOS VALORES---------------

//acceder a losdatos con notacion de punto
console.log(disco.artista);
console.log(disco.canciones);

//acceder a losdatos con notacion de corchetes //falla si no le ponemos comillas porque es una propiedad
console.log(disco['titulo']);
console.log(disco['disponible']);

//Llamae a nuestro metodo para mostrar la informacion del disco
disco.mostrarInfo();

console.log('----------mostrar info de forma mas organida por medio de un array ----------');
disco.mostrarCanciones();

console.log('----------agregar objeto con push ----------');
disco.agregrarCancion('hola');
disco.mostrarCanciones();

console.log('----------eliminar objeto con push ----------');
disco.eliminarCancion('hola');
disco.mostrarCanciones();

console.log('----------desestructurar ----------');
//Desesctructurar es SACAR cosas de un objeto, SIN necesidad de escribir objeto.propiedad
const { canciones } = disco;
const [ primera, segunda, tercera ]  = canciones;

console.log(primera);
console.log(segunda);
console.log(tercera);

console.log('----------desestructurar mas pro ----------');

const {canciones: [pista1, pista2, pista3]} = disco; //esto es lo mismo de arriba
console.log(pista1);
console.log(pista2);
console.log(pista3);

//error común cuando las personas quieren desestructurar cosas que no existen, es decir desestructuara no crea datos, solo los extrae

console.log('----------Renombrar variables ----------');
//Renombrar  variables
const { titulo: nombreDisco, anio: lanzamiento } = disco;
// Se asigna el valor  de la propiedad con otro nombre
console.log(nombreDisco);
console.log(lanzamiento);

console.log('----------desestrucutracion basica ----------');
const {titulo,artista} = disco;

console.log(nombreDisco);
console.log(lanzamiento);