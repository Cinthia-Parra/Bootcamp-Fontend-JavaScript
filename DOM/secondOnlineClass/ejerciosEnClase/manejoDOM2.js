//paso 1: seleccionar los elementos que ocuparé
let itemImput = document.getElementById('itemImput'); //seleccionar la ID del elemnteto para hacer match
let addItemButton = document.getElementById ('addItemButton'); //seleccionar la ID del elemnteto para hacer match
let itemList = document.getElementById('itemList'); //seleccionar la ID del elemnteto para hacer match

//paso 2 : Crear mi function

function addItemButtonClick(){ // NOTA ESCALABILIDA: se puede optimizar con if y .trim() para validacion para que no se agregen tareas vacias
    let itemText = itemImput.value; //aqui es el valor que esta guardando
    let newItem = document.createElement('li');
    //newItem.innerHTML() // <- este no se reocmienda porque vulnera 

    //crear un elemento spam para el texto
    let textSpan = document.createElement('span');
    textSpan.textContent = itemText; // estamos definiendo el contenido
    newItem.appendChild(textSpan);//aqui se le agrega el texto

    //Crear el boton eliminar
    let deleteButton = document.createElement('button');//se creo
    deleteButton.textContent ='Eliminar'// se pone el contenido que contiene

    deleteButton.addEventListener ('click', function(){//funcion para eliminar cuando haga click
        newItem.remove();
    })

    newItem.appendChild(deleteButton)//agregar el button
    itemList.appendChild(newItem)//agrega el nuevo item

    //limpiar el input
    itemImput.value = ''; // que limpie el valor para poder agregar uno nuevo
    itemImput.focus(); // regresa el cursor automaticamnte IMPORTANTE
}
//paso 3: Usar la funcion
addItemButton.addEventListener('click', addItemButtonClick); // le pasamos la funcion para cuando hagan click la funcion se haga