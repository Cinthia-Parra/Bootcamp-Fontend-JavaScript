
// Crea una matriz de organización de tareas dividida en categorías. La aplicación debe permitir agregar y eliminar actividades según sea necesario.

// 🎯 Objetivo
// Construir una interfaz donde el usuario pueda administrar sus actividades por prioridad y tiempo.
// 📋 Requisitos funcionales

// Diseña una matriz con cuatro secciones:
// 🔴 Actividades urgentes
// 🟡 Actividades importantes
// 🟢 Para después
// 🔵 Para la siguiente semana

// Permite agregar nuevas actividades
// El usuario debe poder escribir una actividad en un campo de texto.
// Debe seleccionar a qué categoría pertenece.
// Al confirmar, la actividad debe aparecer en la sección correspondiente.

// Permite eliminar actividades
// Cada actividad debe tener un botón o control para eliminarla (checkbox).


//paso 1: seleccionar los elementos que ocuparé
let itemImput = document.getElementById('itemImputTarea'); //seleccionar la ID del elemnteto para hacer match con el item de  tatrea que ingresen
let addItemButton = document.getElementById ('addItemButtonTarea'); //seleccionar la ID del elemnteto boton para saber que en click debe de mandar el elemento filtrar y mostrar
let addItemPriority = document.getElementById ('prioritySection');

function addItemButtonClick(){
    let itemText = itemImput.value; //asignar el valor de la tarea para manipularlo y no perderlo
    let prioritySection = addItemPriority.value;
    let newItem = document.createElement('li');

// funcion asignar texto
    let textSpan = document.createElement('span');
    textSpan.textContent = itemText; // estamos definiendo el contenido
    newItem.appendChild(textSpan);//aqui se le agrega el texto

// funcion eliminar
    let textX = document.createElement('button');// se crea el boton
    textX.classList.add('taskButton')
    textX.textContent = 'Eliminar'; // estamos definiendo el contenido
    textX.addEventListener('click',function() {
        newItem.remove()
    })
    newItem.appendChild(textX);


    function filterActivity(prioritySection){
        if(prioritySection === 'urgente'){
            let itemListUrgente = document.getElementById('containterListUrgenci');
            itemListUrgente.appendChild(newItem);
        }
        if (prioritySection === 'importante') {
            let itemListImportante = document.getElementById('containterListImportant');
            itemListImportante.appendChild(newItem);
        }
        if (prioritySection === 'paraDespues') {
            let itemListParaDespues = document.getElementById('containterListLater');
            itemListParaDespues.appendChild(newItem);
        }
        else if (prioritySection === 'semana') {
            let itemListSemana = document.getElementById('containterListNextWeek');
            itemListSemana.appendChild(newItem);
        }
        }
        filterActivity(prioritySection);
}


//paso 3: Usar la funcion
addItemButton.addEventListener('click', addItemButtonClick);