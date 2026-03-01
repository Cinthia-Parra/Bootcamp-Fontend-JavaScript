// seleccionando elementos del dom
const passwordInput = document.getElementById("password"); //manipular elementos passwords
const lengthInput = document.getElementById("length");//manipular elementos lenght
const uppercaseCheck = document.getElementById("uppercase");//manipular elementos mayusculas
const lowercaseCheck = document.getElementById("lowercase");//manipular elementos minusculas
const numbersCheck = document.getElementById("numbers");//manipular elementos numeros
const symbolsCheck = document.getElementById("symbols");//manipular elementos simbolos
const generateBtn = document.getElementById("generateBtn");//manipular boton generador
const copyBtn = document.getElementById("copyBtn");//manipular boton copiar
const strengthText = document.getElementById("strengthText");//manipular seguridad contra

// funcion para generar contraseña
function generarPassword(){

    let caracteres = ""; // espacio para los caracteres si permitidos

    // si esta marcado se agregan ((aqui se filtran los datos que se llenarán))
    if(uppercaseCheck.checked){ //si es checado el campo de fulanito
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //se almacenan caracteres con mayusculas
    }

    if(lowercaseCheck.checked){
        caracteres += "abcdefghijklmnopqrstuvwxyz";//se almacenan caracteres con minusculas
    }

    if(numbersCheck.checked){
        caracteres += "0123456789";//se almacenan caracteres con numeros
    }

    if(symbolsCheck.checked){
        caracteres += "!@#$%^&*()_+";//se almacenan caracteres con simbolos
    }

    // si no selecciona nada
    if(caracteres === ""){
        alert("selecciona almenos una opcion"); // manejar si no seleccinan nada no se genera nada y se muustra el error en alert
        return; //se cierra y vuelve a iniciar le flujo hasta que exista algo
    }

    let largo = Number(lengthInput.value); // convertir a número y la longitud que se selecciono antes
    let password = "";//inicia en vacio pero se ocupa llenar

    // bucle para ir armando la contraseña
    for(let i = 0; i < largo; i++){ // repite el porceso de random en bucle hasta que el largo sea el mismo
        let random = Math.floor(Math.random() * caracteres.length);// se van metiendo alatorio caracteres seleccionados con 'caracteres' por la logitud escojida
        password += caracteres[random];// caracteres[random] obtiene la letra, entonces +=  añade al string 'password' y se guarda como pasword
    }

    passwordInput.value = password; //el valor de la password es lo que se desarroyo con el bucle for y solo se almacena como el valor de paswordwimput

    evaluarSeguridad(password); //tenermos una evaluacion de la pasword y ingresamos el valor a comparar
}


// funcion para copiar al portapapeles
function copiarPassword(){ //para copiar al presionar en copiar

    if(passwordInput.value === ""){ // si no existe un valor en el evalor de pasword entonces hacemos el error
        alert("no hay nada que copiar");
        return;
    }

    navigator.clipboard.writeText(passwordInput.value); // si si exsite valor entonces  usamos metodo para copiar y ingreamos el calor de paswworrd
    alert("copiado");// para UX avisamos que se copio con alert
}


// funcion para evaluar seguridad
function evaluarSeguridad(pass){ // funcion de seguridad

    let fuerza = "Debil"; // inicia en debil

    if(pass.length >= 12 && uppercaseCheck.checked && numbersCheck.checked && symbolsCheck.checked){
        fuerza = "Fuerte";// fuerte si tiene varios checados
    }
    else if(pass.length >= 8){ // si es mayor a 8 caracteres es media.
        fuerza = "Media";
    }

    strengthText.textContent = fuerza;// guardamos en fuerza que se llama en funcion main
}


//Llamados ---ocupamos dos detonantes que activaran las funciones
generateBtn.addEventListener("click", generarPassword); //genrear contrasela
copyBtn.addEventListener("click", copiarPassword);//copiar ocntraseña