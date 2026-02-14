// Problema: Caja de Comentarios (Simple Comment Box)
// Crear una caja de comentarios donde los usuarios puedan escribir y agregar comentarios que se muestran en la página. Este proyecto ayudará a los estudiantes a manejar eventos de formularios y modificar el contenido de una página.

// Instrucciones para resolver el problema:
// Crea una página con un formulario que tenga un campo de texto para el comentario y un botón para agregarlo.
// Cuando el usuario haga clic en el botón, el comentario debe aparecer en la página debajo del formulario.
// Los estudiantes pueden agregar un botón para eliminar comentarios si lo desean.
// Los comentarios deben aparecer junto con la fecha y hora de publicación. (opcional)


//---------------Cosntantes para hacer mach con el dom
const btnSubmit = document.getElementById("btnSubmit"); //boton que tengo que manejar luego cachar la informacion que entre el eusuario
const contentComent = document.getElementById("comentario"); //la informacion del comentario
const showComent = document.getElementById("coments"); //donde iran los comentarios
const listaComents = [];//array para guardar los comentarios
const deteleteComents = document.getElementById ('btnDelete'); //para manipular el boton de comentarios


//---------------Funciones/helpers

//funcion para saber cuando mostrar el boton
function condicionalBtn () {
    if (listaComents.length >= 1 ) {
        deteleteComents.style.display = "block"; //mostrar
    } else {
        deteleteComents.style.display = "none"; //no mostrar
    }
}

// function para agregar comentarios como texto y agregar nuevos  
function guardarComentarios (texto) { //funcion para guardar lo que ingrese a la funcion como nuevo espacio llamado texto
listaComents.push (texto) //ya que esta algo lo agrega como texto a nuestra listade comentarios
}

//funcion para borrar todos los ocmentarios
function borrarComentarios () { //no traemos nada porque no ocupamos nada
        listaComents.length = 0;//borramos asignando de nueva 0
        mostrarComentarios (listaComents);//volevemos a rendeerizar y ahora es vacio porque borramos antes todo
        condicionalBtn();
}


// function para crear un arry que ayudará a guardar los comentarios de una menjor manera 
function mostrarComentarios (listaComents) { //funcion para crear los elementos con un p para luego mostrarlos
    showComent.innerHTML = ""; //para limpiar nuevamente al volver a ejecutar
    listaComents.forEach(Comment => { //en lista de comentarios cor cada comentario hacer lo siguinte
        const p = document.createElement ('p') // crear el espacio para p
        p.textContent = Comment; //para usar el comentario como texto de p
        showComent.appendChild(p); ////para crear un p por cada cometnario y agregarlo al DOM
    });
}


//--------------- funcion main

//main function que captura evento, cancela recarga, guarda el valor del imput en una cosntante texto.
//condiciona a si no existe antes texto entonces usa el guardar el texto ingresado y mostrar el array de los comentarios
//al final solo se serciora que se pase en tipo string
function getInputVal(e){ //funcion para guardar el nuevo valor como imput
    e.preventDefault();//prevenir que se rearge la pag en automatico
    const texto = contentComent.value; //asignar el nuevo texto a una costante
    if(!texto) return; //si no tiente texto retornar
    guardarComentarios(texto); //guardar el nuevo texto con la funcion de guardarcomentarios
    mostrarComentarios(listaComents); //mostrar el nuevo texto con ayuda de la funcion que creamos para poder guardar en un array  y mostrarlo
    condicionalBtn();//para controlar el boton
    contentComent.value = ""; // limpia el campo en el imput para saber que ya se envio
}

//---------------Event Listener
btnSubmit.addEventListener("click", getInputVal); //para el boton de sbumit vamos a aplicar un observador que estsara buscando el evento de click y ejecutara la funicon main
deteleteComents.addEventListener("click", borrarComentarios);//para estar a tento al botton que dispara todo
