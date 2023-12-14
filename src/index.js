import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

// Registrar el texto que el usuario ingresa
//Variable con el texto del usuario
let input_text = document.querySelector("textarea[name='user-input']");
function capture_input(){
    let value = input_text.value
}   

input_text.addEventListener('input',capture_input);
//Limpiar el valor de la caja de texto
function clear_textarea(){
    input_text.value = '';
}
document.getElementById('reset-button').addEventListener('click',clear_textarea);